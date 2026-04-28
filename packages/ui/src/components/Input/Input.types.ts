import type { ReactNode } from "react";

export type InputSize = "sm" | "md" | "lg";
export type InputState = "default" | "error";

export interface InputProps {
  label?: string;
  bodyText?: string;
  helpLinkLabel?: string;
  helpContent?: ReactNode;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  hint?: string;
  error?: string;
  disabled?: boolean;
  size?: InputSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?: string;
  className?: string;
}
