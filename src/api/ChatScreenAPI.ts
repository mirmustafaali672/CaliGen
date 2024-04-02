import api from './API';
import EnvSettings from '../../env';

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
