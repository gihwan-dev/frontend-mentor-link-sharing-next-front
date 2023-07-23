import { Meta, StoryObj } from "@storybook/react";
import LoginFormButton from "@/components/login/form/button/login.form.button";

const meta: Meta<typeof LoginFormButton> = {
  component: LoginFormButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    content: "Login",
  },
};

export const Create: Story = {
  args: {
    content: "Create new account",
  },
};
