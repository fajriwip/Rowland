<script setup lang="ts">
const props = defineProps<{ icon?: string; label: string; value: string }>();

const ICONS: Record<string, string> = {
	envelope: "ph:envelope-simple",
	phone: "ph:phone",
	external: "ph:arrow-up-right",
};

const inferredIcon = computed(() => {
	const label = (props.label || "").toLowerCase();
	const value = (props.value || "").toLowerCase();

	const looksLikePhone = /\+?[0-9][0-9\s().-]{5,}/.test(value);
	const isCall = label.includes("call") || value.startsWith("tel:") || looksLikePhone;
	if (isCall) return "phone";

	const isEmail = label.includes("email") || value.startsWith("mailto:") || value.includes("@");
	if (isEmail) return "envelope";

	return "external";
});

const iconName = computed(() => {
	if (props.icon && ICONS[props.icon]) return ICONS[props.icon];
	return ICONS[inferredIcon.value] || ICONS.external;
});
</script>

<template>
	<div class="flex w-full max-w-[320px] items-center gap-4 bg-ink/5 px-4 py-3.5">
		<span class="flex shrink-0 items-center justify-center bg-accent p-2">
			<Icon :name="iconName" class="size-6 text-paper" />
		</span>
		<div class="flex flex-1 flex-col items-start gap-0.5">
			<p class="w-full font-display text-h3 text-ink">{{ label }}</p>
			<p class="w-full text-body-s text-ink/60">{{ value }}</p>
		</div>
	</div>
</template>
