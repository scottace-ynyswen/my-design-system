export type NumberInputFieldProps = {
  question: string;
  bodyText?: string;
  helpLinkLabel?: string;
  helpContent?: string;
  value?: number;
  onChange?: (value: number) => void;
  placeholder?: string;
  prefix?: string;
  className?: string;
};
