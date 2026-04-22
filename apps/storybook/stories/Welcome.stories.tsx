import type { Meta, StoryObj } from "@storybook/react";

function Welcome() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold text-gray-900">Design System</h1>
      <p className="text-gray-500 text-sm">
        Components will appear in the sidebar as they are built.
      </p>
    </div>
  );
}

const meta: Meta<typeof Welcome> = {
  title: "Welcome",
  component: Welcome,
};

export default meta;

export const Default: StoryObj<typeof Welcome> = {};
