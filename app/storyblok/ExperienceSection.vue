<script setup lang="ts">
import { renderRichText } from "@storyblok/vue";
import { experience as fallback } from "~/content/homeFallback";

const props = defineProps({ blok: { type: Object, required: true } });

const dateRange = (item: any) => {
	if (!item.start_date) return "";
	return item.end_date ? `${item.start_date} – ${item.end_date}` : `${item.start_date} – Present`;
};

const items = () =>
	props.blok.items?.length
		? props.blok.items.map((item: any) => ({
				logo: item.logo?.filename,
				role: item.role,
				company: item.company,
				employmentType: item.employment_type,
				dateRange: dateRange(item),
				description: renderRichText(item.description),
			}))
		: fallback.items;
</script>

<template>
	<SectionsExperienceSection v-editable="blok" :heading="blok.heading || fallback.heading" :items="items()" />
</template>
