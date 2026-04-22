export type InputSize = "sm" | "md" | "lg";
export type InputState = "default" | "error";

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  hint?: string;
  error?: string;
  disabled?: boolean;
  size?: InputSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: string;
  className?: string;
}
