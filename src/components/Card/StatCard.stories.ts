import { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./StatCard";
import { createElement } from "react";
import StatsArrowDownIcon from "@/assets/images/stats-arrow-down-icon.svg";

const meta = {
  title: "Components/StatCard",
  component: StatCard,
  argTypes: {}
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: createElement(StatsArrowDownIcon),
    rate: "+1.29%",
    status: "success",
    title: "Total Income",
    value: "$632.000"
  }
};
