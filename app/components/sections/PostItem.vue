<script setup lang="ts">
defineProps<{ to: string; title: string; date: string; excerpt: string; index?: number }>();
</script>

<template>
	<Motion
		as="div"
		:initial="{ opacity: 0, y: 32 }"
		:while-in-view="{ opacity: 1, y: 0 }"
		:in-view-options="{ once: true, margin: '0px 0px -10% 0px' }"
		:transition="{ duration: 0.8, delay: (index ?? 0) * 0.1, ease: [0.16, 1, 0.3, 1] }"
		class="w-full border-b border-ink/10 last:border-b-0"
	>
		<NuxtLink
			:to="to"
			class="group flex w-full flex-col items-start gap-3 pt-6 pb-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:flex-row-reverse md:gap-6"
		>
			<p class="shrink-0 whitespace-nowrap text-body-s text-ink/65">{{ date }}</p>
			<div class="flex flex-1 flex-col items-start gap-2">
				<p class="font-display text-h3 text-ink transition-colors duration-200 group-hover:text-accent">{{ title }}</p>
				<p v-if="excerpt" class="line-clamp-3 max-w-[420px] text-body-s text-ink/65">{{ excerpt }}</p>
				<span class="flex items-center gap-1.5 text-body-s font-medium text-ink">
					Read post
					<Icon
						name="ph:arrow-right"
						class="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none"
					/>
				</span>
			</div>
		</NuxtLink>
	</Motion>
</template>
