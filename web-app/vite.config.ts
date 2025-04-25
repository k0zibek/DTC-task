import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr({
    include: "**/*.svg?react",
  }), tsconfigPaths()],
  resolve: {
    alias: {
      '@public': path.resolve(__dirname, 'public/'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  build: {
    sourcemap: true
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  }
})