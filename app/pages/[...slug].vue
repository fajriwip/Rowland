<script setup>
const slug = useRoute().params.slug;

const { story } = await useAsyncStoryblok(
	slug && slug.length > 0 ? slug.join('/') : 'home',
	{
		deep: true, // ponytail: required for Nuxt 4 bridge — shallow reactivity breaks live updates (storyblok/monoblok#210)
		api: {
			version: 'draft',
		},
		bridge: {},
	},
);
</script>

<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>
