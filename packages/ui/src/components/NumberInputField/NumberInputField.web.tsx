import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import type { NumberInputFieldProps } from "./NumberInputField.types";

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

export function NumberInputField({
  question,
  bodyText,
  helpLinkLabel,
  helpContent,
  value,
  onChange,
  placeholder = "0",
  prefix = "£",
  className,
}: NumberInputFieldProps) {
  const [internal, setInternal] = useState("");
  const [helpOpen, setHelpOpen] = useState(false);
  const [helpHeight, setHelpHeight] = useState(0);
  const helpRef = useRef<HTMLDivElement>(null);

  const controlled = value !== undefined;
  // When controlled, show the value (empty string if 0 to allow clearing)
  const displayValue = controlled
    ? (value === 0 ? "" : String(value))
    : internal;

  useEffect(() => {
    setHelpHeight(helpOpen ? (helpRef.current?.scrollHeight ?? 0) : 0);
  }, [helpOpen]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/[^\d]/g, "");
    if (!controlled) setInternal(raw);
    onChange?.(raw === "" ? 0 : Number(raw));
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

      {/* Input box — matches SelectField/SliderField box dimensions exactly */}
      <div className="flex items-stretch w-[360px] h-[50px] border-2 border-mono-black bg-white focus-within:ring-4 focus-within:ring-aqua-500">
        {prefix && (
          <span className="flex items-center px-4 font-poppins font-semibold text-[22px] leading-7 text-mono-black border-r-2 border-mono-black select-none shrink-0">
            {prefix}
          </span>
        )}
        <input
          type="text"
          inputMode="numeric"
          value={displayValue}
          onChange={handleChange}
          placeholder={placeholder}
          aria-label={question}
          className="flex-1 px-4 font-poppins text-[18px] leading-[26px] text-mono-black bg-transparent focus:outline-none placeholder:text-mono-midGrey"
        />
      </div>
    </div>
  );
}
