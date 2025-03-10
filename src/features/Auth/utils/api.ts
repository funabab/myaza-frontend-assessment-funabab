import { AxiosInstance } from "axios";
import { AuthUserProfile, LoginResponse, Tokens } from "../typings";

export const refreshUserToken = async (
  client: AxiosInstance,
  refreshToken: string
) => {
  const response = await client.post<Tokens>("/auth/refresh", { refreshToken });
  return response.data;
};

export const loginUserWithCredentials = async (
  client: AxiosInstance,
  data: {
    username: string;
    password: string;
  }
) => {
  const response = await client.post<LoginResponse>("/auth/login", data);
  return response.data;
};

export const getUserProfile = async (client: AxiosInstance) => {
  const response = await client.get<AuthUserProfile>("/auth/me");
  return response.data;
};
