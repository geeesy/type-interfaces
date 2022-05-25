import {
  ICategoryProductSpecGroup,
  IDBCategoryProductSpecGroup
} from './type-console';
import {
  ICreateProductWithStock,
  IProductInventoryImmu
} from './type-inventory';

import { StatusProductApproveOnMarket } from './enum-status';
import { TOrderItemType } from './type-order';
import { IImage } from './type-apps';

export type TProductType = TOrderItemType

export interface IPriceList {
  priceListId: string;
  price: number;
}

export interface IProductPrice {
  costPrice: number;
  buyPrice: number;
  sellPrice: number;
  wholesalePrice: number;
  wholesalePrice_market: number;
  retailPrice: number;
  retailPrice_market: number; // ! -> Inc.vat
  priceList: IPriceList[]; // * <== SETTING
  priceGroupIds: string[]; // * ==> SETTING
  currency: string;
  maxQty: number;
  maxQty_market: number;
  minQty: number;
  minQty_market: number;
  isVatInc: boolean;
  vatPercent?: number; // default = 7
}

export interface IQtyPrice {
  price: number;
  qty: number;
}

export interface IProductShippingMethod {
  shippingId: string; //
  shippingIconUrl: string; //
  shippingName: string; //
  typeCalPrice: string;
  typeDelivery: string;
  shippingStatus: boolean;
  deliveryTime: {
    //
    start: number;
    end: number;
  };
  note: string; //
  compId: string; //
  createdAt: string; //*
  updatedAt: string; //*
  fixedDelivery: {
    fixedPrice: number; //
    freeShippingPrice: number; //
  };
  calNumberProductsPiece: {
    firstPiecePrice: number; //
    nextPiecePrice: number; //
    freeShippingPrice: number; //
  };
  calNumberProducts: {
    notExceedPiece: [
      {
        numberOfPiece: number;
        amount: number;
        freeShipping: boolean;
      }
    ];
    exceedPiece: {
      numberOfPiece: number;
      amount: number;
      freeShipping: boolean;
    };
    freeShippingPrice: number;
  };
  calNumberProductsWeight: {
    notExceedKg: [
      {
        numberOfWeight: number;
        unitWeight: string;
        amount: number;
        freeShipping: boolean;
      }
    ];
    exceedKg: {
      numberOfWeight: number;
      unitWeight: string;
      amount: number;
      freeShipping: boolean;
    };
    freeShippingPrice: number;
  };
  calNumberProductsDiscount: {
    notExceedPrice: [
      {
        numberOfAmount: number;
        amount: number;
        freeShipping: boolean;
      }
    ];
    exceedPrice: {
      numberOfAmount: number;
      amount: number;
      freeShipping: boolean;
    };
  };
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
  // stockLevel: number
  // stockOrder: number
  shippingMethod?: IProductShippingMethod[] | null;
  productPrice: IProductPrice;
  productWholesales?: IProductWholesale[] | null;
}

export interface IProductWholesale {
  minQty: number;
  minQty_market: number;
  maxQty: number;
  maxQty_market: number;
  wholesalePrice: number;
  wholesalePrice_market: number;
  retailPrice: number;
  retailPrice_market: number;
}

export interface IProductDisplay {
  onCompanyCard: boolean;
  onMarketplace: boolean;
  onVendorProductList: boolean;
  isPriceShowed: boolean;
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

export interface IProductSpec
  extends ICategoryProductSpecGroup,
    IDBCategoryProductSpecGroup {}

/**
 * SECTION: PRODUCT
 */
// ANCHOR: PRODUCT | List
// NOTE === g-biz -> list all products
export interface IRefProductList {
  // index 1
  isActive: boolean; // ! not show all
  isRecommend: boolean;
  isHighLight: boolean;
  isNewArrival: boolean;
  impFactor: number;

  productThumbnailUrl: string;
  productName: string;
  productType: TProductType;
  productCategoryId: string;
  productCategoryName: string;
  productGroupId: string;
  productGroupName: string;
  productShortDescription: string;
  productShortDescription_market: string;

  productPackage: IProductPackage;

  totalStock: number;
  totalReservedStock: number;
  useInventory: boolean;

  // -> Available
  countVariants: number; // * UPDATED ON [C-U-D] VARIANT
  countPacks: number; // * UPDATED ON [C-U-D] PACK
  countVariantsInPack: number;
  countPacksInVariant: number;
}
export interface IProductList extends IRefProductList {
  display: IProductDisplay;
  productCode: string;
  productSkuRef?: string; // ? for variant or pack
  productSku: string;
  productUnit: string;
  productUnit_market: string;
  productPrice: IProductPrice;
  productId: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
  createdBy: string;
}

export interface IProductMarketList extends IProductList {
  isCanBuy_market: boolean;
  productName_market: string;
  productCoverUrl_market: string;
}

// REVIEW: PRODUCT | Entity (1/10)
// NOTE === attributes on each SKU (variant and pack creation)
export interface IProductRootEntity {
  productShowedImageUrl: string; // STUB: SKU Image
  /**
   * --- productShowedImage ---
   * ! DEV
   * Product -> productShowedImage = productCover
   * Variant -> productShowedImage = {{REQ.productShowedImage}}
   * ! PROD
   * Product -> productShowedImage = user has to select one from all product images (if has no product cover image)
   * Variant -> productShowedImage = user has to select one from all product images on each variant
  */ 

  productSku: string;
  productUnit: string;
  productUnit_market: string;
  productUnitPrice: number;
}

// REVIEW: PRODUCT | Entity (2/10)
// NOTE === attributes on each SKU
export interface IProductEntity {
  productCode: string;
  productModel: string;
  productBarcode: string;
  productShortDescription: string;
  productShortDescription_market: string;
  productPrice: IProductPrice;
  productWholesales: IProductWholesale[];
  minQty: number;
  minQty_market: number;
  maxQty: number;
  maxQty_market: number;
  minWholesaleQty: number;
  toFreeShip: IQtyPrice;
  productPackage: IProductPackage;
  preparingTime: IPeriodTimeByQty[];
  leadTimes: IPeriodTimeByQty[];
  displaySku: IProductDisplay;
  shippingMethod: IProductShippingMethod[];
  whichStockOnMarket?: IProductInventoryImmu; // ? use on order from market
}

// REVIEW: PRODUCT | Entity (3/10)
// NOTE === attributes on each SKU (+on parent product of variant product)
export interface IProductEntityImmu {
  useInventory: boolean;
  hasArchived: boolean; // ! on delete
}

// REVIEW: PRODUCT | Entity (4/10)
export interface IProductAttributes {
  display: IProductDisplay;
  isActive: boolean; // ! not show all
  isRecommend: boolean;
  isHighLight: boolean;
  isNewArrival: boolean;
  isCanBuy: boolean;
  isCanBuy_market: boolean;
  productName: string;
  productName_market: string;
  productType: TProductType;
  tags: string[];
  tags_market: string[];
  keywords: string[];
  productCategoryId: string;
  productCategoryName: string;
  productGroupId: string; //? 1 product 1 group
  productGroupName: string;
  productCategoryCustomName?: string; // * id = OTHER000
  productDescription: string;
  productDescription_market: string;
  productBrand: string;
  productSource: string;
  productOrigin: string;
  productChannels: string[];
  productSpec?: IProductSpec[];
  haveVariants?: IProductVariantOnly[];
  havePacks?: IProductPackOnly[];
  haveVariantsInPack?: IProductVariantInPack[];
  havePacksInVariant?: IProductPackInVariant[];
  productSkuRef?: string; // ? for variant or pack
  useInventory: boolean;
}

// REVIEW: PRODUCT | Entity (5/10)
export interface IProductAssets {
  productCoverUrl: string; // STUB: Product Cover
  productCoverUrl_market: string;
  productVideoCoverUrl: string;
  productVideoCoverUrl_market: string;
}

// REVIEW: PRODUCT | Entity (6/10)
export interface IProductImages {
  productImagesUrl: IImage[]; // STUB: [Product Images]
  productImagesUrl_market: IImage[];
}

// REVIEW: PRODUCT | Entity (7/10)
export interface IDBProductAssets {
  productThumbnailUrl: string; // STUB: Product Thumbnail (From Product Cover)
  productThumbImagesUrl: string[]; // STUB: [Product Images (Scaled)]
  productShowedThumbnailUrl: string; // STUB: SKU Thumbnail (From Showed Image)
}

// REVIEW: PRODUCT | Entity (8/10)
export interface IDBProduct {
  impFactor: number;
  countVariants: number; // * UPDATED ON [C-U-D] VARIANT
  countPacks: number; // * UPDATED ON [C-U-D] PACK
  rangeCostPrice: [number, number]; // * UPDATED ON [C-U-D] VARIANT OR PACK
  totalStock: number; // ! INVENTORY
  totalReservedStock: number; // ! INVENTORY
  // stockRefData: IStockRefData[] | null; // ! INVENTORY
  countVariantsInPack: number;
  countPacksInVariant: number;
  variantMatchId?: IProductVariantMatchId[];
  variantSelectors?: IProductVariantSelector[];
  updatedBy: string;
}

// REVIEW: PRODUCT | Entity (9/10)
export interface IDBProductByGapp {
  statusProductApproveOnMarket: StatusProductApproveOnMarket;
  supportNote: string;
  supportBadge: string;
}

// REVIEW: PRODUCT | Entity (10/10)
export interface IDBProductImmu {
  productId: string;
  compId: string;
  businessId: string;
  supplierId: string;
  createdBy: string;
}

/**
 * SECTION: VARIANT
 */
// ANCHOR: VARIANT | Entity
export interface IProductVariantEntity {
  variantTitle: string;
  variantHierarchy: string[];
  totalStock: number; // ! INVENTORY
  totalReservedStock: number; // ! INVENTORY
  // stockRefData: IStockRefData[] // ! INVENTORY
}

// Variants Only
export interface IProductVariantOnly
  extends IProductRootEntity,
    IProductEntity,
    IProductImages,
    IProductEntityImmu,
    IProductVariantEntity {}

export interface IProductVariantOnlyWithStock extends IProductVariantOnly {
  inventories: ICreateProductWithStock[];
  // inventory: ICreateProductWithStock;
  useMultiStock: boolean;
  useInventory: boolean;
}
export interface IDBProductVariantOnlyImmu {
  productVariantId: string;
  productId: string;
}

export interface IProductVariantAttributes {
  variantSelectors: IProductVariantSelector[];
  variants: IProductVariantOnly[];
}

export interface IProductVariantAttributesOnCreate {
  variantSelectors: IProductVariantSelector[];
  variants: IProductVariantOnlyWithStock[];
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
  totalStock: number; // ! INVENTORY
  totalReservedStock: number; // ! INVENTORY
  // stockRefData: IStockRefData[] // ! INVENTORY
}

// Packs Only
export interface IProductPackOnly
  extends IProductRootEntity,
    IProductEntity,
    IProductImages,
    IProductEntityImmu,
    IProductPack {
  productPackId: string;
  createdAt: string;
  updatedAt: string;
}

// Variant -> Pack A / Pack B
export interface IProductPackInVariant
  extends IProductRootEntity,
    IProductEntity,
    IProductImages,
    IProductEntityImmu,
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
    IProductImages,
    IProductEntityImmu,
    IProductPack,
    IProductVariantEntity {
  productPackVariantId: string;
  createdAt: string;
  updatedAt: string;
}

// PRODUCT GROUP
export interface IProductGroup {
  productGroupName: string;
  productGroupInfo: string;
  productGroupIconUrl: string;
}
export interface IDBProductGroupCount {
  countProduct: number;
}

export interface IDBProductGroupImmu {
  productGroupId: string;
  compId: string;
}

// SEO
export interface ISeoMeta {
  title: string;
  imageUrl: string;
  imageFacebook: string;
  imageTwitter: string;
  description: string;
}
