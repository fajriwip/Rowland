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
</script>

<template>
	<div v-editable="blok" class="flex w-full flex-col items-start">
		<StoryblokComponent v-if="hero()" :blok="hero()" />

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
