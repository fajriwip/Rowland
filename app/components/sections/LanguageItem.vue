<script setup lang="ts">
defineProps<{ flag: string; name: string; proficiency: string }>();
</script>

<template>
	<div class="flex w-full items-start gap-4">
		<div class="flex shrink-0 items-start justify-center pt-0.5">
			<img v-if="flag" :src="`https://flagcdn.com/${flag}.svg`" alt="" class="size-10 object-contain" />
		</div>
		<div class="flex flex-1 flex-col items-start gap-0.5">
			<p class="max-w-xs font-display text-h3 text-ink">{{ name }}</p>
			<p class="w-full text-body-s text-ink/60">{{ proficiency }}</p>
		</div>
	</div>
</template>
