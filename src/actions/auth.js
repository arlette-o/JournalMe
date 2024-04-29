import * as API from "../api";

export const login = async (credentials) => {
  try {
    const response = await API.login(credentials);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

export const createAccount = async (userInfo) => {
  try {
    const response = await API.createAccount(userInfo);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
