<script setup lang="ts">
import { skills as fallback } from "~/content/homeFallback";

const props = defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsSkillsSection
		v-editable="blok"
		:heading="blok.heading || fallback.heading"
		:skills="blok.skills?.length ? blok.skills.map((s: any) => s.label) : fallback.skills"
		:stack-label="blok.stack_label || fallback.stackLabel"
		:stack-logos="blok.stack_logos?.length ? blok.stack_logos.map((l: any) => l.icon) : fallback.stackLogos"
	/>
</template>
