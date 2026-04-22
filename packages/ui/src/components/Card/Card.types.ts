export type CardVariant = "elevated" | "outlined" | "ghost";

export interface CardProps {
  variant?: CardVariant;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onPress?: () => void;
  className?: string;
}
