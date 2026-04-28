import React, { useRef, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { InputProps } from "./Input.types";

function ErrorIcon() {
  return (
    <div className="flex items-center justify-center bg-semantic-error w-6 h-6 shrink-0">
      <svg width="4" height="12" viewBox="0 0 4 12" fill="none" aria-hidden="true">
        <rect width="4" height="7" rx="2" fill="white" />
        <rect y="9.5" width="4" height="2.5" rx="1.25" fill="white" />
      </svg>
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

const wrapperVariants = cva(
  "flex items-center w-full border-2 bg-surface transition-colors focus-within:ring-4 focus-within:ring-aqua-500",
  {
    variants: {
      state: {
        default: "border-mono-black",
        error:   "border-semantic-error",
      },
      size: {
        sm: "px-3 gap-2",
        md: "px-4 gap-3",
        lg: "px-4 gap-3 h-[50px]",
      },
      isDisabled: {
        true:  "opacity-40 bg-surface-overlay cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: { state: "default", size: "md", isDisabled: false },
  }
);

const inputVariants = cva(
  "flex-1 bg-transparent font-poppins text-mono-black placeholder:text-mono-midGrey placeholder:text-[18px] placeholder:leading-[26px] placeholder:font-normal outline-none disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "py-2 text-sm leading-5",
        md: "py-3 text-body-lg",
        lg: "text-heading",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export function Input({
  label,
  bodyText,
  helpLinkLabel,
  helpContent,
  placeholder = "Enter text…",
  value,
  onChangeText,
  hint,
  error,
  disabled = false,
  size = "md",
  leftIcon,
  rightIcon,
  type = "text",
  className,
}: InputProps) {
  const [helpOpen, setHelpOpen] = useState(false);
  const helpRef = useRef<HTMLDivElement>(null);
  const state = error ? "error" : "default";

  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      {label && (
        <label className="font-poppins font-semibold text-[22px] leading-7 text-mono-black">
          {label}
        </label>
      )}

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
          <div style={{ maxHeight: helpOpen ? `${helpRef.current?.scrollHeight ?? 0}px` : 0, overflow: "hidden", transition: "max-height 300ms ease-in-out" }}>
            <div ref={helpRef} className="pt-3 pl-4 border-l-4 border-mono-black font-poppins font-normal text-[18px] leading-[26px] text-mono-black">
              {helpContent}
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2" role="alert">
          <ErrorIcon />
          <p className="font-poppins font-semibold text-[18px] leading-[26px] text-semantic-error">
            {error}
          </p>
        </div>
      )}

      {!error && hint && (
        <p className="font-poppins font-normal text-[18px] leading-[26px] text-mono-charcoal">
          {hint}
        </p>
      )}

      <div className={wrapperVariants({ state, size, isDisabled: disabled })}>
        {leftIcon && <span className="text-mono-charcoal shrink-0">{leftIcon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeText?.(e.target.value)}
          disabled={disabled}
          className={inputVariants({ size })}
        />
        {rightIcon && <span className="text-mono-charcoal shrink-0">{rightIcon}</span>}
      </div>
    </div>
  );
}
