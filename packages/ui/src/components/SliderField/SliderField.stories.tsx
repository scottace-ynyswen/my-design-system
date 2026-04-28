import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SliderField } from "./SliderField.web";

const meta: Meta<typeof SliderField> = {
  title: "Documentation/Components/Forms/Slider",
  component: SliderField,
  tags: ["autodocs"],
  argTypes: {
    question:    { control: "text" },
    bodyText:    { control: "text" },
    min:         { control: { type: "number" } },
    max:         { control: { type: "number" } },
    step:        { control: { type: "number" } },
    value:       { control: false, table: { disable: true } },
    onChange:    { control: false, table: { disable: true } },
    formatValue: { control: false, table: { disable: true } },
    className:   { control: false, table: { disable: true } },
  },
  args: {
    question: "What is the value of your vehicle?",
    min: 500,
    max: 50000,
    step: 500,
  },
};

export default meta;
type Story = StoryObj<typeof SliderField>;

export const Default: Story = {
  tags: ["!dev"],
  parameters: {
    docs: {
      source: {
        code: `import { SliderField } from "@my-ds/ui";

<SliderField
  question="What is the value of your vehicle?"
  min={500}
  max={50000}
  step={500}
  value={vehicleValue}
  onChange={setVehicleValue}
/>`,
      },
    },
  },
};

export const WithBodyText: Story = {
  tags: ["!dev"],
  args: {
    bodyText: "This is the current market value of your vehicle, not the price you originally paid.",
  },
  parameters: {
    docs: {
      source: {
        code: `import { SliderField } from "@my-ds/ui";

<SliderField
  question="What is the value of your vehicle?"
  bodyText="This is the current market value of your vehicle, not the price you originally paid."
  min={500}
  max={50000}
  step={500}
  value={vehicleValue}
  onChange={setVehicleValue}
/>`,
      },
    },
  },
};
