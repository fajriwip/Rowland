<script setup lang="ts">
defineProps<{
	illustration: string;
	heading: string;
	subheading: string;
	exploreLogos?: string[];
	exploreLabel: string;
	exploreLink: string;
}>();
</script>

<template>
	<div class="flex w-full flex-col items-center gap-10 pt-22 pb-22 md:pt-26 md:pb-26">
		<img :src="illustration" alt="" class="h-32 w-40" />
		<div class="flex w-full flex-col items-center gap-6">
			<div class="flex w-full flex-col items-center gap-2.5 text-center">
				<h1 class="max-w-80 font-display text-h1-mobile text-ink md:max-w-[400px] md:text-h1">{{ heading }}</h1>
				<p class="max-w-[480px] text-body-l text-ink/60">{{ subheading }}</p>
			</div>
			<a
				:href="exploreLink"
				class="flex w-full max-w-66 items-center justify-between bg-ink/5 px-4 py-3.5 md:max-w-80"
			>
				<span class="flex items-center gap-3">
					<span v-if="exploreLogos?.length" class="flex items-center">
						<img
							v-for="(logo, i) in exploreLogos"
							:key="logo"
							:src="logo"
							alt=""
							class="size-6 rounded-full border border-paper object-cover"
							:class="i > 0 && '-ml-2.5'"
						/>
					</span>
					<span class="text-body-s font-medium text-ink whitespace-nowrap">{{ exploreLabel }}</span>
				</span>
				<Icon name="ph:arrow-right" class="size-4 text-ink" />
			</a>
		</div>
	</div>
</template>
