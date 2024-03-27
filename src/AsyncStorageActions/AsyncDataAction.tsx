import AsyncStorage from "@react-native-async-storage/async-storage";
import { EnvSettingInterface } from "../interfaces/EnvSettingInterface";

export async function SaveDataToStorage(Key: string, Value: string): Promise<number>
{
    try
    {
        await AsyncStorage.setItem(Key, Value);
        return 1;
    }
    catch(error)
    {
        return 0;
    }
}

export async function GetDataFromStorage(Key: string) : Promise<EnvSettingInterface>
{
    try
    {
        const Value = await AsyncStorage.getItem(Key) ?? '{}';
        return JSON.parse(Value);
    }
    catch(error)
    {
        return JSON.parse('{}');
    }
}