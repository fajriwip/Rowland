# Presentational section components with thin Storyblok adapters

Section UI (Hero, About, Experience, Education, Certifications, Skills, Languages, Recommendations, Contact) is built as plain, typed-prop Vue components that have no knowledge of Storyblok. A separate thin wrapper per section, registered in `app/storyblok/`, receives the `blok` object and maps its fields onto the presentational component's props.

We considered having each component consume `blok` directly (as the starter's `Page.vue`/`Teaser.vue` do), which is fewer files. We rejected it because the UI is being built now against static Figma content, before the Storyblok content types are filled in — coupling the components to `blok` would mean reworking them later when dynamic content is wired up. The adapter layer means only the wrapper changes when switching from hardcoded Figma content to live Storyblok data; the presentational component stays untouched and is independently reusable/testable.
