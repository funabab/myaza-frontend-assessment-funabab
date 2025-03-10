import NGNFiatIcon from "@/assets/images/ngn-fiat-icon.svg";
import { Meta, StoryObj } from "@storybook/react";
import { FiatBalanceCard } from "./FiatBalanceCard";

const meta = {
  title: "Components/FiatBalanceCard",
  component: FiatBalanceCard,
  argTypes: {
    icon: {
      control: false
    }
  }
} satisfies Meta<typeof FiatBalanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "NGN Wallet",
    icon: <NGNFiatIcon />,
    balance: "Balance: 245,800.89"
  }
};
