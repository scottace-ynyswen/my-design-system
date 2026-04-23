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
      fontSize: {
        "2xs":     ["10px", { lineHeight: "14px" }],
        "heading": ["22px", { lineHeight: "28px" }],
        "body-lg": ["20px", { lineHeight: "27px" }],
      },
      colors: {
        brand: {
          50:  "#f0ecff",
          500: "#7b61ff",
          900: "#3b2a7a",
        },
        aqua: {
          500: "#58AAE0",
          600: "#4C90BD",
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
        product: {
          motor: "#8AC4E9",
          home:  "#F5A623",
          van:   "#7ED321",
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
