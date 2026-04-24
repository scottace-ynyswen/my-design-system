import React from "react";
import { RegField, Button } from "@my-ds/ui";

interface Props {
  reg: string;
  onRegChange: (v: string) => void;
  onContinue: () => void;
}

export default function RegPage({ reg, onRegChange, onContinue }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-poppins font-bold text-3xl text-mono-black mb-2">
          Get your car insurance quote
        </h1>
        <p className="text-mono-charcoal text-base">
          Enter your registration number to get started.
        </p>
      </div>

      <RegField
        title="Enter your car registration"
        value={reg}
        onChange={onRegChange}
        onSubmit={onContinue}
      />

      <Button
        label="Get my quote"
        intent="primary"
        size="md"
        disabled={reg.trim().length < 2}
        onPress={onContinue}
      />
    </div>
  );
}
