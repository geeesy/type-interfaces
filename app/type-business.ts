import { IApprovalRule } from "./type-apps"
import { ICompanyByGapp, ICompanyEntity, ICompanyEntityImmu, IDBCompanyEntity } from "./type-company"

/**
 * STUB: Version 5.x
 */
export type TUserRole = 'owner' | 'admin' | 'staff' | 'user'
export type TApproverRole = 'reviewer' | 'approver' | 'none'
export type TApproverFlow = 'reviewer' | 'approver' | 'none'
export type TBusinessSize = 'micro' | 'small' | 'medium' | 'large'
export type TBusinessType = 'manufacturer' | 'wholesaler' | 'retailer'

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
  useAsCompany: boolean // ? default = false
}
// REVIEW: BUSINESS | Entity (2/2)
export interface IBusinessEntity {
  businessName: string
  businessCategory: string // * <-- include other
  businessTypes: TBusinessType[]
  businessSize: TBusinessSize
  website: string
  interests: string[]
}
// REVIEW: BUSINESS | OWNER (1/2)
export interface IBusinessOwnerIdentityImmu {
  identityId: string
  phone: string
  email: string // TODO: check cognito cred
}

// REVIEW: BUSINESS | OWNER (2/2)
export interface IBusinessOwnerIdentity {
  ownerName: string
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

// ANCHOR: COMPANY | USER (1/4)
export interface IBusinessCompanyUserIdentityImmu {
  companyCode: string
  compId: string
  identityId: string // * same as Business User
  tempPassword?: string // * on STAFF create
}
// ANCHOR: COMPANY | USER (2/4)
export interface IBusinessCompanyUserIdentity {
  fullName: string
  isDefaultReceiver: boolean // * 1 Company 1 User
  approverRole: TApproverRole // * Reviewer || Approver || NONE
  approvalFlowRules: IApprovalRule
  accessPolicy: IAccessScope[]
  adminUsername?: string // * on STAFF create, update on changed admin
  personalCode: string
}
// ANCHOR: COMPANY | USER (3/4)
export interface IDBBusinessCompanyUserIdentity {
  userRole: TUserRole
  username: string
  businessId: string
}
// ANCHOR: COMPANY | USER (4/4)
export interface IDBBusinessCompanyUserData {
  avatarThumbUrl: string
}

// REVIEW: BUSINESS | USER (1/4)
export interface IBusinessUserIdentityImmu {
  email: string // TODO: check cognito cred
  mobile: string
  userRole: TUserRole
  identityId: string
  businessId: string
  username: string // * for check with cognitoIdentityId on REQ
}

// REVIEW: BUSINESS | USER (2/4)
export interface IBusinessUserIdentity {
  fullName: string
  penName: string // TODO: check cognito
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

export interface IBusinessListCompany extends ICompanyEntityImmu, ICompanyEntity, IDBCompanyEntity, ICompanyByGapp {
  useApprovalWorkflow: TApproverFlow
}