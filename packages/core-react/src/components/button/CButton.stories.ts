import type { Meta, StoryObj } from "@storybook/react";

import { CButton } from "./CButton";

// https://storybook.js.org/blog/component-story-format-3-0/
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof CButton> = {
  title: "Components/CButton",
  component: CButton,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "Button component",
      },
      source: {
        code: `
        <CButton>Button</CButton>
        `,
        language: "tsx",
        type: "auto",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: "1st",
    children: "CButton",
  },
  parameters: {
    docs: {
      source: {
        code: `
        <CButton>Button</CButton>
        `,
        language: "tsx",
        type: "auto",
      },
    },
  },
};
