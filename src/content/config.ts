import { defineCollection, z } from 'astro:content';

const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    autor: z.string().default('Favio'),
    categoria: z.string(),
    resumen: z.string(),
    fuenteUrl: z.string().url(),
    fuenteNombre: z.string(),
    notaTransparencia: z.string(),
    videoEmbed: z.string().optional() // ID de YouTube (ej: "dQw4w9WgXcQ")
  }),
});

export const collections = { articulos };