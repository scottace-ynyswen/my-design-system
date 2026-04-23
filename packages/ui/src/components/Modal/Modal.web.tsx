import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Button } from "../Button";
import type { ModalProps } from "./Modal.types";

const overlayVariants = cva(
  "fixed inset-0 z-50 flex items-center justify-center"
);

const backdropVariants = cva(
  "absolute inset-0 bg-mono-black/50 backdrop-blur-sm"
);

const containerVariants = cva(
  "relative bg-surface rounded-xl shadow-xl w-full mx-4 flex flex-col gap-4 p-6",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
      },
    },
    defaultVariants: { size: "md" },
  }
);

const titleVariants = cva(
  "font-poppins font-semibold text-heading text-mono-black"
);

const bodyVariants = cva(
  "font-poppins text-body-lg text-mono-charcoal"
);

export function Modal({
  visible,
  title,
  children,
  variant = "default",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onClose,
  className,
}: ModalProps) {
  if (!visible) return null;

  return (
    <div className={overlayVariants()}>
      <div
        className={backdropVariants()}
        onClick={onClose}
        aria-label="Close modal"
        role="presentation"
      />
      <div className={cn(containerVariants({ size: "md" }), className)}>
        <div className="flex items-start justify-between gap-4">
          <h2 className={titleVariants()}>{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-mono-charcoal hover:text-mono-black transition-colors shrink-0 mt-0.5 focus:outline-none focus:ring-4 focus:ring-aqua-500 rounded-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {children && (
          <div className={bodyVariants()}>{children}</div>
        )}

        <div className="flex gap-3 justify-end pt-2">
          <Button label={cancelLabel} intent="secondary" size="sm" onPress={onClose} />
          {onConfirm && (
            <Button
              label={confirmLabel}
              intent={variant === "destructive" ? "destructive" : "primary"}
              size="sm"
              onPress={onConfirm}
            />
          )}
        </div>
      </div>
    </div>
  );
}
