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
	<MotionConfig reduced-motion="user">
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
						:aria-expanded="menuOpen"
						@click="menuOpen = !menuOpen"
					>
						<!-- ponytail: two lines morph into an X via transform; 2.5px = half of (1px line + 4px gap) -->
						<span class="relative size-5">
							<span
								class="absolute left-0 top-1/2 h-px w-5 bg-ink transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
								:class="menuOpen ? 'rotate-45' : '-translate-y-[2.5px]'"
							/>
							<span
								class="absolute left-0 top-1/2 h-px w-5 bg-ink transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
								:class="menuOpen ? '-rotate-45' : 'translate-y-[2.5px]'"
							/>
						</span>
					</button>
				</ChromeHeaderNav>
			</div>
			<!-- ponytail: overlay panel (absolute under the bar) so opening never reflows the page; clip-path + transform + opacity only, no height animation. Exit is faster than enter. -->
			<AnimatePresence>
				<Motion
					v-if="menuOpen"
					as="nav"
					:initial="{ opacity: 0, y: -8, clipPath: 'inset(0 0 100% 0)' }"
					:animate="{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] } }"
					:exit="{ opacity: 0, y: -4, clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] } }"
					class="absolute inset-x-0 top-full border-b border-ink/10 bg-paper md:hidden"
				>
					<div class="flex w-full flex-col items-center gap-6 p-6">
						<ChromeNavLinks layout="column" @navigate="menuOpen = false" />
					</div>
				</Motion>
			</AnimatePresence>
		</div>
		<div class="w-full shrink-0 lg:w-90 lg:sticky lg:top-0 lg:h-screen">
			<ChromeSideMenu />
		</div>
		<div class="flex min-h-screen flex-1 flex-col items-center">
			<ChromeSiteHeader />
			<main class="w-full max-w-[640px] flex-1 px-6 md:px-16 lg:px-0">
				<slot />
			</main>
			<div class="w-full max-w-[640px] px-6 md:px-16 lg:px-0">
				<ChromeSiteFooter />
			</div>
		</div>
	</div>
	</MotionConfig>
</template>
