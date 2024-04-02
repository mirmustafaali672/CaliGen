import api from './AuthAPI';
import EnvSettings from '../../env';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface loginInterface {
  username: string;
  password: string;
}

export interface UserAuthDataInterface {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

export async function login(loginDetails: loginInterface) {
  const env = await EnvSettings();
  let data = `grant_type=password&scope=${env.oAuthConfig_Scope}&username=${loginDetails.username}&password=${loginDetails.password}&client_id=${env.oAuthConfig_ClientId}`;
  return api({
    method: 'POST',
    url: '/connect/token',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data,
    baseURL: env.authURL,
  });
}

export async function Logout() {
  const env = await EnvSettings();
  const UserAuthData: UserAuthDataInterface = JSON.parse(await AsyncStorage.getItem('UserAuthData') ?? "{}");
  if (UserAuthData) {
    let data = `token=${UserAuthData.access_token}&client_id=${env.oAuthConfig_ClientId}`;
    return api({
      method: 'POST',
      url: '/connect/revocat',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data,
      baseURL: env.authURL,
    });
  }
}

export async function ValidateToken(token: string) {
  const env = await EnvSettings();
  const parmas = {
    token: token,
    client_id: env.oAuthConfig_ClientId,
  };
  return api({
    method: 'GET',
    url: 'connect/introspect',
    baseURL: env.authURL,
    params: parmas,
  });
}

export async function RefreshAccessToken() {
  const env = await EnvSettings();
  const UserAuthData: UserAuthDataInterface = JSON.parse(await AsyncStorage.getItem('UserAuthData') ?? "{}");
  if (UserAuthData) {
    const data = `client_id=${
      env.oAuthConfig_ClientId
    }&grant_type=${'refresh_token'}&refresh_token=${UserAuthData.refresh_token}`;
    return api({
      method: 'POST',
      url: '/connect/token',
      // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data,
      baseURL: env.authURL,
    });
  }
}


