import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectField } from "./SelectField.web";
import type { SelectFieldProps } from "./SelectField.types";

const coverDates = Array.from({ length: 8 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i + 1);
  return {
    value: d.toISOString().split("T")[0],
    label: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
  };
});

type StoryArgs = SelectFieldProps & { showBodyText?: boolean; showHelp?: boolean };

const meta: Meta<StoryArgs> = {
  title: "Components/Form fields/Drop down",
  component: SelectField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Used sparingly but primarily when serving up more than 8 choices to a question. Anything below 8 choices then the radio button option is best.",
      },
      source: { type: "dynamic", language: "tsx" },
    },
  },
  argTypes: {
    showBodyText: { name: "Sub copy",   control: "boolean", description: "Show sub copy below the question." },
    showHelp:     { name: "Help link",  control: "boolean", description: "Show an expandable help link." },
    bodyText:     { control: false, table: { disable: true } },
    helpLinkLabel:{ control: false, table: { disable: true } },
    helpContent:  { control: false, table: { disable: true } },
    tipText:      { control: false, table: { disable: true } },
  },
  args: {
    question:     "When would you like your cover to begin, within the next 30 days?",
    options:      coverDates,
    showBodyText: false,
    showHelp:     false,
  },
  render: ({ showBodyText, showHelp, ...args }) => (
    <SelectField
      {...args}
      bodyText={showBodyText
        ? "Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer"
        : undefined}
      helpLinkLabel={showHelp ? "Descriptive help link" : undefined}
      helpContent={showHelp ? "Help copy is accessed via user clicking on descriptive help link" : undefined}
    />
  ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { SelectField } from "@my-ds/ui";

<SelectField
  question="When would you like your cover to begin?"
  options={[
    { value: "2026-04-25", label: "25 April 2026" },
    { value: "2026-04-26", label: "26 April 2026" },
  ]}
  value={value}
  onChange={setValue}
/>`,
      },
    },
  },
};

export const WithSubCopyAndHelp: Story = {
  args: { showBodyText: true, showHelp: true },
  parameters: {
    docs: {
      source: {
        code: `import { SelectField } from "@my-ds/ui";

<SelectField
  question="When would you like your cover to begin?"
  bodyText="Sub copy displayed under the question for extra guidance."
  helpLinkLabel="Descriptive help link"
  helpContent="Help copy is accessed via user clicking on descriptive help link"
  options={[
    { value: "2026-04-25", label: "25 April 2026" },
    { value: "2026-04-26", label: "26 April 2026" },
  ]}
  value={value}
  onChange={setValue}
/>`,
      },
    },
  },
};
