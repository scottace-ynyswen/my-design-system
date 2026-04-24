import React, { useState } from "react";
import { cn } from "../../utils/cn";
import type { SliderFieldProps } from "./SliderField.types";

// Inject thumb + track styles once into the document head
if (typeof document !== "undefined") {
  const id = "ds-slider-styles";
  if (!document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = `
      .ds-slider { height: 6px; }
      .ds-slider::-webkit-slider-runnable-track { height: 6px; }
      .ds-slider::-moz-range-track { height: 6px; }
      .ds-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 30px; height: 30px;
        border-radius: 50%;
        background: #ffffff;
        border: 2px solid #1f1f1f;
        cursor: pointer;
        margin-top: -12px;
      }
      .ds-slider:focus::-webkit-slider-thumb { box-shadow: 0 0 0 4px #58AAE0; }
      .ds-slider::-moz-range-thumb {
        width: 30px; height: 30px;
        border-radius: 50%;
        background: #ffffff;
        border: 2px solid #1f1f1f;
        cursor: pointer;
      }
      .ds-slider:focus::-moz-range-thumb { box-shadow: 0 0 0 4px #58AAE0; }
    `;
    document.head.appendChild(el);
  }
}

function defaultFormat(value: number): string {
  return `£${value.toLocaleString("en-GB")}`;
}

export function SliderField({
  question,
  bodyText,
  min = 500,
  max = 50000,
  step = 500,
  value,
  onChange,
  formatValue = defaultFormat,
  className,
}: SliderFieldProps) {
  const defaultValue = Math.round((min + max) / 2 / step) * step;
  const [internal, setInternal] = useState(defaultValue);

  const controlled = value !== undefined;
  const current = controlled ? value : internal;
  const percent = ((current - min) / (max - min)) * 100;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = Number(e.target.value);
    if (!controlled) setInternal(v);
    onChange?.(v);
  }

  return (
    <div className={cn("flex flex-col gap-4 items-start", className)}>
      <h2 className="font-poppins font-semibold text-[22px] leading-7 text-mono-black">
        {question}
      </h2>

      {bodyText && (
        <p className="font-poppins font-normal text-[18px] leading-[26px] text-mono-black">
          {bodyText}
        </p>
      )}

      {/* Current value — matches SelectField box height and border */}
      <div className="w-[360px] h-[50px] border-2 border-mono-black bg-white flex items-center px-4">
        <span className="font-poppins font-semibold text-[22px] leading-7 text-mono-black">
          {formatValue(current)}
        </span>
      </div>

      {/* Track + thumb */}
      <div className="w-[360px] flex flex-col gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          onChange={handleChange}
          aria-label={question}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={current}
          aria-valuetext={formatValue(current)}
          className="ds-slider w-full appearance-none bg-transparent cursor-pointer focus:outline-none"
          style={{
            background: `linear-gradient(to right, #1f1f1f ${percent}%, #d4d4d4 ${percent}%)`,
          }}
        />
        <div className="flex justify-between">
          <span className="font-poppins font-normal text-base text-mono-charcoal">
            {formatValue(min)}
          </span>
          <span className="font-poppins font-normal text-base text-mono-charcoal">
            {formatValue(max)}
          </span>
        </div>
      </div>
    </div>
  );
}
