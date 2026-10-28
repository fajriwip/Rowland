// Hand-written shapes for the Storyblok fields the adapters read. Rename a field in the CMS → update it here and typecheck points at every reader.
export type SbAsset = { filename?: string };
export type SbLink = { url?: string };
export type SbSocialLink = { platform: string; url: string };
export type SbRichText = Parameters<typeof safeRichText>[0];

export type SbMenuItem = { label?: string; href?: string };
export type SbExperienceItem = {
	logo?: SbAsset;
	role: string;
	company: string;
	employment_type: string;
	start_date?: string;
	end_date?: string;
	description: SbRichText;
};
export type SbEducationItem = {
	degree: string;
	school: string;
	start_date?: string;
	end_date?: string;
	description: string;
};
export type SbCertificationItem = {
	logo?: SbAsset;
	title: string;
	issuer: string;
	issued_date: string;
	source_url?: SbLink;
};
export type SbLanguageItem = { language: string; proficiency: string };
export type SbRecommendationItem = {
	photo?: SbAsset;
	name: string;
	role: string;
	quote: string;
	source_url: string;
};
export type SbContactMethod = { label: string; value: string; method: string };

export type SbProfile = {
	photo?: SbAsset;
	name?: string;
	position?: string;
	tagline?: string;
	signature?: SbAsset;
	location?: string;
	years_experience?: string;
	availability?: string;
	cv_file?: SbAsset;
	email?: string;
	social_links?: SbSocialLink[];
};
