import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { CardProps } from "./Card.types";

const cardVariants = cva(
  "rounded-xl w-full overflow-hidden",
  {
    variants: {
      variant: {
        elevated: "bg-surface shadow-md",
        outlined: "bg-surface border border-border",
        ghost:    "bg-surface-overlay",
      },
      isInteractive: {
        true:  "cursor-pointer hover:opacity-90 active:opacity-80 transition-opacity focus:outline-none focus:ring-4 focus:ring-aqua-500",
        false: "",
      },
    },
    defaultVariants: { variant: "elevated", isInteractive: false },
  }
);

const headerVariants = cva("px-6 pt-5 pb-3");
const bodyVariants   = cva("px-6 py-3");
const footerVariants = cva("px-6 py-4 border-t border-border");
const titleVariants  = cva("font-poppins font-semibold text-heading text-mono-black");
const subtitleVariants = cva("font-poppins text-sm leading-5 text-mono-charcoal mt-1");

export function Card({
  variant = "elevated",
  title,
  subtitle,
  children,
  footer,
  onPress,
  className,
}: CardProps) {
  const classes = cn(cardVariants({ variant, isInteractive: !!onPress }), className);

  const content = (
    <>
      {(title || subtitle) && (
        <div className={headerVariants()}>
          {title    && <h3 className={titleVariants()}>{title}</h3>}
          {subtitle && <p className={subtitleVariants()}>{subtitle}</p>}
        </div>
      )}
      {children && <div className={bodyVariants()}>{children}</div>}
      {footer   && <div className={footerVariants()}>{footer}</div>}
    </>
  );

  if (onPress) {
    return (
      <button type="button" onClick={onPress as React.MouseEventHandler} className={classes}>
        {content}
      </button>
    );
  }

  return <div className={classes}>{content}</div>;
}
