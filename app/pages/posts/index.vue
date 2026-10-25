<script setup lang="ts">
const storyblokApi = useStoryblokApi();

const { data: posts } = await useAsyncData("posts-list", async () => {
	const { data } = await storyblokApi.get("cdn/stories", {
		version: STORYBLOK_OPTIONS.api.version,
		starts_with: "posts/",
		is_startpage: false,
		sort_by: "content.date:desc",
	});
	return data.stories as any[];
});

const EXCERPT_LENGTH = 140;

// ponytail: first paragraph that has text (image-only paragraphs are skipped) — a listing teaser, not a full richtext render
const textOf = (node: any): string =>
	node.type === "text" ? (node.text ?? "") : (node.content ?? []).map(textOf).join("");

const excerptOf = (body: any) => {
	const text = (body?.content ?? []).map(textOf).find((t: string) => t.trim())?.trim() ?? "";
	return text.length > EXCERPT_LENGTH ? `${text.slice(0, EXCERPT_LENGTH).replace(/\s+\S*$/, "")}…` : text;
};

// date strings look like "2026-10-25 00:00"; format the date part as UTC so SSR and client agree
const formatDate = (raw?: string) =>
	raw
		? new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(
				new Date(`${raw.slice(0, 10)}T00:00:00Z`),
			)
		: "";

useHead({ title: "Posts" });
</script>

<template>
	<div class="flex w-full flex-col items-start gap-8 py-12 md:gap-10 md:py-16">
		<Motion
			as="h1"
			:initial="{ opacity: 0, y: 24, filter: 'blur(6px)' }"
			:animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
			:transition="{ duration: 1, ease: [0.16, 1, 0.3, 1] }"
			class="max-w-xs font-display text-h2-mobile text-ink md:text-h2"
		>
			Posts
		</Motion>
		<div v-if="posts?.length" class="flex w-full flex-col items-start">
			<SectionsPostItem
				v-for="(post, i) in posts"
				:key="post.uuid"
				:index="i"
				:to="`/${post.full_slug}`"
				:title="post.content.title || post.name"
				:date="formatDate(post.content.date)"
				:excerpt="excerptOf(post.content.body)"
			/>
		</div>
		<p v-else class="text-body-m text-ink/65">No posts yet.</p>
	</div>
</template>
