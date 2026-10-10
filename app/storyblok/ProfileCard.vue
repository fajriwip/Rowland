<script setup lang="ts">

const props = defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsProfileCard
		v-editable="blok"
		:photo="blok.photo?.filename"
		:name="blok.name"
		:position="blok.position"
		:tagline="blok.tagline"
		:signature="blok.signature?.filename"
		:location="blok.location"
		:years-experience="blok.years_experience"
		:availability="blok.availability"
		:cv-file="blok.cv_file?.filename"
		:email="blok.email"
		:social-links="blok.social_links?.map((l: any) => ({ platform: l.platform, url: l.url })) ?? []"
	/>
</template>
