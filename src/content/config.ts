import { defineCollection, z } from 'astro:content';

const mdm = defineCollection({
  type: 'content',
  schema: z.object({
    fecha: z.date(),
    autor: z.string().default('Favio'),
    temas: z.array(z.object({
      categoria: z.string(), // ej: "Deporte", "Salud", "Mecánica"
      titulo: z.string(),
      resumen: z.string(), // Texto corto (2-3 líneas) para el MDM
      texto_canonico: z.string(), // Texto completo (~300 palabras) para la ruta canónica
      foto: z.string(),
      fuenteUrl: z.string().url(),
      fuenteNombre: z.string(),
      notaTransparencia: z.string(),
      videoEmbed: z.string().optional()
    }))
  }),
});

export const collections = { mdm };