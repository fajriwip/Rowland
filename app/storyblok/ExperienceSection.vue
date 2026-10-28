<script setup lang="ts">
const props = defineProps({ blok: { type: Object, required: true } });

const items = () =>
	props.blok.items?.map((item: any) => ({
		logo: item.logo?.filename,
		role: item.role,
		company: item.company,
		employmentType: item.employment_type,
		dateRange: dateRange(item, "Present"),
		description: safeRichText(item.description),
	})) ?? [];
</script>

<template>
	<SectionsExperienceSection v-editable="blok" :id="blok.anchor" :heading="blok.heading" :items="items()" />
</template>
