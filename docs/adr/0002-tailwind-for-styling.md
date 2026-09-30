# Tailwind (v4, via @tailwindcss/vite) for component styling

Section and chrome components are styled with Tailwind utility classes rather than plain scoped CSS. Setup uses Tailwind v4's `@tailwindcss/vite` plugin (no `tailwind.config.js`; theme tokens defined in CSS via `@theme`), since Nuxt 4 already runs on Vite.

The project had no CSS framework before this — the only prior styling dependency was the Storyblok blueprint stylesheet linked in `nuxt.config.ts`. Plain scoped CSS per component was the lower-footprint option and was recommended, but Tailwind was chosen deliberately for this UI-slicing pass to speed up building the ~20 section/item components against the Figma design.
