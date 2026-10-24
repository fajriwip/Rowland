<script setup lang="ts">
const { story } = await useAsyncStoryblok("home", STORYBLOK_OPTIONS);

const storyblokApi = useStoryblokApi();
const { data: space } = await useAsyncData("storyblok-space", async () => {
	const response = await storyblokApi.get("cdn/spaces/me", {});
	return response?.data?.space ?? null;
});

// ponytail: profile state must populate before the layout renders, else ProfileCard SSRs empty and hydration mismatches
const profile = useProfileCardState();
const header = useHeaderState();
const footer = useFooterState();

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
	// ponytail: each menu item's href (e.g. "#contact") must match the target section blok's `anchor` field — drift = a dead link
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
		<svg aria-hidden="true" width="0" height="0" class="absolute" focusable="false">
			<defs>
				<filter id="brand-accent" color-interpolation-filters="sRGB">
					<feFlood style="flood-color: var(--color-accent)" />
					<feComposite in2="SourceAlpha" operator="in" />
				</filter>
				<filter id="brand-ink" color-interpolation-filters="sRGB">
					<feFlood style="flood-color: var(--color-ink)" />
					<feComposite in2="SourceAlpha" operator="in" />
				</filter>
			</defs>
		</svg>
		<!-- ponytail: shown below lg — tablet (md+) renders the desktop nav inline, mobile keeps the hamburger + dropdown -->
		<div class="sticky top-0 z-10 bg-paper lg:hidden">
			<div class="flex w-full justify-center border-b border-ink/10 px-6 py-4">
				<!-- ponytail: reuse the shared header content; links show from md up, hamburger only below md -->
				<ChromeHeaderNav links-from="md">
					<button
						type="button"
						class="flex size-9 shrink-0 items-center justify-center p-2 md:hidden"
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
				</ChromeHeaderNav>
			</div>
			<nav v-if="menuOpen" class="flex w-full flex-col items-center gap-6 border-b border-ink/10 p-6 md:hidden">
				<ChromeNavLinks layout="column" @navigate="menuOpen = false" />
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
