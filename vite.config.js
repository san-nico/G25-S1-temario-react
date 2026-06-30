import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/G25-S1-temario-react/", // 👈 OJO: nombre exacto del repo
});
