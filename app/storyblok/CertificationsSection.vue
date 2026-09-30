<script setup lang="ts">
import { certifications as fallback } from "~/content/homeFallback";

const props = defineProps({ blok: { type: Object, required: true } });

const items = () =>
	props.blok.items?.length
		? props.blok.items.map((item: any) => ({
				logo: item.logo?.filename,
				title: item.title,
				issuer: item.issuer,
				issuedDate: item.issued_date,
				link: item.source_url?.url,
			}))
		: fallback.items;
</script>

<template>
	<SectionsCertificationsSection v-editable="blok" :heading="blok.heading || fallback.heading" :items="items()" />
</template>
