
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
// NOTE: === bd -> Open account
export interface IBusinessCreate extends IBusinessEntity {
  tenantId: string
}

// REVIEW: BUSINESS
export interface IBusiness extends IBusinessCreate {
  createdAt: string
  updatedAt?: string
}