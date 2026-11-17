import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/profile-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "滑稽怪sama",
	bio: "一个每天摸鱼的MMD/车万/v家/邦邦/怪猎爱好者 随缘更新",
	links: [
		{
			name: "哔哩哔哩",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/32248707",
		},
		{
			name: "Steam",
			icon: "fa7-brands:steam",
			url: "https://steamcommunity.com/id/2380750870/",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/kakisama0218",
		},
	],
});
