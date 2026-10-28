import type { SbMenuItem, SbProfile } from "~/types/storyblok";

const text = (v: unknown) => (v ?? "").toString().trim();

const normalizeHeaderItems = (raw: SbMenuItem[] | undefined): HeaderMenuItem[] =>
	(Array.isArray(raw) ? raw : []).flatMap((item) => {
		const label = text(item?.label);
		const href = text(item?.href);
		return label && href ? [{ label, href }] : [];
	});

// ponytail: profile state must populate before the layout renders, else ProfileCard SSRs empty and hydration mismatches
export const useSiteChrome = (story: Ref<any>, space: Ref<{ name?: string } | null>) => {
	const profile = useProfileCardState();
	const header = useHeaderState();
	const footer = useFooterState();

	watchEffect(() => {
		const content = story.value?.content;
		const current: SbProfile | undefined = content?.profile?.[0];
		const headerBlok = content?.header?.[0];

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
			socialLinks: current?.social_links?.map((l) => ({ platform: l.platform, url: l.url })) ?? [],
		};

		header.value = {
			// ponytail: each menu item's href (e.g. "#contact") must match the target section blok's `anchor` field — drift = a dead link
			items: normalizeHeaderItems(headerBlok?.menu_items),
			ctaLabel: text(headerBlok?.cta_label),
			ctaHref: text(headerBlok?.cta_href) || "#contact",
		};

		footer.value = {
			brandName: text(space.value?.name),
			backToTopLabel: "Back to Top",
		};
	});
};
