import axios from "axios";
import { localUserServ } from "./localUserServ";

export const BASE_URL = "https://63b2c9aa5901da0ab36dbd06.mockapi.io";

const TokenData =
  "";

export const configHeaders = () => {
  return {
    TokenData: TokenData,
    Authorization: "bearer" + localUserServ.get()?.accessToken,
        // ? là optional chaining
  };
};
export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaders(),
});