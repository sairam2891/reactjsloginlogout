import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const getPosts = () => {
  return axios.get(API_URL+"posts", { headers: authHeader() });
};

const getUsers = () => {
  return axios.post(API_URL + "user/getUsers",{}, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPosts,
  getUsers,
  getModeratorBoard,
  getAdminBoard,
};