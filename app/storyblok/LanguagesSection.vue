<script setup lang="ts">
const props = defineProps({ blok: { type: Object, required: true } });

const items = () =>
	props.blok.items?.map((item: any) => ({
		flag: item.flag?.filename,
		name: item.language,
		proficiency: item.proficiency,
	})) ?? [];
</script>

<template>
	<SectionsLanguagesSection v-editable="blok" :heading="blok.heading" :items="items()" />
</template>
