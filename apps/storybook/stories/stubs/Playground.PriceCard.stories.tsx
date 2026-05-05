import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@my-ds/ui";

// Figma asset URLs — valid for 7 days from 2026-04-29
const swiftcoverLogo = "https://www.figma.com/api/mcp/asset/446afa4d-f2c4-4199-955b-771aad2bf9dc";
const starRating     = "https://www.figma.com/api/mcp/asset/9ecd186e-1ef9-438d-bb8b-a4d021561489";

function CrossIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M9 9l14 14M23 9L9 23"
        stroke="#1f1f1f"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Section components ──────────────────────────────────────────────────────

function LogoCell() {
  return (
    <div className="bg-white flex flex-col gap-[10px] items-center justify-center p-5 w-[134px] self-stretch shrink-0">
      <div className="w-[130px] h-[80px] shrink-0 overflow-hidden flex items-center justify-center">
        <img src={swiftcoverLogo} alt="Swiftcover" className="w-full h-full object-contain" />
      </div>
      <div className="w-[80px] h-[32px] shrink-0 overflow-hidden flex items-center justify-center">
        <img src={starRating} alt="Defaqto 5-star rating" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}

function PriceCell() {
  return (
    <div className="bg-white flex flex-col self-stretch shrink-0">
      <div className="bg-mono-midGrey flex flex-col px-4 py-2 shrink-0">
        <p className="font-poppins font-normal text-sm leading-5 text-mono-black">Monthly price</p>
        <div className="flex gap-1 items-baseline">
          <span className="font-poppins font-normal text-sm leading-5 text-mono-black">1st x</span>
          <span className="font-poppins font-semibold text-sm leading-5 text-mono-black">£14.50</span>
        </div>
        <div className="flex gap-1 items-baseline">
          <span className="font-poppins font-normal text-sm leading-5 text-mono-black">10 x</span>
          <span className="font-poppins font-semibold text-sm leading-5 text-mono-black">£10.89</span>
        </div>
        <div className="flex gap-1 items-end">
          <span className="font-poppins font-semibold text-sm leading-5 text-mono-black">Total:</span>
          <div className="flex items-baseline">
            <span className="font-poppins font-bold text-[22px] leading-7 text-mono-black">£123.</span>
            <span className="font-poppins font-semibold text-sm leading-5 text-mono-black">41</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4 py-2 shrink-0">
        <p className="font-poppins font-semibold text-sm leading-5 text-mono-black">Total excess for:</p>
        <button type="button" className="flex items-center gap-0.5 text-left">
          <Icon name="chevron-right" size={16} />
          <span className="font-poppins font-semibold text-sm leading-5 text-mono-black underline">
            Buildings: £250
          </span>
        </button>
        <button type="button" className="flex items-center gap-0.5 text-left">
          <Icon name="chevron-right" size={16} />
          <span className="font-poppins font-semibold text-sm leading-5 text-mono-black underline">
            Contents: £300
          </span>
        </button>
      </div>
    </div>
  );
}

type CoverItemProps = {
  label: string;
  included: boolean;
  price?: string;
};

function CoverItem({ label, included, price }: CoverItemProps) {
  return (
    <div className="bg-white flex flex-1 flex-col items-center min-w-0 px-[5px] self-stretch">
      <div className="flex h-[72px] items-center justify-center w-full px-1">
        <p className="font-poppins font-semibold text-sm leading-5 text-mono-black text-center flex-1">
          {label}
        </p>
      </div>
      <div className="bg-mono-midGrey h-px w-full shrink-0" />
      <div className="flex flex-col gap-1 items-center px-2 py-5 shrink-0">
        {included ? <Icon name="tick" size={32} /> : <CrossIcon />}
        {price && (
          <p className="font-poppins font-normal text-sm leading-5 text-mono-black text-center">
            {price}
          </p>
        )}
      </div>
    </div>
  );
}

function ActionCell() {
  return (
    <div className="bg-white flex flex-col gap-[10px] items-start justify-center px-[30px] py-5 shrink-0 self-stretch">
      <button
        type="button"
        className="bg-mono-black flex gap-2 items-center px-4 py-2"
      >
        <span className="font-poppins font-semibold text-body-lg text-white whitespace-nowrap">Buy</span>
        <Icon name="arrow-right" size={24} className="text-white" />
      </button>
      <button type="button" className="flex gap-1 items-center">
        <span className="font-poppins font-semibold text-[18px] leading-[26px] text-mono-black underline whitespace-nowrap">
          More info
        </span>
        <Icon name="arrow-right" size={24} />
      </button>
    </div>
  );
}

function SpecialFeatureBar() {
  return (
    <div className="bg-product-homeInsurance flex items-center p-1 w-full shrink-0">
      <div className="flex gap-[10px] items-center flex-1 min-w-0">
        <div className="bg-mono-black shrink-0 size-6 flex items-center justify-center">
          <Icon name="price" size={14} className="text-white" />
        </div>
        <p className="font-poppins text-sm leading-5 text-mono-black">
          <strong className="font-semibold">Special offer</strong>
          {" - Price cut for Confused.com customers"}
        </p>
      </div>
    </div>
  );
}

function PriceCard() {
  return (
    <div className="border-4 border-product-homeInsurance w-[1100px]">
      <div className="bg-product-homeInsurance h-1 w-full shrink-0" />
      <div className="bg-mono-midGrey flex gap-px items-stretch">
        <LogoCell />
        <PriceCell />
        <CoverItem label="Legal cover"              included price="£24.90 added to total" />
        <CoverItem label="Home emergency"           included price="£40 added to total" />
        <CoverItem label="Personal possessions"     included />
        <CoverItem label="Contents accidental damage"  included={false} />
        <CoverItem label="Buildings accidental damage" included />
        <ActionCell />
      </div>
      <SpecialFeatureBar />
    </div>
  );
}

// ── Storybook ───────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Playground/PriceCard",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

export const FullCard: Story = {
  render: () => (
    <div className="p-8 bg-surface-raised min-h-screen overflow-x-auto">
      <PriceCard />
    </div>
  ),
};

export const LogoCellSection: Story = {
  render: () => (
    <div className="p-8 bg-surface-raised">
      <div className="border-4 border-product-homeInsurance inline-flex">
        <LogoCell />
      </div>
    </div>
  ),
};

export const PriceCellSection: Story = {
  render: () => (
    <div className="p-8 bg-surface-raised">
      <div className="border-4 border-product-homeInsurance inline-flex">
        <PriceCell />
      </div>
    </div>
  ),
};

export const CoverItemIncluded: Story = {
  render: () => (
    <div className="p-8 bg-surface-raised">
      <div className="border-4 border-product-homeInsurance inline-flex w-[160px]">
        <CoverItem label="Legal cover" included price="£24.90 added to total" />
      </div>
    </div>
  ),
};

export const CoverItemExcluded: Story = {
  render: () => (
    <div className="p-8 bg-surface-raised">
      <div className="border-4 border-product-homeInsurance inline-flex w-[160px]">
        <CoverItem label="Contents accidental damage" included={false} />
      </div>
    </div>
  ),
};

export const ActionCellSection: Story = {
  render: () => (
    <div className="p-8 bg-surface-raised">
      <div className="border-4 border-product-homeInsurance inline-flex">
        <ActionCell />
      </div>
    </div>
  ),
};

export const SpecialFeatureSection: Story = {
  render: () => (
    <div className="p-8 bg-surface-raised">
      <div className="w-[600px]">
        <SpecialFeatureBar />
      </div>
    </div>
  ),
};
