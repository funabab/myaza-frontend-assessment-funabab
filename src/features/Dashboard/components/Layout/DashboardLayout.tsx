"use client";
import { useAuthProvider } from "@/features/Auth/components/Providers/AuthProvider";
import { AppShell } from "@/features/Dashboard/components/Layout/AppShell";
import { menus } from "@/features/Dashboard/data/menus";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode, useMemo } from "react";

export interface DashboardLayoutProps {
  children?: ReactNode;
}

export type LayoutMetadata = {
  segment: string | null;
  title: string;
  subTitle: string;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user } = useAuthProvider();

  const layoutMetadata: LayoutMetadata[] = useMemo(
    () => [
      {
        segment: null,
        title: `Welcome Back, ${user.firstName} 👋`,
        subTitle: "Here’s what’s happening with your store today."
      },
      {
        segment: "my-wallet",
        title: "My Wallets",
        subTitle: "Manage all your wallets from here"
      }
    ],
    [user.firstName]
  );

  const selectedLayoutSegment = useSelectedLayoutSegment();
  const metadata =
    layoutMetadata.find((meta) => meta.segment === selectedLayoutSegment) ||
    layoutMetadata[0];

  return (
    <AppShell
      title={metadata?.title}
      subTitle={metadata?.subTitle}
      navMenu={{
        menus,
        selectedSegment: selectedLayoutSegment,
        profile: {
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          role: user.role
        }
      }}
    >
      {children}
    </AppShell>
  );
}
