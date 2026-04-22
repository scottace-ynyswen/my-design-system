import { View, Text, Pressable } from "react-native";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { CardProps } from "./Card.types";

const cardVariants = cva("rounded-xl w-full overflow-hidden", {
  variants: {
    variant: {
      elevated: "bg-mono-white shadow-md",
      outlined: "bg-mono-white border border-mono-midGrey",
      ghost:    "bg-mono-lightGrey",
    },
  },
  defaultVariants: { variant: "elevated" },
});

export function Card({ variant = "elevated", title, subtitle, children, footer, onPress, className }: CardProps) {
  const content = (
    <>
      {(title || subtitle) && (
        <View className="px-6 pt-5 pb-3">
          {title && <Text className="font-poppins font-semibold text-[22px] leading-7 text-mono-black">{title}</Text>}
          {subtitle && <Text className="font-poppins text-sm leading-5 text-mono-charcoal mt-1">{subtitle}</Text>}
        </View>
      )}
      {children && <View className="px-6 py-3">{children}</View>}
      {footer && <View className="px-6 py-4 border-t border-mono-midGrey">{footer}</View>}
    </>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} className={cn(cardVariants({ variant }), "active:opacity-80", className)}>
        {content}
      </Pressable>
    );
  }

  return <View className={cn(cardVariants({ variant }), className)}>{content}</View>;
}
