import api from './API';
import EnvSettings from '../../env';
import * as Keychain from 'react-native-keychain';

export async function GetRoles(filter: string) {
  const env = await EnvSettings();
    return api({
      method: 'GET',
      url: 'api/identity/roles',
      baseURL: env.hostURL,
      params: {filter: filter},
    });
}

export async function CreateRole(data: CreateRoleInterface) {
  const env = await EnvSettings();
    return api({
      method: 'POST',
      url: '/api/identity/roles',
      baseURL: env.hostURL,
      data: data,
    });
}

export async function UpdateRole(data: UpdateRoleInterface, id: string) {
  const env = await EnvSettings();
    return api({
      method: 'PUT',
      url: `/api/identity/roles/${id}`,
      baseURL: env.hostURL,
      data: data,
    });
}

export async function DeleteRole(id: string) {
  const env = await EnvSettings();
    return api({
      method: 'DELETE',
      url: `/api/identity/roles/${id}`,
      baseURL: env.hostURL,
    });
}

export async function GetRoleById(id: string) {
  const env = await EnvSettings();
    return api({
      method: 'GET',
      url: `/api/identity/roles/${id}`,
      baseURL: env.hostURL,
    });
}
