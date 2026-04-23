import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PriceCard } from "./PriceCard.web";

const AXA_LOGO = "https://www.figma.com/api/mcp/asset/34396799-c5d0-4c67-8014-acf93a4f2451";

const meta: Meta<typeof PriceCard> = {
  title: "App/Price card",
  component: PriceCard,
  tags: ["autodocs"],
  parameters: {
    docs: { source: { type: "dynamic", language: "tsx" } },
  },
  argTypes: {
    product:       { control: { type: "select" }, options: ["motor", "home", "van"] },
    pricePounds:   { control: { type: "number" } },
    pricePence:    { control: { type: "number", min: 0, max: 99 } },
    expiresInDays: { control: { type: "number" } },
    insurerLogo:   { control: "text" },
    insurerName:   { control: "text" },
  },
  args: {
    insurerName: "AXA",
    insurerLogo: AXA_LOGO,
    pricePounds: 276,
    pricePence:  98,
    product:     "motor",
  },
  render: (args) => (
    <div style={{ width: 311 }}>
      <PriceCard {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof PriceCard>;

export const Default: Story = {};

export const ExpiresIn3Days: Story = {
  args: { expiresInDays: 3 },
};

export const ExpiringToday: Story = {
  args: { expiresInDays: 1 },
};
