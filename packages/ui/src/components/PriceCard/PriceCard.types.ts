export type PriceCardProduct = "motor" | "home" | "van";

export interface PriceCardProps {
  insurerName: string;
  insurerLogo: string;
  pricePounds: number;
  pricePence: number;
  expiresInDays?: number;
  product?: PriceCardProduct;
  className?: string;
}
