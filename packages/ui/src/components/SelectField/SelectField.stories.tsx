import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectField } from "./SelectField.web";

const coverDates = Array.from({ length: 30 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i + 1);
  return { value: d.toISOString().split("T")[0], label: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) };
});

const meta: Meta<typeof SelectField> = {
  title: "Components/Form fields/Select Field",
  component: SelectField,
  tags: ["autodocs"],
  parameters: {},
  args: {
    question: "When would you like your cover to begin, within the next 30 days?",
    options: coverDates,
  },
};

export default meta;
type Story = StoryObj<typeof SelectField>;

export const Default: Story = {};

export const WithTip: Story = {
  args: {
    tipText: "We'll automatically email you car insurance renewal reminders and quotes based on the date you enter here and the rest of the information in this form. You can opt out of this service in your account area.",
  },
};
