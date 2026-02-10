import axios from "axios";

const API = axios.create({
  baseURL: "https://automated-resume-parser.onrender.com",
});

export default API;
