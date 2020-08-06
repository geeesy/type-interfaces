/* eslint-disable no-unused-vars */
import { ICheck, IConnect, IData } from "./interfaces";
import {
  IResAllCategoryInSearchTool,
  IResBanner,
  IResCategory,
  IResCategoryWithChild,
  IResFilterResultProduct,
  IResFilterResultSupplier,
  IResPaymentMethod,
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
  IMainCategory,
  IRecommendMainCategory,
  IBanner,
  IProduct,
  ITop20Products,
  ICategoryWithChild,
  ICategory,
  IRecommendCategory,
  IAllCategoryInSearchTool,
  ISupplierHilight,
  IMessageList,
  IMessageDetail,
  ISavedListProducts,
  ISavedListSuppliers,
  IFilterResultProduct,
  IProductGroupDetail,
  IProductDetail,
  IProductDescription,
  IProductWithAddr,
  IProductWithCount,
  IRecommendSupplier,
  IFilterResultSupplier,
  ISupplierWithSavedList,
  ISupplierOverview,
  ISupplierContact,
  ISupplierFactory,
  ISupplierCersAndDocs,
  ISupplierImgAndVerifiedImg,
  ISupplierWebsite,
  ISupplierCustomPage,
  IRfqScore,
  IQuotaRfq,
  IShippingMethod,
  IPaymentMethods,
  IRfqList,
  IReplyRfqList,
  IQuotaInquiry,
  ISupplier,
  IInquiryProductList,
  ISearchResultLocation,
  IInterest
} from './type-marketplace'
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
  export type ResMainCategory = IResMainCategory | MainCategory;
  export type MainCategory = IMainCategory;

  export type ResRecommendMainCategory = IResRecommendMainCategory | RecommendMainCategory;
  export type RecommendMainCategory = IRecommendMainCategory;

  export type ResBanner = IResBanner | Banner;
  export type Banner = IBanner;

  export type ResProduct = IResProduct | Product;
  export type Product = IProduct;

  export type ResTop20Products = IResTop20Products | Top20Products;
  export type Top20Products = ITop20Products;

  export type ResCategoryWithChild = IResCategoryWithChild | CategoryWithChild;
  export type CategoryWithChild = ICategoryWithChild;

  export type ResCategory = IResCategory | Category;
  export type Category = ICategory;

  export type ResRecommendCategory = IResRecommendCategory | RecommendCategory
  export type RecommendCategory = IRecommendCategory;

  export type ResAllCategoryInSearchTool = IResAllCategoryInSearchTool | AllCategoryInSearchTool;
  export type AllCategoryInSearchTool = IAllCategoryInSearchTool;

  export type ResSupplierHilight = IResSupplierHilight | SupplierHilight;
  export type SupplierHilight = ISupplierHilight;

  export type ResMessageList = IResMessageList | MessageList;
  export type MessageList = IMessageList;

  export type ResMessageDetail = IResMessageDetail | MessageDetail;
  export type MessageDetail = IMessageDetail;

  export type ResSavedListProducts = IResSavedListProducts | SavedListProducts;
  export type SavedListProducts = ISavedListProducts;

  export type ResSavedListSuppliers = IResSavedListSuppliers | SavedListSuppliers;
  export type SavedListSuppliers = ISavedListSuppliers;

  export type ResFilterResultProduct = IResFilterResultProduct | FilterResultProduct;
  export type FilterResultProduct = IFilterResultProduct;

  export type ResProductGroupDetail = IResProductGroupDetail | ProductGroupDetail;
  export type ProductGroupDetail = IProductGroupDetail;

  export type ResProductDescription = IResProductDescription | ProductDescription;
  export type ProductDescription = IProductDescription;

  export type ResProductDetail = IResProductDetail | ProductDetail;
  export type ProductDetail = IProductDetail;

  export type ResProductWithAddr = IResProductWithAddr | ProductWithAddr;
  export type ProductWithAddr = IProductWithAddr;

  export type ResProductWithCount = IResProductWithCount | ProductWithCount;
  export type ProductWithCount = IProductWithCount;

  export type ResRecommendSupplier = IResRecommendSupplier | RecommendSupplier;
  export type RecommendSupplier = IRecommendSupplier;

  export type ResFilterResultSupplier = IResFilterResultSupplier | FilterResultSupplier;
  export type FilterResultSupplier = IFilterResultSupplier;

  export type ResSupplierWithSavedList = IResSupplierWithSavedList | SupplierWithSavedList;
  export type SupplierWithSavedList = ISupplierWithSavedList;

  export type ResSupplierOverview = IResSupplierOverview | SupplierOverview;
  export type SupplierOverview = ISupplierOverview;

  export type ResSupplierContact = IResSupplierContact | SupplierContact;
  export type SupplierContact = ISupplierContact;

  export type ResSupplierFactory = IResSupplierFactory | SupplierFactory;
  export type SupplierFactory = ISupplierFactory;

  export type ResSupplierCersAndDocs = IResSupplierCersAndDocs | SupplierCersAndDocs;
  export type SupplierCersAndDocs = ISupplierCersAndDocs;

  export type ResSupplierImgAndVerifiedImg = IResSupplierImgAndVerifiedImg | SupplierImgAndVerifiedImg;
  export type SupplierImgAndVerifiedImg = ISupplierImgAndVerifiedImg;

  export type ResSupplierWebsite = IResSupplierWebsite | SupplierWebsite;
  export type SupplierWebsite = ISupplierWebsite;

  export type ResSupplierCustomPage = IResSupplierCustomPage | SupplierCustomPage;
  export type SupplierCustomPage = ISupplierCustomPage;

  export type ResRfqScore = IResRfqScore | RfqScore;
  export type RfqScore = IRfqScore;

  export type ResQuotaRfq = IResQuotaRfq | QuotaRfq;
  export type QuotaRfq = IQuotaRfq;

  export type ResShippingMethod = IResShippingMethod | ShippingMethod;
  export type ShippingMethod = IShippingMethod;

  export type ResPaymentMethod = IResPaymentMethod | PaymentMethods;
  export type PaymentMethods = IPaymentMethods;

  export type ResRfqList = IResRfqList | RfqList;
  export type RfqList = IRfqList;

  export type ResReplyRfqList = IResReplyRfqList | ReplyRfqList;
  export type ReplyRfqList = IReplyRfqList;

  export type ResQuotaInquiry = IResQuotaInquiry | QuotaInquiry;
  export type QuotaInquiry = IQuotaInquiry;

  export type ResSupplier = IResSupplier | Supplier;
  export type Supplier = ISupplier;

  export type ResInquiryProductList = IResInquiryProductList | InquiryProductList;
  export type InquiryProductList = IInquiryProductList;

  export type ResSearchResultLocation = IResSearchResultLocation | SearchResultLocation;
  export type SearchResultLocation = ISearchResultLocation;

  export type ResInterest = IResInterest | Interest;
  export type Interest = IInterest;

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
