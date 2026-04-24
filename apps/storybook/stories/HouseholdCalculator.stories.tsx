import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NumberInputField, Button } from "@my-ds/ui";

/* ─── Types ─────────────────────────────────────────────────── */

interface CategoryValues {
  livingRoom: number;
  kitchen: number;
  bedroom: number;
  office: number;
  valuables: number;
  garden: number;
}

/* ─── Sub-components ─────────────────────────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 pb-4 border-b-2 border-mono-black">
      <h3 className="font-poppins font-bold text-[18px] leading-[26px] text-mono-black uppercase tracking-wide">
        {children}
      </h3>
    </div>
  );
}

function TotalDisplay({ total }: { total: number }) {
  const formatted = `£${total.toLocaleString("en-GB")}`;
  return (
    <div className="w-full border-2 border-mono-black bg-mono-black p-6 flex flex-col gap-2">
      <span className="font-poppins font-semibold text-[16px] leading-5 text-mono-white uppercase tracking-wider">
        Estimated contents value
      </span>
      <span className="font-poppins font-bold text-[40px] leading-[48px] text-mono-white">
        {formatted}
      </span>
      <span className="font-poppins font-normal text-[15px] leading-5 text-mono-midGrey mt-1">
        We recommend adding at least 10% as a buffer for items you may have missed.
      </span>
    </div>
  );
}

/* ─── Calculator ─────────────────────────────────────────────── */

function HouseholdCalculator() {
  const [values, setValues] = useState<CategoryValues>({
    livingRoom: 0,
    kitchen:    0,
    bedroom:    0,
    office:     0,
    valuables:  0,
    garden:     0,
  });

  function set(key: keyof CategoryValues) {
    return (v: number) => setValues((prev) => ({ ...prev, [key]: v }));
  }

  const total = Object.values(values).reduce((sum, v) => sum + v, 0);

  return (
    <div className="flex flex-col gap-12 max-w-xl">

      {/* Intro */}
      <div className="flex flex-col gap-3">
        <h1 className="font-poppins font-bold text-[32px] leading-[38px] text-mono-black">
          Household contents calculator
        </h1>
        <p className="font-poppins font-normal text-[18px] leading-[26px] text-mono-charcoal">
          Not sure how much cover you need? Work through each room and enter the
          total replacement value of your belongings. We'll add it up as you go.
        </p>
      </div>

      {/* Living room */}
      <div className="flex flex-col gap-6">
        <SectionHeading>Living room</SectionHeading>
        <NumberInputField
          question="What is your living room worth?"
          bodyText="Include sofas, armchairs, TV, games consoles, furniture and shelving."
          helpLinkLabel="How do I estimate the value?"
          helpContent="Use the current replacement cost — what it would cost to buy the same item brand new today. Don't use the second-hand or original purchase price."
          value={values.livingRoom}
          onChange={set("livingRoom")}
        />
      </div>

      {/* Kitchen */}
      <div className="flex flex-col gap-6">
        <SectionHeading>Kitchen</SectionHeading>
        <NumberInputField
          question="What are your kitchen contents worth?"
          bodyText="Include fridge, washing machine, dishwasher, microwave, small appliances, cookware and crockery."
          value={values.kitchen}
          onChange={set("kitchen")}
        />
      </div>

      {/* Bedroom */}
      <div className="flex flex-col gap-6">
        <SectionHeading>Bedroom</SectionHeading>
        <NumberInputField
          question="What are your bedroom contents worth?"
          bodyText="Include beds and mattresses, wardrobes, dressers, all clothing and footwear."
          helpLinkLabel="Tips for estimating clothing"
          helpContent="Clothing is often underestimated. Add up the cost of replacing your entire wardrobe new — most people are surprised how quickly it mounts up."
          value={values.bedroom}
          onChange={set("bedroom")}
        />
      </div>

      {/* Home office */}
      <div className="flex flex-col gap-6">
        <SectionHeading>Home office &amp; tech</SectionHeading>
        <NumberInputField
          question="What is your home office and tech worth?"
          bodyText="Include laptops, desktops, tablets, monitors, printers, phones and any office furniture."
          value={values.office}
          onChange={set("office")}
        />
      </div>

      {/* Valuables */}
      <div className="flex flex-col gap-6">
        <SectionHeading>Valuables</SectionHeading>
        <NumberInputField
          question="What are your valuables worth?"
          bodyText="Include jewellery, watches, artwork, antiques, collectibles and musical instruments."
          helpLinkLabel="Do I need separate valuables cover?"
          helpContent="Most policies have a single-item limit (often £1,500). If any individual item is worth more than that, you may need it listed separately on your policy."
          value={values.valuables}
          onChange={set("valuables")}
        />
      </div>

      {/* Garden */}
      <div className="flex flex-col gap-6">
        <SectionHeading>Garden &amp; outdoor</SectionHeading>
        <NumberInputField
          question="What are your garden and outdoor items worth?"
          bodyText="Include garden furniture, BBQ, tools, lawnmower, bikes and sports equipment."
          helpLinkLabel="Is garden cover included?"
          helpContent="Garden contents are usually covered up to a set limit as standard. Check your policy wording — items stored in an unlocked shed may not be covered."
          value={values.garden}
          onChange={set("garden")}
        />
      </div>

      {/* Running total */}
      <div className="flex flex-col gap-6">
        <SectionHeading>Your total</SectionHeading>
        <TotalDisplay total={total} />
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-3 pb-12">
        <Button
          label="Get a home insurance quote"
          intent="primary"
          size="md"
          disabled={total === 0}
          onPress={() => {}}
        />
        <p className="font-poppins font-normal text-[15px] leading-5 text-text-secondary">
          You can adjust this figure during your quote if needed.
        </p>
      </div>

    </div>
  );
}

/* ─── Story meta ─────────────────────────────────────────────── */

const meta: Meta = {
  title: "App/Household calculator",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Default: StoryObj = {
  render: () => <HouseholdCalculator />,
};
