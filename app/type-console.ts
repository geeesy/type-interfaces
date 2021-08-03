import { ICompanyPublicEntity } from './type-company'

/**
  * SUPPLIER
  */
// ANCHOR: SUPPLIER | Create
// NOTE: === console -> Create Supplier
export interface IConsoleSupplierCreate extends ICompanyPublicEntity {
}

// REVIEW: SUPPLIER
// NOTE: === console ==> market
export interface IConsoleSupplier extends IConsoleSupplierCreate {
  supplierId: string;
  createdAt: string
  updatedAt: string
}

export interface IConsoleSupplierList {
  companyName: string
  companyCategoryId: string
  supplierId: string
}

/**
 * CATEGORY
 */

// ANCHOR: CATEGORY | Entity (1/4)
export interface ICategoryByGapp {
  isRecommend: boolean;
  isHighLight: boolean
  isNewArrival: boolean
  impFactor: number;
}

// ANCHOR: CATEGORY | Entity (2/4)
export interface IDBCategoryImmu {
  categoryId: string;
}

// ANCHOR: CATEGORY | Entity (3/4)
export interface IDBCategory {
  countSuppliers: number
  countProducts: number
}

// ANCHOR: CATEGORY | Entity (4/4)
export interface ICategoryEntity {
  categoryName: string
  categoryImageUrl: string;
  categoryIconUrl: string;
  categoryDescription: string;
  categoryBannersUrl: string[];
  categoryCaption: string
  parentCatId: string // have or empty string
  isMainCategory: boolean
  onHomepage?: boolean // main
  themeColor?: string // main
  color?: string // main
  onParentCatCard?: boolean // sub
}

export interface IApiCategoryParams {
  isMainCat: boolean
  marketCode: string
}

// ANCHOR: CATEGORY | PRODUCT SPECIFICATION

// ANCHOR: CATEGORY | PRODUCT SPEC > GROUP > ATTRIBUTE GROUP
export interface ICategoryProductSpecAttributeGroup {
  specAttributeGroupName: string
  attributeNames: string[]
}

export interface IDBCategoryProductSpecAttributeGroup {
  specAttributeGroupId: string
}

// ANCHOR: CATEGORY | PRODUCT SPEC > GROUP
export interface ICategoryProductSpecGroup {
  specGroupName: string;
  specAttributeGroup: ICategoryProductSpecAttributeGroup[]
}

export interface IDBCategoryProductSpecGroup {
  specGroupId: string
}

// TODO: Setting > Shipping on CORE ===> USE CLIENT SIDE

/**
 * CORE SETTING - Shipping Method
 */
export interface IShippingMethod {
  shippingMethodId: string
  shippingMethodName: string
  shippingMethodIconUrl: string
}

/**
 * CORE SETTING - Shipping Party
 */
export interface IShippingParty {
  shippingPartyId: string
  title: string;
  postcodes: string[];
  iconUrl: string;
}

export interface IShippingZone {
  shippingZoneId: string
  zoneName: string;
  zoneStates: string[];
  zonePostcodes: string[];
  zoneMethods: IShippingMethod[];
  zoneParties: IShippingParty[]
}

// TODO: Setting > Payment on CORE ===> USE CLIENT SIDE

export interface IPaymentParty {
  title: string
  iconUrl: string
}

/**
 * CORE SETTING - Payment Method
 */
export interface IPaymentMethod {
  paymentMethodId: string
  paymentMethodType: string;
  paymentParties: IPaymentParty[];
}
