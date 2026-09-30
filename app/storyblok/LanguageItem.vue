<script setup lang="ts">
defineProps({ blok: { type: Object, required: true } });
</script>

<template>
	<SectionsLanguageItem
		v-editable="blok"
		:flag="blok.flag?.filename"
		:name="blok.language"
		:proficiency="blok.proficiency"
	/>
</template>
