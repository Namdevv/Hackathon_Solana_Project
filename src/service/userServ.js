import axios from "axios";
import { BASE_URL, configHeaders } from "./config";

export const userServ = {
  postLogin: (loginForm) => {
    return axios({
      url: `${BASE_URL}/food`,
      method: "GET",
      data: loginForm,
      headers: configHeaders(),
    });
  },
  postSignUp :(signUpForm)=>{
    return axios({
        url: `${BASE_URL}/food`,
        method: "POST",
        data: signUpForm,
        headers: configHeaders(),
    })
  },
};
