import { Meta, StoryObj } from "@storybook/react";
import { RatingStar } from "./RatingStar";

const meta = {
  title: "Components/RatingStar",
  component: RatingStar,
  argTypes: {
    rating: {
      type: "number",
      control: {
        type: "range",
        min: 1,
        max: 5
      }
    },
    totalRating: {
      control: false
    }
  }
} satisfies Meta<typeof RatingStar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 5
  }
};
