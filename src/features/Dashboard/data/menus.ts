import { createElement, ReactNode } from "react";
import DashboardIcon from "@/assets/images/dashboard-icon.svg";
import AnalyticsIcon from "@/assets/images/analytics-icon.svg";
import WalletIcon from "@/assets/images/wallet-icon.svg";
import AccountsIcon from "@/assets/images/accounts-icon.svg";
import SettingsIcon from "@/assets/images/settings-icon.svg";
import HelpCenterIcon from "@/assets/images/help-icon.svg";

export type Menu =
  | {
      type: "menu-item";
      segment: string | null;
      href: string;
      label: ReactNode;
      icon?: ReactNode;
    }
  | {
      type: "divider";
    };

export const menus: Menu[] = [
  {
    segment: null,
    type: "menu-item",
    href: "/",
    label: "Dashboard",
    icon: createElement(DashboardIcon)
  },
  {
    segment: "analytics",
    type: "menu-item",
    href: "/analytics",
    label: "Analytics",
    icon: createElement(AnalyticsIcon)
  },
  {
    segment: "my-wallet",
    type: "menu-item",
    href: "/my-wallet",
    label: "My Wallet",
    icon: createElement(WalletIcon)
  },
  {
    segment: "accounts",
    type: "menu-item",
    href: "/accounts",
    label: "Accounts",
    icon: createElement(AccountsIcon)
  },
  {
    segment: "settings",
    type: "menu-item",
    href: "/settings",
    label: "Settings",
    icon: createElement(SettingsIcon)
  },
  {
    type: "divider"
  },
  {
    segment: "help-center",
    type: "menu-item",
    href: "/help-center",
    label: "Help Center",
    icon: createElement(HelpCenterIcon)
  }
];
