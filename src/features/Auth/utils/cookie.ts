import "server-only";

import { decodeJwt } from "jose";
import { cookies } from "next/headers";

export const AUTH_REFRESH_TOKEN_COOKIE_NAME = "refresh_token";
export const AUTH_ACCESS_TOKEN_COOKIE = "access_token";

export const authCookieOptions = {
  secure: true,
  httpOnly: true,
  sameSite: "lax"
} as const;

export const getCookieValue = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name);
};

export const setCookieValue = async (
  name: string,
  value: string,
  expires: Date
) => {
  const cookieStore = await cookies();
  return cookieStore.set({
    ...authCookieOptions,
    name,
    value,
    expires
  });
};

export const removeCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.delete({
    ...authCookieOptions,
    name
  });
};

export const setTokenJWTCookie = async (name: string, value: string) => {
  const claims = decodeJwt(value);
  if (!claims.exp) {
    throw new Error("Invalid access token");
  }
  const expires = new Date(claims.exp * 1000);
  return setCookieValue(name, value, expires);
};

export const setAccessTokenJWTCookie = async (value: string) => {
  return setTokenJWTCookie(AUTH_ACCESS_TOKEN_COOKIE, value);
};

export const setRefreshTokenJWTCookie = async (value: string) => {
  return setTokenJWTCookie(AUTH_REFRESH_TOKEN_COOKIE_NAME, value);
};

export const getAccessTokenCookie = async () => {
  return getCookieValue(AUTH_ACCESS_TOKEN_COOKIE);
};

export const getRefreshTokenCookie = async () => {
  return getCookieValue(AUTH_REFRESH_TOKEN_COOKIE_NAME);
};

export const removeAccessTokenCookie = async () => {
  return removeCookie(AUTH_ACCESS_TOKEN_COOKIE);
};
export const removeRefreshTokenCookie = async () => {
  return removeCookie(AUTH_REFRESH_TOKEN_COOKIE_NAME);
};
