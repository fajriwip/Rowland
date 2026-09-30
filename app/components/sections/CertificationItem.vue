<script setup lang="ts">
defineProps<{
	logo: string;
	title: string;
	issuer: string;
	issuedDate: string;
	link?: string;
}>();
</script>

<template>
	<div class="flex w-full items-start gap-4">
		<div class="flex shrink-0 items-start justify-center pt-0.5">
			<img :src="logo" alt="" class="size-10 object-cover" />
		</div>
		<div class="flex flex-1 items-start gap-6">
			<div class="flex flex-1 flex-col items-start gap-0.5">
				<p class="max-w-xs font-display text-h3 text-ink">{{ title }}</p>
				<div class="flex flex-wrap items-center gap-x-2">
					<span class="text-body-s text-ink/60">{{ issuer }}</span>
					<span class="size-[3px] bg-ink/60" />
					<span class="text-body-s text-ink/60">{{ issuedDate }}</span>
				</div>
			</div>
			<a
				:href="link || '#'"
				target="_blank"
				rel="noopener"
				class="flex shrink-0 items-center justify-center bg-ink/5 p-1.5"
			>
				<Icon name="ph:arrow-up-right" class="size-3 text-ink" />
			</a>
		</div>
	</div>
</template>
