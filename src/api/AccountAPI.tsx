import api from "./API.tsx";
import EnvSettings from "../../env.tsx";

// const authoUrl = `http://172.20.10.2:44377`;
// const oAuthConfig = {
//   issuer: authoUrl,
//   clientId: "FileUploader_Mobile",
//   scope: "offline_access FileUploader",
// };
interface loginInterface {
  username: string, 
  password: string
}

export async function login( loginDetails: loginInterface ){
  let data = `grant_type=password&scope=${EnvSettings.OAuthConfig_Scope}&username=${loginDetails.username}&password=${loginDetails.password}&client_id=${EnvSettings.OAuthConfig_ClientId}`;
  return api({
    method: "POST",
    url: "/connect/token",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data,
    baseURL: EnvSettings.AuthURL,
  }).then(({ data }) => data);
};
