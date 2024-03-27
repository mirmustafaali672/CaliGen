import api from './API.tsx';
import EnvSettings from '../../env.tsx';

interface loginInterface {
  username: string;
  password: string;
}

export async function login(loginDetails: loginInterface) {
  const env = await EnvSettings();
  let data = `grant_type=password&scope=${env.oAuthConfig_Scope}&username=${loginDetails.username}&password=${loginDetails.password}&client_id=${env.oAuthConfig_ClientId}`;
  console.log('data', data);
  return api({
    method: 'POST',
    url: '/connect/token',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data,
    baseURL: env.authURL,
  }).then(({data}) => data);
}
