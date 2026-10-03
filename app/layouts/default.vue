<script setup></script>

<template>
	<div class="flex min-h-screen w-full flex-col items-stretch bg-paper lg:flex-row lg:items-start">
		<div class="w-full shrink-0 lg:w-90 lg:sticky lg:top-0 lg:h-screen">
			<ChromeSideMenu />
		</div>
		<div class="flex min-h-screen flex-1 flex-col items-center">
			<ChromeSiteHeader />
			<main class="w-full max-w-[640px] px-6 lg:px-0">
				<slot />
			</main>
			<div class="w-full max-w-[640px] px-6 lg:px-0">
				<ChromeSiteFooter />
			</div>
		</div>
	</div>
</template>
