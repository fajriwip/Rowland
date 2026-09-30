<script setup lang="ts">
defineProps<{
	heading: string;
	skills?: string[];
	stackLabel: string;
	stackLogos?: string[];
}>();
</script>

<template>
	<SectionsSectionShell :heading="heading">
		<div class="flex w-full flex-col items-start gap-8">
			<div class="flex w-full max-w-[560px] flex-wrap items-start gap-1">
				<SectionsSkillTag v-for="skill in skills" :key="skill" :label="skill" />
			</div>
			<div class="flex w-full flex-col items-start gap-3">
				<p class="text-body-m text-ink whitespace-nowrap">{{ stackLabel }}</p>
				<div class="flex w-full flex-wrap items-center gap-2">
					<SectionsTechLogo v-for="logo in stackLogos" :key="logo" :icon="logo" />
				</div>
			</div>
		</div>
	</SectionsSectionShell>
</template>
