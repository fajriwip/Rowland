<script setup lang="ts">
defineProps<{
	heading: string;
	text: string;
	skillsLabel: string;
	skills?: string[];
}>();
</script>

<template>
	<SectionsSectionShell :heading="heading">
		<div class="flex w-full flex-col items-start gap-8">
			<p class="max-w-[480px] w-full text-body-m text-ink/60">{{ text }}</p>
			<div class="flex w-full flex-col items-start gap-3">
				<p class="text-body-m text-ink whitespace-nowrap">{{ skillsLabel }}</p>
				<div class="flex w-full max-w-[560px] flex-wrap items-start gap-1">
					<SectionsSkillTag v-for="skill in skills" :key="skill" :label="skill" />
				</div>
			</div>
		</div>
	</SectionsSectionShell>
</template>
