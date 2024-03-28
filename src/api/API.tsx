import axios from 'axios';
import {
  RefreshAccessToken,
  UserAuthDataInterface,
  ValidateToken,
} from './AccountAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiUrl: string = 'EnvSettings.AuthURL';

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    let UserAuthData: UserAuthDataInterface = JSON.parse(
      (await AsyncStorage.getItem('UserAuthData')) ?? '{}',
    );
    let tokenExpired: boolean = false;
    if (UserAuthData) {
      await ValidateToken(UserAuthData.access_token)
        .then(data => {
          if (!data.data.active) {
            tokenExpired = true;
          }
        })
        .catch(error => console.log(error));
      if (tokenExpired) {
        await RefreshAccessToken().then((res: any) => {
          AsyncStorage.setItem('UserAuthData', JSON.stringify(res.data));
        });
      }
      UserAuthData = JSON.parse(
        (await AsyncStorage.getItem('UserAuthData')) ?? '{}',
      );
      config.headers['Authorization'] = `Bearer ${UserAuthData.access_token}`;
      return config;
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
