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
