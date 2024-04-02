interface PermissionInterface {
  entityDisplayName: string;
  groups: Group[];
}
interface Group {
  name: string;
  displayName: string;
  displayNameKey?: string;
  displayNameResource?: string;
  permissions: Permission[];
}
interface Permission {
  name: string;
  displayName: string;
  parentName?: (null | string)[];
  isGranted: boolean;
  allowedProviders: any[];
  grantedProviders: GrantedProvider[];
}
interface GrantedProvider {
  providerName: string;
  providerKey: string;
}
