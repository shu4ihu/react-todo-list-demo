// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	shortcuts: [
		// ...
	],
	theme: {
		colors: {
			// ...
		},
		breakpoints: {
			xxs: "0px",
			xs: "320px",
			sm: "480px",
			// md: "768px",
			md: "630px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1600px",
		},
	},
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				// ...
			},
		}),
	],
	rules: [
		[
			"logo-text-primary",
			{
				"font-family": "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
				"font-weight": "400",
				"font-size": "1.25rem",
			},
		],
		[
			"text-y-truncate",
			{
				display: "-webkit-box",
				"-webkit-box-orient": "vertical",
				"-webkit-line-clamp": "5",
				overflow: "hidden",
			},
		],
		[
			"input-primary",
			{
				"outline-style": "none",
			},
		],
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
