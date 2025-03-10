import { NextRequest, NextResponse } from "next/server";
import { AUTH_REFRESH_TOKEN_COOKIE_NAME } from "./features/Auth/utils/cookie";

export function middleware(request: NextRequest) {
  const refreshTOken = request.cookies.get(AUTH_REFRESH_TOKEN_COOKIE_NAME);

  if (refreshTOken?.value) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/auth/login", request.url), {
    headers: {
      "x-auth-redirect": request.url
    }
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|auth\/login).*)"
  ]
};
