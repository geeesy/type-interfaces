import { ICategory, IMainCategory, ISubCategory } from './type-catalog'

/**
 * STUB: Version 4.x
 */

export interface ICreateCategory extends ICategory {
  isMainCat: boolean
  marketCode: string
}

export interface ICreateMainCategory extends IMainCategory {
  isMainCat: boolean
  marketCode: string
}

export interface ICreateSubCategory extends ISubCategory { 
  isMainCat: boolean
  marketCode: string
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
