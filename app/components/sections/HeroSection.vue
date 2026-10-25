<script setup lang="ts">
const props = defineProps<{
	illustration: string;
	heading: string;
	subheading: string;
	exploreLogos?: string[];
	exploreLabel: string;
	exploreLink: string;
}>();

// Hero entrance: one rehearsed sequence. Illustration settles first, the heading's lead word
// fades in sharp (inline spans: no transform), then the weighted last word, then the subheading and CTA. Reduced motion keeps the fades.
const ease = [0.16, 1, 0.3, 1] as const;
const enter = (delay: number, y = 28) => ({
	initial: { opacity: 0, y, filter: "blur(8px)" },
	animate: { opacity: 1, y: 0, filter: "blur(0px)" },
	transition: { duration: 1, delay, ease },
});

// Weight contrast within one face: the last word carries the claim.
const words = computed(() => props.heading.trim().split(/\s+/));
const headingLast = computed(() => words.value.at(-1) ?? "");
const headingLead = computed(() => words.value.slice(0, -1).join(" ") + " ");
</script>

<template>
	<div class="flex w-full flex-col items-center gap-10 pt-22 pb-22 md:pt-26 md:pb-26">
		<Motion
			as="img"
			:src="illustration"
			alt=""
			class="w-60"
			:initial="{ opacity: 0, scale: 0.9 }"
			:animate="{ opacity: 1, scale: 1 }"
			:transition="{ duration: 1.2, ease }"
		/>
		<div class="flex w-full flex-col items-center gap-6">
			<div class="flex w-full flex-col items-center gap-2.5 text-center">
				<h1
					class="max-w-[12ch] font-display pb-4 text-[clamp(3rem,11vw,6rem)] leading-[0.95] tracking-[-0.035em] text-balance text-ink md:max-w-[14ch]"
				>
					<Motion as="span" class="font-light" v-bind="enter(0.25, 0)">{{ headingLead }}</Motion>
					<Motion as="span" class="font-black text-accent" v-bind="enter(0.5, 0)">{{ headingLast }}</Motion>
				</h1>
				<Motion as="p" class="max-w-[480px] text-body-l text-ink/65" v-bind="enter(0.7, 20)">{{ subheading }}</Motion>
			</div>
			<Motion as="div" class="flex w-full justify-center" v-bind="enter(0.9, 20)">
			<a
				:href="exploreLink"
				class="group flex w-full max-w-66 items-center justify-between bg-surface px-4 py-3.5 transition-colors duration-200 hover:bg-ink/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:max-w-80"
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
			</Motion>
		</div>
	</div>
</template>
