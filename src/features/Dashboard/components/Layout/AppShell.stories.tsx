import { menus } from "@/features/Dashboard/data/menus";
import { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "./AppShell";

const meta = {
  title: "Layouts/DashboardLayout/AppShell",
  component: AppShell,
  parameters: {
    layout: "fullscreen"
  },
  argTypes: {
    navMenu: {
      control: false
    }
  }
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navMenu: {
      menus,
      selectedSegment: null,
      profile: {
        name: "John Doe",
        email: "jane.doe@example.com",
        role: "Web Developer"
      }
    },
    title: "Welcome Back, Ali 👋",
    subTitle: "Here’s what’s happening with your store today."
  }
};
