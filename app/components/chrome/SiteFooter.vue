<script setup lang="ts">
const footer = useFooterState();

const copyright = computed(() => {
	const year = new Date().getFullYear();
	return footer.value.brandName ? `© ${year} ${footer.value.brandName}` : `© ${year}`;
});
</script>

<template>
	<div class="flex w-full items-center justify-between border-t border-ink/10 py-4">
		<p class="text-body-s text-ink">{{ copyright }}</p>
		<a href="#top" class="py-1 text-body-s font-medium text-ink/65 transition-colors duration-200 hover:text-ink">{{ footer.backToTopLabel }}</a>
	</div>
</template>
