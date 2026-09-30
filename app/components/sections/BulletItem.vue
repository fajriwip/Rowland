<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
	<div class="flex w-full items-start gap-2">
		<span class="flex items-center py-2">
			<span class="size-1 shrink-0 bg-ink/60" />
		</span>
		<p class="flex-1 text-body-s text-ink/60">{{ text }}</p>
	</div>
</template>
