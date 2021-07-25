/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { professionToClass } from "../utils/globals";
import { operatorClassIcon, operatorImage } from "../utils/images";
import { MdStar } from "react-icons/md";
export interface OperatorInfoProps {
  operatorEntry: {
    name: string;
    appellation: string;
    profession: string;
    rarity: number;
  };
}

const OperatorInfo: React.VFC<OperatorInfoProps> = (props) => {
  const { operatorEntry } = props;
  const {
    name: cnName,
    appellation: name,
    profession,
    rarity: rawRarity,
  } = operatorEntry;
  const operatorClass = professionToClass(profession);
  const rarity = rawRarity + 1; // 0-indexed;
  return (
    <div css={styles}>
      <div className="name-and-class">
        <div className="operator-name">
          <span className="operator-name-english">{name}</span>
          <span className="operator-name-chinese" aria-hidden="true">
            {cnName}
          </span>
        </div>
        <div className="operator-class">
          <img
            className="class-icon"
            src={operatorClassIcon(operatorClass.toLowerCase())}
            alt=""
          />
          <span className="class-name">{operatorClass}</span>
        </div>
      </div>
      <div className="portrait-and-rarity">
        <img className="operator-portrait" src={operatorImage(name)} alt="" />
        <span className="rarity" aria-label={`Rarity: ${rarity} stars`}>
          {[...Array(rarity).keys()].map((i) => (
            <MdStar key={i} aria-hidden="true" />
          ))}
        </span>
      </div>
    </div>
  );
};
export default OperatorInfo;

const styles = (theme: Theme) => css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;

  .portrait-and-rarity {
    width: 104px;
    height: 104px;
    position: relative;
    border-radius: ${theme.spacing(0.5)};
    border: ${theme.spacing(0.25)} solid #fff;

    .operator-portrait {
      margin: ${theme.spacing(0.5)};
      width: 96px;
      height: 96px;
      background-color: ${theme.palette.orange};
      border-radius: ${theme.spacing(0.25)};
    }

    .rarity {
      position: absolute;
      bottom: -18px;
      left: 0;
      width: 100%;
      text-align: center;

      svg {
        fill: ${theme.palette.mid};
        stroke: ${theme.palette.white};
        stroke-width: 1px;
        margin-right: -1px;
      }
    }
  }

  .name-and-class {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 18px 0 0 ${theme.spacing(3)};

    .operator-name {
      font-size: 36px;
      font-weight: bold;
      line-height: 24px;
      margin-bottom: 16px;

      .operator-name-chinese {
        &::before {
          content: " ";
        }

        color: ${theme.palette.gray};
        font-weight: normal;
      }
    }

    .operator-class {
      display: flex;
      align-items: center;

      .class-icon {
        width: 42px;
        height: 42px;
        mix-blend-mode: overlay;
      }

      .class-name {
        color: ${theme.palette.gray};
        margin-left: ${theme.spacing(1)};
        line-height: 32px;
      }
    }
  }
`;
