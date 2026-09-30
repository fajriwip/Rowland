<script setup lang="ts">
import { profile as fallback } from "~/content/homeFallback";

const props = defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsProfileCard
		v-editable="blok"
		:photo="blok.photo?.filename || fallback.photo"
		:name="blok.name || fallback.name"
		:position="blok.position || fallback.position"
		:tagline="blok.tagline || fallback.tagline"
		:signature="blok.signature?.filename || fallback.signature"
		:location="blok.location || fallback.location"
		:years-experience="blok.years_experience || fallback.yearsExperience"
		:availability="blok.availability || fallback.availability"
		:cv-file="blok.cv_file?.filename || fallback.cvFile"
		:email="blok.email || fallback.email"
		:social-links="blok.social_links?.length ? blok.social_links.map((l: any) => ({ platform: l.platform, url: l.url })) : fallback.socialLinks"
	/>
</template>
