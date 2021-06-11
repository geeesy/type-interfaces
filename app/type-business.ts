import { IApprovalRule, IPersonContactInfo } from "./type-apps"
import { ICompanyByGapp, ICompanyEntity, ICompanyEntityImmu, IDBCompanyEntity, IDBCompanySupplierEntity } from "./type-company"

export type TUserRole = 'owner' | 'admin' | 'staff' | 'user'
export type TApproverRole = 'reviewer' | 'approver' | 'none'
export type TApproverFlow = 'reviewer' | 'approver' | 'none'
export type TBusinessSize = 'micro' | 'small' | 'medium' | 'large'
export type TBusinessType = 'manufacturer' | 'wholesaler' | 'retailer'
export type TGender = 'male' | 'female' | 'neutral'

export interface IDBLogTime {
  createdAt: string
  updatedAt: string
}

export interface IDBUpdateTime {
  updatedAt: string
}

/**
 * BUSINESS
 */
// REVIEW: BUSINESS | Entity (1/2)
export interface IBusinessEntityImmu {
  businessId: string // * === tenantId
  useAsCompany: boolean // ? default = false // TODO: immu?
}
// REVIEW: BUSINESS | Entity (2/2)
export interface IBusinessEntity {
  businessName: string
  businessCategoryId: string // * <-- include other id = OTHER000
  businessCategoryCustomName?: string
  businessLogoUrl: string // * replaced with Scale down (empty on create) 
  businessTypes: TBusinessType[]
  businessSize: TBusinessSize
  website: string
  interests: string[]
}
// REVIEW: BUSINESS | OWNER Entity (1/2)
export interface IBusinessOwnerIdentityImmu {
  identityId: string
  // phone: string
  email: string // TODO: check cognito cred
}

// REVIEW: BUSINESS | OWNER Entity (2/2)
export interface IBusinessOwnerIdentity {
  phone: string
  ownerName: string
  avatarThumbUrl: string
}


export type TAccessStatementAction = 'rfi' | 'rfq' | 'sales' | 'purchases' | 'finance' | 'products'
export type TAccessScope = 'rfi' | 'rfq' | 'sales' | 'purchases' | 'finance' | 'products'

export interface IAccessStatement {
  action: TAccessStatementAction
  permission: IPermission
}

export interface IPermission {
  create: boolean
  read: boolean
  update: boolean
  delete: boolean
}

export interface IAccessScope {
  scope: TAccessScope
  statement: IAccessStatement[]
}

// REVIEW: BUSINESS | USER (1/4)
export interface IBusinessUserIdentityImmu {
  email: string // TODO: check cognito cred
  mobile: string
  userRole: TUserRole
  identityId: string // * from cognito
  businessId: string
  username: string // * for check with cognitoIdentityId on REQ
}

// REVIEW: BUSINESS | USER (2/4)
export interface IBusinessUserIdentity {
  fullName: string
  penName: string // TODO: check cognito
  businessDept: string
  businessPosition: string
}

// REVIEW: BUSINESS | USER (3/4)
export interface IDBBusinessUserIdentityStatus {
  isActive: boolean
}

// REVIEW: BUSINESS | USER (4/4)
export interface IDBBusinessUserIdentity {
  companies: string[] // * as Set on DB
  historyCountOnCompany?: number // * -> DB on ADMIN
  historyCountOnAdmin?: number // * -> DB on STAFF
}

// REVIEW: COMPANY | USER (1/6)
export interface IBusinessCompanyUserIdentityImmu {
  businessId: string
  companyCode: string
  compId: string
  username: string
  identityId: string // * same as Business User
  tempPassword?: string // * on STAFF create
}
// REVIEW: COMPANY | USER (2/6)
export interface IBusinessCompanyUserIdentity {
  fullName: string
  isDefaultReceiver: boolean // * 1 Company 1 User
  approverRole: TApproverRole // * Reviewer || Approver || NONE
  approvalFlowRules: IApprovalRule
  accessPolicy: IAccessScope[]
  adminUsername?: string // * on STAFF create, update on changed admin
  personalCode: string
}
// REVIEW: COMPANY | USER (3/6)
export interface IDBBusinessCompanyUserIdentity {
  userRole: TUserRole

}
// REVIEW: COMPANY | USER (4/6)
export interface IDBBusinessCompanyUserData {
  avatarThumbUrl: string
}

// REVIEW: COMPANY | USER (5/6)
export interface ICompanyUserData {
  contact: IPersonContactInfo
  companyDept: string
  companyPosition: string
  isKeyContact?: boolean;
  avatarImageUrl: string // --> avatarThumbUrl
  nickname: string
  gender: TGender // default = neutral
  birthDate: string
}

// REVIEW: COMPANY | USER (6/6)
export interface ICompanyUserPrivateData {
  signatureUrl: string
}



export interface IBusinessListCompany extends ICompanyEntityImmu, ICompanyEntity, IDBCompanyEntity, IDBCompanySupplierEntity, ICompanyByGapp {
  useApprovalWorkflow: TApproverFlow
}