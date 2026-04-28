import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YesNoField } from "@my-ds/ui";

const meta: Meta = {
  title: "Documentation/Components/Forms/Question/With sub-copy",
  parameters: {},
};
export default meta;

export const WithSubCopy: StoryObj = {
  name: "With sub-copy",
  parameters: {
    docs: {
      source: {
        code: `<YesNoField
  question="Does the driver own or use another vehicle?"
  bodyText="Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer"
/>`,
      },
    },
  },
  render: () => (
    <YesNoField
      question="Does the driver own or use another vehicle?"
      bodyText="Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer"
    />
  ),
};
