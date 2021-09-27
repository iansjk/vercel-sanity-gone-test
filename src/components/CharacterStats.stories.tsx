import { Meta, Story } from "@storybook/react";
import CharacterStats, { CharacterStatsProps } from "./CharacterStats";

export default {
  title: "Introduction/CharacterStats",
  component: CharacterStats,
} as Meta;

const Template: Story<CharacterStatsProps> = (args) => (
  <CharacterStats {...args} />
);
export const Mudrock = Template.bind({});
Mudrock.args = {
  characterObject: {
    name: "Mudrock",
    cnName: "泥岩",
    rarity: 5,
    description: "<@ba.kw>Cannot</> be healed by allies",
    position: "MELEE",
    profession: "TANK",
    subProfessionId: "unyield",
    phases: [
      {
        characterPrefabKey: "char_311_mudrok",
        range: {
          id: "1-1",
          direction: 1,
          grids: [
            {
              row: 0,
              col: 0,
            },
            {
              row: 0,
              col: 1,
            },
          ],
        },
        maxLevel: 50,
        attributesKeyFrames: [
          {
            level: 1,
            data: {
              maxHp: 1677,
              atk: 370,
              def: 229,
              magicResistance: 10.0,
              cost: 32,
              blockCnt: 2,
              moveSpeed: 1.0,
              attackSpeed: 100.0,
              baseAttackTime: 1.6,
              respawnTime: 70,
              hpRecoveryPerSec: 0.0,
              spRecoveryPerSec: 1.0,
              maxDeployCount: 1,
              maxDeckStackCnt: 0,
              tauntLevel: 0,
              massLevel: 0,
              baseForceLevel: 0,
              stunImmune: false,
              silenceImmune: false,
              sleepImmune: false,
            },
          },
          {
            level: 50,
            data: {
              maxHp: 2207,
              atk: 515,
              def: 347,
              magicResistance: 10.0,
              cost: 32,
              blockCnt: 2,
              moveSpeed: 1.0,
              attackSpeed: 100.0,
              baseAttackTime: 1.6,
              respawnTime: 70,
              hpRecoveryPerSec: 0.0,
              spRecoveryPerSec: 1.0,
              maxDeployCount: 1,
              maxDeckStackCnt: 0,
              tauntLevel: 0,
              massLevel: 0,
              baseForceLevel: 0,
              stunImmune: false,
              silenceImmune: false,
              sleepImmune: false,
            },
          },
        ],
      },
      {
        characterPrefabKey: "char_311_mudrok",
        range: {
          id: "1-1",
          direction: 1,
          grids: [
            {
              row: 0,
              col: 0,
            },
            {
              row: 0,
              col: 1,
            },
          ],
        },
        maxLevel: 80,
        attributesKeyFrames: [
          {
            level: 1,
            data: {
              maxHp: 2207,
              atk: 515,
              def: 347,
              magicResistance: 10.0,
              cost: 34,
              blockCnt: 3,
              moveSpeed: 1.0,
              attackSpeed: 100.0,
              baseAttackTime: 1.6,
              respawnTime: 70,
              hpRecoveryPerSec: 0.0,
              spRecoveryPerSec: 1.0,
              maxDeployCount: 1,
              maxDeckStackCnt: 0,
              tauntLevel: 0,
              massLevel: 0,
              baseForceLevel: 0,
              stunImmune: false,
              silenceImmune: false,
              sleepImmune: false,
            },
          },
          {
            level: 80,
            data: {
              maxHp: 2867,
              atk: 687,
              def: 463,
              magicResistance: 10.0,
              cost: 34,
              blockCnt: 3,
              moveSpeed: 1.0,
              attackSpeed: 100.0,
              baseAttackTime: 1.6,
              respawnTime: 70,
              hpRecoveryPerSec: 0.0,
              spRecoveryPerSec: 1.0,
              maxDeployCount: 1,
              maxDeckStackCnt: 0,
              tauntLevel: 0,
              massLevel: 0,
              baseForceLevel: 0,
              stunImmune: false,
              silenceImmune: false,
              sleepImmune: false,
            },
          },
        ],
      },
      {
        characterPrefabKey: "char_311_mudrok",
        range: {
          id: "1-1",
          direction: 1,
          grids: [
            {
              row: 0,
              col: 0,
            },
            {
              row: 0,
              col: 1,
            },
          ],
        },
        maxLevel: 90,
        attributesKeyFrames: [
          {
            level: 1,
            data: {
              maxHp: 2867,
              atk: 687,
              def: 463,
              magicResistance: 10.0,
              cost: 36,
              blockCnt: 3,
              moveSpeed: 1.0,
              attackSpeed: 100.0,
              baseAttackTime: 1.6,
              respawnTime: 70,
              hpRecoveryPerSec: 0.0,
              spRecoveryPerSec: 1.0,
              maxDeployCount: 1,
              maxDeckStackCnt: 0,
              tauntLevel: 0,
              massLevel: 0,
              baseForceLevel: 0,
              stunImmune: false,
              silenceImmune: false,
              sleepImmune: false,
            },
          },
          {
            level: 90,
            data: {
              maxHp: 3928,
              atk: 882,
              def: 602,
              magicResistance: 10.0,
              cost: 36,
              blockCnt: 3,
              moveSpeed: 1.0,
              attackSpeed: 100.0,
              baseAttackTime: 1.6,
              respawnTime: 70,
              hpRecoveryPerSec: 0.0,
              spRecoveryPerSec: 1.0,
              maxDeployCount: 1,
              maxDeckStackCnt: 0,
              tauntLevel: 0,
              massLevel: 0,
              baseForceLevel: 0,
              stunImmune: false,
              silenceImmune: false,
              sleepImmune: false,
            },
          },
        ],
      },
    ],
  },
};