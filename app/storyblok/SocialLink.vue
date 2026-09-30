<script setup lang="ts">
defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsSocialLink v-editable="blok" :platform="blok.platform" :url="blok.url" />
</template>
