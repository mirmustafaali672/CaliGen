import axios from 'axios';
import * as Keychain from 'react-native-keychain';

const apiUrl: string = 'EnvSettings.AuthURL';

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

axiosInstance.interceptors.request.use(
  async  (config: any) =>  {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      config.headers['Authorization'] = `Bearer ${credentials.password}`;
      return config;
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
