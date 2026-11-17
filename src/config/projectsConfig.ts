import type { ProjectsConfig } from "@/types/projectsConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/** 项目页行为与展示配置。 */
export const projectsConfig: ProjectsConfig = withUserConfig("projects", {
	enable: true,
	title: "$t:projects",
	description: "$t:projectsBanner",
	categories: [
		{
			key: "game",
			label: "游戏开发",
			icon: "material-symbols:sports-esports-outline-rounded",
		},
	],
});
