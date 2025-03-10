import { Meta, StoryObj } from "@storybook/react";
import { PaymentCard } from "./PaymentCard";

const meta = {
  title: "Components/PaymentCard",
  component: PaymentCard,
  argTypes: {
    expiryDate: {
      control: "text"
    },
    cardNumber: {
      control: {
        type: "text"
      }
    }
  },
  render(args) {
    return <PaymentCard {...args} className="h-49.5" />;
  }
} satisfies Meta<typeof PaymentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amount: "$5,750,20",
    cardNumber: "5282 3456 7890 1289",
    expiryDate: "09/25"
  }
};
