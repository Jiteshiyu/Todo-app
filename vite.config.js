import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['uuid']
    }
  },
  resolve: {
    alias: {
      'uuid': path.resolve(__dirname, 'node_modules/uuid/dist/esm-browser/index.js'),
    }
  }
})
