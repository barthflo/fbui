import React from "react";
import { TAlignItems, TJustifyContent } from "../lib/mixins";
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
    background?: string | {
        [key: string]: string;
    };
    /**
     * Width of the box
     */
    width?: string | {
        [key: string]: string;
    };
    /**
     * Height of the box
     */
    height?: string | {
        [key: string]: string;
    };
    /**
     * Align items
     */
    alignItems?: TAlignItems | {
        [key: string]: TAlignItems;
    };
    /**
     * Align items
     */
    justifyContent?: TJustifyContent | {
        [key: string]: TJustifyContent;
    };
    /**
     * Wether the content wrap or not
     */
    wrap?: Boolean | {
        [key: string]: Boolean;
    };
    /**
     * Flex direction
     */
    direction?: "row" | "column" | {
        [key: string]: "row" | "column";
    };
    /**
     * Flex grow if used as a child of flexbox
     */
    grow?: Boolean | {
        [key: string]: Boolean;
    };
    /**
     * Breakpoints for responsive props
     */
    breakpoints?: {
        [key: string]: number;
    };
}
declare const FlexBox: React.FC<FlexBoxProps>;
export default FlexBox;
