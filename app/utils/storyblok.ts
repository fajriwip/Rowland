// Shared by the page and the layout so useAsyncStoryblok's `${url}::${api}`
// key stays identical at both call sites. Drift here = a duplicate story fetch.
export const STORYBLOK_OPTIONS = {
	deep: true, // ponytail: required for Nuxt 4 bridge — shallow reactivity breaks live updates (storyblok/monoblok#210)
	api: {
		version: "draft",
	},
	bridge: {},
} as const;
