import api from './API';
import EnvSettings from '../../env';

export async function GetReportingData(url: string) {
  const env = await EnvSettings();
  return api({
    method: 'GET',
    url: url,
    baseURL: env.hostURL,
  });
}
