import axios  from "axios";
import EnvSettings from "../../env";

const  apiUrl: string = EnvSettings.AuthURL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

export default axiosInstance;