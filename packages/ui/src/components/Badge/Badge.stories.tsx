import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Errors & alerts/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    intent: { control: "select", options: ["default", "primary", "success", "warning", "error", "info"] },
    size:   { control: "select", options: ["sm", "md", "lg"] },
  },
  args: { label: "Badge", intent: "default", size: "md" },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default:  Story = { args: { label: "Default",  intent: "default"  } };
export const Primary:  Story = { args: { label: "New",      intent: "primary"  } };
export const Success:  Story = { args: { label: "Active",   intent: "success"  } };
export const Warning:  Story = { args: { label: "Pending",  intent: "warning"  } };
export const Error:    Story = { args: { label: "Failed",   intent: "error"    } };
export const Info:     Story = { args: { label: "Info",     intent: "info"     } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        {(["default", "primary", "success", "warning", "error", "info"] as const).map((intent) => (
          <Badge key={intent} label={intent} intent={intent} />
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Badge label="Small"  size="sm" intent="primary" />
        <Badge label="Medium" size="md" intent="primary" />
        <Badge label="Large"  size="lg" intent="primary" />
      </div>
    </div>
  ),
};
