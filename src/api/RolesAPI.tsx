import api from "./API";
import EnvSettings from "../../env";
import * as Keychain from 'react-native-keychain';

export async function GetRoles(filter: string) {
    const env = await EnvSettings();
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "GET",
            url: "api/identity/roles",
            baseURL: env.hostURL,
            headers: headers,
            params: { filter: filter }
        });
    }
    else {
        return null;
    }
}

export async function CreateRole(data: CreateRoleInterface) {
    const env = await EnvSettings();
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "POST",
            url: "/api/identity/roles",
            baseURL: env.hostURL,
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
    const env = await EnvSettings();
    const credentials = await Keychain.getGenericPassword();
    if(credentials) {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "PUT",
            url: `/api/identity/roles/${id}`,
            baseURL: env.hostURL,
            headers: headers,
            data: data
        })
    }
    else{
        return null;
    }
}

export async function DeleteRole(id: string) {
    const env = await EnvSettings();
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "DELETE",
            url: `/api/identity/roles/${id}`,
            baseURL: env.hostURL,
            headers: headers
        })
    }
    else {
        return null;
    }
}

export async function GetRoleById(id: string) {
    const env = await EnvSettings();
    const credentials = await Keychain.getGenericPassword();
    if(credentials) {
        const headers = {
            Authorization: 'Bearer ' + credentials.password
        }
        return api({
            method: "GET",
            url: `/api/identity/roles/${id}`,
            baseURL: env.hostURL,
            headers: headers
        })
    }
    else 
    {
        return null;
    }
}