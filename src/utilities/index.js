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
        console.log(data.data);
        return data.data;
      })
      .catch((err) => console.log(err));
  },
  getCategory: () => {
    return axios
      .get(`${url}/category`)
      .then((data) => {
        console.log(data.data.category);
        return data.data.category;
      })
      .catch((err) => console.log(err));
  },
};
