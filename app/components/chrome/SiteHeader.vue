<script setup lang="ts">
import { menu } from "~/content/homeFallback";
</script>

<template>
	<header class="sticky top-0 z-10 flex w-full justify-center bg-paper px-6 py-4 lg:px-16">
		<div class="flex w-full max-w-[640px] items-center gap-5">
			<span class="flex size-9 shrink-0 items-center justify-center p-0.5">
				<Icon name="ph:user-circle" class="size-8 text-accent" />
			</span>
			<nav class="flex flex-1 items-center justify-between">
				<ul class="hidden items-center gap-4 lg:flex">
					<li v-for="item in menu.items" :key="item.label">
						<a :href="item.href" class="py-1 text-body-s font-medium text-ink/60">{{ item.label }}</a>
					</li>
				</ul>
				<a :href="menu.ctaHref" class="ml-auto flex items-center gap-2 bg-ink px-4 py-2">
					<Icon name="ph:chat-circle" class="size-4 text-paper" />
					<span class="text-body-s font-medium text-paper whitespace-nowrap">{{ menu.ctaLabel }}</span>
				</a>
			</nav>
		</div>
	</header>
</template>
