import { defineConfig, mergeConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig as defineVitestConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite'

const viteConfig =  defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});


const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: "./setup.js"
  },
});


export default mergeConfig(viteConfig, vitestConfig);