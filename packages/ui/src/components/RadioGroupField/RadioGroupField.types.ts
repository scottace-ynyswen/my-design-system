import type { ReactNode } from "react";

export type RadioOption = {
  value: string;
  label: string;
};

export type RadioGroupFieldProps = {
  question: string;
  bodyText?: string;
  helpLinkLabel?: string;
  helpContent?: ReactNode;
  options: RadioOption[];
  extraOptions?: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  /** Content that slides open when a specific option is selected */
  subQuestions?: Record<string, ReactNode>;
  accentColor?: string;
  className?: string;
};
