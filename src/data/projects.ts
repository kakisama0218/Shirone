import type { ProjectItem } from "@/types/projectsConfig";

/** 项目页内容数据。 */
export const projectsData: ProjectItem[] = [
	{
		key: "exit-game-demo",
		title: "Exit｜独立游戏 Demo",
		summary:
			"一款正在早期开发中的生存类银河恶魔城游戏：失忆少女在地下研究所醒来，在机器人助手与猫咪的帮助下探索实验室、寻找自己的记忆，并规划有限的生存物资。",
		category: "game",
		phase: "building",
		technologies: ["Unity"],
		icon: "material-symbols:sports-esports-outline-rounded",
		cover: "/assets/projects/exit-game-demo.jpg",
		coverAlt: "Exit 独立游戏 Demo 地下研究所场景预览",
		featured: true,
		website: "https://www.bilibili.com/video/BV16FVUz9Ei9/",
	},
	{
		key: "i-am-a-mouse",
		title: "鼠鼠我呀｜I am a mouse",
		summary:
			"2024 Global Game Jam 参赛游戏作品，与美术伙伴冷藏汉堡包、伽椰子CAFA 合作完成。点击查看作品展示视频。",
		category: "game",
		phase: "shipped",
		technologies: [],
		icon: "material-symbols:sports-esports-outline-rounded",
		cover: "/assets/projects/i-am-a-mouse.jpg",
		coverAlt: "鼠鼠我呀 I am a mouse 参赛作品视频封面",
		website: "https://www.bilibili.com/video/BV1MK411h7q2/",
		year: "2024",
	},
	{
		key: "twin-of-the-souls",
		title: "Twin of the souls｜东方同人游戏 Demo",
		summary:
			"本科毕业前制作的 Unity 2D 东方同人小游戏 Demo，记录大学最后一段时光与游戏开发的学习过程。感谢伙伴们提供的角色素材、立绘与开发帮助。",
		category: "game",
		phase: "building",
		technologies: ["Unity 2D"],
		icon: "material-symbols:sports-esports-outline-rounded",
		cover: "/assets/projects/twin-of-the-souls.jpg",
		coverAlt: "Twin of the souls 东方同人游戏 Demo 视频封面",
		website: "https://www.bilibili.com/video/BV1Bp4y1c7DV/",
		repository: "https://github.com/kakisama0218/Games",
		year: "2023",
	},
	{
		key: "ace-attorney-fighting",
		title: "逆转，然后格斗｜Ace Attorney Fighting",
		summary:
			"使用 Pygame 制作的格斗整活小游戏，感谢冷藏汉堡包提供美术素材。游戏与操作指南已公开在 GitHub，点击视频可查看演示。",
		category: "game",
		phase: "shipped",
		technologies: ["Python", "Pygame"],
		icon: "material-symbols:sports-esports-outline-rounded",
		cover: "/assets/projects/ace-attorney-fighting.jpg",
		coverAlt: "逆转，然后格斗游戏演示视频封面",
		website: "https://www.bilibili.com/video/BV1tJ4m1M7zo/",
		repository: "https://github.com/kakisama0218/Ace-Attorney-Fighting",
		year: "2024",
	},
	{
		key: "bubble-dragon-chronicles",
		title: "龙与泡泡屋｜Bubble Dragon Chronicles",
		summary:
			"与 Risako 合作完成的 2025 Global Game Jam 参赛作品。一款轻松休闲的解谜小游戏，玩法类似反向的《割绳子》：想办法让可爱的小龙吃到泡泡。",
		category: "game",
		phase: "shipped",
		technologies: [],
		icon: "material-symbols:sports-esports-outline-rounded",
		cover: "/assets/projects/bubble-dragon-chronicles.jpg",
		coverAlt: "龙与泡泡屋 Bubble Dragon Chronicles 游戏演示视频封面",
		website: "https://www.bilibili.com/video/BV14wFTeREka/",
		year: "2025",
	},
];

