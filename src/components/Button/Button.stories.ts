import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    variant: {
      type: "string",
      control: "select",
      options: ["primary", "outline"]
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

export const Large: Story = {
  args: {
    variant: "primary",
    children: "This is a button",
    size: "lg"
  }
};

export default meta;
