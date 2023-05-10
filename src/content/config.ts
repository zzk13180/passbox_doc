import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      sort: z.number(),
      description: z.string(),
      src: z.string(),
    }),
  }),
};
