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


export async function GetUsers(filter:string)
{
    const credentials = await Keychain.getGenericPassword();
    if(credentials)
    {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "GET",
            url: "api/identity/users",
            baseURL: EnvSettings.HostURL,
            headers: headers,
            params: {filter: filter}
        });
    }
    else {
        return null;
    }
}

export async function GetCurrentUserDetailsByUsername()
{
    const credentials = await Keychain.getGenericPassword();
    if(credentials)
    {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "GET",
            url: `/api/identity/users/by-username/${credentials.username}`,
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
        return api({
            method: "POST",
            url: "/api/identity/users",
            baseURL: EnvSettings.HostURL,
            headers: headers,
            data: data
        })
    }
}