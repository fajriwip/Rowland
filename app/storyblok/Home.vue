<script setup lang="ts">
import * as fallback from "~/content/homeFallback";

const props = defineProps({ blok: { type: Object, required: true } });

const first = (field?: any[]) => field?.[0];

const profileBlok = first(props.blok.profile);
useState("profile-card", () => ({
	photo: profileBlok?.photo?.filename || fallback.profile.photo,
	name: profileBlok?.name || fallback.profile.name,
	position: profileBlok?.position || fallback.profile.position,
	tagline: profileBlok?.tagline || fallback.profile.tagline,
	signature: profileBlok?.signature?.filename || fallback.profile.signature,
	location: profileBlok?.location || fallback.profile.location,
	yearsExperience: profileBlok?.years_experience || fallback.profile.yearsExperience,
	availability: profileBlok?.availability || fallback.profile.availability,
	cvFile: profileBlok?.cv_file?.filename || fallback.profile.cvFile,
	email: profileBlok?.email || fallback.profile.email,
	socialLinks: profileBlok?.social_links?.length
		? profileBlok.social_links.map((l: any) => ({ platform: l.platform, url: l.url }))
		: fallback.profile.socialLinks,
}));

const hero = () => first(props.blok.hero);
const about = () => first(props.blok.about);
const experience = () => first(props.blok.experience);
const education = () => first(props.blok.education);
const certifications = () => first(props.blok.certifications);
const skills = () => first(props.blok.skills);
const languages = () => first(props.blok.languages);
const recommendations = () => first(props.blok.recommendations);
const contact = () => first(props.blok.contact);
</script>

<template>
	<div v-editable="blok" class="flex w-full flex-col items-start">
		<StoryblokComponent v-if="hero()" :blok="hero()" />
		<SectionsHeroSection v-else v-bind="fallback.hero" />

		<StoryblokComponent v-if="about()" :blok="about()" />
		<SectionsAboutSection v-else v-bind="fallback.about" />

		<StoryblokComponent v-if="experience()" :blok="experience()" />
		<SectionsExperienceSection v-else v-bind="fallback.experience" />

		<StoryblokComponent v-if="education()" :blok="education()" />
		<SectionsEducationSection v-else v-bind="fallback.education" />

		<StoryblokComponent v-if="certifications()" :blok="certifications()" />
		<SectionsCertificationsSection v-else v-bind="fallback.certifications" />

		<StoryblokComponent v-if="skills()" :blok="skills()" />
		<SectionsSkillsSection v-else v-bind="fallback.skills" />

		<StoryblokComponent v-if="languages()" :blok="languages()" />
		<SectionsLanguagesSection v-else v-bind="fallback.languages" />

		<StoryblokComponent v-if="recommendations()" :blok="recommendations()" />
		<SectionsRecommendationsSection v-else v-bind="fallback.recommendations" />

		<StoryblokComponent v-if="contact()" :blok="contact()" />
		<SectionsContactSection v-else v-bind="fallback.contact" />
	</div>
</template>
