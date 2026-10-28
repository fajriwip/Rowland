export default defineAppConfig({
	icon: {
		mode: "css",
		// cssLayer: emit icon CSS inside Tailwind's base layer — unlayered `:where()` rules would beat `@layer utilities`, silently flattening every `size-*` class to 1em
		cssLayer: "base",
		// no local @iconify-json packages installed — resolve icon data from the public Iconify API at runtime
		provider: "iconify",
	},
});
