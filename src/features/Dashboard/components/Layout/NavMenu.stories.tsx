import { Meta, StoryObj } from "@storybook/react";
import { NavMenu } from "./NavMenu";
import { menus } from "@/features/Dashboard/data/menus";

const meta = {
  title: "Layouts/DashboardLayout/NavMenu",
  component: NavMenu,
  argTypes: {
    menus: {
      control: false
    },
    profile: {
      control: false
    },
    selectedSegment: {
      control: false
    }
  },
  render(args) {
    return <NavMenu {...args} className="h-200 w-73.25" />;
  }
} satisfies Meta<typeof NavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menus: menus,
    selectedSegment: null,
    profile: {
      name: "John Doe",
      email: "jane.doe@example.com",
      role: "Web Developer"
    }
  }
};
