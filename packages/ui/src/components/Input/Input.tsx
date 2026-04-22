import { View, Text, TextInput } from "react-native";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { InputProps } from "./Input.types";

const wrapperVariants = cva(
  "flex-row items-center w-full border rounded-xl bg-mono-white",
  {
    variants: {
      state: {
        default: "border-mono-midGrey",
        error:   "border-feedback-error",
      },
      size: { sm: "px-3 gap-2", md: "px-4 gap-3", lg: "px-5 gap-3" },
      isDisabled: { true: "opacity-40 bg-mono-lightGrey", false: "" },
    },
    defaultVariants: { state: "default", size: "md", isDisabled: false },
  }
);

const inputVariants = cva(
  "flex-1 bg-transparent font-poppins text-mono-black",
  {
    variants: {
      size: {
        sm: "py-2 text-sm leading-5",
        md: "py-3 text-xl leading-[27px]",
        lg: "py-4 text-[22px] leading-7",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export function Input({
  label,
  placeholder = "Enter text…",
  value,
  onChangeText,
  hint,
  error,
  disabled = false,
  size = "md",
  leftIcon,
  rightIcon,
  className,
}: InputProps) {
  const state = error ? "error" : "default";

  return (
    <View className={cn("flex gap-1.5 w-full", className)}>
      {label && (
        <Text className="font-poppins font-semibold text-sm leading-5 text-mono-black">
          {label}
        </Text>
      )}
      <View className={wrapperVariants({ state, size, isDisabled: disabled })}>
        {leftIcon}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          editable={!disabled}
          className={inputVariants({ size })}
          placeholderTextColor="#d4d4d4"
        />
        {rightIcon}
      </View>
      {(hint || error) && (
        <Text className={cn("font-poppins text-sm leading-5", error ? "text-feedback-error" : "text-mono-charcoal")}>
          {error ?? hint}
        </Text>
      )}
    </View>
  );
}
