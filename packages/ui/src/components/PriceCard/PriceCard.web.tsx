import React from "react";
import { cn } from "../../utils/cn";
import type { PriceCardProduct, PriceCardProps } from "./PriceCard.types";

const productTopBar: Record<PriceCardProduct, string> = {
  motor: "bg-product-motor",
  home:  "bg-product-home",
  van:   "bg-product-van",
};

function TimerIcon() {
  return (
    <div className="flex items-center justify-center bg-mono-black rounded-sm w-4 h-4 p-0.5 shrink-0">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.5" />
        <path d="M6 3.5V6l1.5 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function PriceCard({
  insurerName,
  insurerLogo,
  pricePounds,
  pricePence,
  expiresInDays,
  product = "motor",
  className,
}: PriceCardProps) {
  const pence = String(pricePence).padStart(2, "0");

  return (
    <div className={cn("flex flex-col w-full overflow-hidden", className)}>
      <div className={cn("h-1 w-full shrink-0", productTopBar[product])} />
      <div className="flex items-stretch">
        <div className="flex items-center justify-center bg-surface w-[104px] shrink-0">
          <img
            src={insurerLogo}
            alt={insurerName}
            className="max-w-[72px] max-h-[60px] object-contain"
          />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <div className="bg-mono-midGrey flex items-center px-4 py-[15px]">
            <span className="font-poppins font-bold text-heading text-mono-black">
              £{pricePounds}.
            </span>
            <span className="font-poppins font-semibold text-sm leading-5 text-mono-black self-start mt-1">
              {pence}
            </span>
          </div>
          {expiresInDays !== undefined && (
            <div className="bg-surface border-l border-border flex items-center gap-2 h-9 px-4 py-2">
              <TimerIcon />
              <p className="font-poppins text-sm leading-5 text-mono-black whitespace-nowrap">
                <span className="font-semibold">Expires</span>
                {` in ${expiresInDays} ${expiresInDays === 1 ? "day" : "days"}`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
