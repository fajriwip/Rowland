<script setup lang="ts">
const props = defineProps({ blok: { type: Object, required: true } });

const first = (field?: any[]) => field?.[0];

// shortcut: section field order is fixed by the home layout; adding a section = one entry here
const SECTION_FIELDS = [
	"about",
	"experience",
	"education",
	"certifications",
	"skills",
	"languages",
	"recommendations",
	"contact",
] as const;

const EXPLORE_LOGO_LIMIT = 3;

const experienceLogos = () => {
	const logos: { filename: string }[] = [];
	const seen = new Set<string>();
	for (const item of first(props.blok.experience)?.items ?? []) {
		const logo = item.logo;
		if (!logo?.filename || seen.has(logo.filename)) continue;
		seen.add(logo.filename);
		logos.push(logo);
		if (logos.length === EXPLORE_LOGO_LIMIT) break;
	}
	return logos;
};

// Explore button: derive its logo stack from the Experience section logos
// (first N distinct ones) instead of the manually curated `explore_logos`
// asset list on the Hero blok. Falls back to the manual list when the
// Experience section yields no logos.
const sections = () => {
	const heroBlok = first(props.blok.hero);
	const logos = experienceLogos();
	const hero = heroBlok
		? { ...heroBlok, explore_logos: logos.length ? logos : heroBlok.explore_logos }
		: null;
	return [hero, ...SECTION_FIELDS.map((k) => first(props.blok[k]))].filter(Boolean);
};
</script>

<template>
	<div v-editable="blok" class="flex w-full flex-col items-start">
		<StoryblokComponent v-for="(blok, i) in sections()" :key="blok._uid ?? i" :blok="blok" />
	</div>
</template>
