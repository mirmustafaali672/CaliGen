import api from "./API";
import EnvSettings from "../../env";
import * as Keychain from 'react-native-keychain';

export async function GetRoles(filter: string) {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "GET",
            url: "api/identity/roles",
            baseURL: EnvSettings.HostURL,
            headers: headers,
            params: { filter: filter }
        });
    }
    else {
        return null;
    }
}

export async function CreateRole(data: CreateRoleInterface) {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "POST",
            url: "/api/identity/roles",
            baseURL: EnvSettings.HostURL,
            headers: headers,
            data: data
        })
    }
    else 
    {
        return null;
    }
}

export async function UpdateRole(data:UpdateRoleInterface, id: string) {
    const credentials = await Keychain.getGenericPassword();
    if(credentials) {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "PUT",
            url: `/api/identity/roles/${id}`,
            baseURL: EnvSettings.HostURL,
            headers: headers,
            data: data
        })
    }
    else{
        return null;
    }
}

export async function DeleteRole(id: string) {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "DELETE",
            url: `/api/identity/roles/${id}`,
            baseURL: EnvSettings.HostURL,
            headers: headers
        })
    }
    else {
        return null;
    }
}

export async function GetRoleById(id: string) {
    const credentials = await Keychain.getGenericPassword();
    if(credentials) {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "GET",
            url: `/api/identity/roles/${id}`,
            baseURL: EnvSettings.HostURL,
            headers: headers
        })
    }
    else 
    {
        return null;
    }
}