import { renderRichText } from "@storyblok/vue";

// The renderer escapes text and attributes; the one gap is user-supplied link URLs, so drop javascript:/data: hrefs.
export const safeRichText = (doc: Parameters<typeof renderRichText>[0]) =>
	renderRichText(doc).replace(/href="\s*(?:javascript|data|vbscript):[^"]*"/gi, 'href="#"');
