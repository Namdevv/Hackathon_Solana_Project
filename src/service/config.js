import axios from "axios";

export const BASE_URL = "";

const TokenData =
  "";

export const configHeaders = () => {
  return {
    TokenData: TokenData,
  };
};
export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaders(),
});