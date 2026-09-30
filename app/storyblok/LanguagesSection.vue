<script setup lang="ts">
import { languages as fallback } from "~/content/homeFallback";

const props = defineProps({ blok: { type: Object, required: true } });

const items = () =>
	props.blok.items?.length
		? props.blok.items.map((item: any) => ({
				flag: item.flag?.filename,
				name: item.language,
				proficiency: item.proficiency,
			}))
		: fallback.items;
</script>

<template>
	<SectionsLanguagesSection v-editable="blok" :heading="blok.heading || fallback.heading" :items="items()" />
</template>
