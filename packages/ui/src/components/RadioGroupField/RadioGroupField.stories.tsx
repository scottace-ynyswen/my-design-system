import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroupField } from "./RadioGroupField.web";

const meta: Meta<typeof RadioGroupField> = {
  title: "Components/Form fields/Radio buttons",
  component: RadioGroupField,
  tags: ["autodocs"],
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof RadioGroupField>;

export const CoverLevel: Story = {
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

export const PaymentFrequency: Story = {
  args: {
    question: "How would you like to pay for your car insurance policy?",
    bodyText: "It's typically cheaper to pay annually as insurers usually charge interest on monthly payments.",
    options: [
      { value: "annual", label: "Annual payment" },
      { value: "monthly", label: "Monthly payments" },
    ],
  },
};

export const WithExtraOptions: Story = {
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
