import "server-only";
import { getRefreshTokenCookie } from "./cookie";
import { redirect } from "next/navigation";

export const redirectToIfLoggedIn = async (route: string) => {
  const refreshToken = await getRefreshTokenCookie();
  if (refreshToken?.value) {
    redirect(route);
  }
};
