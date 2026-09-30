<script setup lang="ts">
import { about as fallback } from "~/content/homeFallback";

const props = defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsAboutSection
		v-editable="blok"
		:heading="blok.heading || fallback.heading"
		:text="blok.text || fallback.text"
		:skills-label="blok.skills_label || fallback.skillsLabel"
		:skills="blok.skills?.length ? blok.skills.map((s: any) => s.label) : fallback.skills"
	/>
</template>
