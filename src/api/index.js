import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_WEB_URL });

export const login = (credentials) => API.post("auth/login", credentials);
