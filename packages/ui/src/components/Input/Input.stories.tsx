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
  args: { placeholder: "Enter text…", size: "lg" },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: "First name", placeholder: "Enter your first name" },
};

export const WithBodyText: Story = {
  args: {
    label: "Date of birth",
    bodyText: "We use this to calculate your age at the time of the policy.",
    placeholder: "DD / MM / YYYY",
  },
};

export const WithHelp: Story = {
  args: {
    label: "Annual mileage",
    bodyText: "How many miles do you drive per year?",
    helpLinkLabel: "How do I work out my mileage?",
    helpContent: "Check your MOT certificate or service history — it shows odometer readings from each visit. You can also use an online calculator.",
    placeholder: "e.g. 8,000",
  },
};

export const WithError: Story = {
  args: {
    label: "First name",
    value: "",
    error: "Please enter your first name.",
  },
};

export const WithHint: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    hint: "We'll only use this to send your policy documents.",
  },
};

export const Disabled: Story = {
  args: { label: "Vehicle registration", value: "AB12 CDE", disabled: true },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 360 }}>
      <Input label="Small" placeholder="sm" size="sm" />
      <Input label="Medium" placeholder="md" size="md" />
      <Input label="Large" placeholder="lg" size="lg" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 360 }}>
      <Input label="Default" placeholder="Default state" />
      <Input label="With hint" placeholder="With hint" hint="Helpful hint text goes here." />
      <Input label="Error" placeholder="Error state" error="Something went wrong." />
      <Input label="Disabled" placeholder="Disabled state" disabled />
    </div>
  ),
};
