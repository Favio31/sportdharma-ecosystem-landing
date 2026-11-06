export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    const allowed = ['https://www.sportdharmaecosystem.com', 'https://sportdharmaecosystem.com', 'http://localhost:4321'];
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
        if (!subscription?.endpoint?.startsWith('https://') || !subscription?.keys?.p256dh) {
          return new Response(JSON.stringify({ error: 'invalid subscription' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }
        
        await env.SUBSCRIPTIONS.put(subscription.endpoint, JSON.stringify(subscription));
        return new Response(JSON.stringify({ success: true }), {
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