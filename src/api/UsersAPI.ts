import api from "./API";
import EnvSettings from "../../env";
import { CreateUserInterface, UpdateUserInterface } from "../interfaces/UsersInterface";
import { UserAuthDataInterface } from "./AccountAPI";
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
    const UserName: {username: string} = JSON.parse(await AsyncStorage.getItem('UserName') ?? "");
  
    if (UserName) {
        return api({
            method: "GET",
            url: `/api/identity/users/by-username/${UserName.username}`,
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