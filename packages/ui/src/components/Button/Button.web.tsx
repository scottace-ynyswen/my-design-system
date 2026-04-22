import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { ButtonProps } from "./Button.types";

const buttonVariants = cva(
  "group inline-flex items-center justify-center rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border-focus",
  {
    variants: {
      intent: {
        primary:     "bg-mono-black hover:bg-mono-charcoal active:bg-mono-charcoal text-mono-white",
        secondary:   "bg-mono-white border border-mono-midGrey hover:bg-mono-lightGrey active:bg-mono-lightGrey text-mono-black",
        ghost:       "hover:bg-mono-lightGrey active:bg-mono-lightGrey text-text-primary",
        destructive: "bg-feedback-error hover:opacity-90 active:opacity-90 text-mono-white",
      },
      size: {
        sm: "px-4 py-2 gap-2",
        md: "px-6 py-4 gap-4",
        lg: "px-6 py-4 gap-4",
      },
      isDisabled: {
        true:  "opacity-40 cursor-not-allowed",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      intent:     "primary",
      size:       "md",
      isDisabled: false,
    },
  }
);

const labelVariants = cva("font-poppins font-semibold whitespace-nowrap", {
  variants: {
    intent: {
      primary:     "text-mono-white",
      secondary:   "text-mono-black",
      ghost:       "text-text-primary",
      destructive: "text-mono-white",
    },
    size: {
      sm: "text-sm leading-5",
      md: "text-xl leading-[27px]",
      lg: "text-[22px] leading-7",
    },
  },
  defaultVariants: { intent: "primary", size: "md" },
});

export function Button({
  label,
  intent = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  onPress,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-label={label}
      aria-busy={loading}
      onClick={onPress as unknown as React.MouseEventHandler<HTMLButtonElement>}
      className={cn(buttonVariants({ intent, size, isDisabled }), className)}
    >
      {loading ? (
        <svg
          className={cn("animate-spin", intent === "primary" || intent === "destructive" ? "text-mono-white" : "text-mono-black")}
          width="20" height="20" viewBox="0 0 24 24" fill="none"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3V4a10 10 0 100 20v-4l-3 3 3 3v-2a8 8 0 01-8-8z" />
        </svg>
      ) : (
        leftIcon
      )}
      <span className={labelVariants({ intent, size })}>{label}</span>
      {!loading && rightIcon}
    </button>
  );
}
