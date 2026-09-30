<script setup lang="ts">
withDefaults(defineProps<{ platform: string; url: string; size?: "sm" | "lg" }>(), {
	size: "lg",
});

const ICONS: Record<string, string> = {
	linkedin: "simple-icons:linkedin",
	x: "simple-icons:x",
	facebook: "simple-icons:facebook",
};
</script>

<template>
	<a
		:href="url"
		target="_blank"
		rel="noopener"
		class="flex items-center justify-center"
		:class="size === 'sm' ? 'p-1.5' : 'p-2'"
	>
		<Icon :name="ICONS[platform] || 'ph:link'" class="text-ink" :class="size === 'sm' ? 'size-5' : 'size-8'" />
	</a>
</template>
