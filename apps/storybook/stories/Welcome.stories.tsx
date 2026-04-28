import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

function Welcome() {
  return (
    <div style={{ padding: "48px 56px", maxWidth: 720, fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: "#1f1f1f", marginBottom: 20, lineHeight: 1.2 }}>
        Design system test ground
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3c3c3c" }}>
        This storybook is being used by design to test how our team can translate designs from Figma
        into usable patterns and components that engineering can use directly within multi-channel
        workflow. Not everything here works and there are wrong style, code snippets missing.
      </p>
    </div>
  );
}

const meta: Meta<typeof Welcome> = {
  title: "Documentation/Getting Started",
  component: Welcome,
  parameters: { layout: "fullscreen", nopadding: true },
};

export default meta;

export const Default: StoryObj<typeof Welcome> = {};
