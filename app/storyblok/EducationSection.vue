<script setup lang="ts">
const props = defineProps({ blok: { type: Object, required: true } });

const dateRange = (item: any) => {
	if (!item.start_date) return "";
	return item.end_date ? `${item.start_date} – ${item.end_date}` : item.start_date;
};

const items = () =>
	props.blok.items?.map((item: any) => ({
		degree: item.degree,
		school: item.school,
		dateRange: dateRange(item),
		description: item.description,
	})) ?? [];
</script>

<template>
	<SectionsEducationSection v-editable="blok" :id="blok.anchor" :heading="blok.heading" :items="items()" />
</template>
