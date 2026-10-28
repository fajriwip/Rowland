<script setup lang="ts">
type CertificationEntry = { logo: string; title: string; issuer: string; issuedDate: string; link?: string };

defineProps<{ heading: string; items: CertificationEntry[] }>();
</script>

<template>
	<SectionsSectionShell :heading="heading">
		<div class="flex w-full flex-col items-start gap-6">
			<SectionsCertificationItem v-for="item in items" :key="item.title" v-bind="item" />
		</div>
	</SectionsSectionShell>
</template>
