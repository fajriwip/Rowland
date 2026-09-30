<script setup lang="ts">
import { hero as fallback } from "~/content/homeFallback";

const props = defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsHeroSection
		v-editable="blok"
		:illustration="blok.illustration?.filename || fallback.illustration"
		:heading="blok.heading || fallback.heading"
		:subheading="blok.subheading || fallback.subheading"
		:explore-logos="blok.explore_logos?.length ? blok.explore_logos.map((a: any) => a.filename) : fallback.exploreLogos"
		:explore-label="blok.explore_label || fallback.exploreLabel"
		:explore-link="blok.explore_link?.url || fallback.exploreLink"
	/>
</template>
