<script setup lang="ts">
withDefaults(defineProps<{ linksFrom?: "md" | "lg" }>(), { linksFrom: "lg" });
</script>

<template>
	<div class="flex w-full max-w-[640px] items-center justify-between gap-5">
		<span class="flex size-9 shrink-0 items-center justify-center p-0.5">
			<Icon name="ph:user-circle" class="size-8 text-accent" />
		</span>
		<nav class="flex-1 items-center justify-between" :class="linksFrom === 'md' ? 'hidden md:flex' : 'hidden lg:flex'">
			<ChromeNavLinks layout="row" />
		</nav>
		<slot />
	</div>
</template>
