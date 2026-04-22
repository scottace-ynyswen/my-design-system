import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { CardProps } from "./Card.types";

const cardVariants = cva(
  "rounded-xl w-full overflow-hidden",
  {
    variants: {
      variant: {
        elevated: "bg-mono-white shadow-md",
        outlined: "bg-mono-white border border-mono-midGrey",
        ghost:    "bg-mono-lightGrey",
      },
      isInteractive: {
        true:  "cursor-pointer hover:opacity-90 active:opacity-80 transition-opacity",
        false: "",
      },
    },
    defaultVariants: { variant: "elevated", isInteractive: false },
  }
);

export function Card({
  variant = "elevated",
  title,
  subtitle,
  children,
  footer,
  onPress,
  className,
}: CardProps) {
  const Tag = onPress ? "button" : "div";

  return (
    <Tag
      type={onPress ? "button" : undefined}
      onClick={onPress}
      className={cn(cardVariants({ variant, isInteractive: !!onPress }), className)}
    >
      {(title || subtitle) && (
        <div className="px-6 pt-5 pb-3">
          {title && (
            <h3 className="font-poppins font-semibold text-[22px] leading-7 text-mono-black">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="font-poppins text-sm leading-5 text-mono-charcoal mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children && <div className="px-6 py-3">{children}</div>}
      {footer && (
        <div className="px-6 py-4 border-t border-mono-midGrey">{footer}</div>
      )}
    </Tag>
  );
}
