<script setup lang="ts">
import { footer } from "~/content/homeFallback";
</script>

<template>
	<div class="flex w-full items-center justify-between border-t border-ink/10 py-4">
		<p class="text-body-s text-ink">{{ footer.copyright }}</p>
		<a href="#top" class="py-1 text-body-s font-medium text-ink/60">{{ footer.backToTopLabel }}</a>
	</div>
</template>
