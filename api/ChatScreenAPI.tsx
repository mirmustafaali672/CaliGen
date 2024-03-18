import api from "./API.tsx";
import EnvSettings from "../env.tsx";


export const SendUserMessageToApi = (message: string) => {
   let  params = { message: message }
  return api({
    method: "GET",
    url: "/FileUploaderSaver/SendUserMessageToApi",
    params: { message: message },
    baseURL: EnvSettings.HostURL,
  }).then(({ data }) => data);
};
