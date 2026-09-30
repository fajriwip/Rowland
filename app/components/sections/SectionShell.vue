<script setup lang="ts">
defineProps<{ heading: string; bordered?: boolean }>();
</script>

<template>
	<section
		class="flex w-full flex-col items-start gap-10 py-16"
		:class="bordered !== false && 'border-b border-ink/10'"
	>
		<h2 class="max-w-xs font-display text-h2 text-ink">{{ heading }}</h2>
		<slot />
	</section>
</template>
