import axios  from "axios";

const { apiUrl } = `http://172.20.10.2:44377`;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

export default axiosInstance;