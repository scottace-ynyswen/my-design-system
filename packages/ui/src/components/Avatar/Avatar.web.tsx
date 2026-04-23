import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { AvatarProps } from "./Avatar.types";

const avatarVariants = cva(
  "rounded-full overflow-hidden bg-brand-500 flex items-center justify-center shrink-0",
  {
    variants: {
      size: {
        xs: "size-6",
        sm: "size-8",
        md: "size-10",
        lg: "size-12",
        xl: "size-16",
      },
    },
    defaultVariants: { size: "md" },
  }
);

const initialsVariants = cva(
  "font-poppins font-semibold text-mono-white select-none",
  {
    variants: {
      size: {
        xs: "text-2xs",
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
        xl: "text-xl",
      },
    },
    defaultVariants: { size: "md" },
  }
);

const fallbackIconVariants = cva(
  "fill-current text-mono-white",
  {
    variants: {
      size: {
        xs: "size-3",
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
        xl: "size-8",
      },
    },
    defaultVariants: { size: "md" },
  }
);

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ src, name, size = "md", className }: AvatarProps) {
  return (
    <div className={cn(avatarVariants({ size }), className)}>
      {src ? (
        <img src={src} alt={name ?? "avatar"} className="w-full h-full object-cover" />
      ) : name ? (
        <span className={initialsVariants({ size })}>{getInitials(name)}</span>
      ) : (
        <svg viewBox="0 0 24 24" className={fallbackIconVariants({ size })}>
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      )}
    </div>
  );
}
