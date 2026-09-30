<script setup lang="ts">
defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsRecommendationItem
		v-editable="blok"
		:avatar="blok.photo?.filename"
		:name="blok.name"
		:role="blok.role"
		:quote="blok.quote"
		:source-link="blok.source_url"
	/>
</template>
