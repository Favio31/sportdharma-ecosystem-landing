export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Suscribirse (POST)
    if (url.pathname === "/subscribe" && request.method === "POST") {
      const subscription = await request.json();
      const endpoint = subscription.endpoint;
      await env.PUSH_SUBS.put(endpoint, JSON.stringify(subscription));
      return new Response("Suscrito", { status: 201 });
    }

    // 2. Obtener suscriptores (GET, protegido por token)
    if (url.pathname === "/subscribers" && request.method === "GET") {
      if (url.searchParams.get("token") !== env.SECRET_TOKEN) {
        return new Response("No autorizado", { status: 401 });
      }
      const keys = await env.PUSH_SUBS.list();
      const subs = await Promise.all(keys.keys.map(k => env.PUSH_SUBS.get(k.name).then(JSON.parse)));
      return Response.json(subs);
    }

    return new Response("Not found", { status: 404 });
  }
};
