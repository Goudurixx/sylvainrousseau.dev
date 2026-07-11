// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: confirm sylvainrousseau.dev is purchased/owned before relying on this as canonical site URL
  site: 'https://sylvainrousseau.dev',
  output: 'static',
  compressHTML: true,
});
