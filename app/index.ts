/* eslint-disable no-unused-vars */
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
  IResSearchFilter,
  IResSearchResultLocation,
  IResShippingMethod,
  IResSupProductCat,
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
  IRessavelistMarket,
  IRfqList,
  IRfqScore,
  ISavedListProducts,
  ISavedListSuppliers,
  ISavelistMarket,
  ISearchFilter,
  ISearchResultLocation,
  IShippingMethod,
  ISupProductCat,
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
/* eslint-disable no-unused-vars */
import {
  IApprover,
  IApproverFormCreate,
  IApproverFormCreateParams,
  IBillingNote,
  IBillingNoteFormCreate,
  IBillingNoteFormCreateParams,
  IInquiry,
  IInquiryFormCreate,
  IInquiryFormCreateParams,
  IInquiryList,
  IInvoice,
  IInvoiceFormCreate,
  IInvoiceFormCreateParams,
  IOrderList,
  IPO,
  IPOFormCreate,
  IPOFormCreateParams,
  IQuotation,
  IQuotationFormCreate,
  IQuotationFormCreateParams,
  IQuotationList,
  IResApprover,
  IResBillingNote,
  IResInquiry,
  IResInquiryList,
  IResInvoice,
  IResOrderList,
  IResPO,
  IResQuotation,
  IResQuotationList,
  IResRfq,
  IResRfqMarket,
  IResRfqMarketList,
  IResSO,
  IResTaxInvoice,
  IResVideoList,
  IRfq,
  IRfqFormCreate,
  IRfqFormCreateParams,
  IRfqMarket,
  IRfqMarketFormCreate,
  IRfqMarketFormCreateParams,
  IRfqMarketList,
  ISO,
  ISOFormCreate,
  ISOFormCreateParams,
  ITaxInvoice,
  ITaxInvoiceFormCreate,
  ITaxInvoiceFormCreateParams,
  IVideoList
} from './type-apps'
import {
  IBannerConsole,
  ICategoryConsole,
  ICreateCategoryLevel,
  ICreateMainCategory,
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
  ICompareProduct,
  IManufacturerPrice,
  IMarketPrice,
  IResCompareProduct,
  IResManufacturerPrice,
  IResMarketPrice
} from './type-inapp'
import { ICheck, IConnect, IData } from './interfaces'

export namespace Geeesy {
  export type ResConnect = IConnect;
  // export type ResCheck = ICheck & IData;
  export type ResCheck = ICheck | Data;
  export type Data = IData;
}

/* #region FIXME: Marketplace */
export namespace GeeesyMarketplace {

  export type ResSearchFilter = IResSearchFilter
  export type SearchFilter = ISearchFilter

  export type ResMainCategory = IResMainCategory | MainCategory;
  export type MainCategory = IMainCategory;

  export type ResRecommendMainCategory =
    | IResRecommendMainCategory
    | RecommendMainCategory;
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

  export type ResRecommendCategory = IResRecommendCategory | RecommendCategory;
  export type RecommendCategory = IRecommendCategory;

  export type ResAllCategoryInSearchTool =
    | IResAllCategoryInSearchTool
    | AllCategoryInSearchTool;
  export type AllCategoryInSearchTool = IAllCategoryInSearchTool;

  export type ResSupplierHilight = IResSupplierHilight | SupplierHilight;
  export type SupplierHilight = ISupplierHilight;

  export type ResMessageList = IResMessageList | MessageList;
  export type MessageList = IMessageList;

  export type ResMessageDetail = IResMessageDetail | MessageDetail;
  export type MessageDetail = IMessageDetail;

  export type ResSavedListProducts = IResSavedListProducts | SavedListProducts;
  export type SavedListProducts = ISavedListProducts;

  export type ResSavedListSuppliers =
    | IResSavedListSuppliers
    | SavedListSuppliers;
  export type SavedListSuppliers = ISavedListSuppliers;

  export type ResFilterResultProduct =
    | IResFilterResultProduct
    | FilterResultProduct;
  export type FilterResultProduct = IFilterResultProduct;

  export type ResProductGroupDetail =
    | IResProductGroupDetail
    | ProductGroupDetail;
  export type ProductGroupDetail = IProductGroupDetail;

  export type ResProductDescription =
    | IResProductDescription
    | ProductDescription;
  export type ProductDescription = IProductDescription;

  export type ResProductDetail = IResProductDetail | ProductDetail;
  export type ProductDetail = IProductDetail;

  export type ResProductWithAddr = IResProductWithAddr | ProductWithAddr;
  export type ProductWithAddr = IProductWithAddr;

  export type ResProductWithCount = IResProductWithCount | ProductWithCount;
  export type ProductWithCount = IProductWithCount;

  export type ResRecommendSupplier = IResRecommendSupplier | RecommendSupplier;
  export type RecommendSupplier = IRecommendSupplier;

  export type ResFilterResultSupplier =
    | IResFilterResultSupplier
    | FilterResultSupplier;
  export type FilterResultSupplier = IFilterResultSupplier;

  export type ResSupplierWithSavedList =
    | IResSupplierWithSavedList
    | SupplierWithSavedList;
  export type SupplierWithSavedList = ISupplierWithSavedList;

  export type ResSupplierOverview = IResSupplierOverview | SupplierOverview;
  export type SupplierOverview = ISupplierOverview;

  export type ResSupplierContact = IResSupplierContact | SupplierContact;
  export type SupplierContact = ISupplierContact;

  export type ResSupplierFactory = IResSupplierFactory | SupplierFactory;
  export type SupplierFactory = ISupplierFactory;

  export type ResSupplierCersAndDocs =
    | IResSupplierCersAndDocs
    | SupplierCersAndDocs;
  export type SupplierCersAndDocs = ISupplierCersAndDocs;

  export type ResSupplierImgAndVerifiedImg =
    | IResSupplierImgAndVerifiedImg
    | SupplierImgAndVerifiedImg;
  export type SupplierImgAndVerifiedImg = ISupplierImgAndVerifiedImg;

  export type ResSupplierWebsite = IResSupplierWebsite | SupplierWebsite;
  export type SupplierWebsite = ISupplierWebsite;

  export type ResSupplierCustomPage =
    | IResSupplierCustomPage
    | SupplierCustomPage;
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

  export type ResInquiryProductList =
    | IResInquiryProductList
    | InquiryProductList;
  export type InquiryProductList = IInquiryProductList;

  export type ResSearchResultLocation =
    | IResSearchResultLocation
    | SearchResultLocation;
  export type SearchResultLocation = ISearchResultLocation;

  export type ResInterest = IResInterest | Interest;
  export type Interest = IInterest;

  export type ResSurvey = IResSurvey | Survey;
  export type Survey = ISurvey;

  export type RessavelistMarket = IRessavelistMarket | SavelistMarket;
  export type SavelistMarket = ISavelistMarket;

  export type ResSupProductCat = IResSupProductCat | SupProductCat;
  export type SupProductCat = ISupProductCat;

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
/* #endregion */

export namespace GeeesyInApp {
  export type ResMainCategory = IResMainCategory | MainCategory;
  export type MainCategory = IMainCategory;

  export type ResRecommendMainCategory =
    | IResRecommendMainCategory
    | RecommendMainCategory;
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

  export type ResRecommendCategory = IResRecommendCategory | RecommendCategory;
  export type RecommendCategory = IRecommendCategory;

  export type ResAllCategoryInSearchTool =
    | IResAllCategoryInSearchTool
    | AllCategoryInSearchTool;
  export type AllCategoryInSearchTool = IAllCategoryInSearchTool;

  export type ResSupplierHilight = IResSupplierHilight | SupplierHilight;
  export type SupplierHilight = ISupplierHilight;

  export type ResMessageList = IResMessageList | MessageList;
  export type MessageList = IMessageList;

  export type ResMessageDetail = IResMessageDetail | MessageDetail;
  export type MessageDetail = IMessageDetail;

  export type ResSavedListProducts = IResSavedListProducts | SavedListProducts;
  export type SavedListProducts = ISavedListProducts;

  export type ResSavedListSuppliers =
    | IResSavedListSuppliers
    | SavedListSuppliers;
  export type SavedListSuppliers = ISavedListSuppliers;

  export type ResFilterResultProduct =
    | IResFilterResultProduct
    | FilterResultProduct;
  export type FilterResultProduct = IFilterResultProduct;

  export type ResProductGroupDetail =
    | IResProductGroupDetail
    | ProductGroupDetail;
  export type ProductGroupDetail = IProductGroupDetail;

  export type ResProductDescription =
    | IResProductDescription
    | ProductDescription;
  export type ProductDescription = IProductDescription;

  export type ResProductDetail = IResProductDetail | ProductDetail;
  export type ProductDetail = IProductDetail;

  export type ResProductWithAddr = IResProductWithAddr | ProductWithAddr;
  export type ProductWithAddr = IProductWithAddr;

  export type ResProductWithCount = IResProductWithCount | ProductWithCount;
  export type ProductWithCount = IProductWithCount;

  export type ResRecommendSupplier = IResRecommendSupplier | RecommendSupplier;
  export type RecommendSupplier = IRecommendSupplier;

  export type ResFilterResultSupplier =
    | IResFilterResultSupplier
    | FilterResultSupplier;
  export type FilterResultSupplier = IFilterResultSupplier;

  export type ResSupplierWithSavedList =
    | IResSupplierWithSavedList
    | SupplierWithSavedList;
  export type SupplierWithSavedList = ISupplierWithSavedList;

  export type ResSupplierOverview = IResSupplierOverview | SupplierOverview;
  export type SupplierOverview = ISupplierOverview;

  export type ResSupplierContact = IResSupplierContact | SupplierContact;
  export type SupplierContact = ISupplierContact;

  export type ResSupplierFactory = IResSupplierFactory | SupplierFactory;
  export type SupplierFactory = ISupplierFactory;

  export type ResSupplierCersAndDocs =
    | IResSupplierCersAndDocs
    | SupplierCersAndDocs;
  export type SupplierCersAndDocs = ISupplierCersAndDocs;

  export type ResSupplierImgAndVerifiedImg =
    | IResSupplierImgAndVerifiedImg
    | SupplierImgAndVerifiedImg;
  export type SupplierImgAndVerifiedImg = ISupplierImgAndVerifiedImg;

  export type ResSupplierWebsite = IResSupplierWebsite | SupplierWebsite;
  export type SupplierWebsite = ISupplierWebsite;

  export type ResSupplierCustomPage =
    | IResSupplierCustomPage
    | SupplierCustomPage;
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

  export type ResInquiryProductList =
    | IResInquiryProductList
    | InquiryProductList;
  export type InquiryProductList = IInquiryProductList;

  export type ResSearchResultLocation =
    | IResSearchResultLocation
    | SearchResultLocation;
  export type SearchResultLocation = ISearchResultLocation;

  export type ResInterest = IResInterest | Interest;
  export type Interest = IInterest;

  export type ResSurvey = IResSurvey | Survey;
  export type Survey = ISurvey;

  export type ResMarketPrice = IResMarketPrice | MarketPrice;
  export type MarketPrice = IMarketPrice;

  export type ResManufacturerPrice = IResManufacturerPrice | ManufacturerPrice;
  export type ManufacturerPrice = IManufacturerPrice;

  export type ResCompareProduct = IResCompareProduct | CompareProduct;
  export type CompareProduct = ICompareProduct;

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

  // CREATE CATEGORY
  export type CreateMainCategory = ICreateMainCategory;
  export type CreateCategoryLevel = ICreateCategoryLevel;

  export type ResProductCategory = IResProductCategory | ProductCategory;
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

export namespace GeeesyApps {

  export type ResVideoList = IResVideoList | VideoList;
  export type VideoList = IVideoList;

  export type ResOrderList = IResOrderList | OrderList;
  export type OrderList = IOrderList;

  /**
   * @description
   * Interface for Inquiry
   * @param
   */
  export type InquiryFormCreate = IInquiryFormCreate;
  export type InquiryFormCreateParams = IInquiryFormCreateParams;
  export type InquiryFormSubmit = IInquiryFormCreate & IInquiryFormCreateParams;
  export type ResInquiryList = IResInquiryList | IInquiryList
  export type InquiryList = IInquiryList
  export type ResInquiry = IResInquiry | IInquiry;
  export type Inquiry = IInquiry;

  /**
   * @description
   * Interface for RFQ Market
   * @param
   */
  export type RfqMarketFormCreate = IRfqMarketFormCreate;
  export type RfqMarketFormCreateParams = IRfqMarketFormCreateParams;
  export type RfqMarketFormSubmit = IRfqMarketFormCreate & IRfqMarketFormCreateParams;
  export type ResRfqMarketList = IResRfqMarketList | IRfqMarketList
  export type RfqMarketList = IRfqMarketList
  export type ResRfqMarket = IResRfqMarket | IRfqMarket;
  export type RfqMarket = IRfqMarket;

  /**
 * @description
 * Interface for RFQ creation
 * @param
 */
  export type RfqFormCreate = IRfqFormCreate;
  export type RfqFormCreateParams = IRfqFormCreateParams;
  export type RfqFormSubmit = IRfqFormCreate & IRfqFormCreateParams;
  export type ResRfqList = IResRfqList | IRfqList
  export type RfqList = IRfqList
  export type ResRfq = IResRfq | IRfq;
  export type Rfq = IRfq;

  /**
   * @description
   * FORM Interface for Quotation creation
   * @param
   * senderId
   * receiverId
   * buyerId
   * sellerId
   */
  export type QuotationFormCreate = IQuotationFormCreate;
  export type QuotationFormCreateParams = IQuotationFormCreateParams;
  export type QuotationFormSubmit = IQuotationFormCreate &
    IQuotationFormCreateParams;
  export type ResQuotationList = IResQuotationList | IQuotationList
  export type QuotationList = IQuotationList
  export type ResQuotation = IResQuotation | IQuotation;
  export type Quotation = IQuotation;

  /**
   * @description
   * FORM Interface for Purchase Order (PO) creation
   * @param

   */
  export type POFormCreate = IPOFormCreate;
  export type POFormCreateParams = IPOFormCreateParams;
  export type POFormSubmit = IPOFormCreate & IPOFormCreateParams;
  export type ResPO = IResPO | IPO;
  export type PO = IPO;

  /**
   * @description
   * FORM Interface for Sales Order (SO) creation
   * @param

   */
  export type SOFormCreate = ISOFormCreate;
  export type SoFormCreateParams = ISOFormCreateParams;
  export type SOFormSubmit = ISOFormCreate & ISOFormCreateParams;
  export type ResSO = IResSO | ISO;
  export type SO = ISO;

  /**
   * @description
   * FORM Interface for Billing Note creation
   * @param

   */
  export type BillingNoteFormCreate = IBillingNoteFormCreate;
  export type BillingNoteFormCreateParams = IBillingNoteFormCreateParams;
  export type BillingNoteFormSubmit = IBillingNoteFormCreate & IBillingNoteFormCreateParams;
  export type ResBillingNote = IResBillingNote | IBillingNote;
  export type BillingNote = IBillingNote;

  /**
   * @description
   * FORM Interface for Invoice creation
   * @param

   */
  export type InvoiceFormCreate = IInvoiceFormCreate;
  export type InvoiceFormCreateParams = IInvoiceFormCreateParams;
  export type InvoiceFormSubmit = IInvoiceFormCreate & IInvoiceFormCreateParams;
  export type ResInvoice = IResInvoice | IInvoice;
  export type Invoice = IInvoice;

  /**
   * @description
   * FORM Interface for TAX Invoice creation
   * @param

   */
  export type TaxInvoiceFormCreate = ITaxInvoiceFormCreate;
  export type TaxInvoiceFormCreateParams = ITaxInvoiceFormCreateParams;
  export type TaxInvoiceFormSubmit = ITaxInvoiceFormCreate & ITaxInvoiceFormCreateParams;
  export type ResTaxInvoice = IResTaxInvoice | ITaxInvoice;
  export type TaxInvoice = ITaxInvoice;

  /**
   * @description
   * FORM Interface for Approver Setting
   * @param

   */
  export type ApproverFormCreate = IApproverFormCreate
  export type ApproverFormCreateParams = IApproverFormCreateParams
  export type ApproverFormSubmit = IApproverFormCreate & IApproverFormCreateParams
  export type ResApprover = IResApprover | IApprover
  export type Approver = IApprover
}

export * as IMarketplace from './type-marketplace'
export * as IInapp from './type-inapp'
export * as IConsole from './type-console'
export * as IApps from './type-apps'
export * as STATUS from './enum-status'
export * as CONST from './enum-const'
