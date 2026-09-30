# Bridging profile content from the page into the layout via useState

The Side Menu (in `app/layouts/default.vue`) renders a `ProfileCard`, whose content is the `profile` field on the `home` story — a real Storyblok field, not static chrome content. But Nuxt layouts don't receive the page's `blok` data directly; `default.vue` only gets `<slot />`.

`app/storyblok/Home.vue` resolves `blok.profile` (falling back to Figma content per ADR 0001) and writes it to `useState("profile-card", ...)`. `ChromeSideMenu` reads that same key, falling back to the same Figma content if nothing has set it yet (e.g. on a page that isn't `home`). This keeps `SideMenu` a dumb, reusable presentational shell while still letting page-level Storyblok content reach it, without prop-drilling through the layout or turning the layout itself into a Storyblok adapter.
