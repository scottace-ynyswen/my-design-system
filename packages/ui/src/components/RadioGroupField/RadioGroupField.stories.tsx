import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroupField } from "./RadioGroupField.web";
import { YesNoField } from "../YesNoField/YesNoField.web";

const meta: Meta<typeof RadioGroupField> = {
  title: "Components/Form fields/Radio buttons",
  component: RadioGroupField,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof RadioGroupField>;

export const Stacked: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { RadioGroupField } from "@my-ds/ui";

<RadioGroupField
  question="What level of cover do you need?"
  helpLinkLabel="Cover levels explained"
  helpContent="Comprehensive covers damage to your car and others. Third party, fire & theft covers damage to others plus fire and theft of your car."
  options={[
    { value: "comprehensive", label: "Comprehensive" },
    { value: "tpft", label: "Third party, fire & theft" },
    { value: "tpo", label: "Third party only" },
  ]}
  value={value}
  onChange={setValue}
/>`,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("");
    const voluntaryExcess = (
      <RadioGroupField
        question="Choose a voluntary excess"
        bodyText="This is the amount you choose to pay on top of the compulsory excess that's set by the insurer, making a total excess value. You'd have to pay the total excess when making a claim."
        helpLinkLabel="More on total excess"
        helpContent="The total excess is the compulsory excess plus your chosen voluntary excess. A higher voluntary excess usually lowers your premium."
        options={[
          { value: "150", label: "£150" },
          { value: "250", label: "£250" },
          { value: "350", label: "£350" },
        ]}
        extraOptions={[
          { value: "500", label: "£500" },
          { value: "750", label: "£750" },
        ]}
      />
    );
    return (
      <RadioGroupField
        question="What level of cover do you need?"
        helpLinkLabel="Cover levels explained"
        helpContent="Comprehensive covers damage to your car and others. Third party, fire & theft covers damage to others plus fire and theft of your car. Third party only is the minimum legal requirement."
        options={[
          { value: "comprehensive", label: "Comprehensive" },
          { value: "tpft", label: "Third party, fire & theft" },
          { value: "tpo", label: "Third party only" },
        ]}
        subQuestions={{ comprehensive: voluntaryExcess }}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const QuestionOnly: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `import { YesNoField } from "@my-ds/ui";

<YesNoField
  question="Does the driver own or use another vehicle?"
  value={value}
  onChange={setValue}
/>`,
      },
    },
  },
  render: () => (
    <YesNoField question="Does the driver own or use another vehicle?" />
  ),
};

export const WithSubCopy: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `import { YesNoField } from "@my-ds/ui";

<YesNoField
  question="Does the driver own or use another vehicle?"
  bodyText="Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer"
  value={value}
  onChange={setValue}
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

export const HelpLinkClosed: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `import { YesNoField } from "@my-ds/ui";

<YesNoField
  question="Does the driver own or use another vehicle?"
  bodyText="Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer"
  helpLinkLabel="Descriptive help link"
  helpContent="Help copy is accessed via user clicking on descriptive help link"
  value={value}
  onChange={setValue}
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
  parameters: {
    docs: {
      source: {
        code: `import { YesNoField } from "@my-ds/ui";

<YesNoField
  question="Does the driver own or use another vehicle?"
  bodyText="Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer"
  helpLinkLabel="Descriptive help link"
  helpContent="Help copy is accessed via user clicking on descriptive help link"
  defaultHelpOpen
  value={value}
  onChange={setValue}
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

export const WithError: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `import { YesNoField } from "@my-ds/ui";

<YesNoField
  question="Does the driver own or use another vehicle?"
  bodyText="Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer"
  helpLinkLabel="Descriptive help link"
  helpContent="Help copy is accessed via user clicking on descriptive help link"
  error="Error message goes here and is always displayed with the error icon"
  value={value}
  onChange={setValue}
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

export const WithHelp: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `import { YesNoField } from "@my-ds/ui";

<YesNoField
  question="Does the car have any modifications?"
  helpLinkLabel="What are the modifications?"
  helpContent="Modifications are non-standard changes made to the car after manufacture, including things like new spoilers or alloy wheels."
  value={value}
  onChange={setValue}
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

export const WithExtraOptions: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { RadioGroupField } from "@my-ds/ui";

<RadioGroupField
  question="How many years no-claims bonus do you have?"
  options={[
    { value: "0", label: "No bonus" },
    { value: "1", label: "1 year" },
    { value: "2", label: "2 years" },
  ]}
  extraOptions={[
    { value: "3", label: "3 years" },
    { value: "4", label: "4 years" },
    { value: "5+", label: "5 or more years" },
  ]}
  value={value}
  onChange={setValue}
/>`,
      },
    },
  },
  args: {
    question: "How many years no-claims bonus do you have?",
    options: [
      { value: "0", label: "No bonus" },
      { value: "1", label: "1 year" },
      { value: "2", label: "2 years" },
    ],
    extraOptions: [
      { value: "3", label: "3 years" },
      { value: "4", label: "4 years" },
      { value: "5+", label: "5 or more years" },
    ],
  },
};
