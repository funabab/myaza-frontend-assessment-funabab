import { Meta, StoryObj } from "@storybook/react";
import { Testimonial } from "./Testimonial";

const meta = {
  title: "Components/Testimonial",
  component: Testimonial,
  argTypes: {
    rating: {
      type: "number",
      control: {
        type: "range",
        min: 1,
        max: 5
      }
    },
    message: {
      type: "string",
      control: {
        type: "text"
      }
    },
    author: {
      control: false
    }
  }
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 5,
    message: `“I’ve been using Uifry for over a year, and it’s helped simplify all my payments.”`,
    author: {
      name: "Ali Riaz",
      location: "Singapore"
    }
  }
};
