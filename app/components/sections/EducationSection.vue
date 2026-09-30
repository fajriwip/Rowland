<script setup lang="ts">
type EducationEntry = { degree: string; school: string; dateRange: string; description: string };

defineProps<{ heading: string; items: EducationEntry[] }>();
</script>

<template>
	<SectionsSectionShell :heading="heading">
		<div class="flex w-full flex-col items-start gap-8">
			<SectionsEducationItem v-for="item in items" :key="item.degree" v-bind="item" />
		</div>
	</SectionsSectionShell>
</template>
