export interface UsersInterface {
  items: Item[];
  totalCount: number;
}
interface Item {
  accessFailedCount: number;
  concurrencyStamp: string;
  creationTime: string;
  creatorId?: string;
  email: string;
  emailConfirmed: boolean;
  extraProperties: any[] | string;
  id: string;
  isActive: boolean;
  isLockedOut: boolean;
  lastModificationTime: string;
  lastModifierId: string;
  lastPasswordChangeTime: string;
  lockoutEnabled: boolean;
  lockoutEnd?: any;
  name: string;
  phoneNumber?: string;
  phoneNumberConfirmed: boolean;
  roleNames: any[];
  shouldChangePasswordOnNextLogin: boolean;
  supportTwoFactor: boolean;
  surname?: string;
  tenantId?: any;
  twoFactorEnabled: boolean;
  userName: string;
}

export interface CurrentUserDetailsInterface {
  accessFailedCount: number;
  concurrencyStamp: string;
  creationTime: string;
  creatorId?: any;
  email: string;
  emailConfirmed: boolean;
  extraProperties: any;
  id: string;
  isActive: boolean;
  isLockedOut: boolean;
  lastModificationTime: string;
  lastModifierId: string;
  lastPasswordChangeTime: string;
  lockoutEnabled: boolean;
  lockoutEnd: string;
  name: string;
  phoneNumber?: any;
  phoneNumberConfirmed: boolean;
  roleNames?: any;
  shouldChangePasswordOnNextLogin: boolean;
  supportTwoFactor: boolean;
  surname?: any;
  tenantId?: any;
  twoFactorEnabled: boolean;
  userName: string;
}

export interface UserDetailsInterface {
  accessFailedCount: number;
  concurrencyStamp: string;
  creationTime: string;
  creatorId: string;
  email: string;
  emailConfirmed: boolean;
  extraProperties: ExtraProperties;
  id: string;
  isActive: boolean;
  isLockedOut: boolean;
  lastModificationTime: string;
  lastModifierId: string;
  lastPasswordChangeTime: string;
  lockoutEnabled: boolean;
  lockoutEnd?: any;
  name: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  roleNames: any[];
  shouldChangePasswordOnNextLogin: boolean;
  supportTwoFactor: boolean;
  surname: string;
  tenantId?: any;
  twoFactorEnabled: boolean;
  userName: string;
}
interface ExtraProperties {}

export interface CreateUserInterface {
  userName: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
  shouldChangePasswordOnNextLogin: boolean;
  lockoutEnabled: boolean;
  roleNames: string[];
  organizationUnitIds: string[];
  password: string;
  sendConfirmationEmail: boolean;
}

export interface UpdateUserInterface {
  userName: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
  shouldChangePasswordOnNextLogin: boolean;
  lockoutEnabled: boolean;
  roleNames: string[];
  organizationUnitIds: string[];
  concurrencyStamp: string;
}
