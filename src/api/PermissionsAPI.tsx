import api from "./API";
import EnvSettings from "../../env";
import * as Keychain from 'react-native-keychain';
import { Path } from "react-native-svg";

export interface UpdatePermissionInterface
{
    permissions: {name:string, isGranted: boolean}[];
}

export async function GetPermissionFromAPI(providerKey: string, providerName: string) 
{
    const env = await EnvSettings();
    const credentials = await Keychain.getGenericPassword();
    if(credentials)
    {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        const params = {
            providerKey: providerKey,
            providerName: providerName
        }
        return api({
            method: "GET",
            url: `/api/permission-management/permissions`,
            baseURL: env.hostURL,
            headers: headers,
            params: params
        })
    }
    else {
        return null;
    }    
}


export async function UpdatePermission(providerKey: string, providerName: string, data: UpdatePermissionInterface) 
{
    const env = await EnvSettings();
    const credentials = await Keychain.getGenericPassword();
    if(credentials)
    {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        const params = {
            providerKey: providerKey,
            providerName: providerName
        }
        return api({
            method: "PUT",
            url: `/api/permission-management/permissions`,
            baseURL: env.hostURL,
            headers: headers,
            data: data,
            params: params
        })
    }
}