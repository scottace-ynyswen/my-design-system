import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YesNoField } from "./YesNoField.web";

const meta: Meta<typeof YesNoField> = {
  title: "Components/Form fields/Yes No Field",
  component: YesNoField,
  tags: ["autodocs"],
  parameters: {},
  args: {
    question: "Does the car have any modifications?",
    helpLinkLabel: "What are the modifications?",
  },
};

export default meta;
type Story = StoryObj<typeof YesNoField>;

export const WithHelp: Story = {
  args: {
    helpContent:
      "Modifications are non-standard changes made to the car after manufacture, including things like new spoilers or alloy wheels. For the insurance to be valid you must include all modifications.",
  },
};

export const NoHelp: Story = {
  args: {
    helpContent: undefined,
  },
};

export const AnsweredYes: Story = {
  args: {
    value: "yes",
    helpContent:
      "Modifications are non-standard changes made to the car after manufacture, including things like new spoilers or alloy wheels. For the insurance to be valid you must include all modifications.",
  },
};

export const AnsweredNo: Story = {
  args: {
    value: "no",
    helpContent:
      "Modifications are non-standard changes made to the car after manufacture, including things like new spoilers or alloy wheels. For the insurance to be valid you must include all modifications.",
  },
};
