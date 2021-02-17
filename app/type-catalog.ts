import { ICategoryCreateMain, ICategoryCreateSub, ICreateProductCategorySpec } from './type-console'
import { IResAPI } from './interfaces'

export interface ICategory extends ICategoryCreateMain, ICategoryCreateSub {
  categoryId: string
  createdAt: string
  updatedAt?: string
}

export interface IMainCategory extends ICategoryCreateMain, ICategory {
}

export interface ISubCategory extends ICategoryCreateSub, ICategory {
}

export interface IProductCategory extends ICategory {
  productUnits: string[]
  productSpec: ICreateProductCategorySpec[]
}

export interface IResMainCategory extends IResAPI {
  data: IMainCategory[]
}

export interface IResSubCategory extends IResAPI {
  data: ISubCategory[]
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

export interface IProductIndex {
  tags: string[]
  keywords: string[]
  isActive: boolean
  isRecommend: boolean
  isHighLight: boolean
  isNewArrival: boolean
  impFactor: number
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

export interface ILeadTime {
  qty: string[];
  day: number;
}

export interface IProductSpec {
  specGroupName: string
  attributeName: string
  attributeDataType: string
  attributeValue: string
}

export interface IProductEntity {
  productImagesUrl: string[];
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
  index: IProductIndex
  display: IProductDisplay
  stock: IProductStock
  preparingTime: number;
  leadTimes: ILeadTime[]
  createdAt: string
  updatedAt: string
}

export interface IProduct extends IProductEntity {
  productId: string
  companyId: string
  productNames: string;
  productCategoryIds: string;
  productCategoryCustomName: string;
  productVideoCoverUrl: string;
  productDescription: string
  productBrand: string
  productSource: string;
  productOrigin: string;
  productChannels: string[];
  productSpec: IProductSpec
  haveVariants?: IProductVariantOnly[]
  havePacks?: IProductPackOnly[]
  haveVariantsInPack?: IProductVariantInPack[]
  havePacksInVariant?: IProductPackInVariant[]
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
}

// Variants Only
export interface IProductVariantOnly extends IProductEntity, IProductVariant {
  productVariantId: string
}

// Variant -> Pack A / Pack B
export interface IProductPackInVariant extends IProductEntity, IProductVariant, IProductPack {
  productVariantPackId: string
}

// Pack -> Variant A / Variant B
export interface IProductVariantInPack extends IProductEntity, IProductPack, IProductVariant {
  productPackVariantId: string
}
