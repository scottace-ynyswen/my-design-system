export type ModalVariant = "default" | "destructive";

export interface ModalProps {
  visible: boolean;
  title: string;
  children?: React.ReactNode;
  variant?: ModalVariant;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onClose: () => void;
  className?: string;
}
