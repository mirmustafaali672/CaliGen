import api from './API';
import EnvSettings from '../../env';

export interface UpdatePermissionInterface {
  permissions: {name: string; isGranted: boolean}[];
}

export async function GetPermissionFromAPI(
  providerKey: string,
  providerName: string,
) {
  const env = await EnvSettings();
    const params = {
      providerKey: providerKey,
      providerName: providerName,
    };
    return api({
      method: 'GET',
      url: `/api/permission-management/permissions`,
      baseURL: env.hostURL,
      params: params,
    });
}

export async function UpdatePermission(
  providerKey: string,
  providerName: string,
  data: UpdatePermissionInterface,
) {
  const env = await EnvSettings();
    const params = {
      providerKey: providerKey,
      providerName: providerName,
    };
    return api({
      method: 'PUT',
      url: `/api/permission-management/permissions`,
      baseURL: env.hostURL,
      data: data,
      params: params,
    });
}
