import { IDynamicProperty } from './common/dynamic-property';
import { IAddress } from './common/address';
import { Role } from './role';
import { IContact } from './icontact';
import { IOrganization } from './iorganization';
import { ISecurityAccount } from './common/security-account';

export interface IUser {
  storeId: string;
  userName: string;
  phoneNumberConfirmed: boolean;
  email: string;
  emailConfirmed: boolean;
  twoFactorEnabled: boolean;
  isLockedOut: boolean;
  accessFailedCount: number;
  lockoutEnabled: boolean;
  isRegisteredUser: boolean;
  isAdministrator: boolean;
  userType: string;
  userState: number;
  externalLogins: any[];
  contactId: string;
  contact: IContact;
  permissions: string[];
  role: Role;
  roles: Role[];
  dynamicProperties: IDynamicProperty[];
  firstName: string;
  lastName: string;
  name: string;
  IAddress: IAddress;
  addresses: IAddress[];
  id: string;
  fullName: string;
  organizationId: string;
  organization: IOrganization;
  organizationsIds: string[];
  acceptsMarketing: boolean;
  securityAccounts: ISecurityAccount[];
  phoneNumbers: any[];
  emails: string[];
  memberType: string;
  phones: any[];
  groups: any[];
  userGroups: any[];
}


