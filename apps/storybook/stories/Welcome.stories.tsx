import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

function Welcome() {
  return (
    <div style={{ padding: "48px 56px", maxWidth: 720, fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: "#1f1f1f", marginBottom: 20, lineHeight: 1.2 }}>
        Tuxedo Component Library
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3c3c3c", marginBottom: 16 }}>
        The Tuxedo Component Library is a library of UI components to facilitate the composition
        of visually and behaviourally consistent UI across different Confused branded applications.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3c3c3c" }}>
        The components are built with Stencil.js and are available as a package of framework
        agnostic native web components, or as a package of React components.
      </p>
    </div>
  );
}

const meta: Meta<typeof Welcome> = {
  title: "Welcome",
  component: Welcome,
  parameters: { layout: "fullscreen", nopadding: true },
};

export default meta;

export const Default: StoryObj<typeof Welcome> = {};
