import React, { useState } from "react";
import { cn } from "../../utils/cn";
import { Button } from "../Button";
import type { RegFieldProps } from "./RegField.types";

function ArrowRight() {
  return (
    <svg
      width="24" height="25" viewBox="0 0 24 24.1" fill="none" aria-hidden="true"
      className="transition-transform duration-200 group-hover:rotate-45"
    >
      <path
        d="M12 0L9 3.1L15.8 9.9H0V14.2H15.8L9 21L12 24.1L23.9 12.1L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function RegField({
  title = "Enter car registration",
  value,
  onChange,
  onSubmit,
  onSearchByMakeModel,
  loading = false,
  className,
}: RegFieldProps) {
  const [internalValue, setInternalValue] = useState(value ?? "");
  const controlled = value !== undefined;
  const displayValue = controlled ? value : internalValue;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const upper = e.target.value.toUpperCase();
    if (!controlled) setInternalValue(upper);
    onChange?.(upper);
  }

  return (
    <div className={cn("flex flex-col gap-4 items-start", className)}>
      <h2 className="font-poppins font-semibold text-[22px] leading-7 text-mono-black whitespace-nowrap">
        {title}
      </h2>

      <div className="flex flex-col gap-6 items-start">
        {/* Input */}
        <div className="flex border-2 border-mono-black w-[230px] h-[50px] overflow-hidden focus-within:ring-4 focus-within:ring-aqua-500">
          <div className="bg-mono-lightGrey w-[46px] shrink-0 flex items-center justify-center">
            <span className="font-poppins font-semibold text-lg leading-[26px] text-mono-charcoal">
              GB
            </span>
          </div>
          <input
            type="text"
            value={displayValue}
            onChange={handleChange}
            placeholder="XX00XXX"
            maxLength={8}
            aria-label="Car registration number"
            className="flex-1 pr-4 pl-2 font-poppins font-semibold text-lg leading-[26px] text-mono-black bg-transparent outline-none tracking-widest uppercase placeholder:font-normal placeholder:tracking-normal placeholder:text-text-disabled"
          />
        </div>

        {/* CTA */}
        <Button
          label="Find car"
          intent="primary"
          size="lg"
          loading={loading}
          rightIcon={<ArrowRight />}
          onPress={onSubmit}
        />

        {/* Or link */}
        <div className="flex gap-1 items-center">
          <span className="font-poppins font-normal text-lg leading-[26px] text-mono-black">
            Or
          </span>
          <button
            type="button"
            onClick={onSearchByMakeModel}
            className="font-poppins font-normal text-lg leading-[26px] text-mono-black underline underline-offset-2 cursor-pointer hover:opacity-70 transition-opacity focus:outline-none focus:ring-4 focus:ring-aqua-500 rounded-sm"
          >
            Search for car by make and model
          </button>
        </div>
      </div>
    </div>
  );
}
