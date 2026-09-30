<script setup lang="ts">
type LanguageEntry = { flag: string; name: string; proficiency: string };

defineProps<{ heading: string; items: LanguageEntry[] }>();
</script>

<template>
	<SectionsSectionShell :heading="heading">
		<div class="flex w-full flex-col items-start gap-6">
			<SectionsLanguageItem v-for="item in items" :key="item.name" v-bind="item" />
		</div>
	</SectionsSectionShell>
</template>
