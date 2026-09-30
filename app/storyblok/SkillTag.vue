<script setup lang="ts">
defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsSkillTag v-editable="blok" :label="blok.label" />
</template>
