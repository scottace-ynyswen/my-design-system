import React from "react";
import type { Preview } from "@storybook/react";
import "../styles/global.css";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      if (context.parameters.nopadding) return <Story />;
      return (
        <div style={{ paddingLeft: 200, paddingTop: 48, paddingRight: 48, paddingBottom: 48 }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      sort: "requiredFirst",
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas",  value: "#f5f5f5" },
        { name: "white",   value: "#ffffff" },
        { name: "dark",    value: "#0f172a" },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "390px", height: "844px" },
          type: "mobile",
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1280px", height: "900px" },
          type: "desktop",
        },
      },
      defaultViewport: "desktop",
    },
    docs: {
      source: { language: "tsx", type: "code" },
    },
    options: {
      storySort: {
        order: [
          "Welcome",
          "Components",
          [
            "Buttons & links",
            "Errors & alerts",
            "Drop down",
            "Numeric input fields",
            "Pagination",
            "Breadcrumbs",
            "Loading",
            "Modals",
            "Form fields",
            ["Reg Fields", "Yes No Field", "Select Field", "Radio Group Field", "*"],
            "*",
          ],
          "Prices page",
          "App",
          ["Price card", "*"],
          "Colours",
        ],
      },
    },
  },
  globalTypes: {},
};

export default preview;
