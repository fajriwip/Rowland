<script setup lang="ts">
type RecommendationEntry = { avatar: string; name: string; role: string; quote: string; sourceLink?: string };

defineProps<{ heading: string; items: RecommendationEntry[] }>();
</script>

<template>
	<SectionsSectionShell :heading="heading">
		<div class="flex w-full flex-col items-start gap-8">
			<SectionsRecommendationItem v-for="item in items" :key="item.name" v-bind="item" />
		</div>
	</SectionsSectionShell>
</template>
