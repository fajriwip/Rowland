// Single source for the three cross-cutting useState keys shared between the
// layout (writer) and the chrome components (readers). Duplicating these
// defaults caused hydration mismatches when the writer and reader drifted.
export type HeaderMenuItem = { label: string; href: string };
export type HeaderState = {
	items: HeaderMenuItem[];
	ctaLabel: string;
	ctaHref: string;
};
export type FooterState = {
	brandName: string;
	backToTopLabel: string;
};
export type ProfileCardState = {
	photo: string;
	name: string;
	position: string;
	tagline: string;
	signature: string;
	location: string;
	yearsExperience: string;
	availability: string;
	cvFile: string;
	email: string;
	socialLinks: { platform: string; url: string }[];
};

export const useHeaderState = () =>
	useState<HeaderState>("chrome-header", () => ({
		items: [],
		ctaLabel: "",
		ctaHref: "#contact",
	}));

export const useFooterState = () =>
	useState<FooterState>("chrome-footer", () => ({
		brandName: "",
		backToTopLabel: "Back to Top",
	}));

export const useProfileCardState = () =>
	useState<ProfileCardState>("profile-card", () => ({
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
