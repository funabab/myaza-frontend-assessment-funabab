import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      type: "string",
      control: "select",
      options: ["primary", "outline", "link"]
    },
    size: {
      type: "symbol",
      control: "select",
      options: ["default", "lg"]
    },
    asChild: {
      control: false
    },
    children: {
      table: {
        disable: true
      }
    }
  },
  args: { onClick: fn(), size: "default" }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "This is a button"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "This is a button"
  }
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "This is a button"
  }
};

export const Large: Story = {
  args: {
    variant: "primary",
    children: "This is a button",
    size: "lg"
  }
};
