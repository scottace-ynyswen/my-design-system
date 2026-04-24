import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import type { SelectFieldProps } from "./SelectField.types";

function ChevronRight({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      className={cn("shrink-0 transition-transform duration-300", open ? "rotate-90" : "rotate-0")}
    >
      <path d="M6 3l5 5-5 5" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 6l5 5 5-5" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2a7 7 0 0 1 5 11.9V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2.1A7 7 0 0 1 12 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SelectField({
  question,
  bodyText,
  helpLinkLabel,
  helpContent,
  options,
  value,
  onChange,
  placeholder = "Please select...",
  tipText,
  className,
}: SelectFieldProps) {
  const [internalValue, setInternalValue] = useState("");
  const [helpOpen, setHelpOpen] = useState(false);
  const [helpHeight, setHelpHeight] = useState(0);
  const helpRef = useRef<HTMLDivElement>(null);
  const controlled = value !== undefined;
  const current = controlled ? value : internalValue;

  useEffect(() => {
    setHelpHeight(helpOpen ? (helpRef.current?.scrollHeight ?? 0) : 0);
  }, [helpOpen]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (!controlled) setInternalValue(e.target.value);
    onChange?.(e.target.value);
  }

  return (
    <div className={cn("flex flex-col gap-4 items-start", className)}>
      <h2 className="font-poppins font-semibold text-[22px] leading-7 text-mono-black">
        {question}
      </h2>

      {bodyText && (
        <p className="font-poppins font-normal text-[18px] leading-[26px] text-mono-black">
          {bodyText}
        </p>
      )}

      {helpContent && helpLinkLabel && (
        <div className="flex flex-col items-start w-full">
          <button
            type="button"
            onClick={() => setHelpOpen((o) => !o)}
            className="flex items-center gap-1 cursor-pointer focus:outline-none focus:ring-4 focus:ring-aqua-500 rounded-sm"
            aria-expanded={helpOpen}
          >
            <ChevronRight open={helpOpen} />
            <span className="font-poppins font-normal text-[18px] leading-[26px] text-mono-black underline underline-offset-2">
              {helpLinkLabel}
            </span>
          </button>
          <div style={{ maxHeight: helpHeight, overflow: "hidden", transition: "max-height 300ms ease-in-out" }}>
            <div ref={helpRef} className="pt-3 pl-4 border-l-4 border-mono-black font-poppins font-normal text-[18px] leading-[26px] text-mono-black">
              {helpContent}
            </div>
          </div>
        </div>
      )}

      {/* Select wrapper */}
      <div className="relative w-[360px]">
        <select
          value={current}
          onChange={handleChange}
          aria-label={question}
          className={cn(
            "w-full h-[50px] border-2 border-mono-black bg-white px-4 pr-10 appearance-none font-poppins text-[18px] leading-[26px] cursor-pointer focus:outline-none focus:ring-4 focus:ring-aqua-500",
            current ? "font-normal text-mono-black" : "font-light text-mono-charcoal"
          )}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <ChevronDown />
        </div>
      </div>

      {/* Tip banner */}
      {tipText && (
        <div className="border-2 border-mono-black w-full">
          <div className="bg-white border-4 border-mono-black flex gap-4 items-start p-4">
            <div className="bg-mono-black shrink-0 size-8 flex items-center justify-center">
              <LightbulbIcon />
            </div>
            <p className="font-poppins font-normal text-[18px] leading-[26px] text-mono-black flex-1">
              {tipText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
