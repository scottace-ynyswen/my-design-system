import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RegField } from "./RegField.web";

const meta: Meta<typeof RegField> = {
  title: "Components/Form fields/Reg Fields",
  component: RegField,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    loading: { control: "boolean" },
    title:   { control: "text" },
  },
  args: {
    title:   "Enter car registration",
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof RegField>;

export const Default: Story = {
  tags: ["!dev"],
};
