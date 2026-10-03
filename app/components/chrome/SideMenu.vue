<script setup lang="ts">
import { profile as profileFallback } from "~/content/homeFallback";

const profile = useState("profile-card", () => profileFallback);
</script>

<template>
	<aside
		class="flex h-full w-full flex-col items-start gap-6 bg-ink/5 px-6 pt-23 pb-6 md:px-16 md:pt-32 md:pb-16 lg:border-r lg:border-ink/10 lg:bg-transparent lg:p-6"
	>
		<SectionsProfileCard v-bind="profile" />
	</aside>
</template>
