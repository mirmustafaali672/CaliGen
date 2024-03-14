import api from "./API";

import * as Keychain from 'react-native-keychain';

const HostURL = `http://172.20.10.2:44335`;
const HostConfig = {
  host: HostURL,
  clientId: "FileUploader_Mobile",
  scope: "offline_access FileUploader",
};


export async function GetCurrentUserDetailsByUsername()
{
    const credentials = await Keychain.getGenericPassword();
    if(credentials)
    {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        console.log("at api call");
        return api({
            method: "GET",
            url: "/api/identity/users/by-username/admin",
            baseURL: HostConfig.host,
            headers: headers
        });
    }
    else {
        return null;
    }
}