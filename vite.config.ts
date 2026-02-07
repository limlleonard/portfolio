import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/portfolio-react/",
    resolve: {
        alias: {
            "@": new URL("./src", import.meta.url).pathname,
            "@img": new URL("./src/assets/img", import.meta.url).pathname,
        }
    }
});
