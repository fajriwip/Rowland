<script setup lang="ts">
const { story } = await useAsyncStoryblok("home", STORYBLOK_OPTIONS);

const storyblokApi = useStoryblokApi();
const { data: space } = await useAsyncData("storyblok-space", async () => {
	const response = await storyblokApi.get("cdn/spaces/me", {});
	return response?.data?.space ?? null;
});

useSiteChrome(story, space);
</script>

<template>
	<MotionConfig reduced-motion="user">
	<div class="flex min-h-screen w-full flex-col items-stretch bg-paper lg:flex-row lg:items-start">
		<svg aria-hidden="true" width="0" height="0" class="absolute" focusable="false">
			<defs>
				<filter id="brand-accent" color-interpolation-filters="sRGB">
					<feFlood style="flood-color: var(--color-accent)" />
					<feComposite in2="SourceAlpha" operator="in" />
				</filter>
				<filter id="brand-ink" color-interpolation-filters="sRGB">
					<feFlood style="flood-color: var(--color-ink)" />
					<feComposite in2="SourceAlpha" operator="in" />
				</filter>
			</defs>
		</svg>
		<ChromeMobileNav />
		<div class="w-full shrink-0 lg:w-90 lg:sticky lg:top-0 lg:h-screen">
			<ChromeSideMenu />
		</div>
		<div class="flex min-h-screen flex-1 flex-col items-center">
			<ChromeSiteHeader />
			<main class="w-full max-w-[640px] flex-1 px-6 md:px-16 lg:px-0">
				<slot />
			</main>
			<div class="w-full max-w-[640px] px-6 md:px-16 lg:px-0">
				<ChromeSiteFooter />
			</div>
		</div>
	</div>
	</MotionConfig>
</template>
