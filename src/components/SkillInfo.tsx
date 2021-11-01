import { ClassNames, css } from "@emotion/react";
import { Theme } from "@mui/material";

import {
  descriptionToHtml,
  InterpolatedValue,
} from "../utils/description-parser";
import { skillIcon } from "../utils/images";
import {
  InitialSPIcon,
  SkillDurationIcon,
  SPCostIcon,
} from "./icons/skillInfo";
import CharacterRange from "./CharacterRange";
import { RangeObject } from "../utils/types";

enum SkillType {
  "Passive" = 0,
  "Manual Trigger",
  "Auto Trigger",
}

enum SkillSpType {
  "Per Second Recovery" = 1,
  "Offensive Recovery",
  "UNUSED",
  "Defensive Recovery",
}

export interface SkillLevelObject {
  name: string;
  description: string;
  // SkillLevelObject only has rangeId (of type string) in the game data,
  // but we expect it to be denormalized into a RangeObject before being passed to <SkillInfo />
  range: RangeObject | null;
  skillType: SkillType;
  spData: {
    spType: SkillSpType;
    spCost: number;
    initSp: number;
    levelUpCost: unknown; // unused
    maxChargeTime: unknown; // unused
    increment: unknown; // unused
  };
  duration: number;
  // "blackboard" is used for interpolating formatted numeric values into the description,
  // e.g. "gains ATK <@ba.vup>+{atk:0%}</>, <@ba.vup>reduced</> attack interval, DEF <@ba.vup>+{def:0%}</>, ..."
  // references blackboard.atk, blackboard.def and is formatted to
  // "gains ATK +140%, reduced attack interval, DEF +80%, ..." with blue text for the interpolated values
  blackboard: InterpolatedValue[];
  prefabId: unknown; // unused
}

export interface SkillObject {
  skillId: string;
  iconId: string | null;
  levels: SkillLevelObject[];
  hidden: unknown; // unused
}

export interface SkillInfoProps {
  skillObject: SkillObject;
}

const SkillInfo: React.VFC<
  SkillInfoProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { skillObject, className, ...rest } = props;
  const { skillId, iconId, levels } = skillObject;
  const { name, description, spData, range, duration, skillType, blackboard } =
    levels[levels.length - 1];
  const { initSp, spCost, spType } = spData;
  return (
    <ClassNames>
      {({ cx }) => (
        <section
          css={styles}
          className={cx(className, !range && "no-range")}
          {...rest}
        >
          <div className="skill-name-and-type">
            <img
              className="skill-icon"
              src={skillIcon(iconId, skillId)}
              alt=""
            />
            <h3 className="skill-name">{name}</h3>
            <span className="skill-and-sp-type">
              <span className={cx("sp-type", `sp-type-${spType}`)}>
                {SkillSpType[spType]}
              </span>
              <span aria-hidden="true"> · </span>
              <span className={cx("skill-type", `skill-type-${skillType}`)}>
                {SkillType[skillType]}
              </span>
            </span>
          </div>
          <dl className="sp-and-duration">
            <div className="initial-sp">
              <dt>
                <InitialSPIcon /> Initial SP
              </dt>
              <dd>{initSp}</dd>
            </div>

            <div className="sp-cost">
              <dt>
                <SPCostIcon /> SP Cost
              </dt>
              <dd>{spCost}</dd>
            </div>

            <div className="duration">
              <dt>
                <SkillDurationIcon /> Duration
              </dt>
              <dd>{duration} sec</dd>
            </div>
          </dl>
          <p
            className="skill-description"
            dangerouslySetInnerHTML={{
              __html: descriptionToHtml(description, blackboard),
            }}
          />
          {range && (
            <div className="range">
              <CharacterRange rangeObject={range} />
            </div>
          )}
        </section>
      )}
    </ClassNames>
  );
};
export default SkillInfo;

const styles = (theme: Theme) => css`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: max-content max-content 1fr;
  gap: ${theme.spacing(0.25)};
  margin-top: ${theme.spacing(3)};

  ${theme.breakpoints.down("mobile")} {
    margin-top: ${theme.spacing(2)};
  }

  &.no-range {
    grid-template-columns: 1fr;

    .skill-name-and-type {
      border-top-right-radius: ${theme.spacing(0.5)};
    }
  }

  ${theme.breakpoints.down("mobile")} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, max-content);
  }

  & > * {
    background-color: ${theme.palette.midtoneDarker.main};
  }

  .skill-name-and-type {
    border-top-left-radius: ${theme.spacing(0.5)};
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: repeat(2, max-content);
    column-gap: ${theme.spacing(2)};
    align-items: center;
    padding: ${theme.spacing(2)};

    ${theme.breakpoints.down("mobile")} {
      grid-column-start: span 2;
    }

    .skill-name {
      font-size: ${theme.typography.skillTalentHeading.fontSize}px;
      line-height: ${theme.typography.skillTalentHeading.lineHeight};
      font-weight: ${theme.typography.skillTalentHeading.fontWeight};
      margin: 0;
    }

    .skill-icon {
      grid-row-start: span 2;
      width: 50px;
      height: 50px;
      box-sizing: border-box;
      border: ${theme.spacing(0.25)} solid ${theme.palette.white.main};
      border-radius: ${theme.spacing(0.5)};
    }

    .skill-and-sp-type {
      display: block;
      font-size: ${theme.typography.body2.fontSize}px;
      line-height: ${theme.typography.body2.lineHeight};

      .sp-type-1 {
        color: ${theme.palette.lime.main};
      }

      .sp-type-2 {
        color: ${theme.palette.orange.main};
      }

      .sp-type-4 {
        color: ${theme.palette.yellow.main};
      }

      .skill-type {
        color: ${theme.palette.gray.main};
      }
    }
  }

  .sp-and-duration {
    background-color: inherit;
    grid-row-start: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing(0.25)};
    margin: 0;

    ${theme.breakpoints.down("mobile")} {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
    }

    .initial-sp {
      svg path {
        fill: ${theme.palette.white.main};
      }
    }

    .sp-cost {
      svg path {
        fill: ${theme.palette.lime.main};
      }
    }

    .duration {
      svg path {
        fill: ${theme.palette.pink.main};
      }
    }
  }

  .skill-description {
    grid-row-start: 3;
    grid-column-start: span 2;
    padding: ${theme.spacing(2)};
    margin: 0;
    border-radius: ${theme.spacing(0, 0, 0.5, 0.5)};

    .value-up {
      color: ${theme.palette.blue.main};
    }

    .value-down {
      color: ${theme.palette.orange.main};
    }

    .reminder-text {
      color: ${theme.palette.yellow.main};
    }

    .skill-tooltip {
      // maybe change this in future to be Underline when we implement tooltips
      // text-decoration: underline;
    }
  }

  .range {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row-start: span 2;
    border-top-right-radius: ${theme.spacing(0.5)};

    ${theme.breakpoints.down("mobile")} {
      grid-row: 2;
      grid-column: 2;
    }
  }
`;
