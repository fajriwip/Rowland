<script setup lang="ts">
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
</script>

<template>
	<!-- ponytail: 69px = mobile bar height (py-4 + 36px content + 1px border); update if bar changes -->
	<aside
		class="flex h-full min-h-[calc(100svh-69px)] w-full flex-col items-center gap-6 bg-ink/5 px-6 pt-6 pb-6 md:min-h-0 md:px-16 md:pt-[60px] md:pb-16 lg:border-r lg:border-ink/10 lg:bg-transparent lg:p-6"
	>
		<SectionsProfileCard v-bind="profile" />
	</aside>
</template>
