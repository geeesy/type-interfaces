import { IApiSupplierParams } from './type-company'
import { IDBLogTime } from './type-business'
import { StatusProductApproveOnMarket } from './enum-const'

export interface IPriceList {
  priceListId: string;
  price: number;
}

export interface IProductPrice {
  costPrice: number;
  buyPrice: number;
  sellPrice: number;
  wholesalePrice: number;
  'wholesalePrice_market': number;
  retailPrice: number;
  'retailPrice_market': number;
  priceList: IPriceList[]; // * <== SETTING
  priceGroupIds: string[]; // * ==> SETTING
  currency: string;
  maxQty: number;
  'maxQty_market': number;
  minQty: number;
  'minQty_market': number;
}

export interface IQtyPrice {
  price: number;
  qty: number;
}

export interface IProductShippingMethod {
  shippingId: string,
  shippingIconUrl: string,
  shippingName: string,
  typeCalPrice: string,
  typeDelivery: string,
  shippingStatus: boolean
  deliveryTime: {
    start: number,
    end: number,
  },
  note: string,
  compId: string,
  createdAt: string,
  updatedAt: string,
  fixedDelivery: {
    fixedPrice: number,
    freeShippingPrice: number,
  },
  calNumberProductsPiece: {
    firstPiecePrice: number,
    nextPiecePrice: number,
    freeShippingPrice: number,
  },
  calNumberProducts: {
    notExceedPiece: [
      {
        numberOfPiece: number,
        amount: number,
        freeShipping: boolean
      }
    ],
    exceedPiece: {
      numberOfPiece: number,
      amount: number,
      freeShipping: boolean
    },
    freeShippingPrice: number,
  },
  calNumberProductsWeight: {
    notExceedKg: [
      {
        numberOfWeight: number,
        unitWeight: string,
        amount: number,
        freeShipping: boolean
      }
    ],
    exceedKg: {
      numberOfWeight: number,
      unitWeight: string,
      amount: number
      freeShipping: boolean
    },
    freeShippingPrice: number
  },
  calNumberProductsDiscount: {
    notExceedPrice: [
      {
        numberOfAmount: number,
        amount: number,
        freeShipping: boolean
      }
    ],
    exceedPrice: {
      numberOfAmount: number,
      amount: number,
      freeShipping: boolean
    }
  }

}

export interface ILogProduct {
  updatedBy: string;
  action: string;
  createdAt: string;
  updatedAt: string;
  oldValue: ILogProductValue;
  newValue: ILogProductValue;
}

export interface ILogProductValue {
  productName: string;
  productType: string;
  productSku: string;
  shippingMethod?: IProductShippingMethod[] | null;
  productPrice: IProductPrice;
  productWholesales?: IProductWholesale[] | null;
}

export interface IProductWholesale {
  minQty: number;
  'minQty_market': number;
  maxQty: number;
  'maxQty_market': number;
  wholesalePrice: number;
  'wholesalePrice_market': number;
  retailPrice: number;
  'retailPrice_market': number;
}

export interface IProductDisplay {
  onCompanyCard: boolean;
  onMarketplace: boolean;
  onVendorProductList: boolean;
  isPriceShowed: boolean;
}

export interface IProductStock {
  initialStock: number;
  lowStockQty: number;
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
}

export interface IPeriodTimeByQty {
  qty: [number, number];
  day: [number, number];
}

export interface IProductSpecAttribute {
  attributeName: string;
  attributeDataType: string;
  attributeValue: string;
}

export interface IProductSpec {
  specGroupName: string;
  attribute: IProductSpecAttribute[];
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
  isActive: boolean; // ! not show all
  isRecommend: boolean;
  isHighLight: boolean;
  isNewArrival: boolean;
  impFactor: number;

  productThumbnailUrl: string;
  productName: string;
  productType: string;
  productCategoryId: string;

  stockLevel: number;
  stockOrder:number;
  stockReadyToSell: number;

  // -> Available
  countVariants: number; // * UPDATED ON [C-U-D] VARIANT
  countPacks: number; // * UPDATED ON [C-U-D] PACK
  countVariantsInPack: number;
  countPacksInVariant: number;
}
export interface IProductList extends IRefProductList {
  display: IProductDisplay;
  productCode: string;
  productSku: string;
  productUnit: string;
  'productUnit_market': string;
  productPrice: IProductPrice;
  productId: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string
  createdBy: string
}

export interface IProductMarketList extends IProductList {
  'isCanBuy_market': string;
  'productName_market': string;
  'productCoverUrl_market': string;
}

// ANCHOR: PRODUCT | Entity (1/6)
// NOTE === attributes on each SKU (variant and pack creation)
export interface IProductRootEntity {
  productShowedImageUrl: string;
  productSku: string;
  productUnit: string;
  'productUnit_market': string;
  productUnitPrice: number;
}

// ANCHOR: PRODUCT | Entity (2/6)
// NOTE === attributes on each SKU
export interface IProductEntity {
  productImagesUrl: IProductImage[];
  'productImagesUrl_market': IProductImage[];
  productCode: string;
  productModel: string;
  productBarcode: string;
  productShortDescription: string;
  'productShortDescription_market': string;
  productPrice: IProductPrice;
  productWholesales: IProductWholesale[];
  minQty: number;
  minWholesaleQty: number;
  toFreeShip: IQtyPrice;
  productPackage: IProductPackage;
  stock: IProductStock;
  stockLevel: number;
  stockOrder: number;
  stockReadyToSell: number;
  preparingTime: IPeriodTimeByQty[];
  leadTimes: IPeriodTimeByQty[];
  displaySku: IProductDisplay;
  shippingMethod: IProductShippingMethod[];
}

// ANCHOR: PRODUCT | Entity (3/6)
export interface IProductAttributes {
  display: IProductDisplay;
  isActive: boolean; // ! not show all
  isRecommend: boolean;
  isHighLight: boolean;
  isNewArrival: boolean;
  isCanBuy: string;
  'isCanBuy_market': string;
  productName: string;
  'productName_market': string;
  productType: string;
  tags: string[];
  'tags_market': string[];
  keywords: string[];
  productCoverUrl: string;
  'productCoverUrl_market': string;
  productCategoryInternal: string;
  productCategoryId: string;
  productCategoryCustomName?: string; // * id = OTHER000
  productVideoCoverUrl: string;
  'productVideoCoverUrl_market': string;
  productDescription: string;
  'productDescription_market': string;
  productBrand: string;
  productSource: string;
  productOrigin: string;
  productChannels: string[];
  productThumbnailUrl: string;
  productSpec?: IProductSpec[];
  haveVariants?: IProductVariantOnly[];
  havePacks?: IProductPackOnly[];
  haveVariantsInPack?: IProductVariantInPack[];
  havePacksInVariant?: IProductPackInVariant[];
}

// ANCHOR: PRODUCT | Entity (4/6)
export interface IDBProduct {
  impFactor: number;
  countVariants: number; // * UPDATED ON [C-U-D] VARIANT
  countPacks: number; // * UPDATED ON [C-U-D] PACK
  countVariantsInPack: number;
  countPacksInVariant: number;
  variantMatchId?: IProductVariantMatchId[];
  variantSelectors?: IProductVariantSelector[];
  updatedBy: string
}

// ANCHOR: PRODUCT | Entity (5/6)
export interface IDBProductByGapp {
  statusProductApproveOnMarket: StatusProductApproveOnMarket
  supportNote: string
  supportBadge: string
}

// ANCHOR: PRODUCT | Entity (6/6)
export interface IDBProductImmu {
  productId: string;
  compId: string;
  businessId: string;
  supplierId: string;
  createdBy: string
}

// ANCHOR: VARIANT | Entity
export interface IProductVariantEntity {
  variantTitle: string;
  variantHierarchy: string[];
}

// Variants Only
export interface IProductVariantOnly
  extends IProductRootEntity,
  IProductEntity,
  IProductVariantEntity { }

export interface IDBProductVariantOnlyImmu {
  productVariantId: string;
  productId: string;
}

export interface IProductVariantAttributes {
  variantSelectors: IProductVariantSelector[];
  variants: IProductVariantOnly[];
}

export interface IProductVariantSelector {
  variantGroupName: string;
  selectors: string[];
}

export interface IProductVariantMatchId {
  variantHierarchy: string[];
  productVariantId: string;
}

export interface IProductPack {
  packTitle: string;
  packSizeLabel: string;
  smallestUnitQty: number;
}

// Packs Only
export interface IProductPackOnly
  extends IProductRootEntity,
  IProductEntity,
  IProductPack {
  productPackId: string;
  createdAt: string;
  updatedAt: string;
}

// Variant -> Pack A / Pack B
export interface IProductPackInVariant
  extends IProductRootEntity,
  IProductEntity,
  IProductVariantEntity,
  IProductPack {
  productVariantPackId: string;
  createdAt: string;
  updatedAt: string;
}

// Pack -> Variant A / Variant B
export interface IProductVariantInPack
  extends IProductRootEntity,
  IProductEntity,
  IProductPack,
  IProductVariantEntity {
  productPackVariantId: string;
  createdAt: string;
  updatedAt: string;
}
