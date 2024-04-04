import axios from 'axios';
import {
  RefreshAccessToken,
  UserAuthDataInterface,
  ValidateToken,
} from './AccountAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../screens/MoreScreenNavigator/RootNavigation';

const apiUrl: string = 'EnvSettings.AuthURL';

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    let callData : UserAuthDataInterface; 
    let UserAuthData: UserAuthDataInterface = JSON.parse(
      (await AsyncStorage.getItem('UserAuthData')) ?? '{}',
    );
    let tokenExpired: boolean = false;
    if (UserAuthData) {
      //Validating access_token to check if expired
      await ValidateToken(UserAuthData.access_token)
        .then(data => {
          if (!data.data.active) {
            tokenExpired = true;
          }
        })
        .catch(error => {});
      if (tokenExpired) {



        /////////////////////////////this refresh logic to be worked on for navigations 
        // // Validating refresh token 
        // await ValidateToken(UserAuthData.refresh_token).then( res => {
        //   if(!res.data.active)
        //   {
        //     RootNavigation.navigate('Login', {UserLoggedIn: false});
        //     return;
        //   }
        // }
        // )


        // if expired getting new refresh token
        await RefreshAccessToken().then((res: any) => {
          callData = res.data;
        });
        AsyncStorage.setItem('UserAuthData', JSON.stringify(callData));
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
