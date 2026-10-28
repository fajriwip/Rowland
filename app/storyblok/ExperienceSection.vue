<script setup lang="ts">
import { renderRichText } from "@storyblok/vue";

const props = defineProps({ blok: { type: Object, required: true } });

const dateRange = (item: any) => {
	if (!item.start_date) return "";
	return item.end_date ? `${item.start_date} – ${item.end_date}` : `${item.start_date} – Present`;
};

const items = () =>
	props.blok.items?.map((item: any) => ({
		logo: item.logo?.filename,
		role: item.role,
		company: item.company,
		employmentType: item.employment_type,
		dateRange: dateRange(item),
		description: renderRichText(item.description),
	})) ?? [];
</script>

<template>
	<SectionsExperienceSection v-editable="blok" :id="blok.anchor" :heading="blok.heading" :items="items()" />
</template>
