<script setup lang="ts">
type ExperienceEntry = {
	logo: string;
	role: string;
	company: string;
	employmentType: string;
	dateRange: string;
	description: string;
	bullets?: string[];
};

defineProps<{ heading: string; items: ExperienceEntry[] }>();
</script>

<template>
	<SectionsSectionShell :heading="heading">
		<div class="flex w-full flex-col items-start gap-8 md:gap-10">
			<SectionsExperienceItem
				v-for="(item, index) in items"
				:key="item.role + item.dateRange"
				v-bind="item"
				:show-line="index < items.length - 1"
				:show-logo="index === 0 || item.company !== items[index - 1]?.company"
			/>
		</div>
	</SectionsSectionShell>
</template>
