import axiosInstance from "../config/axios";

export const API_CALL = ({ method, url, data, token = null }) => {
  const option = {
    method,
    url,
    data,
    // headers: { Authorization: `Bearer ${token}` },
  };
  return axiosInstance(option);
};
const reponse = await API_CALL({
  method: "post",
  data: { firstName: "tu" },
  url: "/users/onboard",
});
