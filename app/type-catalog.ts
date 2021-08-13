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
      end:number,
    },
    note: string,
    compId: string,
    createdAt: string,
    updatedAt: string,
    fixedDelivery: {
      fixedPrice: number,
      freeshippingPrice:number,
    },
    calnumberProductsPiece: {
      fitstpiecePrice: number,
      nextpiecePrice: number,
      freeshippingPrice:number,
    },
    calnumberProducts: {
      notexceedPiece: [
        {
          numberofPiece: number,
          amount: number,
          freeshipping: boolean
        }
      ],
      exceedPiece: {
        numberofPiece: number,
        amount: number,
        freeshipping: boolean
      },
      freeshippingPrice:number,
    },
    calnumberProductsWeight: {
      notexceedKg: [
        {
          numberofWeight: number,
          unitWeight: string,
          amount: number,
          freeshipping: boolean
        }
      ],
      exceedKg: {
        numberofWeight: number,
        unitWeight: string,
        amount: number
        freeshipping: boolean
      },
      freeshippingPrice: number
    },
    calnumberProductsDiscount: {
      notexceedPrice: [
       {
          numberofAmount: number,
          amount: number,
          freeshipping: boolean
        }
      ],
      exceedPrice: {
        numberofAmount: number,
        amount: number,
        freeshipping: boolean
      }
    }

}

export interface ILogProduct {
  updatedBy: string;
  action: string;
  createdAt: string;
  updatedAt: string;
  oldValue: string;
  newValue: string;
  productName: string;
  productType: string;
  productSku: string;
  productShipping: IProductShippingMethod;
  productPrice: IProductPrice;
  productWhoelsale: IProductWholesale;
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
}

// ANCHOR: PRODUCT | Entity (1/5)
// NOTE === attributes on each SKU (variant and pack creation)
export interface IProductRootEntity {
  productShowedImageUrl: string;
  productSku: string;
  productUnit: string;
  'productUnit_market': string;
  productUnitPrice: number;
}

// ANCHOR: PRODUCT | Entity (2/5)
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
  stockLevel: number
  preparingTime: IPeriodTimeByQty[];
  leadTimes: IPeriodTimeByQty[];
  displaySku: IProductDisplay;
  shippingMethod: IProductShippingMethod[];
}

// ANCHOR: PRODUCT | Entity (3/5)
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

// ANCHOR: PRODUCT | Entity (4/5)
export interface IDBProduct {
  impFactor: number;
  countVariants: number; // * UPDATED ON [C-U-D] VARIANT
  countPacks: number; // * UPDATED ON [C-U-D] PACK
  countVariantsInPack: number;
  countPacksInVariant: number;
  variantMatchId?: IProductVariantMatchId[];
  variantSelectors?: IProductVariantSelector[];
  statusProductApproveOnMarket: StatusProductApproveOnMarket

}

// ANCHOR: PRODUCT | Entity (5/5)
export interface IDBProductImmu {
  productId: string;
  compId: string;
  businessId: string;
  supplierId: string;
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
