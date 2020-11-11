// REVIEW: READ CATEGORY
export interface IMainCategoryConsole {
  categoryId: string;
  categoryName: string;
  categoryIconUrl: string;
  categoryImageUrl: string;
  impFactor: number;
  categoryBannersUrl: string[];
}

export interface ICategoryConsole {
  categoryId: string;
  categoryName: string;
  categoryIconUrl: string;
  categoryImageUrl: string;
  impFactor: number;
}

// REVIEW: CREATE CATEGORY
export interface ICreateMainCategory {
  categoryName: string;
  categoryImageUrl: string;
  categoryRecommend: boolean;
  categoryIconUrl: string;
  impFactor: number;
  categoryDescription: string;
  categoryBannersUrl: string[];
  isMainCat: boolean;
  parentCatId?: string;
}

export interface ICreateCategoryLevel {
  parentCatId: string;
  categoryName: string;
  categoryImageUrl: string;
  categoryRecommend: boolean;
  categoryIconUrl: string;
  impFactor: number;
  categoryDescription: string;
}

// === === === === ===

export interface IProductCategorySpec {
  attributeNames: string;
  attributeValues: string[];
}

export interface IProductCategory {
  productCategoryIds: string;
  productCategoryNames: string;
  productCategoryIconsUrl: string;
}

export interface IProductMainCategory {
  productMCategoryIds: string;
  productMCategoryNames: string;
  productMCategoryIconsUrl: string;
}

interface ProductCategorySpec {
  attributeName: string;
  attributeValue: string;
}

interface ICreateProductCategory {
  productCategoryNames: string;
  productCategoryImagesUrl: string;
  productCategoryRecommend: boolean;
  productCategoryIconsUrl: string;
  productCategorySpec: ProductCategorySpec[];
}

interface ICreateProductCategoryLevel {
  productCategoryIds: string;
  productCategoryNames: string;
  productCategoryImagesUrl: string;
  productCategoryRecommend: boolean;
  productCategoryIconsUrl: string;
  productCategorySpec: ProductCategorySpec[];
}

// STUB: Setting > Shipping on CORE

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
  zoneNames: string;
  zoneProvinces: string[];
  zonePostcodes: string[];
  zoneMethods: IShippingMethod[];
  zoneParties: IShippingParty[]
}

// STUB: Setting > Payment on CORE

export interface IPaymentParty {
  title: string
  iconUrl: string
}

export interface IPaymentMethod {
  paymentMethodId: string
  paymentMethodType: string;
  paymentParties: IPaymentParty[];
}

// === === ===
