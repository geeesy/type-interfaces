import { ICompanyPublicEntity } from './type-company'

export type TSpecAttributeValueType = 'text' | 'number'

// STUB: CRUD PARAMS
export interface IApiCategoryParams {
  identityId: string
  marketCode: string
}

export interface IApiConsoleParams {
  identityId: string
  username?: string
}

/**
  * SUPPLIER
  */
// SUPPLIER | Create
// ? === console -> Create Supplier
export interface IConsoleSupplierCreate extends ICompanyPublicEntity {
}

// SUPPLIER
// ? === console ==> market
export interface IConsoleSupplier extends IConsoleSupplierCreate {
  supplierId: string;
  createdAt: string
  updatedAt: string
}

export interface IListSupplier {
  companyName: string
  companyCategoryId: string
  supplierId: string
}

export interface IListBusiness {
  businessId: string
}

export interface IListCompany {
  compId: string
}

/**
 * CATEGORY
 */
// --------------------------------
// REVIEW: CATEGORY
// --------------------------------
// ANCHOR: CATEGORY | Entity (1/4)
export interface ICategoryByGapp {
  isRecommend: boolean;
  isHighLight: boolean
  isNewArrival: boolean
  impFactor: number;
  hasProductMustApproved: boolean
}

// ANCHOR: CATEGORY | Entity (2/4)
export interface IDBCategoryImmu {
  categoryId: string;
}

// ANCHOR: CATEGORY | Entity (3/4)
export interface IDBCategory {
  countSuppliers: number
  countProducts: number
  isActive: boolean // * on delete = false
  wasArchived: boolean // * on delete = true
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
  isLastCategory: boolean
  onHomepage?: boolean // main
  colorPrimary?: string // main
  colorSecondary?: string // main
  onParentCatCard?: boolean // sub
}

// --------------------------------
// REVIEW: CATEGORY | PRODUCT SPECIFICATION
// CATEGORY AA
//      /--- SPEC GROUP A
//                    /--- SPEC ATTRIBUTE GROUP 1
//                                /--- SPEC ATTRIBUTE
//                                /--- SPEC ATTRIBUTE
//                    /--- SPEC ATTRIBUTE GROUP 2
//      /--- SPEC GROUP B
//                    /--- SPEC ATTRIBUTE GROUP 1
//                                /--- SPEC ATTRIBUTE
// --------------------------------

export interface ISpecAttribute {
  name: string
  valueType: TSpecAttributeValueType
  required: boolean
  productAttributeValue: string | number // * init with on field
}

// ANCHOR: CATEGORY | PRODUCT SPEC > GROUP > ATTRIBUTE GROUP
export interface ICategoryProductSpecAttributeGroup {
  specAttributeGroupName: string
  attribute: ISpecAttribute[]
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

export interface ICategorySpecGroup {
  categoryProductSpecGroup: ICategoryProductSpecGroup[]
}

// ANCHOR: BANNER
export interface IDBBannerImmu {
  bannerId: string
}
export interface IBanner {
  bannerTitle: string
  bannerSubtitle: string
  bannerAlt: string
  bannerLink: string;
  bannerImageUrl: string;
  bannerButtonText: string
  sortIndex: number;
}
export interface IDBBannerGroupImmu {
  bannerGroupId: string
}
export interface IBannerGroup {
  bannerGroupName: string
  bannerItems: IBanner[]
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
