import { ICompanyEntity } from "./type-company";

/**
 * STUB: Version 5.x
 */

/**
  * SUPPLIER
  */
// ANCHOR: SUPPLIER | Create
// NOTE: === console -> Create Supplier
export interface IConsoleSupplierCreate extends ICompanyEntity {
}

// REVIEW: SUPPLIER
// NOTE: === console ==> market
export interface IConsoleSupplier extends IConsoleSupplierCreate {
  supplierId: string;
  createdAt: string
  updatedAt?: string
}

export interface IConsoleSupplierList {
  companyName: string
  companyCategoryId: string
  supplierId: string
}

/**
 * CATEGORY
 */
// ANCHOR: CATEGORY | List
export interface IRefCategoryList {
  categoryName: string
  categoryImageUrl: string;
  categoryIconUrl: string;
  isRecommend: boolean;
  isHighLight: boolean
  isNewArrival: boolean
  impFactor: number;
  categoryCaption: string
  parentCatId: string // have or empty string
}

// ANCHOR: CATEGORY | Create
// NOTE: === console -> Create Category
export interface ICategoryEntity {
  categoryDescription: string;
  categoryBannersUrl: string[];
}

export interface IConsoleCategoryList extends IRefCategoryList {
  categoryId: string;
  countSuppliers: number
  countProducts: number
}

export interface ICategoryCreateParams {
  isMainCat: boolean // * -> check condition
  marketCode: string // * -> check condition
}

// ANCHOR: CATEGORY | Create Main Category
// NOTE: === console -> Create Category
export interface ICategoryCreateMain extends ICategoryEntity, IRefCategoryList {
  onHomepage: boolean
  themeColor: string
  color: string
}

// ANCHOR CATEGORY | Create Sub Category
// NOTE: === console -> Create Category
export interface ICategoryCreateSub extends ICategoryEntity, IRefCategoryList {
  onParentCatCard: boolean

}

export interface IConsoleMainCategory extends ICategoryCreateMain {
  categoryId: string;
  countSuppliers: number
  countProducts: number
  createdAt: string
  updatedAt: string
}

export interface IConsoleSubCategory extends ICategoryCreateSub {
  categoryId: string;
  countSuppliers: number
  countProducts: number
  createdAt: string
  updatedAt: string
}


export interface ICreateProductCategorySpec {
  specGroupName: string;
  specAttribute: string[];
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
