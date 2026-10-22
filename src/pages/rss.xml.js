import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // Por ahora usa artículos de ejemplo. Luego conectamos con tus noticias reales.
  const posts = await getCollection('blog'); // Ajustaremos esto cuando creemos la colección de noticias
  
  return rss({
    title: 'SportDharma Ecosystem | Noticias',
    description: 'Curación humana, 6 publicaciones diarias. Software libre para deportistas outdoor.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: \/noticias/\/\,
    })),
    customData: \<language>es-ar</language>\,
  });
}
