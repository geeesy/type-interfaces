
/**
 * STUB: Version 5.x
 */

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

// REVIEW: USER
export interface IฺBusinessUserIdentity {
  userRole: string
  identityId: string
  fullName: string // dup
  email: string
  mobile: string
  username: string
  penName: string
  businessId: string
  businessName: string
  isActive: boolean
  companiesId: string[]
}