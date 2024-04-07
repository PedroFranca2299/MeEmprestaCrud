import axios from "axios";

const instance = axios.create({
  baseURL: "localhost:8000/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default instance;
