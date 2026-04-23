import React, { useRef, useState } from "react";
import { cn } from "../../utils/cn";
import type { RadioGroupFieldProps } from "./RadioGroupField.types";

function RadioCircle({ selected, accentColor }: { selected: boolean; accentColor: string }) {
  return (
    <div className="size-[30px] rounded-full border-2 border-mono-black flex items-center justify-center shrink-0">
      <div
        className={cn(
          "size-[14px] rounded-full transition-transform duration-200 ease-out",
          selected ? "scale-100" : "scale-0"
        )}
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}

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

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function RadioGroupField({
  question,
  bodyText,
  helpLinkLabel,
  helpContent,
  options,
  extraOptions = [],
  value,
  onChange,
  subQuestions,
  accentColor = "#58AAE0",
  className,
}: RadioGroupFieldProps) {
  const [internalValue, setInternalValue] = useState<string>("");
  const [helpOpen, setHelpOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [focusedOpt, setFocusedOpt] = useState<string | null>(null);

  const helpRef = useRef<HTMLDivElement>(null);
  const subRef  = useRef<HTMLDivElement>(null);
  const extraRef = useRef<HTMLDivElement>(null);

  const controlled = value !== undefined;
  const selected   = controlled ? value : internalValue;

  function handleSelect(v: string) {
    if (!controlled) setInternalValue(v);
    onChange?.(v);
  }

  const helpHeight = helpOpen ? (helpRef.current?.scrollHeight ?? 0) : 0;
  const subContent = selected ? subQuestions?.[selected] : null;
  const subHeight  = subContent ? (subRef.current?.scrollHeight ?? 0) : 0;
  const extraHeight = showMore ? (extraRef.current?.scrollHeight ?? 0) : 0;

  return (
    <div className={cn("flex flex-col gap-4 items-start", className)}>

      {/* Header */}
      <div className="flex flex-col gap-4 items-start w-full">
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
      </div>

      {/* Radio options */}
      <div className="flex flex-col gap-4">
        {options.map((opt) => {
          const isSelected = selected === opt.value;
          const ringPx = isSelected ? 4 : 2;
          const shadow = [
            `inset 0 0 0 ${ringPx}px #1f1f1f`,
            focusedOpt === opt.value ? `0 0 0 4px ${accentColor}` : null,
          ].filter(Boolean).join(", ");

          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelect(opt.value)}
              onFocus={() => setFocusedOpt(opt.value)}
              onBlur={() => setFocusedOpt(null)}
              style={{ boxShadow: shadow }}
              className="flex items-center gap-4 px-4 py-[10px] w-[360px] bg-white cursor-pointer focus:outline-none transition-all duration-150"
            >
              <RadioCircle selected={isSelected} accentColor={accentColor} />
              <span className="font-poppins font-semibold text-[18px] leading-[26px] text-mono-black flex-1 text-left">
                {opt.label}
              </span>
            </button>
          );
        })}

        {/* Extra options (show more) */}
        {extraOptions.length > 0 && (
          <div style={{ maxHeight: extraHeight, overflow: "hidden", transition: "max-height 300ms ease-in-out" }}>
            <div ref={extraRef} className="flex flex-col gap-4 pt-4">
              {extraOptions.map((opt) => {
                const isSelected = selected === opt.value;
                const ringPx = isSelected ? 4 : 2;
                const shadow = [
                  `inset 0 0 0 ${ringPx}px #1f1f1f`,
                  focusedOpt === opt.value ? `0 0 0 4px ${accentColor}` : null,
                ].filter(Boolean).join(", ");

                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelect(opt.value)}
                    onFocus={() => setFocusedOpt(opt.value)}
                    onBlur={() => setFocusedOpt(null)}
                    style={{ boxShadow: shadow }}
                    className="flex items-center gap-4 px-4 py-[10px] w-[360px] bg-white cursor-pointer focus:outline-none transition-all duration-150"
                  >
                    <RadioCircle selected={isSelected} accentColor={accentColor} />
                    <span className="font-poppins font-semibold text-[18px] leading-[26px] text-mono-black flex-1 text-left">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Show more / less toggle */}
        {extraOptions.length > 0 && (
          <button
            type="button"
            onClick={() => setShowMore((s) => !s)}
            className="flex items-center gap-1 cursor-pointer focus:outline-none focus:ring-4 focus:ring-aqua-500 rounded-sm"
          >
            <span className="font-poppins font-semibold text-[18px] leading-[26px] text-mono-black underline underline-offset-2">
              {showMore ? "Show fewer options" : "Show more options"}
            </span>
            <PlusIcon />
          </button>
        )}
      </div>

      {/* Sub-question slides in below */}
      <div style={{ maxHeight: subHeight, overflow: "hidden", transition: "max-height 350ms ease-in-out", width: "100%" }}>
        <div ref={subRef}>
          <div className="flex gap-4 items-start pt-2">
            <div className="w-1 self-stretch bg-mono-black shrink-0" />
            <div className="flex-1">{subContent}</div>
          </div>
        </div>
      </div>

    </div>
  );
}
