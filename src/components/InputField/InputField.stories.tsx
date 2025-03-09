import { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta = {
  title: "Components/InputField",
  component: InputField,
  render: (args) => (
    <InputField {...args} input={{ ...args.input, className: "w-96" }} />
  ),
  argTypes: {
    error: {
      type: "string"
    },
    input: {
      control: false
    }
  }
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    input: {
      placeholder: "Input placeholder"
    }
  }
};

export const WithErrorMessage: Story = {
  args: {
    label: "Label",
    input: {
      placeholder: "Input placeholder"
    },
    error: "Error message"
  }
};
