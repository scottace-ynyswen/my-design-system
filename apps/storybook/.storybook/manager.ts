import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Confused.com Design System",
    brandImage: "/logo.png",
    brandTarget: "_self",
  }),
});
