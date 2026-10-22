import rss from '@astrojs/rss';

export async function GET(context) {
  // Feed temporal con un item de ejemplo hasta que creemos la colección de noticias
  return rss({
    title: 'SportDharma Ecosystem | Noticias',
    description: 'Curación humana, 6 publicaciones diarias. Software libre para deportistas outdoor.',
    site: context.site || 'https://www.sportdharmaecosystem.com',
    items: [
      {
        title: 'Próximamente: Nuevas publicaciones curadas',
        link: '/noticias/',
        description: 'Estamos preparando contenido fresco, verificado y relevante para la comunidad outdoor.',
        pubDate: new Date(),
      }
    ],
    customData: '<language>es-ar</language>',
  });
}
