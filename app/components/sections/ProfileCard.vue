<script setup lang="ts">
defineProps<{
	photo: string;
	name: string;
	position: string;
	tagline: string;
	signature: string;
	location: string;
	yearsExperience: string;
	availability: string;
	cvFile?: string;
	email: string;
	socialLinks?: { platform: string; url: string }[];
}>();
</script>

<template>
	<div class="flex size-full flex-col items-start gap-6">
		<div class="flex w-full flex-col items-start gap-12 border-b border-ink/10 pb-6">
			<img :src="photo" :alt="name" class="size-24 object-cover" />
			<div class="flex w-full flex-col items-start gap-8">
				<div class="flex w-full flex-col items-start gap-4">
					<div class="flex w-full flex-col items-start gap-0.5">
						<p class="w-full font-display text-display text-ink">{{ name }}</p>
						<p class="w-full text-body-s text-ink/60">{{ position }}</p>
					</div>
					<p class="w-full max-w-[264px] text-body-m text-ink/60">{{ tagline }}</p>
				</div>
				<img :src="signature" alt="" class="h-[68px] w-[118px]" />
			</div>
		</div>
		<div class="flex flex-1 flex-col items-start justify-between w-full">
			<div class="flex w-full flex-col items-start gap-1">
				<div class="flex items-center gap-2">
					<Icon name="ph:map-pin" class="size-3.5 text-ink" />
					<span class="text-body-s text-ink whitespace-nowrap">{{ location }}</span>
				</div>
				<div class="flex items-center gap-2">
					<Icon name="ph:briefcase" class="size-3.5 text-ink" />
					<span class="text-body-s text-ink whitespace-nowrap">{{ yearsExperience }}</span>
				</div>
				<div class="flex items-center gap-2">
					<Icon name="ph:globe-simple" class="size-3.5 text-ink" />
					<span class="text-body-s text-ink whitespace-nowrap">{{ availability }}</span>
				</div>
			</div>
			<div class="flex w-full flex-col items-start gap-4 mt-6">
				<div v-if="socialLinks?.length" class="flex items-center gap-1">
					<SectionsSocialLink
						v-for="link in socialLinks"
						:key="link.platform"
						:platform="link.platform"
						:url="link.url"
						size="sm"
					/>
				</div>
				<div class="flex w-full items-center gap-2">
					<a
						:href="cvFile || '#'"
						class="flex flex-1 items-center justify-center gap-2 bg-ink px-6 py-3.5"
					>
						<Icon name="ph:download-simple" class="size-5 text-paper" />
						<span class="text-body-s font-medium text-paper whitespace-nowrap">Download CV</span>
					</a>
					<a
						:href="`mailto:${email}`"
						class="flex shrink-0 items-center justify-center bg-ink/5 p-3.5"
					>
						<Icon name="ph:envelope-simple" class="size-5 text-ink" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
