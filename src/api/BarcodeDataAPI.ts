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

export async function GetChartTypeData(url: string)
{
  const env = await EnvSettings();
  return api({
    method: 'GET',
    url: url,
    baseURL: env.hostURL
  })
}

export async function GetAreaChartDataForCallCount(elementName: string)
{
  const env = await EnvSettings();
  return api({
    method: 'GET',
    url: `/api/app/barcode-data/area-chart-data-for-call-count?ElementName=${elementName}`,
    baseURL: env.hostURL
  })
}
