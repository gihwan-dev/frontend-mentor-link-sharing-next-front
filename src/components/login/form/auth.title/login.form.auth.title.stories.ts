import { Meta, StoryObj } from "@storybook/react";
import LoginFormAuthTitle from "@/components/login/form/auth.title/login.form.auth.title";

const meta: Meta<typeof LoginFormAuthTitle> = {
  component: LoginFormAuthTitle,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    title: "Login",
    paragraph: "Add your details below to get back into the app",
  },
};

export const Create: Story = {
  args: {
    title: "Create account",
    paragraph: "Let's get you started sharing your links!",
  },
};
