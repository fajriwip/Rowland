<script setup lang="ts">
import { contact as fallback } from "~/content/homeFallback";

const props = defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsContactSection
		v-editable="blok"
		:heading="blok.heading || fallback.heading"
		:subtext="blok.subtext || fallback.subtext"
		:contact-methods="
			blok.contact_methods?.length
				? blok.contact_methods.map((m: any) => ({ icon: m.icon, label: m.label, value: m.value }))
				: fallback.contactMethods
		"
		:follow-label="blok.follow_label || fallback.followLabel"
		:social-links="
			blok.social_links?.length
				? blok.social_links.map((l: any) => ({ platform: l.platform, url: l.url }))
				: fallback.socialLinks
		"
		:illustration="blok.illustration?.filename || fallback.illustration"
	/>
</template>
