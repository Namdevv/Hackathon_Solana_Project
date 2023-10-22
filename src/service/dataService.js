import axios from "axios";
import { BASE_URL, configHeaders, https } from "./config";

export const movieServ = {
  getMovieList: () => {
    return https.get("/");
  },
  getMovieByTheater: () => {
    return https.get(`${BASE_URL}/`);
  },
  getDetailMovie: () => {
    return https.get(`/`);
  },
};

// axios instance