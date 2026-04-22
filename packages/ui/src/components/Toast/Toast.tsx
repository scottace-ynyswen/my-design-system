import { View, Text, Pressable } from "react-native";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { ToastProps } from "./Toast.types";

const toastVariants = cva(
  "flex-row items-start gap-3 px-4 py-3 rounded-xl w-full",
  {
    variants: {
      intent: {
        success: "bg-feedback-success",
        error:   "bg-feedback-error",
        warning: "bg-feedback-warning",
        info:    "bg-feedback-info",
      },
    },
    defaultVariants: { intent: "success" },
  }
);

const icons: Record<string, string> = {
  success: "✓", error: "✕", warning: "⚠", info: "ℹ",
};

export function Toast({ message, intent = "success", title, onDismiss, className }: ToastProps) {
  const isLight = intent === "warning";

  return (
    <View className={cn(toastVariants({ intent }), className)}>
      <Text className={cn("text-base mt-0.5", isLight ? "text-mono-black" : "text-mono-white")}>
        {icons[intent]}
      </Text>
      <View className="flex-1">
        {title && (
          <Text className={cn("font-poppins font-semibold text-sm leading-5 mb-0.5", isLight ? "text-mono-black" : "text-mono-white")}>
            {title}
          </Text>
        )}
        <Text className={cn("font-poppins text-sm leading-5", isLight ? "text-mono-black" : "text-mono-white")}>
          {message}
        </Text>
      </View>
      {onDismiss && (
        <Pressable onPress={onDismiss} className="mt-0.5 opacity-70 active:opacity-100">
          <Text className={isLight ? "text-mono-black" : "text-mono-white"}>✕</Text>
        </Pressable>
      )}
    </View>
  );
}
