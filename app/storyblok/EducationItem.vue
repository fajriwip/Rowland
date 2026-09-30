<script setup lang="ts">
const props = defineProps({ blok: { type: Object, required: true } });

const dateRange = () => {
	if (!props.blok.start_date) return "";
	return props.blok.end_date ? `${props.blok.start_date} – ${props.blok.end_date}` : props.blok.start_date;
};
</script>

<template>
	<SectionsEducationItem
		v-editable="blok"
		:degree="blok.degree"
		:school="blok.school"
		:date-range="dateRange()"
		:description="blok.description"
	/>
</template>
