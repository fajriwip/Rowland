<script setup lang="ts">
defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsContactMethod v-editable="blok" :icon="blok.icon" :label="blok.label" :value="blok.value" />
</template>
