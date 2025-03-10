import { redirect } from "next/navigation";
import "server-only";
import { getRefreshTokenCookie } from "./cookie";

export const redirectToIfLoggedIn = async (route: string) => {
  const refreshToken = await getRefreshTokenCookie();
  if (refreshToken?.value) {
    redirect(route);
  }
};
