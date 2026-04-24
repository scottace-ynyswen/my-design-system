export type SliderFieldProps = {
  question: string;
  bodyText?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  formatValue?: (value: number) => string;
  className?: string;
};
