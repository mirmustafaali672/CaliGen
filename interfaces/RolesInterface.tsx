interface RolesInterface {
    items: Item[];
    totalCount: number;
  }
  interface Item {
    extraProperties: ExtraProperties;
    id: string;
    name: string;
    isDefault: boolean;
    isStatic: boolean;
    isPublic: boolean;
    userCount: number;
    concurrencyStamp: string;
  }
  interface ExtraProperties {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  }