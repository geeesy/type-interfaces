
/**
 * STUB: Version 5.x
 */

/**
 * BUSINESS
 */
// REVIEW: BUSINESS | Entity
export interface IBusinessEntity {
  businessName: string
  businessCategory: string
  businessType: string // *same as Company
  businessSize: string // *same as Company
  website: string
  ownerName: string
  phone: string
  email: string
  interests: string[]
}

// REVIEW: BUSINESS | Create
// NOTE: === bc -> Open account
export interface IBusinessCreate extends IBusinessEntity {
  tenantId: string
  ownerIdentity: string // ! user
  authUserId: string // ! on Cognito

}

// REVIEW: BUSINESS
export interface IBusiness {
  businessId: string // * === tenantId
  createdAt: string
  updatedAt?: string
}