import React from "react";
import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

// Hide the default folder/document SVG icons Storybook renders in the sidebar
const style = document.createElement("style");
style.textContent = `[data-item-id] svg { display: none !important; }`;
document.head.appendChild(style);

const ICONS: Record<string, string> = {
  // Top level
  Documentation: "📖",
  Playground: "🎮",

  // Documentation › level 1
  "Getting Started": "🚀",
  Principles: "💡",
  Foundations: "🏗️",
  Components: "🧩",
  Patterns: "🔷",
  "Accessibility (WCAG 2.2)": "♿",
  Contribution: "🤝",

  // Foundations › level 2
  Colors: "🎨",
  Typography: "Aa",
  Icons: "✦",
  "Spacing & Grid": "📐",
  Motion: "🌊",

  // Components › level 2
  Buttons: "🔘",
  Forms: "📝",
  "Data Display": "📊",
  Modals: "🪟",

  // Forms › level 3
  Inputs: "⌨️",
  Slider: "↔️",
  "Reg Field": "🚗",
  "Drop down": "⬇️",
  Question: "❓",

  // Data Display › level 3
  Cards: "🃏",
  "Price card": "💷",
  Badge: "🏷️",

  // Question › level 4
  Anatomy: "🔬",
  "With hint text": "💬",
  "With sub-copy": "📄",
  "Error state": "⚠️",
  "Disabled state": "🔒",
  "Required vs optional": "✱",

  // Patterns › level 2
  "Form Validation": "✅",
  Navigation: "🧭",
  "Question Layouts": "📋",

  // Playground › level 1
  Overview: "🗺️",
};

addons.setConfig({
  sidebar: {
    renderLabel: (item: { name: string; type: string }) => {
      const icon = ICONS[item.name];
      if (!icon || item.type === "story" || item.type === "docs") return item.name;
      return (
        <span>
          <span style={{ marginRight: "0.4em" }}>{icon}</span>
          {item.name}
        </span>
      );
    },
  },
  theme: create({
    base: "light",
    brandTitle: "Confused.com Design System",
    brandImage: "/logo.png",
    brandTarget: "_self",
  }),
});
