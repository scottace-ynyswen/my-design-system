import type { ReactNode } from "react";

export type YesNoValue = "yes" | "no" | null;

export type YesNoFieldProps = {
  question: string;
  bodyText?: string;
  helpLinkLabel?: string;
  helpContent?: ReactNode;
  error?: string;
  defaultHelpOpen?: boolean;
  value?: YesNoValue;
  onChange?: (value: "yes" | "no") => void;
  /** Accent color for the radio dot and focus ring — change per insurance type */
  accentColor?: string;
  className?: string;
};
