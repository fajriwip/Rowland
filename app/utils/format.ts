// "2026-10-25 00:00" → formatted as UTC so SSR and client agree
export const formatDate = (raw?: string, month: "short" | "long" = "short") =>
	raw
		? new Intl.DateTimeFormat("en-GB", { day: "numeric", month, year: "numeric", timeZone: "UTC" }).format(
				new Date(`${raw.slice(0, 10)}T00:00:00Z`),
			)
		: "";

export const dateRange = (item: { start_date?: string; end_date?: string }, openEnded = "") => {
	if (!item.start_date) return "";
	const end = item.end_date || openEnded;
	return end ? `${item.start_date} – ${end}` : item.start_date;
};
