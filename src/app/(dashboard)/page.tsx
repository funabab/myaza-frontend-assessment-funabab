import DashboardHomeContainer from "@/features/Dashboard/containers/DashboardHomeContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
};

export default function DashboardHome() {
  return <DashboardHomeContainer />;
}
