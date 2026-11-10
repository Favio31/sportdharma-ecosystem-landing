// worker.js
// Basado en: https://developers.cloudflare.com/workers/examples/kv/

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Manejar preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders, status: 204 });
    }

    // Endpoint: POST /subscribe
    if (url.pathname === '/subscribe' && request.method === 'POST') {
      try {
        const subscription = await request.json();
        
        // Validar que tenga endpoint
        if (!subscription.endpoint) {
          return new Response(
            JSON.stringify({ error: 'Falta el endpoint' }),
            { 
              status: 400,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }

        // Guardar en KV usando el endpoint como clave
        await env.PUSH_SUBS.put(subscription.endpoint, JSON.stringify(subscription));
        
        console.log('✅ Nueva suscripción guardada:', subscription.endpoint);
        
        return new Response(
          JSON.stringify({ 
            success: true, 
            endpoint: subscription.endpoint 
          }),
          { 
            status: 201,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      } catch (error) {
        console.error('❌ Error al guardar:', error);
        return new Response(
          JSON.stringify({ error: error.message }),
          { 
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }
    }

    // Endpoint: GET /subscribers (para el workflow de GitHub)
    if (url.pathname === '/subscribers' && request.method === 'GET') {
      try {
        const keys = await env.PUSH_SUBS.list();
        const subscribers = [];
        
        for (const key of keys.keys) {
          const subscription = await env.PUSH_SUBS.get(key.name, 'json');
          if (subscription) {
            subscribers.push(subscription);
          }
        }
        
        return new Response(
          JSON.stringify(subscribers),
          { 
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({ error: error.message }),
          { 
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }
    }

    // 404 para otras rutas
    return new Response(
      JSON.stringify({ error: 'Not found' }),
      { 
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
};
