import { IMainCategory } from './type-marketplace'
import { ISubCategory } from './type-catalog'

/**
 * STUB: Version 4.x
 */

export interface ICreateMainCategory extends IMainCategory { }

export interface ICreateSubCategory extends ISubCategory { }

export interface ICreateProductCategorySpec {
  specGroupName: string;
  specAttribute: string[];
}

// TODO: Setting > Shipping on CORE ===> USE CLIENT SIDE

export interface IShippingMethod {
  shippingMethodId: string
  shippingMethodName: string
  shippingMethodIconUrl: string
}

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

export interface IPaymentMethod {
  paymentMethodId: string
  paymentMethodType: string;
  paymentParties: IPaymentParty[];
}
