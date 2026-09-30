<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
	<span class="bg-ink/5 px-2.5 py-1.5 text-body-s text-ink whitespace-nowrap">{{ label }}</span>
</template>
