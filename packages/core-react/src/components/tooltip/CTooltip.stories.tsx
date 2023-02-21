import type { Meta, StoryObj } from "@storybook/react";

import { CTooltip } from "./CTooltip";

const meta: Meta<typeof CTooltip> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/CTooltip",
  component: CTooltip,
};

export default meta;
type Story = StoryObj<typeof CTooltip>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (arg) => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="inline-block">
        <CTooltip placement="bottom" {...arg} content=" Wikipedia">
          <p>tooltip</p>
        </CTooltip>
      </div>
    </div>
  ),
};
