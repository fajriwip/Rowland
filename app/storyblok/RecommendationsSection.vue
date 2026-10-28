<script setup lang="ts">
import type { SbRecommendationItem } from "~/types/storyblok";
const props = defineProps({ blok: { type: Object, required: true } });

const items = () =>
	props.blok.items?.map((item: SbRecommendationItem) => ({
		avatar: item.photo?.filename,
		name: item.name,
		role: item.role,
		quote: item.quote,
		sourceLink: item.source_url,
	})) ?? [];
</script>

<template>
	<SectionsRecommendationsSection v-editable="blok" :id="blok.anchor" :heading="blok.heading" :items="items()" />
</template>
