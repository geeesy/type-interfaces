/**
 * STUB: Version 4.x
 */

export interface ICategoryCreate {
  isMainCat: boolean // -> check condition
  marketCode: string // -> check condition
  parentCatId?: string // only sub-cat
  categoryName: string;
  categoryCaption: string
  categoryDescription: string;
  categoryImageUrl: string;
  categoryIconUrl: string;
  categoryBannersUrl: string[];
  isRecommend: boolean;
  impFactor: number;
}

export interface ICategoryCreateMain extends ICategoryCreate {
  onHomepage: boolean
  themeColor: string
  color: string
}

export interface ICategoryCreateSub extends ICategoryCreate {
  onParentCatCard: boolean
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
