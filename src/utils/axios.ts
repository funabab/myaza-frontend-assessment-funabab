import axios from "axios";
import { API_BASE_URL } from "./constants";

export const createAxiosClient = (token?: string) =>
  axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined
    }
  });
