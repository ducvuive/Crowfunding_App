import axios from "axios";

export const requestAuthRegister = (data) => {
  console.log("requestAuthRegister ~ data:", {
    data,
  });
  return axios.post("/auth/register", { ...data });
};
export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", {
    ...data,
  });
};
