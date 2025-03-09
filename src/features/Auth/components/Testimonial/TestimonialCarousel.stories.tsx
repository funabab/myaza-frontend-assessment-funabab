import { Meta, StoryObj } from "@storybook/react";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { TestimonialProps } from "./Testimonial";

const testimonial: TestimonialProps = {
  rating: 5,
  message: `“I’ve been using Uifry for over a year, and it’s helped simplify all my payments.”`,
  author: {
    name: "Ali Riaz",
    location: "Singapore"
  }
};

const meta = {
  title: "Components/Testimonial",
  component: TestimonialCarousel,
  argTypes: {
    testimonials: {
      control: false
    }
  },
  render(args) {
    return (
      <div className="w-150.5">
        <TestimonialCarousel {...args} />
      </div>
    );
  }
} satisfies Meta<typeof TestimonialCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Carousel: Story = {
  args: {
    testimonials: [testimonial, testimonial, testimonial]
  }
};
