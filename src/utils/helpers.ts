import { isAxiosError } from "axios";
import process from "process";
import { SITE_URL } from "./constants";

export const getAbsoluteUrl = (path: string) => {
  if (SITE_URL) {
    return `${SITE_URL}${path}`;
  } else if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}${path}`;
  } else {
    return path;
  }
};

export const getErrorMessage = (
  error: unknown,
  fallback = "An unknown error occurred"
) => {
  if (isAxiosError(error)) {
    return error.response?.data?.message || error.message || fallback;
  } else if (error instanceof Error) {
    return error.message;
  }
  return fallback;
};
