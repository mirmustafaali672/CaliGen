import api from "./API.tsx";
import EnvSettings from "../env.tsx";

import * as Keychain from 'react-native-keychain';
import { CreateUserInterface } from "./interfaces/CreateUserInterface.tsx";

// const HostURL = `http://172.20.10.2:44335`;
// const HostConfig = {
//   host: HostURL,
//   clientId: "FileUploader_Mobile",
//   scope: "offline_access FileUploader",
// };


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
            baseURL: EnvSettings.HostURL,
            headers: headers
        });
    }
    else {
        return null;
    }
}

export async function CreateUser( data: CreateUserInterface)
{
    const credentials = await Keychain.getGenericPassword();
    if(credentials)
    {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        console.log("at create user api ");
        return api({
            method: "POST",
            url: "/api/identity/users",
            baseURL: EnvSettings.HostURL,
            headers: headers,
            data: data
        })
    }
}