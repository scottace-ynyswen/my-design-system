import { ActivityIndicator, Pressable, Text } from "react-native";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { ButtonProps } from "./Button.types";

const pressableVariants = cva(
  "group flex flex-row items-center justify-center rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border-focus",
  {
    variants: {
      intent: {
        primary:     "bg-mono-black hover:bg-mono-charcoal active:bg-mono-charcoal",
        secondary:   "bg-mono-white border border-mono-midGrey hover:bg-mono-lightGrey active:bg-mono-lightGrey",
        ghost:       "hover:bg-mono-lightGrey active:bg-mono-lightGrey",
        destructive: "bg-feedback-error hover:opacity-90 active:opacity-90",
      },
      size: {
        sm: "px-4 py-2 gap-2",
        md: "px-6 py-4 gap-4",
        lg: "px-6 py-4 gap-4",
      },
      isDisabled: {
        true:  "opacity-40 cursor-not-allowed",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      intent:     "primary",
      size:       "md",
      isDisabled: false,
    },
  }
);

const textVariants = cva("font-poppins font-semibold", {
  variants: {
    intent: {
      primary:     "text-mono-white",
      secondary:   "text-mono-black",
      ghost:       "text-text-primary",
      destructive: "text-mono-white",
    },
    size: {
      sm: "text-sm leading-5",
      md: "text-xl leading-[27px]",
      lg: "text-[22px] leading-7",
    },
  },
  defaultVariants: {
    intent: "primary",
    size:   "md",
  },
});

export function Button({
  label,
  intent = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const spinnerColor =
    intent === "primary" || intent === "destructive" ? "white" : "#6d28d9";

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      className={cn(pressableVariants({ intent, size, isDisabled }), className)}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" color={spinnerColor} />
      ) : (
        leftIcon
      )}
      <Text className={cn(textVariants({ intent, size }))}>{label}</Text>
      {!loading && rightIcon}
    </Pressable>
  );
}
