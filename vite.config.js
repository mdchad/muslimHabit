import { defineConfig } from "vite";
import { resolve } from 'path'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    input: {
      landing: resolve(__dirname, 'index.html'),
      app: resolve(__dirname, 'src/app/index.html')
    }
  }
});
