import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blicksel-picks.netlify.app',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    mdx(),
    sitemap(),
  ],
  image: {
    domains: ['images.pexels.com', 'amazon.com'],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});