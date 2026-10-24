<script setup lang="ts">
const props = defineProps<{
	illustration: string;
	heading: string;
	subheading: string;
	exploreLogos?: string[];
	exploreLabel: string;
	exploreLink: string;
}>();

// Weight contrast within one face: the last word carries the claim.
const words = computed(() => props.heading.trim().split(/\s+/));
const headingLast = computed(() => words.value.at(-1) ?? "");
const headingLead = computed(() => words.value.slice(0, -1).join(" ") + " ");
</script>

<template>
	<div class="flex w-full flex-col items-center gap-10 pt-22 pb-22 md:pt-26 md:pb-26">
		<img :src="illustration" alt="" class="brand-artwork-accent h-32 w-40" />
		<div class="flex w-full flex-col items-center gap-6">
			<div class="flex w-full flex-col items-center gap-2.5 text-center">
				<h1
					class="max-w-[12ch] font-display pb-4 text-[clamp(3rem,11vw,6rem)] leading-[0.95] tracking-[-0.035em] text-balance text-ink md:max-w-[14ch]"
				>
					<span class="font-light">{{ headingLead }}</span>
					<span class="font-black text-accent">{{ headingLast }}</span>
				</h1>
				<p class="max-w-[480px] text-body-l text-ink/65">{{ subheading }}</p>
			</div>
			<a
				:href="exploreLink"
				class="group flex w-full max-w-66 items-center justify-between bg-surface px-4 py-3.5 transition-colors hover:bg-ink/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:max-w-80"
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
				<Icon
						name="ph:arrow-right"
						class="size-4 text-ink transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none"
					/>
			</a>
		</div>
	</div>
</template>
