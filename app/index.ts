/* eslint-disable no-unused-vars */
import { ICheck, IConnect, IData } from "./interfaces";
import {
  IResAllCategoryInSearchTool,
  IResBanner,
  IResCategory,
  IResCategoryWithChild,
  IResFilterResultProduct,
  IResFilterResultSupplier,
  IResGetPaymentMethod,
  IResInquiryProductList,
  IResInterest,
  IResMainCategory,
  IResMessageDetail,
  IResMessageList,
  IResProduct,
  IResProductDescription,
  IResProductDetail,
  IResProductGroupDetail,
  IResProductWithAddr,
  IResProductWithCount,
  IResQuotaInquiry,
  IResQuotaRfq,
  IResRecommendCategory,
  IResRecommendMainCategory,
  IResRecommendSupplier,
  IResReplyRfqList,
  IResRfqList,
  IResRfqScore,
  IResSavedListProducts,
  IResSavedListSuppliers,
  IResSearchResultLocation,
  IResShippingMethod,
  IResSupplier,
  IResSupplierCersAndDocs,
  IResSupplierContact,
  IResSupplierCustomPage,
  IResSupplierFactory,
  IResSupplierHilight,
  IResSupplierImgAndVerifiedImg,
  IResSupplierOverview,
  IResSupplierWebsite,
  IResSupplierWithSavedList,
  IResTop20Products,
} from "./type-marketplace";
import {
  IcsResBanner,
  IcsResCategory,
  IcsResDistributor,
  IcsResMainCategory,
  IcsResPaymentMethod,
  IcsResProductCategory,
  IcsResProductCategorySpec,
  IcsResProductMainCategory,
  IcsResShippingMethod,
  IcsResSupplier,
  IcsDataSupplier,
  IcsDataDistributor,
  IcsDataMainCategory,
  IcsDataBanner,
  IcsDataCategory,
  IcsDataPaymentMethod,
  IcsDataProductCategory,
  IcsDataProductCategorySpec,
  IcsDataProductMainCategory,
  IcsDataShippingMethod,
} from "./type-console";

export namespace Geeesy {
  export type ResConnect = IConnect;
  export type ResCheck = ICheck & IData;
}

export namespace GeeesyMarketplace {
  export type IMainCategory = IResMainCategory;
  export type IRecommendMainCategory = IResRecommendMainCategory;
  export type IBanner = IResBanner;
  export type IProduct = IResProduct;
  export type ITop20Products = IResTop20Products;
  export type ICategoryWithChild = IResCategoryWithChild;
  export type ICategory = IResCategory;
  export type IRecommendCategory = IResRecommendCategory;
  export type IAllCategoryInSearchTool = IResAllCategoryInSearchTool;
  export type ISupplierHilight = IResSupplierHilight;
  export type IMessageList = IResMessageList;
  export type IMessageDetail = IResMessageDetail;
  export type ISavedListProducts = IResSavedListProducts;
  export type ISavedListSuppliers = IResSavedListSuppliers;
  export type IFilterResultProduct = IResFilterResultProduct;
  export type IProductGroupDetail = IResProductGroupDetail;
  export type IProductDescription = IResProductDescription;
  export type IProductDetail = IResProductDetail;
  export type IProductWithAddr = IResProductWithAddr;
  export type IProductWithCount = IResProductWithCount;
  export type IRecommendSupplier = IResRecommendSupplier;
  export type IFilterResultSupplier = IResFilterResultSupplier;
  export type ISupplierWithSavedList = IResSupplierWithSavedList;
  export type ISupplierOverview = IResSupplierOverview;
  export type ISupplierContact = IResSupplierContact;
  export type ISupplierFactory = IResSupplierFactory;
  export type ISupplierCersAndDocs = IResSupplierCersAndDocs;
  export type ISupplierImgAndVerifiedImg = IResSupplierImgAndVerifiedImg;
  export type ISupplierCustomPage = IResSupplierCustomPage;
  export type IRfqScore = IResRfqScore;
  export type IQuotaRfq = IResQuotaRfq;
  export type IShippingMethod = IResShippingMethod;
  export type IGetPaymentMethod = IResGetPaymentMethod;
  export type IRfqList = IResRfqList;
  export type IReplyRfqList = IResReplyRfqList;
  export type IQuotaInquiry = IResQuotaInquiry;
  export type ISupplier = IResSupplier;
  export type IInquiryProductList = IResInquiryProductList;
  export type ISearchResultLocation = IResSearchResultLocation;
  export type IInterest = IResInterest;
  export type ISupplierWebsite = IResSupplierWebsite;
}

export namespace GeeesyConsole {
  export type IcsPaymentMethod = IcsResPaymentMethod | CsDataPaymentMethod;
  export type CsDataPaymentMethod = IcsDataPaymentMethod;
  export type IcsBanner = IcsResBanner | CsDataBanner;
  export type CsDataBanner = IcsDataBanner;
  export type IcsCategory = IcsResCategory | CsDataCategory;
  export type CsDataCategory = IcsDataCategory;
  export type IcsDistributor = IcsResDistributor | CsDataDistributor;
  export type CsDataDistributor = IcsDataDistributor;
  export type IcsMainCategory = IcsResMainCategory | CsDataMainCategory;
  export type CsDataMainCategory = IcsDataMainCategory;
  export type IcsProductCategory =
    | IcsResProductCategory
    | CsDataProductCategory;
  export type CsDataProductCategory = IcsDataProductCategory;
  export type IcsProductCategorySpec =
    | IcsResProductCategorySpec
    | CsDataProductCategorySpec;
  export type CsDataProductCategorySpec = IcsDataProductCategorySpec;
  export type IcsProductMainCategory =
    | IcsResProductMainCategory
    | CsDataProductMainCategory;
  export type CsDataProductMainCategory = IcsDataProductMainCategory;
  export type IcsShippingMethod = IcsResShippingMethod | CsDataShippingMethod;
  export type CsDataShippingMethod = IcsDataShippingMethod;
  export type IcsSupplier = IcsResSupplier | CsDataSupplier;
  export type CsDataSupplier = IcsDataSupplier;
}
