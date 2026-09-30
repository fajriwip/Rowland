<script setup lang="ts">
defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsBulletItem v-editable="blok" :text="blok.text" />
</template>
