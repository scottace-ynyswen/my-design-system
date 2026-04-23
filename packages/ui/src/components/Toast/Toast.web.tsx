import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { ToastProps } from "./Toast.types";

const toastVariants = cva(
  "flex items-start gap-3 px-4 py-3 rounded-xl shadow-lg w-full max-w-sm",
  {
    variants: {
      intent: {
        success: "bg-feedback-success text-mono-white",
        error:   "bg-feedback-error text-mono-white",
        warning: "bg-feedback-warning text-mono-black",
        info:    "bg-feedback-info text-mono-white",
      },
    },
    defaultVariants: { intent: "success" },
  }
);

const icons: Record<string, React.ReactNode> = {
  success: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  info: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
};

export function Toast({ message, intent = "success", title, onDismiss, className }: ToastProps) {
  return (
    <div className={cn(toastVariants({ intent }), className)}>
      <span className="shrink-0 mt-0.5">{icons[intent]}</span>
      <div className="flex-1 min-w-0">
        {title && (
          <p className="font-poppins font-semibold text-sm leading-5 mb-0.5">{title}</p>
        )}
        <p className="font-poppins text-sm leading-5">{message}</p>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="shrink-0 opacity-70 hover:opacity-100 transition-opacity mt-0.5 focus:outline-none focus:ring-4 focus:ring-aqua-500 rounded-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
