import { View, Text, Image } from "react-native";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { AvatarProps } from "./Avatar.types";

const avatarVariants = cva(
  "rounded-full overflow-hidden bg-brand-500 items-center justify-center",
  {
    variants: {
      size: {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
        xl: "w-16 h-16",
      },
    },
    defaultVariants: { size: "md" },
  }
);

const initialsVariants = cva("font-poppins font-semibold text-mono-white", {
  variants: {
    size: {
      xs: "text-[10px]",
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-xl",
    },
  },
  defaultVariants: { size: "md" },
});

function getInitials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

export function Avatar({ src, name, size = "md", className }: AvatarProps) {
  return (
    <View className={cn(avatarVariants({ size }), className)}>
      {src ? (
        <Image source={{ uri: src }} className="w-full h-full" />
      ) : name ? (
        <Text className={initialsVariants({ size })}>{getInitials(name)}</Text>
      ) : null}
    </View>
  );
}
