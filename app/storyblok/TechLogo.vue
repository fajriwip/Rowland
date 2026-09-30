<script setup lang="ts">
defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsTechLogo v-editable="blok" :icon="blok.icon" :label="blok.name" />
</template>
