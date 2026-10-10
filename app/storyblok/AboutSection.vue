<script setup lang="ts">
const props = defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsAboutSection
		v-editable="blok"
		:heading="blok.heading"
		:text="blok.text"
		:skills-label="blok.skills_label"
		:skills="blok.skills?.map((s: any) => s.label) ?? []"
	/>
</template>
