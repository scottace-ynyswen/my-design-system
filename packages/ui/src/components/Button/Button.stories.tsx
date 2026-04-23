import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import type { ButtonProps } from "./Button.types";

function ArrowRight() {
  return (
    <svg
      width="24" height="25" viewBox="0 0 24 24.1" fill="none" aria-hidden="true"
      className="transition-transform duration-200 group-hover:rotate-45"
    >
      <path
        d="M12 0L9 3.1L15.8 9.9H0V14.2H15.8L9 21L12 24.1L23.9 12.1L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

type StoryArgs = ButtonProps & { showRightIcon?: boolean; showLeftIcon?: boolean };

const meta: Meta<StoryArgs> = {
  title: "Components/Buttons & links",
  component: Button,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    size: {
      name: "Device",
      description: "Switch between mobile (md) and desktop (lg) sizing.",
      control: { type: "inline-radio", labels: { md: "Mobile", lg: "Desktop" } },
      options: ["md", "lg"],
      table: {
        type: { summary: '"md" | "lg"' },
        defaultValue: { summary: "lg" },
      },
    },
    intent: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost"],
    },
    loading:        { control: "boolean" },
    disabled:       { control: "boolean" },
    showRightIcon:  { name: "Right icon", control: "boolean", description: "Show an arrow on the right." },
    showLeftIcon:   { name: "Left icon",  control: "boolean", description: "Show an arrow on the left." },
    leftIcon:       { control: false, table: { disable: true } },
    rightIcon:      { control: false, table: { disable: true } },
  },
  args: {
    label:         "Button",
    intent:        "primary",
    size:          "lg",
    loading:       false,
    disabled:      false,
    showRightIcon: false,
    showLeftIcon:  false,
  },
  render: ({ showRightIcon, showLeftIcon, ...args }) => (
    <Button
      {...args}
      rightIcon={showRightIcon ? <ArrowRight /> : undefined}
      leftIcon={showLeftIcon  ? <ArrowRight /> : undefined}
    />
  ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Primary: Story = {
  args: { label: "Continue", showRightIcon: true },
  parameters: {
    docs: {
      source: {
        code: `import { Button } from "@tuxedo/ui";
import { ArrowRight } from "./icons/ArrowRight";

<Button
  label="Continue"
  intent="primary"
  size="lg"
  rightIcon={<ArrowRight />}
/>`,
      },
    },
  },
};

export const Secondary: Story = {
  args: { label: "Secondary", intent: "secondary" },
  parameters: {
    docs: {
      source: {
        code: `import { Button } from "@tuxedo/ui";

<Button
  label="Secondary"
  intent="secondary"
  size="lg"
/>`,
      },
    },
  },
};

export const Ghost: Story = {
  args: { label: "Ghost", intent: "ghost" },
  parameters: {
    docs: {
      source: {
        code: `import { Button } from "@tuxedo/ui";

<Button
  label="Ghost"
  intent="ghost"
  size="lg"
/>`,
      },
    },
  },
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Button } from "@tuxedo/ui";

// All intents
<Button label="Primary"   intent="primary"   size="lg" />
<Button label="Secondary" intent="secondary" size="lg" />
<Button label="Ghost"     intent="ghost"     size="lg" />

// States
<Button label="Loading…" intent="primary" size="lg" loading />
<Button label="Disabled" intent="primary" size="lg" disabled />`,
      },
    },
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Button {...args} label="Primary"   intent="primary" />
        <Button {...args} label="Secondary" intent="secondary" />
        <Button {...args} label="Ghost"     intent="ghost" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Button {...args} label="Loading…" loading />
        <Button {...args} label="Disabled" disabled />
      </div>
    </div>
  ),
};
