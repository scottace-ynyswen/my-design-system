export type BadgeIntent = "default" | "primary" | "success" | "warning" | "error" | "info";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  label: string;
  intent?: BadgeIntent;
  size?: BadgeSize;
  className?: string;
}
