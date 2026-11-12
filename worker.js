export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const corsHeaders = { "Access-Control-Allow-Origin": "*" };

    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders, status: 204 });

    // Diccionario Multilingüe
    const translations = {
      es: { title: "📬 SportDharma", body: "Nueva publicación en SportDharma Ecosystem. ¡Haz clic para leer!" },
      en: { title: "📬 SportDharma", body: "New post in SportDharma Ecosystem. Click to read!" },
      it: { title: "📬 SportDharma", body: "Nuovo articolo in SportDharma Ecosystem. Clicca per leggere!" },
      fr: { title: "📬 SportDharma", body: "Nouvel article dans SportDharma Ecosystem. Cliquez pour lire !" },
      de: { title: "📬 SportDharma", body: "Neuer Beitrag im SportDharma Ecosystem. Klicke zum Lesen!" },
      pt: { title: "📬 SportDharma", body: "Nova publicação no SportDharma Ecosystem. Clique para ler!" }
    };

    // 1. GUARDAR SUSCRIPCIÓN (Incluye 'lang')
    if (url.pathname === "/subscribe" && request.method === "POST") {
      try {
        const data = await request.json();
        if (env.PUSH_SUBS) await env.PUSH_SUBS.put(data.endpoint, JSON.stringify(data));
        return new Response(JSON.stringify({ success: true }), { status: 201, headers: { "Content-Type": "application/json" } });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { "Content-Type": "application/json" } });
      }
    }

    // 2. LISTAR SUSCRIPCIONES
    if (url.pathname === "/subscribers" && request.method === "GET") {
      if (url.searchParams.get("token") !== env.SECRET_TOKEN) return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
      const keys = await env.PUSH_SUBS.list();
      const subs = await Promise.all(keys.keys.map(async (k) => {
        const val = await env.PUSH_SUBS.get(k.name);
        return val ? JSON.parse(val) : null;
      }));
      return new Response(JSON.stringify(subs.filter(Boolean)), { headers: { "Content-Type": "application/json" } });
    }

    // 3. ENVIAR NOTIFICACIÓN (Usa el idioma guardado)
    if (url.pathname === "/send-test" && request.method === "POST") {
      if (url.searchParams.get("token") !== env.SECRET_TOKEN) return new Response(JSON.stringify({ error: "No autorizado" }), { status: 401 });
      
      const keys = await env.PUSH_SUBS.list();
      const results = [];
      
      const b64url = (bytes) => {
        let s = '';
        for (const b of bytes) s += String.fromCharCode(b);
        return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      };
      const enc = (obj) => b64url(new TextEncoder().encode(JSON.stringify(obj)));

      async function getVapidAuth(audience) {
        const jwk = JSON.parse(env.VAPID_PRIVATE_JWK);
        const key = await crypto.subtle.importKey('jwk', jwk, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
        const header = { typ: 'JWT', alg: 'ES256' };
        const payload = { aud: audience, exp: Math.floor(Date.now() / 1000) + 12 * 60 * 60, sub: 'mailto:contact@sportdharmaecosystem.com' };
        const toSign = `${enc(header)}.${enc(payload)}`;
        const sig = new Uint8Array(await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, new TextEncoder().encode(toSign)));
        return `vapid t=${toSign}.${b64url(sig)}, k=${env.VAPID_PUBLIC_KEY}`;
      }

      for (const k of keys.keys) {
        if (k.name.includes("test")) continue;
        try {
          const subData = JSON.parse(await env.PUSH_SUBS.get(k.name));
          const lang = subData.lang && translations[subData.lang] ? subData.lang : 'es';
          const msg = translations[lang];
          const authHeader = await getVapidAuth(new URL(k.name).origin);

          const res = await fetch(k.name, { 
            method: "POST",
            headers: { "Authorization": authHeader, "TTL": "60", "Urgency": "high", "Content-Type": "application/json" },
            body: JSON.stringify({ title: msg.title, body: msg.body, icon: 'https://www.sportdharmaecosystem.com/logo.jpg' })
          });
          results.push({ endpoint: k.name.substring(0, 30) + "...", status: res.status, lang: lang });
        } catch (e) { results.push({ error: e.message }); }
      }
      return new Response(JSON.stringify({ success: true, results }), { headers: { "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }
};
