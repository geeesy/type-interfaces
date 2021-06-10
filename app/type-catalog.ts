import { IConsoleCategoryList, IConsoleMainCategory, IConsoleSubCategory, ICreateProductCategorySpec } from './type-console'
import { IResAPI } from './interfaces'

/**
 * STUB: Version 5.x
 */

/**
 * CATEGORY
 * <VIEW>
 */
// ANCHOR: CATEGORY | View Main
// NOTE: === <-- console - Category
export interface IMainCategory extends IConsoleMainCategory {

}
// ANCHOR: CATEGORY | View Sub
// NOTE: === <-- console - Category
export interface ISubCategory extends IConsoleSubCategory {

}

export interface ICategoryList extends IConsoleCategoryList {

}

export interface IResMainCategory extends IResAPI {
  data: IMainCategory[]
}

export interface IResSubCategory extends IResAPI {
  data: ISubCategory[]
}

// * Product
export interface IProductCategory extends ISubCategory {
  productUnits: string[]
  productSpec: ICreateProductCategorySpec[]
}

export interface IPriceList {
  priceListId: string
  price: number
}

export interface IProductPrice {
  costPrice: number
  buyPrice: number
  sellPrice: number
  wholesalePrice: number
  retailPrice: number
  priceList: IPriceList[] // * <== SETTING
  priceGroupIds: string[] // * ==> SETTING
  currency: string
}

export interface IQtyPrice {
  price: number
  qty: number
}

export interface IProductWholesale {
  minQty: number;
  wholesalePrice: number;
  retailPrice: number;
}

export interface IProductDisplay {
  onCompanyCard: boolean
  onMarketplace: boolean
  onVendorProductList: boolean
  isPriceShowed: boolean
}

export interface IProductStock {
  initialStock: number
  lowStockQty: number
}

export interface IProductPackage {
  weight: number;
  weightUnit: string;
  height: number;
  heightUnit: string;
  width: number;
  widthUnit: string;
  length: number;
  lengthUnit: string;
};

export interface IPeriodTimeByQty {
  qty: [number, number];
  day: [number, number];
}

export interface IProductSpecAttribute {
  attributeName: string
  attributeDataType: string
  attributeValue: string
}

export interface IProductSpec {
  specGroupName: string
  attribute: IProductSpecAttribute[]
}

export interface IProductImage {
  url: string;
  title: string;
  caption: string;
}

/**
 * PRODUCT
 */
// ANCHOR: PRODUCT | List
// NOTE === g-biz -> list all products
export interface IRefProductList {
  // index
  isActive: boolean // ! not show all
  isRecommend: boolean
  isHighLight: boolean
  isNewArrival: boolean
  impFactor: number

  productThumbnailUrl: string;
  productName: string;
  productType: string;

  // -> Available
  countVariants: number // * UPDATED ON [C-U-D] VARIANT
  countPacks: number // * UPDATED ON [C-U-D] PACK
  countVariantsInPack: number
  countPacksInVariant: number
}
export interface IProductList extends IRefProductList {
  productCode: string
  productSku: string;
  productUnit: string;
  productPrice: IProductPrice
  productId: string
  createdAt: string
  updatedAt: string
}

// ANCHOR: PRODUCT | Entity (1/5)
// NOTE === attributes on each SKU (variant and pack creation)
export interface IProductRootEntity {
  productShowedImageUrl: string
  productSku: string;
  productUnit: string;
  productUnitPrice: number
}

// ANCHOR: PRODUCT | Entity (2/5)
// NOTE === attributes on each SKU
export interface IProductEntity {
  productImagesUrl: IProductImage[];
  productCode: string
  productModel: string
  productBarcode: string;
  productShortDescription: string
  productPrice: IProductPrice
  productWholesales: IProductWholesale[];
  minQty: number
  minWholesaleQty: number
  toFreeShip: IQtyPrice
  productPackage: IProductPackage
  stock: IProductStock
  preparingTime: IPeriodTimeByQty[];
  leadTimes: IPeriodTimeByQty[]
  displaySku: IProductDisplay
}

// ANCHOR: PRODUCT | Entity (3/5)
export interface IProductAttributes {
  display: IProductDisplay
  isActive: boolean // ! not show all
  isRecommend: boolean
  isHighLight: boolean
  isNewArrival: boolean
  productName: string;
  productType: string;
  tags: string[]
  keywords: string[]
  productCoverUrl: string;
  productCategoryId: string;
  productCategoryCustomName?: string; // * id = OTHER000
  productVideoCoverUrl: string;
  productDescription: string
  productBrand: string
  productSource: string;
  productOrigin: string;
  productChannels: string[];
  productThumbnailUrl: string;
  productSpec?: IProductSpec[]
  haveVariants?: IProductVariantOnly[]
  havePacks?: IProductPackOnly[]
  haveVariantsInPack?: IProductVariantInPack[]
  havePacksInVariant?: IProductPackInVariant[]
}

// ANCHOR: PRODUCT | Entity (4/5)
export interface IDBProduct {
  impFactor: number
  countVariants: number // * UPDATED ON [C-U-D] VARIANT
  countPacks: number // * UPDATED ON [C-U-D] PACK
  countVariantsInPack: number
  countPacksInVariant: number
  variantMatchId?: IProductVariantMatchId[]
  variantSelectors?: IProductVariantSelector[]
}

// ANCHOR: PRODUCT | Entity (5/5)
export interface IDBProductImmu {
  productId: string
  compId: string;
  businessId: string
  supplierId: string;
}

// ANCHOR: VARIANT | Entity
export interface IProductVariantEntity {
  variantTitle: string
  variantHierarchy: string[]
}

// Variants Only
export interface IProductVariantOnly extends IProductRootEntity, IProductEntity, IProductVariantEntity {

}

export interface IDBProductVariantOnlyImmu {
  productVariantId: string
  productId: string
}

export interface IProductVariantAttributes {
  variantSelectors: IProductVariantSelector[]
  variants: IProductVariantOnly[]
}


export interface IProductVariantSelector {
  variantGroupName: string
  selectors: string[]
}

export interface IProductVariantMatchId {
  variantHierarchy: string[]
  productVariantId: string
}

export interface IProductPack {
  packTitle: string
  packSizeLabel: string
  smallestUnitQty: number
}

// Packs Only
export interface IProductPackOnly extends IProductRootEntity, IProductEntity, IProductPack {
  productPackId: string
  createdAt: string
  updatedAt: string
}

// Variant -> Pack A / Pack B
export interface IProductPackInVariant extends IProductRootEntity, IProductEntity, IProductVariantEntity, IProductPack {
  productVariantPackId: string
  createdAt: string
  updatedAt: string
}

// Pack -> Variant A / Variant B
export interface IProductVariantInPack extends IProductRootEntity, IProductEntity, IProductPack, IProductVariantEntity {
  productPackVariantId: string
  createdAt: string
  updatedAt: string
}
