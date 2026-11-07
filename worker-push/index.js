export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    const allowed = ['https://www.sportdharmaecosystem.com', 'https://sportdharmaecosystem.com', 'http://localhost:4321', 'null'];
    const corsOrigin = allowed.includes(origin) ? origin : allowed[0];
    
    const corsHeaders = {
      'Access-Control-Allow-Origin': corsOrigin,
      'Vary': 'Origin',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method === 'POST') {
      try {
        const subscription = await request.json();
        console.log('[DEBUG] Endpoint recibido:', subscription?.endpoint);
        
        if (!subscription?.endpoint?.startsWith('https://') || !subscription?.keys?.p256dh) {
          console.error('[DEBUG] Formato inválido');
          return new Response(JSON.stringify({ error: 'invalid subscription format' }), { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          });
        }
        
        console.log('[DEBUG] Guardando en KV...');
        await env.SUBSCRIPTIONS.put(subscription.endpoint, JSON.stringify(subscription));
        console.log('[DEBUG] Guardado exitoso');
        
        return new Response(JSON.stringify({ success: true, message: 'Guardado en KV v2' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (e) {
        console.error('[DEBUG] Error en Worker:', e);
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }
    return new Response('SportDharma Push Worker Activo v2', { headers: corsHeaders });
  },
};