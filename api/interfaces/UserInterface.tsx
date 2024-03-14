export interface CurrentUserDetailsInterface =  {
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