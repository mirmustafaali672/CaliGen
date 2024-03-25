import api from "./API";
import EnvSettings from "../../env";
import * as Keychain from 'react-native-keychain';

export async function GetRolesPermissionById(providerKey: string, providerName: string) 
{
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
            baseURL: EnvSettings.HostURL,
            headers: headers,
            params: params
        })
    }
    else {
        return null;
    }    
}

export async function GetAllClaimTypes() 
{
    const credentials = await Keychain.getGenericPassword();
    if(credentials)
    {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "GET",
            url: `api/identity/claim-types`,
            baseURL: EnvSettings.HostURL,
            headers: headers,
        })
    }
    else {
        return null;
    }    
}