/* eslint-disable no-unused-vars */
import { ICheck, IConnect } from './interfaces'
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
  IResProductV2,
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
  IResSupplierWithSavedList,
  IResTop20Products
} from './type-marketplace'

export namespace Geeesy {
  export type ResConnect = IConnect;
  export type ResCheck = ICheck;
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
  export type IProductV2 = IResProductV2;
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
}
