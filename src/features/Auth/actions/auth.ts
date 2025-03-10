"use server";
import "server-only";

import { createAxiosClient } from "@/utils/axios";
import { getErrorMessage } from "@/utils/helpers";
import {
  removeAccessTokenCookie,
  removeRefreshTokenCookie,
  setAccessTokenJWTCookie,
  setRefreshTokenJWTCookie
} from "../utils/cookie";
import { loginUserWithCredentials } from "../utils/api";

export const loginWithCredentialAction = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const axios = createAxiosClient();
    // dummyjson logins using username and password
    // so we need to convert email to username
    const response = await loginUserWithCredentials(axios, {
      username: data.email.split("@")[0],
      password: data.password
    });
    await Promise.all([
      setAccessTokenJWTCookie(response.accessToken),
      setRefreshTokenJWTCookie(response.refreshToken)
    ]);

    return {
      message: "Login successful"
    };
  } catch (err) {
    return {
      error: getErrorMessage(err)
    };
  }
};

export const logoutAction = async () => {
  try {
    await Promise.all([removeAccessTokenCookie(), removeRefreshTokenCookie()]);
    return {
      message: "Logout successful"
    };
  } catch (err) {
    return {
      error: getErrorMessage(err)
    };
  }
};
