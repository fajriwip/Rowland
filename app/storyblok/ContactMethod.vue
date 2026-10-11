<script setup lang="ts">
defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsContactMethod v-editable="blok" :label="blok.label" :value="blok.value" />
</template>
