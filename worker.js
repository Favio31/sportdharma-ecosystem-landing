export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // CORS permisivo para desarrollo
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Manejar preflight OPTIONS
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders, status: 204 });
    }

    // 1. Suscribirse (POST)
    if (url.pathname === "/subscribe" && request.method === "POST") {
      try {
        const subscription = await request.json();
        const endpoint = subscription.endpoint;
        await env.PUSH_SUBS.put(endpoint, JSON.stringify(subscription));
        console.log("✅ Nueva suscripción:", endpoint);
        return new Response(JSON.stringify({ success: true, endpoint }), { 
          status: 201,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      } catch (err) {
        console.error("❌ Error al guardar suscripción:", err);
        return new Response(JSON.stringify({ error: err.message }), { 
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    // 2. Obtener suscriptores (GET)
    if (url.pathname === "/subscribers" && request.method === "GET") {
      if (url.searchParams.get("token") !== env.SECRET_TOKEN) {
        return new Response(JSON.stringify({ error: "No autorizado" }), { 
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
      const keys = await env.PUSH_SUBS.list();
      const subs = await Promise.all(keys.keys.map(k => env.PUSH_SUBS.get(k.name).then(JSON.parse)));
      return new Response(JSON.stringify(subs), {
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      });
    }

    return new Response(JSON.stringify({ error: "Not found" }), { 
      status: 404,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
};
