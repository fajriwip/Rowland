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
		<div class="w-full shrink-0 lg:w-90 lg:sticky lg:top-0 lg:h-screen">
			<ChromeSideMenu />
		</div>
		<div class="flex min-h-screen flex-1 flex-col items-center">
			<ChromeSiteHeader />
			<main class="w-full max-w-[640px] px-6 lg:px-0">
				<slot />
			</main>
			<div class="w-full max-w-[640px] px-6 lg:px-0">
				<ChromeSiteFooter />
			</div>
		</div>
	</div>
</template>
