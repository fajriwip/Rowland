<script setup lang="ts">
type HeaderMenuItem = {
	label: string;
	href: string;
};

type HeaderState = {
	items: HeaderMenuItem[];
	ctaLabel: string;
	ctaHref: string;
};

// ponytail: single source for the header content (brand + nav links + CTA) — reused by the
// desktop header (ChromeSiteHeader) and the tablet/mobile top bar in the layout
withDefaults(defineProps<{ linksFrom?: "md" | "lg" }>(), {
	linksFrom: "lg",
});

const header = useState<HeaderState>("chrome-header", () => ({
	items: [],
	ctaLabel: "",
	ctaHref: "#contact",
}));
</script>

<template>
	<div class="flex w-full max-w-[640px] items-center justify-between gap-5">
		<span class="flex size-9 shrink-0 items-center justify-center p-0.5">
			<Icon name="ph:user-circle" class="size-8 text-accent" />
		</span>
		<nav class="flex-1 items-center justify-between" :class="linksFrom === 'md' ? 'hidden md:flex' : 'hidden lg:flex'">
			<ul class="flex items-center gap-4">
				<li v-for="item in header.items" :key="item.label">
					<a :href="item.href" class="py-1 text-body-s font-medium text-ink/60">{{ item.label }}</a>
				</li>
			</ul>
			<a :href="header.ctaHref" class="ml-auto flex items-center gap-2 bg-ink px-4 py-2">
				<Icon name="ph:chat-circle" class="size-4 text-paper" />
				<span class="text-body-s font-medium text-paper whitespace-nowrap">{{ header.ctaLabel }}</span>
			</a>
		</nav>
		<slot />
	</div>
</template>
