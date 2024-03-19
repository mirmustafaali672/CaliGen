interface UpdateUserInterface {
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
  interface ExtraProperties {
  }