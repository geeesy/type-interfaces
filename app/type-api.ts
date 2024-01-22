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


