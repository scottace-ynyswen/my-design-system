import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    src:  { control: "text" },
    name: { control: "text" },
  },
  args: { size: "md", name: "Scott Ace" },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {};

export const WithInitials: Story = {
  args: { name: "Scott Ace" },
};

export const WithImage: Story = {
  args: { src: "https://i.pravatar.cc/150?img=3", name: "Scott Ace" },
};

export const Placeholder: Story = {
  args: { name: undefined, src: undefined },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Avatar key={size} size={size} name="Scott Ace" />
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Avatar size="lg" name="Scott Ace" />
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=5" name="Jane Doe" />
        <Avatar size="lg" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
          <Avatar key={size} size={size} name="AB" />
        ))}
      </div>
    </div>
  ),
};
