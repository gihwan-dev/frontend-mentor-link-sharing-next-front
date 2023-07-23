import { Meta, StoryObj } from "@storybook/react";
import AuthChange from "@/components/login/form/auth.change/auth.change";

const meta: Meta<typeof AuthChange> = {
  component: AuthChange,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginButton: Story = {
  args: {
    mode: "login",
  },
};

export const CreateButton: Story = {
  args: {
    mode: "create",
  },
};
