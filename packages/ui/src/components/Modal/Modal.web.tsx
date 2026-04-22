import React from "react";
import { cn } from "../../utils/cn";
import { Button } from "../Button";
import type { ModalProps } from "./Modal.types";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-mono-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative bg-mono-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6 flex flex-col gap-4",
          className
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-poppins font-semibold text-[22px] leading-7 text-mono-black">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-mono-charcoal hover:text-mono-black transition-colors shrink-0 mt-0.5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {children && (
          <div className="font-poppins text-xl leading-[27px] text-mono-charcoal">
            {children}
          </div>
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
