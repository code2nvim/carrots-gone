import { defineConfig } from "vite";
import os from "os";
import basicssl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [basicssl(), react(), tailwindcss()],
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "https://" + os.hostname() + ":8088",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
