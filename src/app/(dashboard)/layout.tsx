import { AuthProvider } from "@/features/Auth/components/Providers/AuthProvider";
import { getUserProfile, refreshUserToken } from "@/features/Auth/utils/api";
import { getRefreshTokenCookie } from "@/features/Auth/utils/cookie";
import DashboardLayout from "@/features/Dashboard/components/Layout/DashboardLayout";
import { createAxiosClient } from "@/utils/axios";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export interface DashboardRootLayoutProps {
  children?: ReactNode;
}

export default async function DashboardRootLayout({
  children
}: DashboardRootLayoutProps) {
  try {
    const refreshToken = await getRefreshTokenCookie();
    if (!refreshToken?.value) {
      throw new Error("No refresh token found");
    }

    const axios = createAxiosClient(refreshToken.value);
    const tokens = await refreshUserToken(axios, refreshToken.value);
    const user = await getUserProfile(createAxiosClient(tokens.accessToken));

    return (
      <AuthProvider
        tokens={tokens}
        user={{
          email: user.email,
          firstName: user.firstName,
          id: user.id,
          lastName: user.lastName,
          role: user.role,
          username: user.username,
          image: user.image
        }}
      >
        <DashboardLayout>{children}</DashboardLayout>
      </AuthProvider>
    );
  } catch (e) {
    console.error(e);
    redirect("/api/auth/logout");
  }
}
