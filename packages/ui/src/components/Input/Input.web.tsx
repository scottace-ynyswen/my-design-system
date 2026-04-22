import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { InputProps } from "./Input.types";

const wrapperVariants = cva(
  "flex items-center w-full border rounded-xl bg-mono-white transition-colors focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-border-focus",
  {
    variants: {
      state: {
        default: "border-mono-midGrey",
        error:   "border-feedback-error",
      },
      size: {
        sm: "px-3 gap-2",
        md: "px-4 gap-3",
        lg: "px-5 gap-3",
      },
      isDisabled: {
        true:  "opacity-40 bg-mono-lightGrey cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: { state: "default", size: "md", isDisabled: false },
  }
);

const inputVariants = cva(
  "flex-1 bg-transparent font-poppins text-mono-black placeholder:text-mono-midGrey outline-none disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "py-2 text-sm leading-5",
        md: "py-3 text-xl leading-[27px]",
        lg: "py-4 text-[22px] leading-7",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export function Input({
  label,
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
  const state = error ? "error" : "default";

  return (
    <div className={cn("flex flex-col gap-1.5 w-full", className)}>
      {label && (
        <label className="font-poppins font-semibold text-sm leading-5 text-mono-black">
          {label}
        </label>
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
      {(hint || error) && (
        <p className={cn("font-poppins text-sm leading-5", error ? "text-feedback-error" : "text-mono-charcoal")}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
