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
interface RolesDetailsInterface {
  extraProperties: ExtraProperties;
  id: string;
  name: string;
  isDefault: boolean;
  isStatic: boolean;
  isPublic: boolean;
  userCount: number;
  concurrencyStamp: string;
}
interface CreateRoleInterface {
  name: string;
  isDefault: boolean;
  isPublic: boolean;
}

interface UpdateRoleInterface {
  name: string;
  isDefault: boolean;
  isPublic: boolean;
  concurrencyStamp: string;
}
