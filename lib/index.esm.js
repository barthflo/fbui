import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button `
  &.storybook-button {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  &.storybook-button--primary {
    color: white;
    background-color: #1ea7fd;
  }
  &.storybook-button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  &.storybook-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  &.storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  &.storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
`;
/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = true, backgroundColor, size = "medium", onClick, label, }) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (React.createElement(ButtonStyled, { type: "button", className: ["storybook-button", `storybook-button--${size}`, mode].join(" "), style: backgroundColor ? { backgroundColor } : {}, onClick: onClick }, label));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
