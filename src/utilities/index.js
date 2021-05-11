const axios = require("axios");
const url = "https://problem.comento.kr/api";

export const Fetches = {
  getPosts: (page, limit, ord = "asc", category) => {
    return axios
      .get(`${url}/list`, {
        params: { page, limit, ord, category },
        header: { Accept: "application/json" },
      })
      .then((data) => {
        return data.data.data;
      })
      .catch((err) => console.log(err));
  },
  getCategory: () => {
    return axios
      .get(`${url}/category`)
      .then((data) => {
        return data.data.category;
      })
      .catch((err) => console.log(err));
  },
  getAds: (page, limit) => {
    return axios
      .get(`${url}/ads`, {
        params: { page, limit },
        header: { Accept: "application/json" },
      })
      .then((data) => {
        return data.data.data;
      })
      .catch((err) => console.log(err));
  },
};
