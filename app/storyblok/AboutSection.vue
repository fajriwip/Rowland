<script setup lang="ts">
const props = defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsAboutSection
		v-editable="blok"
		:id="blok.anchor"
		:heading="blok.heading"
		:text="blok.text"
		:skills-label="blok.skills_label"
		:skills="blok.skills?.map((s: { label: string }) => s.label) ?? []"
	/>
</template>
