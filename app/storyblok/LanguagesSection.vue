<script setup lang="ts">
type LanguageEntry = { name: string; value: string };

const props = defineProps({ blok: { type: Object, required: true } });

// The `languages` datasource is the canonical registry: entry.value = ISO country code (flagcdn.com).
// The visual editor stores the entry VALUE in the option field, so display name and flag code are resolved here.
const { data: entries } = await useAsyncData("datasource-languages", async (): Promise<LanguageEntry[]> => {
	const api = useStoryblokApi();
	const perPage = 1000;
	const collected: LanguageEntry[] = [];
	for (let page = 1; ; page++) {
		const res = await api.get("cdn/datasource_entries", { datasource: "languages", per_page: perPage, page });
		const batch: LanguageEntry[] = res.data.datasource_entries ?? [];
		collected.push(...batch);
		if (batch.length < perPage) break;
	}
	return collected;
});

const entryFor = (language: string) =>
	entries.value?.find((entry) => entry.name === language || entry.value === language);

const items = () =>
	props.blok.items?.map((item: any) => {
		const entry = entryFor(item.language);
		return {
			flag: entry?.value ?? "",
			name: entry?.name ?? item.language,
			proficiency: item.proficiency,
		};
	}) ?? [];
</script>

<template>
	<SectionsLanguagesSection v-editable="blok" :heading="blok.heading" :items="items()" />
</template>
