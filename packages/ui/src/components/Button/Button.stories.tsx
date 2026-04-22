import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

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

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    intent:   { control: "select", options: ["primary", "secondary", "ghost", "destructive"] },
    size:     { control: "select", options: ["sm", "md", "lg"] },
    loading:  { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    label:    "Button",
    intent:   "primary",
    size:     "md",
    loading:  false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ── Playground ────────────────────────────────────────────────────────────────
export const Playground: Story = {};

// ── Intent variants ───────────────────────────────────────────────────────────
export const Primary: Story = {
  args: { label: "Primary", intent: "primary" },
};

export const Continue: Story = {
  args: {
    label: "Continue",
    intent: "primary",
    size: "md",
    rightIcon: <ArrowRight />,
  },
};

export const Secondary: Story = {
  args: { label: "Secondary", intent: "secondary" },
};

export const Ghost: Story = {
  args: { label: "Ghost", intent: "ghost" },
};

export const Destructive: Story = {
  args: { label: "Delete", intent: "destructive" },
};

// ── Sizes ─────────────────────────────────────────────────────────────────────
export const Small: Story = {
  args: { label: "Small", size: "sm" },
};

export const Medium: Story = {
  args: { label: "Medium", size: "md" },
};

export const Large: Story = {
  args: { label: "Large", size: "lg" },
};

// ── States ────────────────────────────────────────────────────────────────────
export const Loading: Story = {
  args: { label: "Saving…", loading: true },
};

export const Disabled: Story = {
  args: { label: "Disabled", disabled: true },
};

// ── All variants at a glance ──────────────────────────────────────────────────
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Sizes */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Button label="Small"  size="sm" />
        <Button label="Medium" size="md" />
        <Button label="Large"  size="lg" />
      </div>
      {/* Intents */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Button label="Primary"     intent="primary" />
        <Button label="Secondary"   intent="secondary" />
        <Button label="Ghost"       intent="ghost" />
        <Button label="Destructive" intent="destructive" />
      </div>
      {/* With icon */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Button label="Continue" intent="primary" rightIcon={<ArrowRight />} />
      </div>
      {/* States */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Button label="Loading…" loading />
        <Button label="Disabled" disabled />
      </div>
    </div>
  ),
};
