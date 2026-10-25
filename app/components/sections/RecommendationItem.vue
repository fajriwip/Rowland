<script setup lang="ts">
defineProps<{
	avatar: string;
	name: string;
	role: string;
	quote: string;
	sourceLink?: string;
}>();
</script>

<template>
	<div class="flex w-full items-start gap-4">
		<div class="flex shrink-0 items-start justify-center pt-0.5">
			<img :src="avatar" alt="" class="size-10 object-cover" />
		</div>
		<div class="flex flex-1 items-start gap-6">
			<div class="flex flex-1 flex-col items-start gap-4">
				<div class="flex w-full flex-col items-start gap-0.5">
					<p class="max-w-xs font-display text-h3 text-ink">{{ name }}</p>
					<p class="w-full text-body-s text-ink/65">{{ role }}</p>
				</div>
				<div class="flex w-full max-w-[360px] flex-col items-start gap-2.5">
					<p class="w-full text-body-s text-ink/65">{{ quote }}</p>
				</div>
			</div>
			<a
				:href="sourceLink || '#'"
				target="_blank"
				rel="noopener"
				class="group flex shrink-0 items-center justify-center bg-surface p-1.5 transition-colors duration-200 hover:bg-ink/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
			>
				<Icon name="ph:arrow-up-right" class="size-3 text-ink transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" />
			</a>
		</div>
	</div>
</template>
