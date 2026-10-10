<script setup lang="ts">
const { story } = await useAsyncStoryblok("home", {
	deep: true,
	api: {
		version: "draft",
	},
	bridge: {},
});

// ponytail: profile state must populate before the layout renders, else ProfileCard SSRs empty and hydration mismatches
const profile = useState("profile-card", () => ({
	photo: "",
	name: "",
	position: "",
	tagline: "",
	signature: "",
	location: "",
	yearsExperience: "",
	availability: "",
	cvFile: "",
	email: "",
	socialLinks: [],
}));

watchEffect(() => {
	const current = story.value?.content?.profile?.[0];
	profile.value = {
		photo: current?.photo?.filename || "",
		name: current?.name || "",
		position: current?.position || "",
		tagline: current?.tagline || "",
		signature: current?.signature?.filename || "",
		location: current?.location || "",
		yearsExperience: current?.years_experience || "",
		availability: current?.availability || "",
		cvFile: current?.cv_file?.filename || "",
		email: current?.email || "",
		socialLinks: current?.social_links?.map((l: any) => ({ platform: l.platform, url: l.url })) ?? [],
	};
});
</script>

<template>
	<div class="flex min-h-screen w-full flex-col items-stretch bg-paper lg:flex-row lg:items-start">
		<div class="w-full shrink-0 lg:w-90 lg:sticky lg:top-0 lg:h-screen">
			<ChromeSideMenu />
		</div>
		<div class="flex min-h-screen flex-1 flex-col items-center">
			<ChromeSiteHeader />
			<main class="w-full max-w-[640px] px-6 lg:px-0">
				<slot />
			</main>
			<div class="w-full max-w-[640px] px-6 lg:px-0">
				<ChromeSiteFooter />
			</div>
		</div>
	</div>
</template>
