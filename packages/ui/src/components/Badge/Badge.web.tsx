import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { BadgeProps } from "./Badge.types";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-poppins font-semibold rounded-full whitespace-nowrap",
  {
    variants: {
      intent: {
        default: "bg-surface-overlay text-mono-black",
        primary: "bg-brand-500 text-mono-white",
        success: "bg-feedback-success text-mono-white",
        warning: "bg-feedback-warning text-mono-black",
        error:   "bg-feedback-error text-mono-white",
        info:    "bg-feedback-info text-mono-white",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
      },
    },
    defaultVariants: { intent: "default", size: "md" },
  }
);

export function Badge({ label, intent = "default", size = "md", className }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ intent, size }), className)}>
      {label}
    </span>
  );
}
