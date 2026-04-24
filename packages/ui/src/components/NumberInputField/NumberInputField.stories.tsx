import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NumberInputField } from "./NumberInputField.web";

const meta: Meta<typeof NumberInputField> = {
  title: "Components/Form fields/Number input",
  component: NumberInputField,
  tags: ["autodocs"],
  argTypes: {
    question:      { control: "text" },
    bodyText:      { control: "text" },
    helpLinkLabel: { control: "text" },
    helpContent:   { control: "text" },
    placeholder:   { control: "text" },
    prefix:        { control: "text" },
    value:         { control: false, table: { disable: true } },
    onChange:      { control: false, table: { disable: true } },
    className:     { control: false, table: { disable: true } },
  },
  args: {
    question: "What is the total value of your living room contents?",
    prefix: "£",
    placeholder: "0",
  },
};

export default meta;
type Story = StoryObj<typeof NumberInputField>;

export const Default: Story = {
  tags: ["!dev"],
  parameters: {
    docs: {
      source: {
        code: `import { NumberInputField } from "@my-ds/ui";

<NumberInputField
  question="What is the total value of your living room contents?"
  value={value}
  onChange={setValue}
/>`,
      },
    },
  },
};

export const WithBodyText: Story = {
  tags: ["!dev"],
  args: {
    bodyText: "Include sofas, TV, furniture, shelving and any electronics.",
  },
  parameters: {
    docs: {
      source: {
        code: `import { NumberInputField } from "@my-ds/ui";

<NumberInputField
  question="What is the total value of your living room contents?"
  bodyText="Include sofas, TV, furniture, shelving and any electronics."
  value={value}
  onChange={setValue}
/>`,
      },
    },
  },
};

export const WithHelpLink: Story = {
  tags: ["!dev"],
  args: {
    bodyText: "Include sofas, TV, furniture, shelving and any electronics.",
    helpLinkLabel: "How do I work out the value?",
    helpContent: "Use the current replacement cost — what it would cost to buy the same item new today. Don't use the second-hand or insurance payout value.",
  },
  parameters: {
    docs: {
      source: {
        code: `import { NumberInputField } from "@my-ds/ui";

<NumberInputField
  question="What is the total value of your living room contents?"
  bodyText="Include sofas, TV, furniture, shelving and any electronics."
  helpLinkLabel="How do I work out the value?"
  helpContent="Use the current replacement cost — what it would cost to buy the same item new today."
  value={value}
  onChange={setValue}
/>`,
      },
    },
  },
};
