<script setup lang="ts">
import type { SbContactMethod, SbSocialLink } from "~/types/storyblok";

const props = defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsContactSection
		v-editable="blok"
		:id="blok.anchor"
		:heading="blok.heading"
		:subtext="blok.subtext"
		:contact-methods="blok.contact_methods?.map((m: SbContactMethod) => ({ label: m.label, value: m.value, icon: m.method })) ?? []"
		:follow-label="blok.follow_label"
		:social-links="blok.social_links?.map((l: SbSocialLink) => ({ platform: l.platform, url: l.url })) ?? []"
		:illustration="blok.illustration?.filename"
	/>
</template>
