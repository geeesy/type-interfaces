export interface IBusiness {
  businessName: string
  businessCategory: string
  businessType: string // same as Company
  businessSize: string // same as Company
  website: string
  ownerName: string
  userRole: string
  phone: string
  email: string
  interests: string[]
}

export interface IBusinessCreate extends IBusiness {
  tenantId: string
  identityId: string
  username: string
}