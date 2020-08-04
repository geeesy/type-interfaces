/* eslint-disable no-unused-vars */
import { ICheck, IConnect } from './interfaces'
import {
  IResMainCategory,
  IResRecommendMainCategory,
  IResBanner,
  IResProduct,
  IResTop20Products,
  IResCategoryWithChild,
  IResCategory,
  IResRecommendCategory,
  IResAllCategoryInSearchTool,
  IResSupplierHilight,
  IResMessageList,
  IResMessageDetail,
  IResSavedListProducts,
  IResSavedListSuppliers,
  IResFilterResultProduct,
  IResProductGroupDetail,
  IResProductDescription,
  IResProductDetail,
  IResProductV2,
  IResProductWithCount,
  IResRecommendSupplier,
  IResFilterResultSupplier,
  IResSupplierWithSavedList,
  IResSupplierOverview,
  IResSupplierContact,
  IResSupplierFactory,
  IResSupplierCersAndDocs,
  IResSupplierImgAndVerifiedImg,
  IResSupplierCustomPage,
  IResRfqScore,
  IResQuotaRfq,
  IResShippingMethod,
  IResGetPaymentMethod,
  IResRfqList,
  IResReplyRfqList,
  IResQuotaInquiry,
  IResSupplier,
  IResInquiryProductList,
  IResSearchResultLocation,
  IResInterest
} from './type-marketplace'

export namespace geeesy {
  export type ResConnect = IConnect;
  export type ResCheck = ICheck;
}

export namespace geeesyMarketplace {
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
