import axios from "axios";

const API = axios.create({
  baseURL: "https://aj-infoteck.vercel.app/"
});

export default API;