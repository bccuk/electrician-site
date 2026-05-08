import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Custom domain via the CNAME file in public/.
// Site serves at the root, so no `base` needed. If you ever go back to
// the bccuk.github.io/barber-site/ subpath, set base: '/barber-site'.
export default defineConfig({
  site: 'https://electrician.bytecodeconsulting.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
