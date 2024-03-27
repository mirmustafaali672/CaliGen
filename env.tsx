import { GetDataFromStorage } from "./src/AsyncStorageActions/AsyncDataAction";
import { EnvSettingInterface } from "./src/interfaces/EnvSettingInterface";

// export const EnvSettings: EnvSettingInterface = {
//     AuthURL: "http://172.20.10.2:44377",
//     HostURL: "http://172.20.10.2:44335",
//     Loaclization_DefaultResourceName: "FileUploader",
//     OAuthConfig_ClientId: "FileUploader_Mobile",
//     OAuthConfig_Scope: "offline_access FileUploader"
// }

export async function EnvSettings(): Promise<EnvSettingInterface> 
{
    const env = await GetDataFromStorage("EnvSettings");
    return env;
}

export default EnvSettings;