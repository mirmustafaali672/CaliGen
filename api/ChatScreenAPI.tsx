import api from "./API.tsx";
import EnvSettings from "../env.tsx";


export const SendUserMessageToApi = (message: string) => {
console.log("message", message)
   let  params = { message: message }
console.log(params, "params 6");
  return api({
    method: "GET",
    url: "/FileUploaderSaver/SendUserMessageToApi",
    params: { message: message },
    baseURL: EnvSettings.HostURL,
  }).then(({ data }) => data);
};
