<script setup lang="ts">
type FooterState = {
	brandName: string;
	backToTopLabel: string;
};

const footer = useState<FooterState>("chrome-footer", () => ({
	brandName: "",
	backToTopLabel: "Back to Top",
}));

const copyright = computed(() => {
	const year = new Date().getFullYear();
	return footer.value.brandName ? `© ${year} ${footer.value.brandName}` : `© ${year}`;
});
</script>

<template>
	<div class="flex w-full items-center justify-between border-t border-ink/10 py-4">
		<p class="text-body-s text-ink">{{ copyright }}</p>
		<a href="#top" class="py-1 text-body-s font-medium text-ink/60">{{ footer.backToTopLabel }}</a>
	</div>
</template>
