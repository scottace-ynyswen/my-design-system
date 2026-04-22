export type ToastIntent = "success" | "error" | "warning" | "info";

export interface ToastProps {
  message: string;
  intent?: ToastIntent;
  title?: string;
  onDismiss?: () => void;
  className?: string;
}
