import { AccessScope, AccessStatementEntity } from './enum-const';
import {IApprovalRule, IPersonContactInfo, ISocial} from './type-apps';
import {
  ICompanyByGapp,
  ICompanyEntityImmu,
  ICompanyPublicEntity,
  ICompanyPublicEntityImmu,
  IDBCompanyEntity,
  IDBCompanySupplierEntity
} from './type-company';

export type TUserRole = 'owner' | 'admin' | 'staff' | 'user';
export type TApproverRole = 'reviewer' | 'approver' | 'none';
export type TApproverFlow = 'reviewer' | 'approver' | 'none';
export type TBusinessSize = 'micro' | 'small' | 'medium' | 'large' | 'none';
export type TBusinessTypes = 'manufacturer' | 'wholesaler' | 'retailer';
export type TGender = 'male' | 'female' | 'neutral';

/**
 * BUSINESS
 */
// --------------------------------
// REVIEW: BUSINESS
// --------------------------------
// ANCHOR: BUSINESS | Entity (1/2)
export interface IBusinessEntityImmu {
  businessId: string; // * === tenantId
  useAsCompany: boolean; // ? default = false // TODO: immu?
}
// ANCHOR: BUSINESS | Entity (2/2)
export interface IBusinessEntity {
  businessName: string;
  businessCategoryId: string; // * <-- include other id = OTHER000
  businessCategoryCustomName?: string;
  businessLogoUrl: string; // * empty on create
  businessLogoThumbUrl: string; 
  businessTypes: TBusinessTypes[];
  businessSize: TBusinessSize;
  website: string;
  interests: string[];
}

// --------------------------------
// REVIEW: BUSINESS OWNER
// --------------------------------
// ANCHOR: BUSINESS | OWNER Entity (1/2)
export interface IBusinessOwnerIdentityImmu {
  identityId: string;
  email: string; // TODO: check cognito cred
  cognitoUsername: string;
}

// ANCHOR: BUSINESS | OWNER Entity (2/2)
export interface IBusinessOwnerIdentity {
  phone: string;
  ownerName: string;
  avatarThumbUrl: string;
}

export interface IBusinessOwnerData {
  avatarImageUrl: string;
  nickname: string;
  birthDate: string;
  social: ISocial;
  companyDept: string;
  companyPosition: string;
  personalCode: string;
}

// --------------------------------
//
// --------------------------------

export interface IAccessStatement {
  entity: AccessStatementEntity;
  permission: IPermission;
}

export interface IPermission {
  create: boolean | null;
  read: boolean | null;
  list: boolean | null
  update: boolean | null;
  delete: boolean | null;
  manage: boolean | null;
}

export interface IAccessScope {
  scope: AccessScope;
  statement: IAccessStatement[];
}

// ANCHOR: USER
export interface IUserAccessPolicy {
  accessPolicy: IAccessScope[];
}

export interface IUserRole {
  roleName: string;
  roleType: string;
  roleDescription: string;
  canApproveRole: boolean;
  approveRoleId: IUserRoleImmu[];
  isDefault: boolean;
}

export interface IUserRoleImmu {
  roleId: string;
}




// --------------------------------
// REVIEW: BUSINESS USER ()
// --------------------------------
// ANCHOR: BUSINESS | USER (1/4)
export interface IBusinessUserIdentityImmu {
  email: string; // TODO: check cognito cred
  mobile: string;
  userRole: TUserRole;
  identityId: string; // * from cognito
  businessId: string;
  username: string; // * for check with cognitoIdentityId on REQ
  hasArchived: boolean;
}

// ANCHOR: BUSINESS | USER (2/4)
export interface IBusinessUserIdentity {
  fullName: string;
  roleId: string;
  penName: string; // TODO: check cognito
  businessDept: string;
  businessPosition: string;
}

// ANCHOR: BUSINESS | USER (3/4)
export interface IDBBusinessUserIdentityStatus {
  isActive: boolean;
}

// ANCHOR: BUSINESS | USER (4/4)
export interface IDBBusinessUserIdentity {
  wasConfirmedByFirstLogin: boolean // ? TODO: update to TRUE on first login (force change password)
  companies: string[]; // * as Set on DB
  historyCountOnCompany?: number; // * -> DB on ADMIN
  historyCountOnAdmin?: number; // * -> DB on STAFF
}

// --------------------------------
// REVIEW: COMPANY USER
// --------------------------------
// ANCHOR: COMPANY | USER (1/6)
export interface IBusinessCompanyUserIdentityImmu {
  businessId: string;
  companyCode: string;
  compId: string;
  username: string;
  identityId: string; // * same as Business User
  // tempPassword?: string // * on STAFF create
  hasArchived: boolean;
}
// ANCHOR: COMPANY | USER (2/6)
export interface IBusinessCompanyUserIdentity {
  fullName: string;
  isDefaultReceiver: boolean; // * 1 Company 1 User
  approverRole: TApproverRole; // * Reviewer || Approver || NONE
  approvalFlowRules: IApprovalRule;
  adminUsername?: string; // * on STAFF create, update on changed admin
  personalCode: string;
  roleId: string;
}

// ANCHOR: COMPANY | USER (3/6)
export interface IDBBusinessCompanyUserIdentity {
  userRole: TUserRole;
  roleId: string;
}
// ANCHOR: COMPANY | USER (4/6)
export interface IDBBusinessCompanyUserData {
  avatarThumbUrl: string;
}

// ANCHOR: COMPANY | USER (5/6)
export interface ICompanyUserData {
  firstName: string;
  lastName: string;
  contact: IPersonContactInfo;
  companyDept: string;
  companyPosition: string;
  isKeyContact?: boolean;
  avatarImageUrl: string; // --> avatarThumbUrl
  nickname: string;
  gender: TGender; // default = neutral
  birthDate: string;
}

// ANCHOR: COMPANY | USER (6/6)
export interface ICompanyUserPrivateData {
  signatureUrl: string;
}

export interface IBusinessListCompany
  extends ICompanyEntityImmu,
    ICompanyPublicEntity,
    ICompanyPublicEntityImmu,
    IDBCompanyEntity,
    IDBCompanySupplierEntity,
    ICompanyByGapp {
  useApprovalWorkflow: TApproverFlow;
}
