<script setup lang="ts">
import { profile as profileFallback } from "~/content/homeFallback";

const profile = useState("profile-card", () => profileFallback);
</script>

<template>
	<aside class="flex h-full w-full flex-col items-start gap-6 border-r border-ink/10 p-6">
		<SectionsProfileCard v-bind="profile" />
	</aside>
</template>
