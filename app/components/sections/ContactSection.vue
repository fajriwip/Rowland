<script setup lang="ts">
type ContactMethodEntry = { icon: string; label: string; value: string };
type SocialLinkEntry = { platform: string; url: string };

defineProps<{
	heading: string;
	subtext: string;
	contactMethods?: ContactMethodEntry[];
	followLabel: string;
	socialLinks?: SocialLinkEntry[];
	illustration?: string;
}>();
</script>

<template>
	<section class="flex w-full flex-col items-center gap-26 py-26">
		<div class="flex w-full flex-col items-start gap-8">
			<div class="flex w-full flex-col items-center gap-2.5 text-center">
				<h2 class="max-w-xs font-display text-h2 text-ink">{{ heading }}</h2>
				<p class="max-w-[360px] text-body-l text-ink/60">{{ subtext }}</p>
			</div>
			<div class="flex w-full flex-col items-start gap-12">
				<div class="grid w-full grid-cols-2 gap-2">
					<SectionsContactMethod v-for="method in contactMethods" :key="method.label" v-bind="method" />
				</div>
				<div class="flex w-full flex-col items-center gap-3">
					<p class="text-center text-body-m text-ink whitespace-nowrap">{{ followLabel }}</p>
					<div class="flex items-center justify-center gap-2">
						<SectionsSocialLink v-for="link in socialLinks" :key="link.platform" v-bind="link" />
					</div>
				</div>
			</div>
		</div>
		<img v-if="illustration" :src="illustration" alt="" class="size-80" />
	</section>
</template>
