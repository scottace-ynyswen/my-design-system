import { View, Text } from "react-native";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { BadgeProps } from "./Badge.types";

const badgeVariants = cva(
  "flex-row items-center justify-center rounded-full",
  {
    variants: {
      intent: {
        default: "bg-mono-lightGrey",
        primary: "bg-brand-500",
        success: "bg-feedback-success",
        warning: "bg-feedback-warning",
        error:   "bg-feedback-error",
        info:    "bg-feedback-info",
      },
      size: { sm: "px-2 py-0.5", md: "px-3 py-1", lg: "px-4 py-1.5" },
    },
    defaultVariants: { intent: "default", size: "md" },
  }
);

const textVariants = cva("font-poppins font-semibold", {
  variants: {
    intent: {
      default: "text-mono-black",
      primary: "text-mono-white",
      success: "text-mono-white",
      warning: "text-mono-black",
      error:   "text-mono-white",
      info:    "text-mono-white",
    },
    size: { sm: "text-xs", md: "text-sm", lg: "text-base" },
  },
  defaultVariants: { intent: "default", size: "md" },
});

export function Badge({ label, intent = "default", size = "md", className }: BadgeProps) {
  return (
    <View className={cn(badgeVariants({ intent, size }), className)}>
      <Text className={textVariants({ intent, size })}>{label}</Text>
    </View>
  );
}
