import React from "react";
import type { IconName, IconProps } from "./Icon.types";

const paths: Record<IconName, React.ReactNode> = {
  tick: (
    <path
      d="M5 13L9 17L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  warning: (
    <>
      <path
        d="M12 9v4M12 17h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  date: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M16 2v4M8 2v4M3 10h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="8" cy="15" r="1" fill="currentColor" />
      <circle cx="12" cy="15" r="1" fill="currentColor" />
      <circle cx="16" cy="15" r="1" fill="currentColor" />
    </>
  ),
  price: (
    <>
      <path
        d="M15.5 6.5A4.5 4.5 0 007 9v2.5H5V13h2v2a3 3 0 01-.88 2.12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M5 18h11M5 13h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  toptip: (
    <>
      <path
        d="M9 21h6M12 3a6 6 0 016 6c0 2.5-1.5 4.5-3 5.5V17H9v-2.5C7.5 13.5 6 11.5 6 9a6 6 0 016-6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  notifications: (
    <g transform="translate(1.2 0) scale(1.2)">
      <path d="M14.7192 7.0339C14.7192 3.22033 13.1232 0 9.04434 0C5.05419 0 3.36947 3.13559 3.36947 7.0339C3.36947 12.4576 0 13.4746 0 15.7627H18C18 13.4746 14.7192 12.4576 14.7192 7.0339Z" fill="currentColor" />
      <path d="M9.13301 20C8.42365 20 7.71428 19.7458 7.18227 19.322C6.65025 18.8983 6.29558 18.3051 6.11824 17.6271H12.2365C12.0591 18.3051 11.7044 18.8983 11.1724 19.322C10.5517 19.7458 9.84237 20 9.13301 20Z" fill="currentColor" />
    </g>
  ),
  lock: (
    <path
      d="M17.6693 9.43709V7.52318C17.6693 4.47682 15.1256 2 11.9994 2C8.87331 2 6.33071 4.47682 6.33071 7.52208V9.43598H4V22H20V9.43709H17.6693ZM13.384 18.1755H10.616V13.2638H13.384V18.1755ZM15.4032 9.43709H8.59684V7.52318C8.59684 5.69536 10.1231 4.20861 11.9994 4.20861C13.8758 4.20861 15.402 5.69536 15.402 7.52318V9.43709H15.4032Z"
      fill="currentColor"
    />
  ),
  "chevron-right": (
    <path d="M18.3133 11.985L8.32836 21.97L5 19.3073L12.2618 11.985L5 4.66267L8.32836 2L18.3133 11.985Z" fill="currentColor" />
  ),
  "chevron-left": (
    <g transform="rotate(180 12 12)">
      <path d="M18.3133 11.985L8.32836 21.97L5 19.3073L12.2618 11.985L5 4.66267L8.32836 2L18.3133 11.985Z" fill="currentColor" />
    </g>
  ),
  "chevron-up": (
    <g transform="rotate(-90 12 12)">
      <path d="M18.3133 11.985L8.32836 21.97L5 19.3073L12.2618 11.985L5 4.66267L8.32836 2L18.3133 11.985Z" fill="currentColor" />
    </g>
  ),
  "chevron-down": (
    <g transform="rotate(90 12 12)">
      <path d="M18.3133 11.985L8.32836 21.97L5 19.3073L12.2618 11.985L5 4.66267L8.32836 2L18.3133 11.985Z" fill="currentColor" />
    </g>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M12 8v.5M12 11v5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  "arrow-right": (
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  "arrow-left": (
    <path
      d="M19 12H5M11 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
};

export function Icon({ name, size = 24, className, "aria-label": ariaLabel }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      role={ariaLabel ? "img" : undefined}
      style={{ fill: "none", overflow: "visible", display: "inline-block" }}
    >
      {paths[name]}
    </svg>
  );
}
