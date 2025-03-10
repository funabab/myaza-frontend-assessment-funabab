import MyWalletContainer from "@/features/Dashboard/containers/MyWalletContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Wallets"
};

export default function MyWalletPage() {
  return <MyWalletContainer />;
}
