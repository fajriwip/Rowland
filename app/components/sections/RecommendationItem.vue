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
					<p class="w-full text-body-s text-ink/60">{{ role }}</p>
				</div>
				<div class="flex w-full max-w-[360px] flex-col items-start gap-2.5">
					<p class="w-full text-body-s text-ink/60">{{ quote }}</p>
				</div>
			</div>
			<a
				:href="sourceLink || '#'"
				target="_blank"
				rel="noopener"
				class="flex shrink-0 items-center justify-center bg-ink/5 p-1.5"
			>
				<Icon name="ph:arrow-up-right" class="size-3 text-ink" />
			</a>
		</div>
	</div>
</template>
