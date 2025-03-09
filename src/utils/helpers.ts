import process from "process";

export const getAbsoluteUrl = (path: string) => {
  if (process.env.SITE) {
    return `${process.env.SITE}${path}`;
  } else if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}${path}`;
  } else {
    return path;
  }
};
