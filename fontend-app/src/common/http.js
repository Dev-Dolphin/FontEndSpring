import axios from 'axios';

axios.defaults.timeout = 30000;
// axios.defaults.timeout = 100;
axios.defaults.timeoutErrorMessage = "timeout";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
export default http ;