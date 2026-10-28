<script setup lang="ts">
const menuOpen = ref(false);
</script>

<template>
	<!-- ponytail: shown below lg — tablet (md+) renders the desktop nav inline, mobile keeps the hamburger + dropdown -->
	<div class="sticky top-0 z-10 bg-paper lg:hidden">
		<div class="flex w-full justify-center border-b border-ink/10 px-6 py-4">
			<!-- ponytail: reuse the shared header content; links show from md up, hamburger only below md -->
			<ChromeHeaderNav links-from="md">
				<button
					type="button"
					class="flex size-9 shrink-0 items-center justify-center p-2 md:hidden"
					aria-label="Toggle menu"
					:aria-expanded="menuOpen"
					@click="menuOpen = !menuOpen"
				>
					<!-- ponytail: two lines morph into an X via transform; 2.5px = half of (1px line + 4px gap) -->
					<span class="relative size-5">
						<span
							class="absolute left-0 top-1/2 h-px w-5 bg-ink transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
							:class="menuOpen ? 'rotate-45' : '-translate-y-[2.5px]'"
						/>
						<span
							class="absolute left-0 top-1/2 h-px w-5 bg-ink transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
							:class="menuOpen ? '-rotate-45' : 'translate-y-[2.5px]'"
						/>
					</span>
				</button>
			</ChromeHeaderNav>
		</div>
		<!-- ponytail: overlay panel (absolute under the bar) so opening never reflows the page; clip-path + transform + opacity only, no height animation. Exit is faster than enter. -->
		<AnimatePresence>
			<Motion
				v-if="menuOpen"
				as="nav"
				:initial="{ opacity: 0, y: -8, clipPath: 'inset(0 0 100% 0)' }"
				:animate="{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] } }"
				:exit="{ opacity: 0, y: -4, clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] } }"
				class="absolute inset-x-0 top-full border-b border-ink/10 bg-paper md:hidden"
			>
				<div class="flex w-full flex-col items-center gap-6 p-6">
					<ChromeNavLinks layout="column" @navigate="menuOpen = false" />
				</div>
			</Motion>
		</AnimatePresence>
	</div>
</template>
