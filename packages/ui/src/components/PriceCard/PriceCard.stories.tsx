import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PriceCard } from "./PriceCard.web";

// Figma asset — expires after 7 days; replace with a stable hosted logo URL
const AXA_LOGO = "https://www.figma.com/api/mcp/asset/40be629d-c272-470c-b88e-6c3f7f42d220";

const meta: Meta<typeof PriceCard> = {
  title: "App/Price card",
  component: PriceCard,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    product:       { control: { type: "select" }, options: ["motor", "home", "van"] },
    pricePounds:   { control: { type: "number" } },
    pricePence:    { control: { type: "number", min: 0, max: 99 } },
    expiresInDays: { control: { type: "number" } },
    insurerLogo:   { control: "text" },
    insurerName:   { control: "text" },
  },
  args: {
    insurerName:   "AXA",
    insurerLogo:   AXA_LOGO,
    pricePounds:   276,
    pricePence:    98,
    expiresInDays: 3,
    product:       "motor",
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

export const ExpiringToday: Story = {
  args: { expiresInDays: 1 },
};

export const NoExpiry: Story = {
  args: { expiresInDays: undefined },
};
