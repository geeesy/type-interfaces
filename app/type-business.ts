
/**
 * STUB: Version 5.x
 */
export type TUserRole = 'owner' | 'admin' | 'staff' | 'user'

/**
 * BUSINESS
 */
// ANCHOR: BUSINESS | Entity
export interface IBusinessEntity {
  businessName: string
  businessCategory: string // * <-- include other
  businessType: string // *same as Company
  businessSize: string // *same as Company
  website: string
  ownerName: string
  phone: string
  email: string
  interests: string[]
}

// ANCHOR: BUSINESS | Create
// NOTE: === bc -> Open account
export interface IBusinessCreate extends IBusinessEntity {
  tenantId: string
  ownerIdentity?: string // ! user -> create on server
  authUserId?: string // ! on Cognito -> create on server
}

// REVIEW: BUSINESS
export interface IBusiness extends IBusinessEntity {
  businessId: string // * === tenantId
  createdAt: string
  updatedAt?: string
}

export interface IBusinessCreateCompanyUser {
  companyCode: string
  isDefaultReceiver: boolean // * 1 Company 1 User
  adminUsername?: string // * on STAFF create
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