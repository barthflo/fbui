import React from "react";
import FlexBox, { FlexBoxProps } from "../components/FlexBox";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

export default {
  title: "Utils/Flexbox",
  component: FlexBox,
  argTypes: {
    alignItems: {
      options: ["flex-start", "flex-end", "baseline", "stretch", "center"],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "stretch" },
      },
    },
    justifyContent: {
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-around",
        "space-between",
        "space-evenly",
        "stretch",
      ],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "stretch" },
      },
    },
    width: {
      control: { type: "text" },
      table: {
        defaultValue: { summary: "100%" },
      },
    },
    height: {
      control: { type: "text" },
      table: {
        defaultValue: { summary: "100%" },
      },
    },
    wrap: {
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: false },
      },
    },
    direction: {
      control: { type: "select" },
      options: ["row", "column"],
      table: {
        defaultValue: { summary: "column" },
      },
    },
    background: {
      control: { type: "color" },
      table: {
        defaultValue: { summary: "transparent" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: 400 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

let Template: Story<FlexBoxProps> = (args) => {
  return <FlexBox {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: <div>Hello World</div>,
  direction: "row",
  background: "rgba(230, 230, 230, 0.5)",
};

export const Responsive = Template.bind({});
Responsive.args = {
  ...Default.args,
  children: (
    <>
      <div style={{ width: 100, background: "red" }}>Hello World</div>
      <div style={{ width: 100, background: "green" }}>Space out</div>
      <div style={{ width: 100, background: "blue" }}>More content</div>
    </>
  ),
  width: {
    m: "50%",
  },
  //   height: {
  //     xs: "100%",
  //     m: "200px",
  //   },
  alignItems: {
    s: "center",
    l: "stretch",
  },
  justifyContent: {
    s: "center",
    l: "space-around",
  },
  direction: {
    xs: "row",
  },
};

Responsive.argTypes = {
  alignItems: {
    control: "object",
  },
  justifyContent: {
    control: "object",
  },
  wrap: {
    control: "object",
  },
  width: {
    control: "object",
  },
  height: {
    control: "object",
  },
  direction: {
    control: "object",
  },
};
Template = (args) => {
  return (
    <FlexBox direction="row" wrap={{ xs: true, m: false }}>
      <FlexBox {...args} style={{ textAlign: "center" }}>
        Controls affect this Flexbox
      </FlexBox>
      <FlexBox width="50%" alignItems="center" justifyContent="center">
        Another Flexbox
      </FlexBox>
    </FlexBox>
  );
};

export const AsChild = Template.bind({});
AsChild.args = {
  grow: {
    xs: false,
    m: true,
  },
  width: "80px",
  direction: "row",
  alignItems: "center",
  justifyContent: "center",
  background: "#ebe7e7",
};
AsChild.argTypes = Responsive.argTypes;
// export const AsChild: Story<FlexBoxProps> = (args) => {
//   args = {

//   };

//   return (
//     <FlexBox direction="row">
//       <FlexBox {...args}> Child grow</FlexBox>
//       <FlexBox width="100px"> Child not grow</FlexBox>
//     </FlexBox>
//   );
// };
