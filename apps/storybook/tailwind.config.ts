import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./stories/**/*.{ts,tsx}",
    "./.storybook/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#f0ecff",
          500: "#7b61ff",
          900: "#3b2a7a",
        },
        mono: {
          black:     "#1f1f1f",
          charcoal:  "#3c3c3c",
          midGrey:   "#d4d4d4",
          lightGrey: "#efefef",
          white:     "#ffffff",
        },
        surface: {
          DEFAULT: "#ffffff",
          raised:   "#f9fafb",
          overlay:  "#f3f4f6",
        },
        text: {
          primary:   "#1f1f1f",
          secondary: "#6b7280",
          disabled:  "#9ca3af",
        },
        border: {
          DEFAULT: "#d4d4d4",
          focus:   "#7b61ff",
        },
        feedback: {
          error:   "#dc2626",
          success: "#16a34a",
          warning: "#d97706",
          info:    "#2563eb",
        },
      },
    },
  },
  plugins: [],
};

export default config;
