<script setup lang="ts">
import type { SbCertificationItem } from "~/types/storyblok";
const props = defineProps({ blok: { type: Object, required: true } });

const items = () =>
	props.blok.items?.map((item: SbCertificationItem) => ({
		logo: item.logo?.filename,
		title: item.title,
		issuer: item.issuer,
		issuedDate: item.issued_date,
		link: item.source_url?.url,
	})) ?? [];
</script>

<template>
	<SectionsCertificationsSection v-editable="blok" :id="blok.anchor" :heading="blok.heading" :items="items()" />
</template>
