import api from './API.tsx';
import EnvSettings from '../../env.tsx';

export async function SendUserMessageToApi(message: string) {
  const env = await EnvSettings();
  let params = {message: message};
  return api({
    method: 'GET',
    url: '/FileUploaderSaver/SendUserMessageToApi',
    params: {message: message},
    baseURL: env.hostURL,
  }).then(({data}) => data);
}
