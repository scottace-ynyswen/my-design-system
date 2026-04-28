import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button";

const meta: Meta<typeof Modal> = {
  title: "Documentation/Components/Modals",
  component: Modal,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    variant: { control: "select", options: ["default", "destructive"] },
    visible: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

function ModalDemo({ variant = "default" as "default" | "destructive", title = "Confirm action", body = "Are you sure you want to continue? This action cannot be undone." }) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button label="Open modal" onPress={() => setVisible(true)} />
      <Modal
        visible={visible}
        title={title}
        variant={variant}
        confirmLabel={variant === "destructive" ? "Delete" : "Confirm"}
        cancelLabel="Cancel"
        onClose={() => setVisible(false)}
        onConfirm={() => setVisible(false)}
      >
        {body}
      </Modal>
    </div>
  );
}

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const Destructive: Story = {
  render: () => (
    <ModalDemo
      variant="destructive"
      title="Delete account"
      body="This will permanently delete your account and all associated data. This cannot be undone."
    />
  ),
};

export const NoConfirm: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <div>
        <Button label="Open info modal" intent="secondary" onPress={() => setVisible(true)} />
        <Modal
          visible={visible}
          title="About this feature"
          cancelLabel="Close"
          onClose={() => setVisible(false)}
        >
          This feature allows you to manage your notification preferences across all devices.
        </Modal>
      </div>
    );
  },
};

export const StaticPreview: Story = {
  render: () => (
    <div style={{ position: "relative", width: 480, height: 300 }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(31,31,31,0.5)", borderRadius: 12 }} />
      <Modal
        visible
        title="Confirm action"
        onClose={() => {}}
        onConfirm={() => {}}
        confirmLabel="Confirm"
        cancelLabel="Cancel"
      >
        Are you sure you want to continue? This cannot be undone.
      </Modal>
    </div>
  ),
};
