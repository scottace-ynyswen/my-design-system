import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { InputProps } from "./Input.types";
import { useState } from "react";

const wrapperVariants = cva(
  "flex-row items-center w-full border-2 bg-mono-white",
  {
    variants: {
      state: {
        default: "border-mono-black",
        error:   "border-semantic-error",
      },
      size: { sm: "px-3 gap-2", md: "px-4 gap-3", lg: "px-4 gap-3 h-[50px]" },
      isDisabled: { true: "opacity-40 bg-mono-lightGrey", false: "" },
    },
    defaultVariants: { state: "default", size: "md", isDisabled: false },
  }
);

const inputVariants = cva(
  "flex-1 bg-transparent font-poppins text-mono-black placeholder:text-[18px] placeholder:font-normal",
  {
    variants: {
      size: {
        sm: "py-2 text-sm leading-5",
        md: "py-3 text-xl leading-[27px]",
        lg: "text-[22px] leading-7",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export function Input({
  label,
  bodyText,
  helpLinkLabel,
  helpContent,
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
  const [helpOpen, setHelpOpen] = useState(false);
  const state = error ? "error" : "default";

  return (
    <View className={cn("flex gap-4 w-full", className)}>
      {label && (
        <Text className="font-poppins font-semibold text-[22px] leading-7 text-mono-black">
          {label}
        </Text>
      )}

      {bodyText && (
        <Text className="font-poppins font-normal text-[18px] leading-[26px] text-mono-black">
          {bodyText}
        </Text>
      )}

      {helpContent && helpLinkLabel && (
        <View className="flex flex-col items-start w-full gap-2">
          <TouchableOpacity
            onPress={() => setHelpOpen((o) => !o)}
            accessibilityRole="button"
            accessibilityState={{ expanded: helpOpen }}
            className="flex-row items-center gap-1"
          >
            <Text className="font-poppins font-normal text-[18px] leading-[26px] text-mono-black underline underline-offset-2">
              {helpOpen ? "▾" : "▸"} {helpLinkLabel}
            </Text>
          </TouchableOpacity>
          {helpOpen && (
            <View className="pl-4 border-l-4 border-mono-black">
              <Text className="font-poppins font-normal text-[18px] leading-[26px] text-mono-black">
                {helpContent}
              </Text>
            </View>
          )}
        </View>
      )}

      {error && (
        <View className="flex-row items-center gap-2" accessibilityRole="alert">
          <View className="items-center justify-center bg-semantic-error w-6 h-6 shrink-0" />
          <Text className="font-poppins font-semibold text-[18px] leading-[26px] text-semantic-error flex-1">
            {error}
          </Text>
        </View>
      )}

      {!error && hint && (
        <Text className="font-poppins font-normal text-[18px] leading-[26px] text-mono-charcoal">
          {hint}
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
    </View>
  );
}
