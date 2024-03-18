import api from "./API";
import EnvSettings  from "../env";
import * as Keychain from 'react-native-keychain';

export async function GetRoles()
{
    const credentials = await Keychain.getGenericPassword();
    if(credentials)
    {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "GET",
            url: "api/identity/roles",
            baseURL: EnvSettings.HostURL,
            headers: headers
        });
    }
    else {
        return null;
    }
}