import { ICategory, ICategoryCreateMain, ICategoryCreateSub, ICreateProductCategorySpec } from './type-console'
import { IResAPI } from './interfaces'
import { StringLiteralLike } from 'typescript'

/**
 * STUB: Version 5.x
 */

/**
 * CATEGORY
 * <VIEW>
 */
// ANCHOR: CATEGORY | View Main
export interface IMainCategory extends ICategoryCreateMain {
  categoryId: string
  createdAt: string
  updatedAt?: string
}
// ANCHOR: CATEGORY | View Sub
export interface ISubCategory extends ICategoryCreateSub {
  categoryId: string
  createdAt: string
  updatedAt?: string
}

export interface IResMainCategory extends IResAPI {
  data: IMainCategory[]
}

export interface IResSubCategory extends IResAPI {
  data: ISubCategory[]
}

// * Product
export interface IProductCategory extends ICategory {
  productUnits: string[]
  productSpec: ICreateProductCategorySpec[]
}

export interface IPriceList {
  title: string
  price: number
}

export interface IProductPrice {
  costPrice: number
  buyPrice: number
  sellPrice: number
  wholesalePrice: number
  retailPrice: number
  priceList: IPriceList[]
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
  isActive: boolean
  isRecommend: boolean
  isHighLight: boolean
  isNewArrival: boolean
  impFactor: number

  productThumbnailUrl?: string;
  productName: string;
  productType?: string;

  // -> Available
  countVariants: number
  countPacks: number
  countVariantsInPack: number
  countPacksInVariant: number
}
export interface IProductList extends IRefProductList {
  productId: string
  createdAt: string
  updatedAt: string
}

// ANCHOR: PRODUCT | Entity
// NOTE === attributes on each SKU
export interface IProductEntity {
  productImagesUrl: IProductImage[];
  productCode: string
  productSku: string;
  productBarcode: string;
  productUnit: string;
  productShortDescription: string
  productPrice: IProductPrice
  productWholesales: IProductWholesale[];
  minQty: number
  minWholesaleQty: number
  toFreeShip: IQtyPrice
  productPackage: IProductPackage
  display: IProductDisplay
  stock: IProductStock
  preparingTime: IPeriodTimeByQty[];
  leadTimes: IPeriodTimeByQty[]
}

// ANCHOR: PRODUCT | Create
export interface IProductCreate extends IProductEntity, IRefProductList {
  // index
  tags: string[]
  keywords: string[]

  compId: string;
  supplierId?: string;
  productCoverUrl: string;
  productCategoryId: string;
  productCategoryCustomName?: string; // * id = OTHER000
  productVideoCoverUrl: string;
  productDescription: string
  productBrand: string
  productSource: string;
  productOrigin: string;
  productChannels: string[];
  productSpec: IProductSpec[]
  haveVariants?: IProductVariantOnly[]
  havePacks?: IProductPackOnly[]
  haveVariantsInPack?: IProductVariantInPack[]
  havePacksInVariant?: IProductPackInVariant[]
}

export interface IProduct extends IProductCreate {
  productId: string
  createdAt: string
  updatedAt: string
}


export interface IProductPack {
  packTitle: string
  packSizeLabel: string
  smallestUnitQty: number
}

export interface IProductVariant {
  variantTitle: string
  variantHierarchy: string[]
}

// Packs Only
export interface IProductPackOnly extends IProductEntity, IProductPack {
  productPackId: string
  createdAt: string
  updatedAt: string
}

// Variants Only
export interface IProductVariantOnly extends IProductEntity, IProductVariant {
  productVariantId: string
  createdAt: string
  updatedAt: string
}

// Variant -> Pack A / Pack B
export interface IProductPackInVariant extends IProductEntity, IProductVariant, IProductPack {
  productVariantPackId: string
  createdAt: string
  updatedAt: string
}

// Pack -> Variant A / Variant B
export interface IProductVariantInPack extends IProductEntity, IProductPack, IProductVariant {
  productPackVariantId: string
  createdAt: string
  updatedAt: string
}
