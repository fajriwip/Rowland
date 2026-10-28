# Rowland

Personal portfolio site: Nuxt 4 (SSR) + Tailwind CSS 4 + [Storyblok](https://www.storyblok.com) as the headless CMS.

## Setup

```sh
npm install
cp .env.example .env   # then fill in the values below
npm run dev            # https://localhost:3000
```

| Variable | Purpose |
|---|---|
| `STORYBLOK_DELIVERY_API_TOKEN` | Space access token. Use the **preview** token in dev (drafts), the **public** token for production. |
| `STORYBLOK_REGION` | Space region, e.g. `eu`. |
| `STORYBLOK_API_BASE_URL` | Optional API base URL override. |

The dev server runs over HTTPS (`vite-plugin-mkcert`) because the Storyblok Visual Editor requires it. In the space, set **Settings > Visual Editor > default environment** to `https://localhost:3000/` and set the `home` story's real path to `/`.

### Scripts

`npm run dev` · `npm run typecheck` · `npm run build` · `npm run generate` · `npm run preview`

## Content versions

`app/utils/storyblok.ts` picks the Storyblok content version: `draft` in dev, `published` in production builds. Production never serves unpublished content, so publish a story before expecting it on the deployed site.

## How it fits together

- `app/storyblok/*.vue` are the Storyblok bloks. Each one only maps CMS fields onto props and renders the matching component.
- `app/components/sections/*.vue` are presentational components, free of CMS knowledge. Add new UI here, then wire it with a blok in `app/storyblok/`.
- `app/components/chrome/*.vue` is the site shell: header, side menu, footer.
- `app/layouts/default.vue` fetches the `home` story and writes the profile, header, and footer data into shared state (`app/composables/useChromeState.ts`), so the shell renders the same on server and client. Keep that state populated before the layout renders, or the profile card hydrates empty.
- `app/storyblok/Home.vue` fixes the section order (`SECTION_FIELDS`). To add a section, add a blok, then add its field there.
- Header menu items link to section anchors (e.g. `#contact`). Each `href` must match the `anchor` field of the target section blok, otherwise the link is dead.
- Posts live under `posts/` in Storyblok and are rendered by `app/pages/posts/`.
- Styling is Tailwind; design tokens are in `app/assets/css/tailwind.css`.

Non-obvious constraints are marked inline with `ponytail:` comments. Search for them before changing the related code.
