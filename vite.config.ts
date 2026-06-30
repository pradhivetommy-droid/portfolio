import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/preset-sites/ragul-portfolio/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
