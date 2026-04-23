import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const palettes = [
  {
    name: "Base",
    swatches: [
      { step: "white", hex: "#FFFFFF" },
      { step: "black", hex: "#000000" },
    ],
  },
  {
    name: "Neutral",
    swatches: [
      { step: "50",  hex: "#FAFAFA" },
      { step: "100", hex: "#F5F5F5" },
      { step: "200", hex: "#EFEFEF" },
      { step: "300", hex: "#D4D4D4" },
      { step: "400", hex: "#C8C8C8" },
      { step: "500", hex: "#B0B0B0" },
      { step: "600", hex: "#8A8A8A" },
      { step: "700", hex: "#555555" },
      { step: "800", hex: "#3C3C3C" },
      { step: "900", hex: "#1F1F1F" },
      { step: "950", hex: "#0D0D0D" },
    ],
  },
  {
    name: "Aqua",
    swatches: [
      { step: "50",  hex: "#F3FAFE" },
      { step: "100", hex: "#E1F2FB" },
      { step: "200", hex: "#C6E6F7" },
      { step: "300", hex: "#A8D6EF" },
      { step: "400", hex: "#8AC4E9" },
      { step: "500", hex: "#58AAE0" },
      { step: "600", hex: "#4C90BD" },
      { step: "700", hex: "#2D5674" },
      { step: "800", hex: "#183247" },
      { step: "900", hex: "#0F1E29" },
      { step: "950", hex: "#0A141C" },
    ],
  },
  {
    name: "Teal",
    swatches: [
      { step: "50",  hex: "#F3FBF8" },
      { step: "100", hex: "#E4F5F0" },
      { step: "200", hex: "#C9EAE1" },
      { step: "300", hex: "#A6DACE" },
      { step: "400", hex: "#82CCBD" },
      { step: "500", hex: "#4DB6A1" },
      { step: "600", hex: "#439887" },
      { step: "700", hex: "#2A5D55" },
      { step: "800", hex: "#163731" },
      { step: "900", hex: "#0F2621" },
      { step: "950", hex: "#0A1A17" },
    ],
  },
  {
    name: "Sky",
    swatches: [
      { step: "50",  hex: "#F4FBFE" },
      { step: "100", hex: "#E9F7FD" },
      { step: "200", hex: "#D5F3FA" },
      { step: "300", hex: "#BDEAF5" },
      { step: "400", hex: "#A7E2F1" },
      { step: "500", hex: "#81D5EB" },
      { step: "600", hex: "#4193AA" },
      { step: "700", hex: "#295973" },
      { step: "800", hex: "#1D3A4C" },
      { step: "900", hex: "#122432" },
      { step: "950", hex: "#0C1820" },
    ],
  },
  {
    name: "Lime",
    swatches: [
      { step: "50",  hex: "#F9FDF7" },
      { step: "100", hex: "#F2FBEF" },
      { step: "200", hex: "#E6F6DD" },
      { step: "300", hex: "#D5F0C8" },
      { step: "400", hex: "#C2E8AC" },
      { step: "500", hex: "#A8DE89" },
      { step: "600", hex: "#5F973F" },
      { step: "700", hex: "#426833" },
      { step: "800", hex: "#2A421F" },
      { step: "900", hex: "#1C2A15" },
      { step: "950", hex: "#121A0F" },
    ],
  },
  {
    name: "Violet",
    swatches: [
      { step: "50",  hex: "#FCF7FE" },
      { step: "100", hex: "#F7ECFA" },
      { step: "200", hex: "#F0DDF6" },
      { step: "300", hex: "#E3C3EF" },
      { step: "400", hex: "#D2A6DF" },
      { step: "500", hex: "#BE80D1" },
      { step: "600", hex: "#AC70BE" },
      { step: "700", hex: "#5A3776" },
      { step: "800", hex: "#3A214A" },
      { step: "900", hex: "#26142D" },
      { step: "950", hex: "#1A0F1D" },
    ],
  },
  {
    name: "Peach",
    swatches: [
      { step: "50",  hex: "#FFF7F1" },
      { step: "100", hex: "#FCEFE4" },
      { step: "200", hex: "#F9E3D2" },
      { step: "300", hex: "#F6D1B8" },
      { step: "400", hex: "#F0B693" },
      { step: "500", hex: "#EA9665" },
      { step: "600", hex: "#BF794A" },
      { step: "700", hex: "#7A482C" },
      { step: "800", hex: "#4B2C1B" },
      { step: "900", hex: "#2C1B11" },
      { step: "950", hex: "#1F130C" },
    ],
  },
  {
    name: "Honey",
    swatches: [
      { step: "50",  hex: "#FFFCF4" },
      { step: "100", hex: "#FFF8E9" },
      { step: "200", hex: "#FEF2D8" },
      { step: "300", hex: "#FDE5B8" },
      { step: "400", hex: "#FCDD90" },
      { step: "500", hex: "#FACF61" },
      { step: "600", hex: "#AC831B" },
      { step: "700", hex: "#6B4F15" },
      { step: "800", hex: "#3E2F0F" },
      { step: "900", hex: "#251D09" },
      { step: "950", hex: "#1A1507" },
    ],
  },
  {
    name: "Cherry",
    swatches: [
      { step: "50",  hex: "#FEF8F8" },
      { step: "100", hex: "#FAE6E6" },
      { step: "200", hex: "#F6CDCC" },
      { step: "300", hex: "#EFA9A8" },
      { step: "400", hex: "#E07675" },
      { step: "500", hex: "#C63C3B" },
      { step: "600", hex: "#A20101" },
      { step: "700", hex: "#7C0B0B" },
      { step: "800", hex: "#560707" },
      { step: "900", hex: "#380404" },
      { step: "950", hex: "#250303" },
    ],
  },
  {
    name: "Forrest",
    swatches: [
      { step: "50",  hex: "#F2F8F0" },
      { step: "100", hex: "#DCEED7" },
      { step: "200", hex: "#B8DDB0" },
      { step: "300", hex: "#93C988" },
      { step: "400", hex: "#6FB560" },
      { step: "500", hex: "#55A245" },
      { step: "600", hex: "#438F33" },
      { step: "700", hex: "#357229" },
      { step: "800", hex: "#27561F" },
      { step: "900", hex: "#1B3B15" },
      { step: "950", hex: "#0F220C" },
    ],
  },
];

function isDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
}

function ColorPalette({ name, swatches }: (typeof palettes)[number]) {
  return (
    <div style={{ marginBottom: 40 }}>
      <p style={{ fontFamily: "sans-serif", fontWeight: 600, fontSize: 14, marginBottom: 12, color: "#111" }}>
        {name}
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {swatches.map(({ step, hex }) => (
          <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 8,
                backgroundColor: hex,
                border: hex.toUpperCase() === "#FFFFFF" ? "1px solid #E0E0E0" : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 9,
                  color: isDark(hex) ? "#FFFFFF" : "#000000",
                  opacity: 0.7,
                }}
              >
                {hex}
              </span>
            </div>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#555" }}>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ColorsPage() {
  return (
    <div style={{ padding: 40, maxWidth: 1000 }}>
      <h1 style={{ fontFamily: "sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Colors</h1>
      <p style={{ fontFamily: "sans-serif", fontSize: 14, color: "#555", marginBottom: 40 }}>
        Primitive color palettes from the design token file.
      </p>
      {palettes.map((palette) => (
        <ColorPalette key={palette.name} {...palette} />
      ))}
    </div>
  );
}

const meta: Meta = {
  title: "Colours",
  parameters: { layout: "fullscreen", nopadding: true },
};

export default meta;
type Story = StoryObj;

export const All: Story = {
  render: () => <ColorsPage />,
};
