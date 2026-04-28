import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

function ComingSoon({ section }: { section: string }) {
  return (
    <div style={{ padding: "48px 56px", maxWidth: 720, fontFamily: "sans-serif" }}>
      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#888", marginBottom: 12 }}>
        {section}
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: "#1f1f1f", marginBottom: 16, lineHeight: 1.2 }}>
        Coming soon
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "#666" }}>
        This section is under construction. Check back soon.
      </p>
    </div>
  );
}

const meta: Meta = {
  title: "Documentation/Foundations/Typography",
  parameters: { layout: "fullscreen" },
};
export default meta;

export const Overview: StoryObj = {
  render: () => <ComingSoon section="Foundations / Typography" />,
};
