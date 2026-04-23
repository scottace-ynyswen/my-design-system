import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Badge } from "../Badge";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {},
  decorators: [(Story) => <div style={{ width: 380 }}><Story /></div>],
  argTypes: {
    variant: { control: "select", options: ["elevated", "outlined", "ghost"] },
  },
  args: { variant: "elevated", title: "Card title", subtitle: "Supporting subtitle text" },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: { variant: "elevated", title: "Elevated card", subtitle: "Drops a shadow below the card surface." },
};

export const Outlined: Story = {
  args: { variant: "outlined", title: "Outlined card", subtitle: "A 1px border, no shadow." },
};

export const Ghost: Story = {
  args: { variant: "ghost", title: "Ghost card", subtitle: "Light grey fill, no border." },
};

export const WithContent: Story = {
  args: {
    variant: "elevated",
    title: "Design system",
    subtitle: "Cross-platform UI components",
  },
  render: (args) => (
    <Card {...args}>
      <p style={{ margin: 0, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#3c3c3c", lineHeight: "24px" }}>
        A shared component library built with GlueStack UI and Tailwind CSS, designed to work across React Native and web platforms.
      </p>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card variant="outlined" title="Your account" subtitle="Manage settings and preferences">
      <p style={{ margin: 0, fontFamily: "Poppins, sans-serif", fontSize: 14, color: "#3c3c3c" }}>
        Last signed in 2 hours ago from London, UK.
      </p>
    </Card>
  ),
};

export const Interactive: Story = {
  args: {
    variant: "outlined",
    title: "Clickable card",
    subtitle: "Tap or click to trigger an action",
    onPress: () => alert("Card pressed"),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 380 }}>
      {(["elevated", "outlined", "ghost"] as const).map((variant) => (
        <Card key={variant} variant={variant} title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} card`} subtitle="Supporting text" />
      ))}
    </div>
  ),
};
