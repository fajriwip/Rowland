<script setup lang="ts">
import type { SbAsset } from "~/types/storyblok";

const props = defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsHeroSection
		v-editable="blok"
		:illustration="blok.illustration?.filename"
		:heading="blok.heading"
		:subheading="blok.subheading"
		:explore-logos="blok.explore_logos?.map((a: SbAsset) => a.filename) ?? []"
		:explore-label="blok.explore_label"
		:explore-link="blok.explore_link?.url ?? blok.explore_link ?? ''"
	/>
</template>
