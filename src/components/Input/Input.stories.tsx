import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  render: (args) => <Input {...args} className="w-96" />
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    placeholder: "Input placeholder"
  }
};

export const Password: Story = {
  argTypes: {
    type: {
      control: false
    }
  },
  args: {
    variant: "default",
    placeholder: "Input placeholder",
    type: "password"
  }
};
