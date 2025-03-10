"use client";
import { AppShell } from "@/features/Dashboard/components/Layout/AppShell";
import {
  defaultLayoutMetadata,
  layoutMetadata
} from "@/features/Dashboard/data/layout-metadata";
import { menus } from "@/features/Dashboard/data/menus";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";

export interface DashboardLayoutProps {
  children?: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const metadata =
    layoutMetadata.find((meta) => meta.segment === selectedLayoutSegment) ||
    defaultLayoutMetadata;

  return (
    <AppShell
      title={metadata?.title}
      subTitle={metadata?.subTitle}
      navMenu={{
        menus,
        selectedSegment: selectedLayoutSegment,
        profile: {
          name: "John Doe",
          email: "jane.doe@example.com",
          role: "Web Developer"
        }
      }}
    >
      {children}
    </AppShell>
  );
}
