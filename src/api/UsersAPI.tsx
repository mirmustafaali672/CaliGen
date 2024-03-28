import api from "./API.tsx";
import EnvSettings from "../../env.tsx";
import { CreateUserInterface, UpdateUserInterface } from "../interfaces/UsersInterface.tsx";
import { UserAuthDataInterface } from "./AccountAPI.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function GetUsers(filter: string) {
    const env = await EnvSettings();
        return api({
            method: "GET",
            url: "api/identity/users",
            baseURL: env.hostURL,
            params: { filter: filter }
        });
}

export async function GetCurrentUserDetailsByUsername() {
    const env = await EnvSettings();
    const UserAuthData: UserAuthDataInterface = JSON.parse(await AsyncStorage.getItem('UserAuthData') ?? "{}");
  
    if (UserAuthData) {
        return api({
            method: "GET",
            url: `/api/identity/users/by-username/${UserAuthData.token_type}`,
            baseURL: env.hostURL,
        });
    }
    else {
        return null;
    }
}

export async function GetUserById(id: string) {
    const env = await EnvSettings();
        return api({
            method: "GET",
            url: `/api/identity/users/${id}`,
            baseURL: env.hostURL
        })
}



export async function CreateUser(data: CreateUserInterface) {
    const env = await EnvSettings();
        return api({
            method: "POST",
            url: "/api/identity/users",
            baseURL: env.hostURL,
            data: data
        });
}

export async function UpdateUser(data:UpdateUserInterface, id: string) {
    const env = await EnvSettings();
        return api({
            method: "PUT",
            url: `/api/identity/users/${id}`,
            baseURL: env.hostURL,
            data: data
        });
}

export async function DeleteUser(id: string) {
    const env = await EnvSettings();
        return api({
            method: "DELETE",
            url: `/api/identity/users/${id}`,
            baseURL: env.hostURL
        });
}