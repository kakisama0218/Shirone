import assert from "node:assert/strict";
import test from "node:test";
import { deduplicateBilibiliItems } from "../scripts/anime/deduplicate.mjs";

test("prefers original audio even when a dubbed release has a later year", () => {
	const original = { title: "葬送的芙莉莲", year: "2023" };
	assert.deepEqual(deduplicateBilibiliItems([
		{ title: "葬送的芙莉莲 中配版", year: "2025" }, original,
	]), [original]);
});

test("preserves distinct seasons, movies and dub-only shows", () => {
	const items = ["作品", "作品 第二季", "作品 剧场版", "另一作品 中文配音"]
		.map(title => ({ title }));
	assert.deepEqual(deduplicateBilibiliItems(items), items);
});

test("merges the known My Little Pony title spelling variant", () => {
	const original = { title: "小马宝莉 友谊魔法 第一季" };
	assert.deepEqual(deduplicateBilibiliItems([
		{ title: "小马宝莉 友谊的魔法 第一季 中文配音" }, original,
	]), [original]);
});
