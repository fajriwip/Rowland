<script setup lang="ts">
import { renderRichText } from "@storyblok/vue";

const props = defineProps({
	blok: { type: Object, required: true },
	showLine: { type: Boolean, default: true },
});

const dateRange = () => {
	if (!props.blok.start_date) return "";
	return props.blok.end_date ? `${props.blok.start_date} – ${props.blok.end_date}` : `${props.blok.start_date} – Present`;
};
</script>

<template>
	<SectionsExperienceItem
		v-editable="blok"
		:logo="blok.logo?.filename"
		:role="blok.role"
		:company="blok.company"
		:employment-type="blok.employment_type"
		:date-range="dateRange()"
		:description="renderRichText(blok.description)"
		:show-line="showLine"
	/>
</template>
