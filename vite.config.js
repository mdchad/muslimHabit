import { defineConfig } from "vite";
import { resolve } from 'path'
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  rollupOptions: {
    input: {
      landing: resolve(__dirname, 'index.html'),
      app: resolve(__dirname, 'src/app/index.html')
    }
  }
});
