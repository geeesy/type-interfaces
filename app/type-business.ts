export interface IBusiness {
  businessName: string
  businessCategory: string
  businessType: string
  businessSize: string
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