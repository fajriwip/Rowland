<script setup lang="ts">
const props = defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsSkillsSection
		v-editable="blok"
		:id="blok.anchor"
		:heading="blok.heading"
		:skills="blok.skills?.map((s: any) => s.label) ?? []"
		:stack-label="blok.stack_label"
		:stack-logos="blok.stack_logos?.map((l: any) => l.icon) ?? []"
	/>
</template>
