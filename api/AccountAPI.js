import api from "./API";

const authoUrl = `http://172.20.10.2:44377`;
const oAuthConfig = {
  issuer: authoUrl,
  clientId: "FileUploader_Mobile",
  scope: "offline_access FileUploader",
};

export const login = ({ username, password }) => {
  let data = `grant_type=password&scope=${oAuthConfig.scope}&username=${username}&password=${password}&client_id=${oAuthConfig.clientId}`;
//   if (oAuthConfig.clientSecret) {
//     data += `&client_secret=${oAuthConfig.clientSecret}`;
//   }
  return api({
    method: "POST",
    url: "/connect/token",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data,
    baseURL: oAuthConfig.issuer,
  }).then(({ data }) => data);
};
