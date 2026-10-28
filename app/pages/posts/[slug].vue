<script setup lang="ts">
const slug = useRoute().params.slug as string;
const storyblokApi = useStoryblokApi();

const { data: post } = await useAsyncData(`post-${slug}`, async () => {
	try {
		const { data } = await storyblokApi.get(`cdn/stories/posts/${slug}`, { version: STORYBLOK_OPTIONS.api.version });
		return data.story;
	} catch {
		return null;
	}
});

if (!post.value) throw createError({ statusCode: 404, statusMessage: "Post not found", fatal: true });

const title = computed(() => post.value.content.title || post.value.name);
// ponytail: pasted richtext carries inline color (#000000) that fights the palette; strip it, keep italic/bold
const html = computed(() => safeRichText(post.value.content.body).replace(/\s*style="color:[^"]*"/g, ""));
const date = computed(() => formatDate(post.value.content.date, "long"));
const author = computed(() => post.value.content.author);

useHead({ title });
</script>

<template>
	<Motion
		as="article"
		:initial="{ opacity: 0, y: 32, filter: 'blur(6px)' }"
		:animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
		:transition="{ duration: 1, ease: [0.16, 1, 0.3, 1] }"
		class="flex w-full flex-col items-start gap-8 py-12 md:gap-10 md:py-16"
	>
		<NuxtLink
			to="/posts"
			class="group flex items-center gap-1.5 py-1 text-body-s font-medium text-ink/65 transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
		>
			<Icon
				name="ph:arrow-left"
				class="size-4 transition-transform duration-200 ease-out group-hover:-translate-x-0.5 motion-reduce:transition-none"
			/>
			All posts
		</NuxtLink>
		<header class="flex w-full flex-col items-start gap-3 border-b border-ink/10 pb-8">
			<h1 class="font-display text-h1-mobile text-balance text-ink md:text-h1">{{ title }}</h1>
			<p class="text-body-s text-ink/65">
				<time>{{ date }}</time>
				<template v-if="author"> · {{ author }}</template>
			</p>
		</header>
		<div
			class="w-full text-body-m text-ink/85 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-4 [&_h2]:font-display [&_h2]:text-h3 [&_h2]:text-ink [&_h3]:font-display [&_h3]:text-h3 [&_h3]:text-ink [&_li]:marker:text-ink/65 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-5 [&_p]:max-w-[65ch] [&_ul]:list-disc [&_ul]:pl-5"
			v-html="html"
		/>
	</Motion>
</template>
