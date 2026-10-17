<script setup lang="ts">
defineProps<{ heading: string; bordered?: boolean; tight?: boolean }>();
</script>

<template>
	<section
		class="flex w-full flex-col items-start py-12 md:py-16"
		:class="[bordered !== false && 'border-b border-ink/10', tight ? 'gap-4' : 'gap-8 md:gap-10']"
	>
		<h2 class="max-w-xs font-display text-h2-mobile text-ink md:text-h2">{{ heading }}</h2>
		<slot />
	</section>
</template>
