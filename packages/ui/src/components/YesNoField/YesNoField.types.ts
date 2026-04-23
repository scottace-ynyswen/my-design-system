import type { ReactNode } from "react";

export type YesNoValue = "yes" | "no" | null;

export type YesNoFieldProps = {
  question: string;
  helpLinkLabel?: string;
  helpContent?: ReactNode;
  value?: YesNoValue;
  onChange?: (value: "yes" | "no") => void;
  /** Accent color for the radio dot and focus ring — change per insurance type */
  accentColor?: string;
  className?: string;
};
