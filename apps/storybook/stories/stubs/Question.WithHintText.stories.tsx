import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YesNoField } from "@my-ds/ui";

const meta: Meta = {
  title: "Documentation/Components/Forms/Question/With hint text",
  parameters: {},
};
export default meta;

export const HelpLinkClosed: StoryObj = {
  name: "Help link closed",
  parameters: {
    docs: {
      source: {
        code: `<YesNoField
  question="Does the driver own or use another vehicle?"
  bodyText="Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer"
  helpLinkLabel="Descriptive help link"
  helpContent="Help copy is accessed via user clicking on descriptive help link"
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
    />
  ),
};

export const HelpLinkExpanded: StoryObj = {
  name: "Help link expanded",
  parameters: {
    docs: {
      source: {
        code: `<YesNoField
  question="Does the driver own or use another vehicle?"
  bodyText="Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer"
  helpLinkLabel="Descriptive help link"
  helpContent="Help copy is accessed via user clicking on descriptive help link"
  defaultHelpOpen
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
      defaultHelpOpen
    />
  ),
};

export const HelpOnly: StoryObj = {
  name: "Help link only (no sub-copy)",
  parameters: {
    docs: {
      source: {
        code: `<YesNoField
  question="Does the car have any modifications?"
  helpLinkLabel="What are the modifications?"
  helpContent="Modifications are non-standard changes made to the car after manufacture, including things like new spoilers or alloy wheels."
/>`,
      },
    },
  },
  render: () => (
    <YesNoField
      question="Does the car have any modifications?"
      helpLinkLabel="What are the modifications?"
      helpContent="Modifications are non-standard changes made to the car after manufacture, including things like new spoilers or alloy wheels. For the insurance to be valid you must include all modifications."
    />
  ),
};
