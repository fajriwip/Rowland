<script setup lang="ts">
defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsCertificationItem
		v-editable="blok"
		:logo="blok.logo?.filename"
		:title="blok.title"
		:issuer="blok.issuer"
		:issued-date="blok.issued_date"
		:link="blok.source_url?.url"
	/>
</template>
