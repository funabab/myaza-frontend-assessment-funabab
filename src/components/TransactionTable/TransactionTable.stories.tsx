import { Meta, StoryObj } from "@storybook/react";
import { TransactionTable } from "./TransactionTable";

const meta = {
  title: "Components/TransactionTable",
  component: TransactionTable,
  argTypes: {
    transactions: {
      control: false
    },
    filter: {
      control: false
    }
  },
  parameters: {
    layout: "fullscreen"
  },
  render(args) {
    return (
      <div className="w-full">
        <TransactionTable {...args} className="w-full" />
      </div>
    );
  }
} satisfies Meta<typeof TransactionTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    transactions: [
      {
        id: "1",
        icon: "https://dummyjson.com/icon/1/150",
        name: "Adobe Affer Effect",
        date: "Sat,20 Apr 2020",
        amount: "$80.09",
        status: "deposited",
        description: "Adobe after Virtual Card top-up"
      },
      {
        id: "2",
        icon: "https://dummyjson.com/icon/2/150",
        name: "McDonald’s",
        date: "Sat,20 Apr 2020",
        amount: "$80.09",
        status: "deposited",
        description: "McDonald’s after Virtual Card top-up"
      },
      {
        id: "3",
        icon: "https://dummyjson.com/icon/3/150",
        name: "Levi",
        date: "Sat,20 Apr 2020",
        amount: "$80.09",
        status: "deposited",
        description: "Levi after Virtual Card top-up"
      },
      {
        id: "4",
        icon: "https://dummyjson.com/icon/4/150",
        name: "Adobe Affer Effect",
        date: "Sat,20 Apr 2020",
        amount: "$80.09",
        status: "deposited",
        description: "Adobe after Virtual Card top-up"
      },
      {
        id: "5",
        icon: "https://dummyjson.com/icon/5/150",
        name: "Levi",
        date: "Sat,20 Apr 2020",
        amount: "$80.09",
        status: "deposited",
        description: "Levi after Virtual Card top-up"
      }
    ]
  }
};
