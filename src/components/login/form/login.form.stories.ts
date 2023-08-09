import { Meta, StoryObj } from "@storybook/react";
import LoginForm from "@/components/login/form/login.form";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
