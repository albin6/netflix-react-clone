import axios from "axios";
import { BASE_URL } from "./utils/constants";

// Create an Axios instance with default headers
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Set a base URL if you are making multiple requests to the same API
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWEzYWE3MTVhYzNkYTkzOTFlM2NkYWFkZDg1OWI4NiIsIm5iZiI6MTcyNDQ4MTk3NS44Nzg4NTMsInN1YiI6IjY2YzcxMTQxOGMwNTM0YWU4MTUxYjY4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ml3D23nWRGwkic-Z-oZXxaz9tq7xJPxeKUkWbPEx3UA",
    accept: "application/json",
  },
});

export default axiosInstance;
