import axios from "axios";
import { BASE_URL, configHeaders } from "./config";

export const userServ = {
  postLogin: (loginForm) => {
    return axios({
      url: `${BASE_URL}/`,
      method: "POST",
      data: loginForm,
      headers: configHeaders(),
    });
  },
};
