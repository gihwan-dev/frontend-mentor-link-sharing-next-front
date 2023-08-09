import LoginTitle from "@/components/login/title/login.title";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoginTitle> = {
  component: LoginTitle,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
