import { css } from "styled-components";
import { FlexBoxProps } from "../components/FlexBox";
export type TAlignItems =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";
export type TJustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "space-between"
  | "space-around"
  | "space-evenly";

const width = (width: string) => {
  return css`
    width: ${width};
  `;
};

const height = (height: string) => {
  return css`
    height: ${height};
  `;
};

const alignItems = (alignItems: TAlignItems) => css`
  align-items: ${alignItems};
`;

const justifyContent = (justifyContent: TJustifyContent) => css`
  justify-content: ${justifyContent};
`;

const wrap = (wrap: Boolean) => css`
  flex-wrap: ${wrap ? "wrap" : "nowrap"};
`;

const direction = (direction: "row" | "column") => css`
  flex-direction: ${direction};
`;

const grow = (grow: Boolean) => css`
  flex-grow: ${grow ? "1" : "0"};
`;

export { width, height, alignItems, justifyContent, wrap, direction, grow };
