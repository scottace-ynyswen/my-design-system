import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YesNoField } from "@my-ds/ui";

const meta: Meta = {
  title: "Documentation/Components/Forms/Question/Error state",
  parameters: {},
};
export default meta;

export const WithError: StoryObj = {
  name: "Error state",
  parameters: {
    docs: {
      source: {
        code: `<YesNoField
  question="Does the driver own or use another vehicle?"
  bodyText="Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer"
  helpLinkLabel="Descriptive help link"
  helpContent="Help copy is accessed via user clicking on descriptive help link"
  error="Error message goes here and is always displayed with the error icon"
/>`,
      },
    },
  },
  render: () => (
    <YesNoField
      question="Does the driver own or use another vehicle?"
      bodyText="Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer"
      helpLinkLabel="Descriptive help link"
      helpContent="Help copy is accessed via user clicking on descriptive help link"
      error="Error message goes here and is always displayed with the error icon"
      defaultHelpOpen
    />
  ),
};
