import React, { useState } from "react";
import { RadioGroupField, YesNoField, SelectField, SliderField, Button } from "@my-ds/ui";
import type { YesNoValue } from "@my-ds/ui";

function buildStartDates() {
  const dates: { value: string; label: string }[] = [];
  const now = new Date();
  for (let i = 0; i < 8; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const value = d.toISOString().split("T")[0];
    const label = i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    dates.push({ value, label });
  }
  return dates;
}

interface Props {
  reg: string;
  onContinue: () => void;
}

export default function DriverDetailsPage({ reg, onContinue }: Props) {
  const [coverType, setCoverType] = useState("");
  const [vehicleValue, setVehicleValue] = useState(10000);
  const [startDate, setStartDate] = useState("");
  const [ownsOtherVehicle, setOwnsOtherVehicle] = useState<YesNoValue>(null);
  const [hasClaims, setHasClaims] = useState<YesNoValue>(null);
  const [ncb, setNcb] = useState("");

  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="font-poppins text-sm text-text-secondary mb-1">Registration: {reg.toUpperCase()}</p>
        <h1 className="font-poppins font-bold text-3xl text-mono-black mb-2">About the driver</h1>
        <p className="text-mono-charcoal text-base">
          Tell us a bit about the main driver on this policy.
        </p>
      </div>

      <RadioGroupField
        question="What level of cover do you need?"
        helpLinkLabel="Cover levels explained"
        helpContent="Comprehensive covers damage to your car and others. Third party, fire & theft covers damage to others plus fire and theft of your car. Third party only is the minimum legal requirement."
        options={[
          { value: "comprehensive", label: "Comprehensive" },
          { value: "tpft", label: "Third party, fire & theft" },
          { value: "tpo", label: "Third party only" },
        ]}
        value={coverType}
        onChange={setCoverType}
      />

      <SliderField
        question="What is the value of your vehicle?"
        bodyText="Enter the current market value of your car, not the price you originally paid."
        min={500}
        max={50000}
        step={500}
        value={vehicleValue}
        onChange={setVehicleValue}
      />

      <SelectField
        question="When do you need your cover to start?"
        options={buildStartDates()}
        value={startDate}
        onChange={setStartDate}
        placeholder="Select a start date"
      />

      <YesNoField
        question="Does the main driver own or use another vehicle?"
        bodyText="This includes vehicles owned by a partner or family member that the driver regularly uses."
        value={ownsOtherVehicle}
        onChange={setOwnsOtherVehicle}
      />

      <YesNoField
        question="Has the main driver had any accidents or claims in the past 5 years?"
        helpLinkLabel="What counts as a claim?"
        helpContent="Any incident you reported to your insurer counts, even if you didn't receive a payout. This includes windscreen claims."
        value={hasClaims}
        onChange={setHasClaims}
      />

      <RadioGroupField
        question="How many years no-claims bonus do you have?"
        bodyText="Your no-claims bonus is a discount earned for every year you drive without making a claim."
        options={[
          { value: "0", label: "No bonus" },
          { value: "1", label: "1 year" },
          { value: "2", label: "2 years" },
        ]}
        extraOptions={[
          { value: "3", label: "3 years" },
          { value: "4", label: "4 years" },
          { value: "5+", label: "5 or more years" },
        ]}
        value={ncb}
        onChange={setNcb}
      />

      <Button
        label="Continue"
        intent="primary"
        size="md"
        onPress={onContinue}
      />
    </div>
  );
}
