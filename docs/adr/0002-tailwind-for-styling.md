# Tailwind (v4, via @tailwindcss/vite) for component styling

Section and chrome components are styled with Tailwind utility classes rather than plain scoped CSS. Setup uses Tailwind v4's `@tailwindcss/vite` plugin (no `tailwind.config.js`; theme tokens defined in CSS via `@theme`), since Nuxt 4 already runs on Vite.

The project had no CSS framework before this — the only prior styling dependency was the Storyblok blueprint stylesheet linked in `nuxt.config.ts`. Plain scoped CSS per component was the lower-footprint option and was recommended, but Tailwind was chosen deliberately for this UI-slicing pass to speed up building the ~20 section/item components against the Figma design.

## Forest & Paper rebrand

The shared theme in `app/assets/css/tailwind.css` uses Fraunces for display text
and Instrument Sans for body text, loaded through Google Fonts in `nuxt.config.ts`.
The palette is sage paper (`#F2F4EC`), green-black ink (`#14231C`), forest accent
(`#1F6F54`), and sage surfaces (`#E6EADF`). Tags, cards, and secondary controls use
the explicit `bg-surface` token rather than translucent ink. Local illustrations
and the signature use the matching accent and ink colors. CMS-sourced decorative
illustrations and signatures are monochrome, transparent assets tinted with
shared SVG alpha-composite filters using those same theme tokens. Unlike CSS
masks, these filters work with cross-origin CMS images without requiring CORS
headers. Their source images remain editable in Storyblok. Layout, CMS content,
and interactions are unchanged.
Muted text uses `text-ink/65` to maintain WCAG AA normal-text contrast on
both paper and surface backgrounds.
