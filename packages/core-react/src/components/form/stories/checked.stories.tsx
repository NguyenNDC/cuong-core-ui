import type { Meta, StoryObj } from "@storybook/react";

import { CFormCheck } from "../CFormCheck";

const meta: Meta<typeof CFormCheck> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/form/CFormCheck",
  component: CFormCheck,
};

export default meta;
type Story = StoryObj<typeof CFormCheck>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (arg) => (
    <div className="w-full h-screen flex items-center justify-center">
      <CFormCheck {...arg} label="checkbox"></CFormCheck>
    </div>
  ),
};
