import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // this on might be "import react from "@vitejs/plugin-react";" in your solution

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const config = {
        plugins: [react()],
        base: "/"
    };

    if (command !== "serve") {
        config.base = "/u-music-webapp/";
    }

    return config;
});