"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { AuthUserProfile, Tokens } from "../../typings";
import { createAxiosClient } from "@/utils/axios";
import { refreshUserToken } from "../../utils/api";

export type AuthProviderType = {
  user: Pick<
    AuthUserProfile,
    "id" | "email" | "username" | "firstName" | "lastName" | "role" | "image"
  >;
};

const AuthContext = createContext(null as unknown as AuthProviderType);

export interface AuthWrapperProps {
  tokens: Tokens;
  user: AuthProviderType["user"];
  children: ReactNode;
}

export const useAuthProvider = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthProvider must be used within a AuthProvider");
  }
  return context;
};

export const clientAxios = createAxiosClient();

const AuthProvider = ({ tokens, user, children }: AuthWrapperProps) => {
  const [userToken, setUserToken] = useState<Tokens | null>(() => tokens);

  useEffect(() => {
    if (!userToken) {
      return;
    }

    clientAxios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${userToken.accessToken}`;
      return config;
    });

    clientAxios.interceptors.response.use(undefined, async (error) => {
      if (error.response?.status === 401 && !error._refecting) {
        error._refecting = true;
        const axios = createAxiosClient();
        try {
          const data = await refreshUserToken(axios, userToken.refreshToken);
          setUserToken(data);
        } catch (err) {
          console.log("Error while refreshing token", err);
          setUserToken(null);
          return Promise.reject(error);
        }
        return axios(error);
      } else {
        setUserToken(null);
        return Promise.reject(error);
      }
    });

    return () => {
      clientAxios.interceptors.request.clear();
      clientAxios.interceptors.response.clear();
    };
  }, [userToken]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
