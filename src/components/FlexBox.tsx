import React from "react";
import styled from "styled-components";
// @ts-ignore
import withResponsiveProps from "responsive-props";
import {
  width,
  height,
  TAlignItems,
  alignItems,
  TJustifyContent,
  justifyContent,
  wrap,
  direction,
  grow,
} from "../lib/mixins";

export interface FlexBoxProps {
  /**
   * Child node to be passed in
   */
  children?: React.ReactNode;
  /**
   * Extra classname for override
   */
  className?: string;
  /**
   * Inline style for high specificity override
   */
  style?: {
    [key: string]: string;
  };
  /**
   * Optionnal background color of the container
   */
  background?:
    | string
    | {
        [key: string]: string;
      };
  /**
   * Width of the box
   */
  width?:
    | string
    | {
        [key: string]: string;
      };
  /**
   * Height of the box
   */
  height?:
    | string
    | {
        [key: string]: string;
      };
  /**
   * Align items
   */
  alignItems?:
    | TAlignItems
    | {
        [key: string]: TAlignItems;
      };
  /**
   * Align items
   */
  justifyContent?:
    | TJustifyContent
    | {
        [key: string]: TJustifyContent;
      };
  /**
   * Wether the content wrap or not
   */
  wrap?:
    | Boolean
    | {
        [key: string]: Boolean;
      };
  /**
   * Flex direction
   */
  direction?:
    | "row"
    | "column"
    | {
        [key: string]: "row" | "column";
      };
  /**
   * Flex grow if used as a child of flexbox
   */
  grow?: Boolean | { [key: string]: Boolean };
  /**
   * Breakpoints for responsive props
   */
  breakpoints?: {
    [key: string]: number;
  };
}

interface StyledFlexBoxProps extends FlexBoxProps {
  responsiveProps: Array<any>;
}

const FlexBoxStyled = withResponsiveProps(
  styled.div<StyledFlexBoxProps>`
    display: flex;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    background: ${(props) => props.background || "transparent"};
    align-items: ${({ alignItems }) => alignItems || "stretch"};
    justify-content: ${({ justifyContent }) => justifyContent || "stretch"};
    flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
    flex-direction: ${(props) => props.direction || "column"};
    flex-grow: ${(props) => (props.grow ? "1" : "0")};
    ${({ responsiveProps }) => responsiveProps};
  `,
  {
    width: width,
    height: height,
    alignItems: alignItems,
    justifyContent: justifyContent,
    wrap: wrap,
    direction: direction,
    grow: grow,
  }
);

const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  className,
  style,
  width,
  height,
  alignItems,
  justifyContent,
  wrap,
  direction,
  grow = false,
  breakpoints = { xs: 0, s: 576, m: 768, l: 992, xl: 1200 },
  background,
}) => {
  return (
    <FlexBoxStyled
      className={className}
      style={style}
      width={width}
      height={height}
      breakpoints={breakpoints}
      alignItems={alignItems}
      justifyContent={justifyContent}
      wrap={wrap}
      direction={direction}
      grow={grow}
      background={background}
    >
      {children}
    </FlexBoxStyled>
  );
};

export default FlexBox;
