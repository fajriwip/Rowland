<script setup lang="ts">
defineProps<{ heading: string; bordered?: boolean; tight?: boolean }>();
</script>

<template>
	<!-- ponytail: one reveal per section, not per item; MotionConfig in the layout drops the y-shift under reduced motion -->
	<Motion
		as="section"
		:initial="{ opacity: 0, y: 48, filter: 'blur(6px)' }"
		:while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
		:in-view-options="{ once: true, margin: '0px 0px -15% 0px' }"
		:transition="{ duration: 1, ease: [0.16, 1, 0.3, 1] }"
		class="flex w-full flex-col items-start scroll-mt-24 py-12 md:py-16"
		:class="[bordered !== false && 'border-b border-ink/10', tight ? 'gap-4' : 'gap-8 md:gap-10']"
	>
		<h2 class="max-w-xs font-display text-h2-mobile text-ink md:text-h2">{{ heading }}</h2>
		<slot />
	</Motion>
</template>
