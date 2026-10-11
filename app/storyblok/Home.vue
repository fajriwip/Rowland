<script setup lang="ts">

const props = defineProps({ blok: { type: Object, required: true } });

const first = (field?: any[]) => field?.[0];

const hero = () => first(props.blok.hero);
const about = () => first(props.blok.about);
const experience = () => first(props.blok.experience);
const education = () => first(props.blok.education);
const certifications = () => first(props.blok.certifications);
const skills = () => first(props.blok.skills);
const languages = () => first(props.blok.languages);
const recommendations = () => first(props.blok.recommendations);
const contact = () => first(props.blok.contact);

// Explore button: derive its logo stack from the Experience section logos
// (first N distinct ones) instead of the manually curated `explore_logos`
// asset list on the Hero blok. Falls back to the manual list when the
// Experience section yields no logos.
const EXPLORE_LOGO_LIMIT = 3;

const experienceLogos = () => {
	const logos: { filename: string }[] = [];
	const seen = new Set<string>();
	for (const item of experience()?.items ?? []) {
		const logo = item.logo;
		if (!logo?.filename || seen.has(logo.filename)) continue;
		seen.add(logo.filename);
		logos.push(logo);
		if (logos.length === EXPLORE_LOGO_LIMIT) break;
	}
	return logos;
};

const heroWithExploreLogos = () => {
	const heroBlok = hero();
	if (!heroBlok) return heroBlok;
	const logos = experienceLogos();
	return { ...heroBlok, explore_logos: logos.length ? logos : heroBlok.explore_logos };
};
</script>

<template>
	<div v-editable="blok" class="flex w-full flex-col items-start">
		<StoryblokComponent v-if="heroWithExploreLogos()" :blok="heroWithExploreLogos()" />

		<StoryblokComponent v-if="about()" :blok="about()" />

		<StoryblokComponent v-if="experience()" :blok="experience()" />

		<StoryblokComponent v-if="education()" :blok="education()" />

		<StoryblokComponent v-if="certifications()" :blok="certifications()" />

		<StoryblokComponent v-if="skills()" :blok="skills()" />

		<StoryblokComponent v-if="languages()" :blok="languages()" />

		<StoryblokComponent v-if="recommendations()" :blok="recommendations()" />

		<StoryblokComponent v-if="contact()" :blok="contact()" />
	</div>
</template>
