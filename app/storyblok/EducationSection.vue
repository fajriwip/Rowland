<script setup lang="ts">
import { education as fallback } from "~/content/homeFallback";

const props = defineProps({ blok: { type: Object, required: true } });

const dateRange = (item: any) => {
	if (!item.start_date) return "";
	return item.end_date ? `${item.start_date} – ${item.end_date}` : item.start_date;
};

const items = () =>
	props.blok.items?.length
		? props.blok.items.map((item: any) => ({
				degree: item.degree,
				school: item.school,
				dateRange: dateRange(item),
				description: item.description,
			}))
		: fallback.items;
</script>

<template>
	<SectionsEducationSection v-editable="blok" :heading="blok.heading || fallback.heading" :items="items()" />
</template>
