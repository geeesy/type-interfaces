import {
  IAddress,
  IAddressSupplier,
  IAllCategoryInSearchTool,
  IBanner,
  ICategory,
  ICategoryWithChild,
  IChildCategory,
  IFactoryAddress,
  IFilterResultProduct,
  IFilterResultSupplier,
  IImages,
  IInquiryProductList,
  IInterest,
  ILeadTime,
  IMainCategory,
  IMessageDetail,
  IMessageList,
  IOfficeHour,
  IPaymentMethodTypeAttr,
  IPaymentMethods,
  IProduct,
  IProductDescription,
  IProductDetail,
  IProductGroup,
  IProductGroupDetail,
  IProductPackage,
  IProductWholeSale,
  IProductWithAddr,
  IProductWithCount,
  IProductWithOutSupplier,
  IQuotaInquiry,
  IQuotaRfq,
  IRecommendCategory,
  IRecommendMainCategory,
  IRecommendSupplier,
  IReplyRfqList,
  IResAllCategoryInSearchTool,
  IResBanner,
  IResCategory,
  IResCategoryWithChild,
  IResFilterResultProduct,
  IResFilterResultSupplier,
  IResInquiryProductList,
  IResInterest,
  IResMainCategory,
  IResMessageDetail,
  IResMessageList,
  IResPaymentMethod,
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
  IResSurvey,
  IResTop20Products,
  IRfqList,
  IRfqScore,
  ISavedListProducts,
  ISavedListSuppliers,
  ISearchResultLocation,
  IShippingMethod,
  ISupplier,
  ISupplierCersAndDocs,
  ISupplierCertificates,
  ISupplierContact,
  ISupplierCustomPage,
  ISupplierDocs,
  ISupplierFactory,
  ISupplierHilight,
  ISupplierImage,
  ISupplierImgAndVerifiedImg,
  ISupplierOverview,
  ISupplierWebsite,
  ISupplierWithSavedList,
  ISurvey,
  ITop20Products,
  IWholesale,
  IsavedList,
  Requestors
} from './type-marketplace'
import {
  IBannerConsole,
  ICategoryConsole,
  IDistributor,
  IMainCategoryConsole,
  IPaymentMethod,
  IProductCategory,
  IProductCategorySpec,
  IProductMainCategory,
  IResBannerConsole,
  IResCategoryConsole,
  IResDistributor,
  IResMainCategoryConsole,
  IResPaymentMethodConsole,
  IResProductCategory,
  IResProductCategorySpec,
  IResProductMainCategory,
  IResShippingMethodConsole,
  IResSupplierConsole,
  IShippingMethodConsole,
  ISupplierConsole
} from './type-console'
import {
  ICal,
  IManufacturerPrice,
  IMarketPrice,
  IResManufacturerPrice,
  IResMarketPrice
} from './type-inapp'
/* eslint-disable no-unused-vars */
import { ICheck, IConnect, IData } from './interfaces'

export namespace Geeesy {
  export type ResConnect = IConnect;
  // export type ResCheck = ICheck & IData;
  export type ResCheck = ICheck | Data;
  export type Data = IData
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

  export type ResSurvey = IResSurvey | Survey;
  export type Survey = ISurvey;

  export type ProductGroup = IProductGroup;
  export type ChildCategory = IChildCategory;
  export type savedList = IsavedList;
  export type ProductWithOutSupplier = IProductWithOutSupplier;
  export type Address = IAddress;
  export type PaymentMethod = IPaymentMethod;
  export type PaymentMethodTypeAttr = IPaymentMethodTypeAttr;
  export type ProductCategorySpec = IProductCategorySpec;
  export type ProductPackage = IProductPackage;
  export type Wholesale = IWholesale;
  export type LeadTime = ILeadTime;
  export type ProductWholeSale = IProductWholeSale;
  export type AddressSupplier = IAddressSupplier;
  export type OfficeHour = IOfficeHour;
  export type FactoryAddress = IFactoryAddress;
  export type SupplierDocs = ISupplierDocs;
  export type SupplierImage = ISupplierImage;
  export type Images = IImages;
  export type SupplierCertificates = ISupplierCertificates;
  export type equestors = Requestors;

}

export namespace GeeesyInApp {
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

  export type ResSurvey = IResSurvey | Survey;
  export type Survey = ISurvey;

  export type ResMarketPrice = IResMarketPrice | MarketPrice;
  export type MarketPrice = IMarketPrice;

  export type ResManufacturerPrice = IResManufacturerPrice | ManufacturerPrice;
  export type ManufacturerPrice = IManufacturerPrice;

  export type ProductGroup = IProductGroup;
  export type ChildCategory = IChildCategory;
  export type savedList = IsavedList;
  export type ProductWithOutSupplier = IProductWithOutSupplier;
  export type Address = IAddress;
  export type PaymentMethod = IPaymentMethod;
  export type PaymentMethodTypeAttr = IPaymentMethodTypeAttr;
  export type ProductCategorySpec = IProductCategorySpec;
  export type ProductPackage = IProductPackage;
  export type Wholesale = IWholesale;
  export type LeadTime = ILeadTime;
  export type ProductWholeSale = IProductWholeSale;
  export type AddressSupplier = IAddressSupplier;
  export type OfficeHour = IOfficeHour;
  export type FactoryAddress = IFactoryAddress;
  export type SupplierDocs = ISupplierDocs;
  export type SupplierImage = ISupplierImage;
  export type Images = IImages;
  export type SupplierCertificates = ISupplierCertificates;
  export type equestors = Requestors;
  export type Cal = ICal;

}

export namespace GeeesyConsole {
  export type ResPaymentMethod = IResPaymentMethodConsole | PaymentMethod;
  export type PaymentMethod = IPaymentMethod;

  export type ResBanner = IResBannerConsole | Banner;
  export type Banner = IBannerConsole;

  export type ResCategory = IResCategoryConsole | Category;
  export type Category = ICategoryConsole;

  export type ResDistributor = IResDistributor | Distributor;
  export type Distributor = IDistributor;

  export type ResMainCategory = IResMainCategoryConsole | MainCategory;
  export type MainCategory = IMainCategoryConsole;

  export type ResProductCategory =
    | IResProductCategory
    | ProductCategory;
  export type ProductCategory = IProductCategory;

  export type ResProductCategorySpec =
    | IResProductCategorySpec
    | ProductCategorySpec;
  export type ProductCategorySpec = IProductCategorySpec;

  export type ResProductMainCategory =
    | IResProductMainCategory
    | ProductMainCategory;
  export type ProductMainCategory = IProductMainCategory;

  export type ResShippingMethod = IResShippingMethodConsole | ShippingMethod;
  export type ShippingMethod = IShippingMethodConsole;

  export type ResSupplier = IResSupplierConsole | Supplier;
  export type Supplier = ISupplierConsole;
}

export { IProduct } from './type-marketplace'
