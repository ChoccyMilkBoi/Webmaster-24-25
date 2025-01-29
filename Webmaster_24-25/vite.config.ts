import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ClientSideRouting: Plugin = {
  name: "dynamic-router",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.match(/^\/@\d+/)) {
        req.url = "/";
      }
      next();
    });
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ClientSideRouting],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'Webmaster_24-25/index.html'),
        menu: resolve(__dirname, 'Webmaster_24-25/menu.html'),
        catering: resolve(__dirname, 'Webmaster_24-25/catering.html'),
        mission: resolve(__dirname, 'Webmaster_24-25/mission.html'),
        reservations: resolve(__dirname, 'Webmaster_24-25/reservations.html'),
        sources: resolve(__dirname, 'Webmaster_24-25/sources.html'),
      },
    },
  },
});