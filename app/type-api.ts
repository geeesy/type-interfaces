export interface IDBLogTime {
  createdAt: string
  updatedAt: string
}

export interface IDBLogAction {
  updatedBy: string
}

export interface IDBUpdateTime {
  updatedAt: string
}

export interface IDBLogCreate {
  createdAt: string
  createdBy: string
}

export interface IDBLogUpdate {
  updatedAt: string
  updatedBy: string
}

export interface IApiCompanyParams {
  businessId: string;
  compId: string;
  identityId: string;
  identityFullName: string
  companyCode: string;
}

export interface IApiUserParams {
  identityId: string;
  identityFullName: string
}

export interface IApiCompanyFacebookParams {
  businessId: string;
  compId: string;
  companyCode: string;
}

export interface IApiSupplierParams extends IApiCompanyParams {
  supplierId: string;
}

export type TApiErrorModule = 'INVENTORY' | 'ERROR'

// * Log User

export type TLogUserEvent = 'create' | 'update' | 'delete' | 'read'
export type TLogUserAction = 'block' | 'tag' | null

export type TLogUserType = 'CAMPAIGN' | 'PARTNER_IN_CAMPAIGN' | 'USER_ROLE' | 'REPLY' | 'TAG' | 'CUSTOMER'
  | 'BLOCK_CUSTOMER' | 'MEMBER_CUSTOMER' | 'TAG_CUSTOMER' | 'SALE_REP' | 'SETTING_PRICE_GROUP' | 'SETTING_CF' | 'SETTING_GTM'
| 'SETTING_SLIP' | 'SETTING_DOC' | 'SETTING_BUYER' | 'SETTING_NOTIFY' | 'SETTING_MARKET' | 'PAYMENT' | 'SALE_CHANNEL' | 'SHIPMENT'
  | 'WAREHOUSE' | 'DASHBOARD' | 'USER' | 'COMPANY' | 'DOCUMENT' | 'INVENTORY' | 'FACEBOOK' | 'LINE' | 'FINANCE' | 'BUSINESS' | 'PACKAGE'
| 'IMPORT' | 'EXPORT' | 'ORDER' | 'PRODUCT' | 'RFQ' | 'QUOTATION' | 'PURCHASE' | 'BILLING' | 'INVOICE' | 'SLIP' | 'VENDOR'

