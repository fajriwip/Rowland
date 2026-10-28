<script setup lang="ts">
defineProps<{ icon: string; label?: string }>();
</script>

<template>
	<span class="flex items-center justify-center p-1" :title="label">
		<img :src="`https://cdn.simpleicons.org/${icon}`" :alt="label ?? icon" class="size-8" />
	</span>
</template>
