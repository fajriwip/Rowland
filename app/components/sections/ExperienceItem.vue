<script setup lang="ts">
withDefaults(
	defineProps<{
		logo: string;
		role: string;
		company: string;
		employmentType: string;
		dateRange: string;
		description: string;
		showLine?: boolean;
		showLogo?: boolean;
	}>(),
	{ showLine: true, showLogo: true },
);
</script>

<template>
	<div class="flex w-full items-start gap-4">
		<div class="relative flex w-10 shrink-0 items-start justify-center self-stretch pt-0.5">
			<img v-if="showLogo" :src="logo" alt="" class="size-10 object-cover" />
			<!-- ponytail: -top-3 bridges the 12px gap so the line meets the previous item's line when logo is hidden -->
			<span
				v-if="showLine"
				class="absolute bottom-[-20px] left-1/2 w-px -translate-x-1/2 bg-ink/10"
				:class="showLogo ? 'top-14' : '-top-3'"
			/>
		</div>
		<div class="flex flex-1 flex-col items-start gap-6">
			<div class="flex w-full flex-col items-start gap-3 md:flex-row-reverse md:gap-6">
				<p class="shrink-0 whitespace-nowrap text-body-s text-ink/60">{{ dateRange }}</p>
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
						<div
							class="w-full text-body-s text-ink/60 [&_p]:contents [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:marker:text-ink/60"
							v-html="description"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
