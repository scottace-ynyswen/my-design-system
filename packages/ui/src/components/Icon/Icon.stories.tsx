import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon.web";
import { iconNames } from "./Icon.types";
import type { IconName } from "./Icon.types";

const meta: Meta<typeof Icon> = {
  title: "Documentation/Foundations/Icons",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: { control: { type: "select" }, options: iconNames },
    size: { control: { type: "number", min: 12, max: 64, step: 4 } },
  },
  args: {
    name: "tick",
    size: 24,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Single: Story = {
  name: "Single icon",
};

export const AllIcons: Story = {
  name: "All icons",
  render: () => (
    <div style={{ fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 12, color: "#888", marginBottom: 24, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
        {iconNames.length} icons — all inherit colour via <code>currentColor</code>
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 8 }}>
        {(iconNames as readonly IconName[]).map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              padding: "16px 8px",
              borderRadius: 8,
              border: "1px solid #e5e5e5",
              background: "#fff",
              color: "#1f1f1f",
            }}
          >
            <Icon name={name} size={24} />
            <span style={{ fontSize: 11, color: "#555", textAlign: "center", lineHeight: 1.3 }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 24, fontFamily: "sans-serif" }}>
      {[16, 20, 24, 32, 40, 48].map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Icon name="search" size={size} />
          <span style={{ fontSize: 11, color: "#888" }}>{size}px</span>
        </div>
      ))}
    </div>
  ),
};

export const ColourInheritance: Story = {
  name: "Colour inheritance",
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", fontFamily: "sans-serif" }}>
      {(["#1f1f1f", "#0070f3", "#16a34a", "#dc2626", "#9333ea", "#d97706"] as const).map((colour) => (
        <div key={colour} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: colour }}>
          <Icon name="notifications" size={28} />
          <span style={{ fontSize: 10, color: "#888" }}>{colour}</span>
        </div>
      ))}
    </div>
  ),
};
