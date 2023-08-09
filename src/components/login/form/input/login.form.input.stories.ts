import LoginFormInput from "@/components/login/form/input/login.form.input";
import { Meta, StoryObj } from "@storybook/react";
import emailIcon from "public/assets/images/icon-email.svg";
import passwordIcon from "public/assets/images/icon-password.svg";

const meta: Meta<typeof LoginFormInput> = {
  component: LoginFormInput,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    icon: emailIcon,
    placeholder: "e.g alex@email.com",
    type: "email",
    label: "Email address",
  },
};

export const Password: Story = {
  args: {
    icon: passwordIcon,
    placeholder: "Enter your password",
    type: "password",
    label: "Password",
  },
};
