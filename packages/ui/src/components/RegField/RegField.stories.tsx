import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RegField } from "./RegField.web";

const meta: Meta<typeof RegField> = {
  title: "Documentation/Components/Forms/Reg Field",
  component: RegField,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    title:               { control: "text" },
    loading:             { control: "boolean" },
    value:               { control: false, table: { disable: true } },
    onChange:            { control: false, table: { disable: true } },
    onSubmit:            { control: false, table: { disable: true } },
    onSearchByMakeModel: { control: false, table: { disable: true } },
    className:           { control: false, table: { disable: true } },
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
  parameters: {
    docs: {
      source: {
        code: `import { RegField } from "@my-ds/ui";

<RegField
  title="Enter car registration"
  value={reg}
  onChange={setReg}
  onSubmit={handleSubmit}
  onSearchByMakeModel={handleSearchByMakeModel}
/>`,
      },
    },
  },
};

export const Loading: Story = {
  tags: ["!dev"],
  args: { loading: true },
  parameters: {
    docs: {
      source: {
        code: `import { RegField } from "@my-ds/ui";

<RegField
  title="Enter car registration"
  value={reg}
  onChange={setReg}
  onSubmit={handleSubmit}
  loading
/>`,
      },
    },
  },
};
