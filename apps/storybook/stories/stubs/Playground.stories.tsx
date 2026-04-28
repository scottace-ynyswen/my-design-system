import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

function PlaygroundOverview() {
  return (
    <div style={{ padding: "48px 56px", maxWidth: 720, fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#888", marginBottom: 12 }}>
        Playground
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: "#1f1f1f", marginBottom: 16, lineHeight: 1.2 }}>
        Playground
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "#666" }}>
        Components placed here are being designed and explored. They have not yet been reviewed or validated by the dev team and should not be used in production.
      </p>
    </div>
  );
}

const meta: Meta = {
  title: "Playground/Overview",
  parameters: { layout: "fullscreen" },
};
export default meta;

export const Default: StoryObj = {
  render: () => <PlaygroundOverview />,
};
