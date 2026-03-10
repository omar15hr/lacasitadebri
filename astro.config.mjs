// @ts-check
<<<<<<< HEAD
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";
=======
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';
>>>>>>> f8cd9b4066c05bad3a5fcd2b7f1239dc8a8ec36d

// https://astro.build/config
export default defineConfig({
  vite: {
<<<<<<< HEAD
    plugins: [tailwindcss()],
  },
  security: {
    csp: true,
  },

  adapter: vercel(),
});
=======
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});
>>>>>>> f8cd9b4066c05bad3a5fcd2b7f1239dc8a8ec36d
