import * as API from "../api";

export const login = async (credentials) => {
  try {
    const response = await API.login(credentials);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
