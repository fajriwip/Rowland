<script setup lang="ts">
// Single source for the nav links list + CTA button. Used by the desktop
// header (row) and the mobile dropdown (column).
const header = useHeaderState();

const props = withDefaults(defineProps<{ layout?: "row" | "column" }>(), { layout: "row" });
const emit = defineEmits<{ navigate: [] }>();

const column = computed(() => props.layout === "column");
</script>

<template>
	<ul :class="column ? 'flex flex-col items-center gap-1' : 'flex items-center gap-4'">
		<li v-for="item in header.items" :key="item.label">
			<a :href="item.href" class="py-1 text-body-s font-medium text-ink/65" @click="emit('navigate')">{{ item.label }}</a>
		</li>
	</ul>
	<a
		:href="header.ctaHref"
		:class="column ? 'flex w-full items-center justify-center gap-2 bg-ink px-4 py-2' : 'ml-auto flex items-center gap-2 bg-ink px-4 py-2'"
		@click="emit('navigate')"
	>
		<Icon name="ph:chat-circle" class="size-4 text-paper" />
		<span class="text-body-s font-medium text-paper whitespace-nowrap">{{ header.ctaLabel }}</span>
	</a>
</template>
