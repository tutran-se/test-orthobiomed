import Axios from "axios";

console.log(process.env.NODE_ENV);
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BACKEND_API_DEV
    : process.env.NEXT_PUBLIC_BACKEND_API_PROD;

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
// axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
