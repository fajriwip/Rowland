<script setup lang="ts">
defineProps<{
	logo: string;
	role: string;
	company: string;
	employmentType: string;
	dateRange: string;
	description: string;
	bullets?: string[];
	showLine?: boolean;
}>();
</script>

<template>
	<div class="flex w-full items-start gap-4">
		<div class="relative flex shrink-0 items-start justify-center self-stretch pt-0.5">
			<img :src="logo" alt="" class="size-10 object-cover" />
			<span
				v-if="showLine !== false"
				class="absolute top-14 bottom-[-20px] left-1/2 w-px -translate-x-1/2 bg-ink/10"
			/>
		</div>
		<div class="flex flex-1 flex-col items-start gap-6">
			<div class="flex w-full items-start gap-6">
				<div class="flex flex-1 flex-col items-start gap-4">
					<div class="flex w-full flex-col items-start gap-0.5">
						<p class="max-w-xs font-display text-h3 text-ink">{{ role }}</p>
						<div class="flex flex-wrap items-center gap-x-2">
							<span class="text-body-s text-ink/60">{{ company }}</span>
							<span class="size-[3px] bg-ink/60" />
							<span class="text-body-s text-ink/60">{{ employmentType }}</span>
						</div>
					</div>
					<div class="flex w-full max-w-[360px] flex-col items-start gap-2.5">
						<div class="w-full text-body-s text-ink/60 [&_p]:contents" v-html="description" />
						<div v-if="bullets?.length" class="flex w-full flex-col items-start">
							<SectionsBulletItem v-for="bullet in bullets" :key="bullet" :text="bullet" />
						</div>
					</div>
				</div>
				<p class="shrink-0 whitespace-nowrap text-body-s text-ink/60">{{ dateRange }}</p>
			</div>
		</div>
	</div>
</template>
