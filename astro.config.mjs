// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Deployed on GitHub Pages: https://amirmiled.github.io/amir_PORTFOLIO
  site: "https://amirmiled.github.io",
  base: "/amir_PORTFOLIO",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
