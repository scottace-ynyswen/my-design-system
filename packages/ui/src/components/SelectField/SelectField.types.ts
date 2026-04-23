export type SelectOption = {
  value: string;
  label: string;
};

export type SelectFieldProps = {
  question: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  tipText?: string;
  className?: string;
};
