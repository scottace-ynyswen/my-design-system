import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectField } from "./SelectField.web";

const coverDates = Array.from({ length: 30 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i + 1);
  return { value: d.toISOString().split("T")[0], label: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) };
});

const meta: Meta<typeof SelectField> = {
  title: "Components/Form fields/Drop down",
  component: SelectField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Used sparingly but primarily when serving up more than 8 choices to a question. Anything below 8 choices then the radio button option is best.",
      },
    },
  },
  args: {
    question: "When would you like your cover to begin, within the next 30 days?",
    options: coverDates,
  },
};

export default meta;
type Story = StoryObj<typeof SelectField>;

export const Default: Story = {};

export const WithSubCopyAndHelp: Story = {
  args: {
    bodyText: "Sub copy is displayed directly under the question, its used for questions which need a little more guidance for users to answer",
    helpLinkLabel: "Descriptive help link",
    helpContent: "Help copy is accessed via user clicking on descriptive help link",
  },
};

