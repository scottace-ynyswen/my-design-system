import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import type { YesNoFieldProps, YesNoValue } from "./YesNoField.types";
import { Icon } from "../Icon";

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


export function YesNoField({
  question,
  bodyText,
  helpLinkLabel = "What are the modifications?",
  helpContent,
  error,
  defaultHelpOpen = false,
  value,
  onChange,
  accentColor = "#58AAE0",
  className,
}: YesNoFieldProps) {
  const [internalValue, setInternalValue] = useState<YesNoValue>(null);
  const [helpOpen, setHelpOpen] = useState(defaultHelpOpen);
  const [focusedOpt, setFocusedOpt] = useState<"yes" | "no" | null>(null);
  const [helpHeight, setHelpHeight] = useState(0);
  const helpRef = useRef<HTMLDivElement>(null);

  const controlled = value !== undefined;
  const selected = controlled ? value : internalValue;

  useEffect(() => {
    setHelpHeight(helpOpen ? (helpRef.current?.scrollHeight ?? 0) : 0);
  }, [helpOpen]);

  function handleSelect(v: "yes" | "no") {
    if (!controlled) setInternalValue(v);
    onChange?.(v);
  }

  return (
    <div className={cn("flex flex-col gap-4 items-start", className)}>
      <div className="flex flex-col gap-4 items-start w-full">
        <h2 className="font-poppins font-semibold text-[22px] leading-7 text-mono-black">
          {question}
        </h2>

        {bodyText && (
          <p className="font-poppins font-normal text-[18px] leading-[26px] text-mono-black">
            {bodyText}
          </p>
        )}

        {helpContent && (
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

            <div
              style={{ maxHeight: helpHeight, overflow: "hidden", transition: "max-height 300ms ease-in-out" }}
            >
              <div ref={helpRef} className="pt-3 pl-4 border-l-4 border-mono-black font-poppins font-normal text-[18px] leading-[26px] text-mono-black">
                {helpContent}
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2" role="alert">
            <Icon name="error" aria-hidden={true} />
            <p className="font-poppins font-semibold text-[18px] leading-[26px] text-semantic-error">
              {error}
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-4 items-center">
        {(["yes", "no"] as const).map((opt) => {
          const ringPx = selected === opt ? 4 : 2;
          const shadow = [
            `inset 0 0 0 ${ringPx}px #1f1f1f`,
            focusedOpt === opt ? `0 0 0 4px ${accentColor}` : null,
          ].filter(Boolean).join(", ");

          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={selected === opt}
              onClick={() => handleSelect(opt)}
              onFocus={() => setFocusedOpt(opt)}
              onBlur={() => setFocusedOpt(null)}
              style={{ boxShadow: shadow }}
              className="flex items-center gap-4 px-4 py-[10px] w-[172px] bg-white cursor-pointer focus:outline-none transition-all duration-150"
            >
              <RadioCircle selected={selected === opt} accentColor={accentColor} />
              <span className="font-poppins font-normal text-[18px] leading-[26px] text-mono-black capitalize">
                {opt}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
