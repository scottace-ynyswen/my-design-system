export const iconNames = [
  "tick",
  "warning",
  "date",
  "price",
  "toptip",
  "search",
  "notifications",
  "lock",
  "chevron-right",
  "chevron-left",
  "chevron-up",
  "chevron-down",
  "info",
  "arrow-right",
  "arrow-left",
  "error",
] as const;

export type IconName = (typeof iconNames)[number];

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  "aria-label"?: string;
}
