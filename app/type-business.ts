import { IApprovalRule } from "./type-apps"

/**
 * STUB: Version 5.x
 */
export type TUserRole = 'owner' | 'admin' | 'staff' | 'user'
export type TApproverRole = 'reviewer' | 'approver' | 'none'
export type TBusinessSize = 'micro' | 'small' | 'medium' | 'large'
export type TBusinessType = 'manufacturer' | 'wholesaler' | 'retailer'
/**
 * BUSINESS
 */
// ANCHOR: BUSINESS | Entity
export interface IBusinessEntity {
  businessName: string
  businessCategory: string // * <-- include other
  businessType: TBusinessType[]
  businessSize: TBusinessSize
  website: string
  interests: string[]
}

// ANCHOR: BUSINESS | Create
// NOTE: === bc -> Open account
export interface IBusinessCreate extends IBusinessEntity {
  tenantId: string
}

export interface IBusinessOwnerCreate {
  identityId: string
  ownerName: string
  phone: string
  email: string
}

// REVIEW: BUSINESS
export interface IBusiness extends IBusinessEntity {
  businessId: string // * === tenantId
  createdAt: string
  updatedAt: string
}

// REVIEW: BUSINESS | OWNER 
export interface IBusinessOwnerIdentity extends IBusinessOwnerCreate {
  createdAt: string
  updatedAt: string
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

export interface IBusinessCreateCompanyUser {
  companyCode: string
  isDefaultReceiver: boolean // * 1 Company 1 User
  approverRole: TApproverRole // * Reviewer || Approver
  approvalFlowRules: IApprovalRule
  accessPolicy: IAccessScope[]
  adminUsername?: string // * on STAFF create
  personalCode: string
}

export interface IBusinessCreateUser {
  businessId: string
  businessName: string // FIXME
  email: string
  fullName: string // dup
  identityId: string
  mobile: string
  penName: string
  userRole: TUserRole
  username: string // ! !== userId ~ cognitoUserId
  businessPosition: string

}

// REVIEW: USER (BUSINESS) - 1
export interface IBusinessUserIdentity extends IBusinessCreateUser {
  isActive: boolean
  createdAt: string
  updatedAt: string
}

// REVIEW: USER (BUSINESS) - 2
export interface IDBBusinessUserIdentity {
  companies: string[]
  historyCountOnCompany?: number // * ADMIN
  historyCountOnAdmin?: number // * STAFF
}