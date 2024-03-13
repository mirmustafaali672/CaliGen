import api from "./API";

const HostURL = `http://172.20.10.2:44335`;
const HostConfig = {
  host: HostURL,
  clientId: "FileUploader_Mobile",
  scope: "offline_access FileUploader",
};

export const SendUserMessageToApi = ({ message }) => {
console.log("message")
    params = { message: message }
console.log(params, "params 5");
  return api({
    method: "GET",
    url: "/FileUploaderSaver/SendUserMessageToApi",
    params: { message : message},
    baseURL: HostConfig.host,
  }).then(({ data }) => data);
};
