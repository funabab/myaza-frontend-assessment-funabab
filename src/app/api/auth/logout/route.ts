import {
  removeAccessTokenCookie,
  removeRefreshTokenCookie
} from "@/features/Auth/utils/cookie";

export const GET = async (req: Request) => {
  await Promise.all([removeAccessTokenCookie(), removeRefreshTokenCookie()]);
  return Response.redirect(new URL("/auth/login", req.url));
};
