import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "142bae17f83fc7ef0a4fe42c1a0ed072",
    language: "ko-KR",
  },
});

export default instance;
