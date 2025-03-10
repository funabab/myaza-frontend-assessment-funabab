import { Meta, StoryObj } from "@storybook/react";
import { AnalyticsChart } from "./AnalyticsChart";

const meta = {
  title: "Components/Charts/AnalyticsChart",
  component: AnalyticsChart,
  argTypes: {
    data: {
      control: false
    }
  },
  render: (args) => {
    return (
      <div className="relative h-100 w-135">
        <AnalyticsChart {...args} width="100%" height="100%" />
      </div>
    );
  }
} satisfies Meta<typeof AnalyticsChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      { month: "Jan", income: 35000, outcome: 25000 },
      { month: "Feb", income: 26000, outcome: 33000 },
      { month: "Mar", income: 29000, outcome: 22000 },
      { month: "Apr", income: 35000, outcome: 26000 },
      { month: "May", income: 40000, outcome: 33000 },
      { month: "Jun", income: 22000, outcome: 27000 },
      { month: "Jul", income: 22000, outcome: 27000 },
      { month: "Aug", income: 22000, outcome: 27000 },
      { month: "Oct", income: 35000, outcome: 25000 },
      { month: "Nov", income: 26000, outcome: 33000 },
      { month: "Dec", income: 29000, outcome: 22000 }
    ],
    year: new Date().getFullYear().toString()
  }
};
