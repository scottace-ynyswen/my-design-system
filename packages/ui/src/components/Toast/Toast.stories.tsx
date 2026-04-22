import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import { Button } from "../Button";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: { layout: "centered" },
  argTypes: {
    intent: { control: "select", options: ["success", "error", "warning", "info"] },
  },
  args: { message: "Action completed successfully.", intent: "success" },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Playground: Story = {};

export const Success: Story = {
  args: { intent: "success", title: "Success", message: "Your changes have been saved." },
};

export const Error: Story = {
  args: { intent: "error", title: "Error", message: "Something went wrong. Please try again." },
};

export const Warning: Story = {
  args: { intent: "warning", title: "Warning", message: "Your session is about to expire." },
};

export const Info: Story = {
  args: { intent: "info", title: "Info", message: "A new version is available." },
};

export const Dismissible: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <Toast
        intent="success"
        title="Saved"
        message="Your profile has been updated."
        onDismiss={() => setVisible(false)}
      />
    ) : (
      <Button label="Show toast" onPress={() => setVisible(true)} />
    );
  },
};

export const AllIntents: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      <Toast intent="success" title="Success" message="Changes saved successfully." onDismiss={() => {}} />
      <Toast intent="error"   title="Error"   message="Failed to save changes." onDismiss={() => {}} />
      <Toast intent="warning" title="Warning" message="Session expires in 5 minutes." onDismiss={() => {}} />
      <Toast intent="info"    title="Info"    message="New version available." onDismiss={() => {}} />
    </div>
  ),
};
