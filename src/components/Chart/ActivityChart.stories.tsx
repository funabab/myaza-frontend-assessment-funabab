import { Meta, StoryObj } from "@storybook/react";
import { ActivityChart } from "./ActivityChart";

const meta = {
  title: "Components/Charts/ActivityChart",
  component: ActivityChart,
  argTypes: {
    data: {
      control: false
    }
  },
  render: (args) => {
    return (
      <div className="relative h-130 w-130">
        <ActivityChart {...args} width="100%" height="100%" />
      </div>
    );
  }
} satisfies Meta<typeof ActivityChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      { name: "Daily payment", value: 55, color: "#7B5EFF" },
      { name: "Hobby", value: 35, color: "#5ECFFF" },
      { name: "Remaining", value: 15, color: "#3A3A5A" }
    ]
  }
};
