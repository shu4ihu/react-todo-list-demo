import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), UnoCSS()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@Tabbar": path.resolve(__dirname, "./src/components/Tabbar"),
			"@Task": path.resolve(__dirname, "./src/components/Task"),
			"@TabbarComp": path.resolve(__dirname, "./src/components/Tabbar/components"),
			"@TaskComp": path.resolve(__dirname, "./src/components/Task/components"),
		},
	},
});
