import { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";

const meta = {
  title: "Forms/LoginForm",
  parameters: {
    layout: "padded"
  },
  component: LoginForm,
  render: () => (
    <div className="mx-auto max-w-106">
      <LoginForm />
    </div>
  )
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
