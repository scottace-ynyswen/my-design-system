export type RegFieldProps = {
  title?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  onSearchByMakeModel?: () => void;
  loading?: boolean;
  className?: string;
};
