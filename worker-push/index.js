const VAPID_PUBLIC_KEY = 'BEBtu5xuSazr8mxdvUBuvrGE5VEDP83jW2VKlL982qe0NZdEwemuCyB1WwNtwhVxL-ooi2nCo1RoGvNCQnwaKZU';
const VAPID_PRIVATE_KEY = 'Fb_89YY50-jyVbzSVaXNwVeYMnnnsDjj_sIrF3NaDSU';

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    const allowed = ['https://www.sportdharmaecosystem.com', 'https://sportdharmaecosystem.com', 'http://localhost:4321', 'null'];
    const corsOrigin = allowed.includes(origin) ? origin : allowed[0];
    
    const corsHeaders = {
      'Access-Control-Allow-Origin': corsOrigin,
      'Vary': 'Origin',
      'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);

    // Endpoint para enviar notificaciones
    if (url.pathname === '/send' && request.method === 'POST') {
      try {
        const { title, body, url: targetUrl } = await request.json();
        
        if (!title || !body) {
          return new Response(JSON.stringify({ error: 'title y body son requeridos' }), { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          });
        }

        const { keys } = await env.SUBSCRIPTIONS.list();
        const results = [];

        for (const key of keys) {
          try {
            const subscriptionData = await env.SUBSCRIPTIONS.get(key.name);
            const subscription = JSON.parse(subscriptionData);
            
            const payload = JSON.stringify({ title, body, url: targetUrl || '/es/' });
            
            // Enviar notificación usando Web Push nativo
            const response = await fetch(subscription.endpoint, {
              method: 'POST',
              headers: {
                'TTL': '60',
                'Content-Type': 'application/octet-stream',
              },
              body: payload,
            });

            results.push({ endpoint: key.name.substring(0, 50) + '...', status: response.status });
          } catch (err) {
            results.push({ endpoint: key.name.substring(0, 50) + '...', error: err.message });
          }
        }

        return new Response(JSON.stringify({ success: true, sent: results.length, results }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // Endpoint existente para guardar suscripciones
    if (request.method === 'POST') {
      try {
        const subscription = await request.json();
        if (!subscription?.endpoint?.startsWith('https://') || !subscription?.keys?.p256dh) {
          return new Response(JSON.stringify({ error: 'invalid subscription' }), { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          });
        }
        
        await env.SUBSCRIPTIONS.put(subscription.endpoint, JSON.stringify(subscription));
        return new Response(JSON.stringify({ success: true, message: 'Guardado en KV' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response('SportDharma Push Worker Activo', { headers: corsHeaders });
  },
};