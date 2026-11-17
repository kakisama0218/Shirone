import type { GamesConfig } from "@/types/gamesConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const gamesConfig: GamesConfig = withUserConfig("games", {
  "enable": true,
  "title": "$t:games",
  "description": "记录玩过的游戏与一路积累的游戏时光。系列游戏的时长按系列合计。",
  "categories": [
    {
      "key": "action",
      "label": "硬核／狩猎动作／ARPG"
    },
    {
      "key": "rpg",
      "label": "角色扮演／MMORPG"
    },
    {
      "key": "simulation",
      "label": "策略／模拟／经营／沙盒"
    },
    {
      "key": "roguelike",
      "label": "Roguelike／卡牌构筑"
    },
    {
      "key": "platformer",
      "label": "横版平台／银河恶魔城"
    },
    {
      "key": "party",
      "label": "多人合作／派对"
    },
    {
      "key": "casual",
      "label": "休闲益智／音游／STG"
    },
    {
      "key": "mobile-anime",
      "label": "二次元手游"
    },
    {
      "key": "mobile-casual",
      "label": "卡牌／策略／沙盒／模拟／休闲"
    },
    {
      "key": "mobile-action",
      "label": "竞技／闯关"
    }
  ]
});
