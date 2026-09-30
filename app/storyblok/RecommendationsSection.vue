<script setup lang="ts">
import { recommendations as fallback } from "~/content/homeFallback";

const props = defineProps({ blok: { type: Object, required: true } });

const items = () =>
	props.blok.items?.length
		? props.blok.items.map((item: any) => ({
				avatar: item.photo?.filename,
				name: item.name,
				role: item.role,
				quote: item.quote,
				sourceLink: item.source_url,
			}))
		: fallback.items;
</script>

<template>
	<SectionsRecommendationsSection v-editable="blok" :heading="blok.heading || fallback.heading" :items="items()" />
</template>
