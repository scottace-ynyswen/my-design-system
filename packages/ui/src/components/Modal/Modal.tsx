import { Modal as RNModal, View, Text, Pressable } from "react-native";
import { cn } from "../../utils/cn";
import { Button } from "../Button";
import type { ModalProps } from "./Modal.types";

export function Modal({
  visible,
  title,
  children,
  variant = "default",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onClose,
  className,
}: ModalProps) {
  return (
    <RNModal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable className="flex-1 bg-mono-black/50 items-center justify-center px-4" onPress={onClose}>
        <Pressable
          className={cn("bg-mono-white rounded-xl w-full max-w-md p-6 gap-4", className)}
          onPress={() => {}}
        >
          <View className="flex-row items-start justify-between gap-4">
            <Text className="font-poppins font-semibold text-[22px] leading-7 text-mono-black flex-1">
              {title}
            </Text>
            <Pressable onPress={onClose} className="mt-1">
              <Text className="text-mono-charcoal text-xl">✕</Text>
            </Pressable>
          </View>
          {children && (
            <Text className="font-poppins text-xl leading-[27px] text-mono-charcoal">
              {typeof children === "string" ? children : null}
            </Text>
          )}
          <View className="flex-row gap-3 justify-end pt-2">
            <Button label={cancelLabel} intent="secondary" size="sm" onPress={onClose} />
            {onConfirm && (
              <Button
                label={confirmLabel}
                intent={variant === "destructive" ? "destructive" : "primary"}
                size="sm"
                onPress={onConfirm}
              />
            )}
          </View>
        </Pressable>
      </Pressable>
    </RNModal>
  );
}
