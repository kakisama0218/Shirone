// Only merge known dubbing variants; season, part and movie names stay intact.
function titleKey(title) {
	return title.normalize("NFKC")
		.replace(/\s*(?:中文配音|中配版)\s*$/, "")
		.replace(/^小马宝莉\s*友谊的魔法/, "小马宝莉 友谊魔法")
		.replace(/\s+/g, " ").trim();
}

export function deduplicateBilibiliItems(items) {
	const groups = new Map();
	for (const item of items) {
		const key = titleKey(item.title);
		const previous = groups.get(key);
		if (!previous || (/中文配音|中配版/.test(previous.title) &&
			!/中文配音|中配版/.test(item.title))) {
			groups.set(key, item);
		}
	}
	return [...groups.values()];
}
