import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const cookies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cookies" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      price: z.number(),
      description: z.string(),
      image: image(),
      bgColor: z.string().optional(),
      feature: z.string().optional(),
    }),
});

export const collections = { cookies };
