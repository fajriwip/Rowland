<script setup lang="ts">
const { story } = await useAsyncStoryblok("home", {
	deep: true,
	api: {
		version: "draft",
	},
	bridge: {},
});

const storyblokApi = useStoryblokApi();
const { data: space } = await useAsyncData("storyblok-space", async () => {
	const response = await storyblokApi.get("cdn/spaces/me", {});
	return response?.data?.space ?? null;
});

type HeaderMenuItem = {
	label: string;
	href: string;
};

type HeaderState = {
	items: HeaderMenuItem[];
	ctaLabel: string;
	ctaHref: string;
};

type FooterState = {
	brandName: string;
	backToTopLabel: string;
};

// ponytail: profile state must populate before the layout renders, else ProfileCard SSRs empty and hydration mismatches
const profile = useState("profile-card", () => ({
	photo: "",
	name: "",
	position: "",
	tagline: "",
	signature: "",
	location: "",
	yearsExperience: "",
	availability: "",
	cvFile: "",
	email: "",
	socialLinks: [],
}));

const header = useState<HeaderState>("chrome-header", () => ({
	items: [],
	ctaLabel: "",
	ctaHref: "#contact",
}));

const footer = useState<FooterState>("chrome-footer", () => ({
	brandName: "",
	backToTopLabel: "Back to Top",
}));

const menuOpen = ref(false);

const normalizeHeaderItems = (raw: any): HeaderMenuItem[] => {
	if (!Array.isArray(raw)) return [];
	return raw
		.map((item: any) => {
			const label = (item?.label || "").toString().trim();
			const href = (item?.href || "").toString().trim();
			return label && href ? { label, href } : null;
		})
		.filter((item: HeaderMenuItem | null): item is HeaderMenuItem => item !== null);
};

watchEffect(() => {
	const content = story.value?.content;
	const current = content?.profile?.[0];
	const headerBlok = content?.header?.[0];
	const menuItems = normalizeHeaderItems(headerBlok?.menu_items);
	const ctaLabel = (headerBlok?.cta_label || "").toString();
	const ctaHref = (headerBlok?.cta_href || "#contact").toString();

	profile.value = {
		photo: current?.photo?.filename || "",
		name: current?.name || "",
		position: current?.position || "",
		tagline: current?.tagline || "",
		signature: current?.signature?.filename || "",
		location: current?.location || "",
		yearsExperience: current?.years_experience || "",
		availability: current?.availability || "",
		cvFile: current?.cv_file?.filename || "",
		email: current?.email || "",
		socialLinks: current?.social_links?.map((l: any) => ({ platform: l.platform, url: l.url })) ?? [],
	};

	header.value = {
		items: menuItems,
		ctaLabel,
		ctaHref,
	};

	footer.value = {
		brandName: (space.value?.name || "").toString(),
		backToTopLabel: "Back to Top",
	};
});
</script>

<template>
	<div class="flex min-h-screen w-full flex-col items-stretch bg-paper lg:flex-row lg:items-start">
		<!-- ponytail: mobile/tablet menu bar per Figma 88:1283 — logo + hamburger, dropdown panel when open -->
		<div class="sticky top-0 z-10 bg-paper lg:hidden">
			<div class="flex w-full justify-center border-b border-ink/10 px-6 py-4">
				<div class="flex w-full max-w-[640px] items-center justify-between">
					<span class="flex size-9 shrink-0 items-center justify-center p-0.5">
						<Icon name="ph:user-circle" class="size-8 text-accent" />
					</span>
					<button
						type="button"
						class="flex size-9 shrink-0 items-center justify-center p-2"
						aria-label="Toggle menu"
						@click="menuOpen = !menuOpen"
					>
						<span v-if="!menuOpen" class="flex flex-col gap-1">
							<span class="h-px w-5 bg-ink" />
							<span class="h-px w-5 bg-ink" />
						</span>
						<span v-else class="relative size-3">
							<span class="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ink" />
							<span class="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-ink" />
						</span>
					</button>
				</div>
			</div>
			<nav v-if="menuOpen" class="flex w-full flex-col items-center gap-6 border-b border-ink/10 p-6">
				<ul class="flex flex-col items-center gap-1">
					<li v-for="item in header.items" :key="item.label">
						<a :href="item.href" class="py-1 text-body-s font-medium text-ink/60" @click="menuOpen = false">{{ item.label }}</a>
					</li>
				</ul>
				<a :href="header.ctaHref" class="flex w-full items-center justify-center gap-2 bg-ink px-4 py-2" @click="menuOpen = false">
					<Icon name="ph:chat-circle" class="size-4 text-paper" />
					<span class="text-body-s font-medium text-paper whitespace-nowrap">{{ header.ctaLabel }}</span>
				</a>
			</nav>
		</div>
		<div class="w-full shrink-0 lg:w-90 lg:sticky lg:top-0 lg:h-screen">
			<ChromeSideMenu />
		</div>
		<div class="flex min-h-screen flex-1 flex-col items-center">
			<ChromeSiteHeader />
			<main class="w-full max-w-[640px] px-6 md:px-16 lg:px-0">
				<slot />
			</main>
			<div class="w-full max-w-[640px] px-6 md:px-16 lg:px-0">
				<ChromeSiteFooter />
			</div>
		</div>
	</div>
</template>
