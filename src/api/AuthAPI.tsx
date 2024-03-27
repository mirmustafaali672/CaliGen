import axios from 'axios';

const apiUrl: string = 'EnvSettings.AuthURL';

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

export default axiosInstance;
