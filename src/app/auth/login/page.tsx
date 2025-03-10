import LoginContainer from "@/features/Auth/containers/LoginContainer";
import { redirectToIfLoggedIn } from "@/features/Auth/utils/helpers";
import { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Login"
};

export default async function LoginPage() {
  const getHeaders = await headers();
  const redirectUrlAfterLogin = getHeaders.get("x-auth-redirect") || "/";

  await redirectToIfLoggedIn("/");

  return <LoginContainer redirectUrlAfterLogin={redirectUrlAfterLogin} />;
}
