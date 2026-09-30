<script setup lang="ts">
defineProps<{
	degree: string;
	school: string;
	dateRange: string;
	description: string;
}>();
</script>

<template>
	<div class="flex w-full items-start gap-6">
		<div class="flex flex-1 flex-col items-start gap-4">
			<div class="flex w-full flex-col items-start gap-0.5">
				<p class="max-w-xs font-display text-h3 text-ink">{{ degree }}</p>
				<p class="w-full text-body-s text-ink/60">{{ school }}</p>
			</div>
			<div class="flex w-full max-w-[360px] flex-col items-start gap-2.5">
				<p class="w-full text-body-s text-ink/60">{{ description }}</p>
			</div>
		</div>
		<p class="shrink-0 whitespace-nowrap text-body-s text-ink/60">{{ dateRange }}</p>
	</div>
</template>
