import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Documentation/Components/Forms/Inputs",
  component: Input,
  tags: ["autodocs"],
  parameters: {},
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
  argTypes: {
    size:     { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
  args: { placeholder: "Enter text…", size: "md" },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const WithLabel: Story = {
  args: { label: "Email address", placeholder: "you@example.com", hint: "We'll never share your email." },
};

export const WithError: Story = {
  args: { label: "Email address", value: "bad-email", error: "Please enter a valid email address." },
};

export const Disabled: Story = {
  args: { label: "Disabled field", value: "Read only value", disabled: true },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 360 }}>
      <Input label="Small" placeholder="sm" size="sm" />
      <Input label="Medium" placeholder="md" size="md" />
      <Input label="Large" placeholder="lg" size="lg" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 360 }}>
      <Input label="Default" placeholder="Default state" />
      <Input label="With hint" placeholder="With hint" hint="Helpful hint text goes here." />
      <Input label="Error" placeholder="Error state" error="Something went wrong." />
      <Input label="Disabled" placeholder="Disabled state" disabled />
    </div>
  ),
};
