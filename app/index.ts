/* eslint-disable no-unused-vars */
import {
  IAddress,
  IAddressSupplier,
  IAllCategoryInSearchTool,
  IBanner,
  ICategoryWithChild,
  IChildCategory,
  IFactoryAddress,
  IFilterResultProduct,
  IFilterResultSupplier,
  IImages,
  IInterest,
  ILeadTime,
  IMessageDetail,
  IMessageList,
  IOfficeHour,
  IPaymentMethodTypeAttr,
  IPaymentMethods,
  IProductDescription,
  IProductDetail,
  IProductGroup,
  IProductGroupDetail,
  IProductPackage,
  IProductWholeSale,
  IProductWithAddr,
  IProductWithCount,
  IProductWithOutSupplier,
  IRecommendCategory,
  IRecommendSupplier,
  IResAllCategoryInSearchTool,
  IResBanner,
  IResCategoryWithChild,
  IResFilterResultProduct,
  IResFilterResultSupplier,
  IResInterest,
  IResMessageDetail,
  IResMessageList,
  IResPaymentMethod,
  IResProduct,
  IResProductDescription,
  IResProductDetail,
  IResProductGroupDetail,
  IResProductWithAddr,
  IResProductWithCount,
  IResRecommendCategory,
  IResRecommendSupplier,
  IResSavedList,
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
  IResSupplierHighlight,
  IResSupplierImgAndVerifiedImg,
  IResSupplierOverview,
  IResSupplierWebsite,
  IResSupplierWithSavedList,
  IResSurvey,
  IResTop20Products,
  ISavedList,
  ISavedListProducts,
  ISavedListSuppliers,
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
  ISupplierHighlight,
  ISupplierImage,
  ISupplierImgAndVerifiedImg,
  ISupplierOverview,
  ISupplierWebsite,
  ISupplierWithSavedList,
  ISurvey,
  ITop20Products,
  IWholesale,
  ISupplierPort,
  IProductWithSupplier,
  IProductWithSupplierCard,
  ISupplierWithProductCard,
  IMarketUserIdentity
} from './type-marketplace'
import {
  IApprover,
  IApproverFormCreate,
  IApproverFormCreateParams,
  IBillingNote,
  IBillingNoteFormCreate,
  IBillingNoteFormCreateParams,
  IBillingNoteList,
  ICompanyOnList,
  ICompRequestVendor,
  IDBVendorRequest,
  IInquiry,
  IInquiryFormCreate,
  IInquiryFormCreateParams,
  IInquiryList,
  IInvoice,
  IInvoiceFormCreate,
  IInvoiceFormCreateParams,
  IInvoiceList,
  IJoinerJoinPool,
  IJoinerListJoiningPools,
  IJoinerListPools,
  IJoining,
  IPO,
  IPOFormCreate,
  IPOFormCreateParams,
  IPOList,
  IPool,
  IPoolAcceptJoining,
  IPoolFormCreate,
  IPoolList,
  IPoolStatus,
  IQuotation,
  IQuotationFormCreate,
  IQuotationFormCreateParams,
  IQuotationList,
  IQuotationRfq,
  IQuotationRfqFormCreate,
  IRefVendorList,
  IResApprover,
  IResBillingNote,
  IResBillingNoteList,
  IResInquiry,
  IResInquiryList,
  IResInvoice,
  IResInvoiceList,
  IResPO,
  IResPOList,
  IResQuotation,
  IResQuotationList,
  IResQuotationRfq,
  IResRfq,
  IResRfqList,
  IResRfqMarket,
  IResRfqMarketList,
  IResSO,
  IResTaxInvoice,
  IRfq,
  IRfqFormCreate,
  IRfqFormCreateParams,
  IRfqList,
  IRfqManyFormCreate,
  IRfqManyFormCreateParams,
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
  IVendor,
  IVendorCreate,
  IVendorCreateParams,
  IVendorRequestAccept,
  IVendorRequestList
} from './type-apps'
import {
  ICategoryCreateMain,
  ICategoryCreateParams,
  ICategoryCreateSub,
  IConsoleCategoryList,
  IConsoleMainCategory,
  IConsoleSubCategory,
  IConsoleSupplier,
  IConsoleSupplierCreate,
  IConsoleSupplierList,
  IPaymentMethod,
} from './type-console'
import { ICategoryList, IMainCategory, IProduct, IProductCreate, IProductEntity, IProductList, IProductPackInVariant, IProductPackOnly, IProductVariantInPack, IProductVariantOnly, IResMainCategory, IResSubCategory, ISubCategory } from './type-catalog'
import { IApiCompanyCreateUserParams, IApiCompanyParams, ICompany, ICompanyByGapp, ICompanyCreateSalesRep, ICompanyEntity, ICompanyEntityImmu, ICompanyPortfolio, ICompanyPrivateEntity, ICompanySalesRep, ICompanyUserIdentity, IDBCompanyEntity, ISettingCreatePriceGroup, ISettingCreatePriceList, ISettingDoc, ISettingPriceGroup, ISettingPriceList } from './type-company'
import { IBusinessCompanyUserIdentity, IBusinessCompanyUserIdentityImmu, IBusinessEntity, IBusinessEntityImmu, IBusinessListCompany, IBusinessOwnerIdentity, IBusinessOwnerIdentityImmu, IBusinessUserIdentity, IBusinessUserIdentityImmu, IDBBusinessCompanyUserIdentity, IDBBusinessUserIdentity, IDBBusinessUserIdentityStatus, IDBLogTime, IDBUpdateTime } from './type-business'

/* #region FIXME: Marketplace */
export namespace GeeesyMarketplace {

  export type ResSearchFilter = IResSearchFilter
  export type SearchFilter = ISearchFilter

  export type ResSavedList = IResSavedList
  export type SavedList = ISavedList

  // TODO: Refactor

  export type ResBanner = IResBanner | Banner;
  export type Banner = IBanner;

  export type ResProduct = IResProduct | Product;
  export type Product = IProductWithSupplier;

  export type ResTop20Products = IResTop20Products | Top20Products;
  export type Top20Products = ITop20Products;

  export type ResCategoryWithChild = IResCategoryWithChild | CategoryWithChild;
  export type CategoryWithChild = ICategoryWithChild;

  export type ResRecommendCategory = IResRecommendCategory | RecommendCategory;
  export type RecommendCategory = IRecommendCategory;

  export type ResAllCategoryInSearchTool =
    | IResAllCategoryInSearchTool
    | AllCategoryInSearchTool;
  export type AllCategoryInSearchTool = IAllCategoryInSearchTool;

  export type ResSupplierHighlight = IResSupplierHighlight | SupplierHighlight;
  export type SupplierHighlight = ISupplierHighlight;

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

  export type ResShippingMethod = IResShippingMethod | ShippingMethod;
  export type ShippingMethod = IShippingMethod;

  export type ResPaymentMethod = IResPaymentMethod | PaymentMethods;
  export type PaymentMethods = IPaymentMethods;

  export type ResSupplier = IResSupplier | Supplier;
  export type Supplier = ISupplier;

  export type ResSearchResultLocation =
    | IResSearchResultLocation
    | SearchResultLocation;
  export type SearchResultLocation = ISearchResultLocation;

  export type ResInterest = IResInterest | Interest;
  export type Interest = IInterest;

  export type ResSurvey = IResSurvey | Survey;
  export type Survey = ISurvey;

  export type ResSupProductCat = IResSupProductCat | SupProductCat;
  export type SupProductCat = ISupProductCat;

  export type ProductGroup = IProductGroup;
  export type ChildCategory = IChildCategory;
  export type ProductWithOutSupplier = IProductWithOutSupplier;
  export type Address = IAddress;
  export type PaymentMethod = IPaymentMethod;
  export type PaymentMethodTypeAttr = IPaymentMethodTypeAttr;

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
}
/* #endregion */



export namespace GeeesyCatalog {
  export type ResMainCategory = IResMainCategory | IMainCategory
  export type MainCategory = IMainCategory
  export type ResSubCategory = IResSubCategory | ISubCategory
  export type SubCategory = ISubCategory
  export type CategoryList = ICategoryList
}

// REVIEW: G-BIZ
export namespace GeeesyApps {


  /**
   * @description
   * Interface for Inquiry
   * @param
   */
  export type InquiryFormCreate = IInquiryFormCreate;
  export type InquiryFormCreateParams = IInquiryFormCreateParams;
  export type InquiryFormSubmit = IInquiryFormCreate & IInquiryFormCreateParams & IApiCompanyParams;
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
  export type RfqManyFormCreate = IRfqManyFormCreate

  export type RfqFormCreateParams = IRfqFormCreateParams;
  export type RfqManyFormCreateParams = IRfqManyFormCreateParams

  export type RfqFormSubmit = IRfqFormCreate & IRfqFormCreateParams & IApiCompanyParams;
  export type RfqManyFormSubmit = IRfqManyFormCreate & IRfqManyFormCreateParams & IApiCompanyParams

  export type ResRfqList = IResRfqList | IRfqList
  export type RfqList = IRfqList
  export type ResRfq = IResRfq | IRfq;
  export type Rfq = IRfq;
  export type RfqMany = Partial<IRfq>

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
  export type QuotationRfqFormCreate = IQuotationRfqFormCreate

  export type QuotationFormCreateParams = IQuotationFormCreateParams;
  export type QuotationRfqFormCreateParams = IQuotationFormCreateParams;

  export type QuotationFormSubmit = IQuotationFormCreate &
    IQuotationFormCreateParams & IApiCompanyParams; // REVIEW: Quotation Type D | Create
  export type QuotationRfqFormSubmit = IQuotationRfqFormCreate &
    IQuotationFormCreateParams & IApiCompanyParams; //FIXME

  export type ResQuotationList = IResQuotationList | IQuotationList
  export type QuotationList = IQuotationList

  export type ResQuotation = IResQuotation | IQuotation;
  export type Quotation = IQuotation;
  export type ResQuotationRfq = IResQuotationRfq | IQuotationRfq
  export type QuotationRfq = IQuotationRfq

  /**
   * @description
   * FORM Interface for Purchase Order (PO) creation
   * @param

   */
  export type POFormCreate = IPOFormCreate;
  export type POFormCreateParams = IPOFormCreateParams;
  export type POFormSubmit = IPOFormCreate & IPOFormCreateParams & IApiCompanyParams;
  export type ResPOList = IResPOList | IPOList
  export type POList = IPOList
  export type ResPO = IResPO | IPO;
  export type PO = IPO;

  /**
   * @description
   * FORM Interface for Sales Order (SO) creation
   * @param

   */
  export type SOFormCreate = ISOFormCreate;
  export type SoFormCreateParams = ISOFormCreateParams;
  export type SOFormSubmit = ISOFormCreate & ISOFormCreateParams & IApiCompanyParams;
  export type ResSO = IResSO | ISO;
  export type SO = ISO;

  /**
   * @description
   * FORM Interface for Billing Note creation
   * @param

   */
  export type BillingNoteFormCreate = IBillingNoteFormCreate;
  export type BillingNoteFormCreateParams = IBillingNoteFormCreateParams;
  export type BillingNoteFormSubmit = IBillingNoteFormCreate & IBillingNoteFormCreateParams & IApiCompanyParams;
  export type ResBillingNoteList = IResBillingNoteList | IBillingNoteList
  export type BillingNoteList = IBillingNoteList
  export type ResBillingNote = IResBillingNote | IBillingNote;
  export type BillingNote = IBillingNote;

  /**
   * @description
   * FORM Interface for Invoice creation
   * @param

   */
  export type InvoiceFormCreate = IInvoiceFormCreate;
  export type InvoiceFormCreateParams = IInvoiceFormCreateParams;
  export type InvoiceFormSubmit = IInvoiceFormCreate & IInvoiceFormCreateParams & IApiCompanyParams;
  export type ResInvoiceList = IResInvoiceList | IInvoiceList
  export type InvoiceList = IInvoiceList
  export type ResInvoice = IResInvoice | IInvoice;
  export type Invoice = IInvoice;

  /**
   * @description
   * FORM Interface for TAX Invoice creation
   * @param

   */
  export type TaxInvoiceFormCreate = ITaxInvoiceFormCreate;
  export type TaxInvoiceFormCreateParams = ITaxInvoiceFormCreateParams;
  export type TaxInvoiceFormSubmit = ITaxInvoiceFormCreate & ITaxInvoiceFormCreateParams & IApiCompanyParams;
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

  /**
* Pooled Procurement
*/
  export type PoolFormCreate = IPoolFormCreate
  export type Pool = IPool;
  export type PoolStatus = IPoolStatus
  export type PoolList = IPoolList
  export type PoolJoining = IJoining
  export type PoolJoinerJoinPool = IJoinerJoinPool;
  export type PoolJoinerListPools = IJoinerListPools;
  export type PoolJoinerListJoiningPools = IJoinerListJoiningPools
  export type PoolAcceptJoining = IPoolAcceptJoining

  /**
  * Vendor
  */
  export type VendorCreate = IVendorCreate & IVendorCreateParams
  export type Vendor = IVendor
  export type VendorList = IRefVendorList
  export type VendorRequestCreate = ICompRequestVendor
  export type VendorRequest = IDBVendorRequest
  export type VendorRequestList = IVendorRequestList
  export type VendorRequestAccept = IVendorRequestAccept
  export type CompanyOnList = ICompanyOnList

  /**
  * User
   */
  export type User = ICompanyUserIdentity

  /**
  Sales Rep
   */
  export type CreateSalesRep = ICompanyCreateSalesRep
  export type SalesRep = ICompanySalesRep
}

// REVIEW: CONSOLE
export namespace GeeesyConsole {
  export type CreateMainCategory = ICategoryCreateMain & ICategoryCreateParams
  export type CreateSubCategory = ICategoryCreateSub & ICategoryCreateParams
  export type MainCategory = IConsoleMainCategory
  export type SubCategory = IConsoleSubCategory
  export type CategoryList = IConsoleCategoryList
  export type CreateSupplier = IConsoleSupplierCreate
  export type Supplier = IConsoleSupplier
  export type SupplierList = IConsoleSupplierList
}

// REVIEW: BC
export namespace GappBusiness {
  // * BUSINESS
  export type CreateBusiness = IBusinessEntityImmu & IBusinessEntity & IBusinessOwnerIdentity & IBusinessOwnerIdentityImmu
  export type Business = IBusinessEntityImmu & IBusinessEntity & IDBLogTime
  export type DBUpdateBusiness = IBusinessEntity & IDBUpdateTime
  export type Owner = IBusinessOwnerIdentity & IBusinessOwnerIdentityImmu & IDBLogTime
  export type DBUpdateOwner = IBusinessOwnerIdentity & IDBUpdateTime
  // * COMPANY
  export type CreateCompany = ICompanyEntity & ICompanyEntityImmu & ICompanyPrivateEntity
  export type Company = ICompanyEntity & ICompanyEntityImmu & ICompanyPrivateEntity & IDBCompanyEntity & ICompanyByGapp & IDBLogTime
  export type DBUpdateCompany = ICompanyEntity & ICompanyPrivateEntity & IDBUpdateTime
  export type ListCompany = IBusinessListCompany
  // * USER
  export type CreateBusinessUser = IBusinessUserIdentityImmu & IBusinessUserIdentity
  export type DBCreateUser = IBusinessUserIdentityImmu & IBusinessUserIdentity & IDBBusinessUserIdentityStatus & IDBLogTime
  export type User = IBusinessUserIdentityImmu & IBusinessUserIdentity & IDBBusinessUserIdentityStatus & IDBBusinessUserIdentity & IDBLogTime
  export type DBUpdateUser = IBusinessUserIdentity & IDBBusinessUserIdentityStatus & IDBUpdateTime
  export type CreateCompanyUser = IBusinessUserIdentityImmu & IBusinessUserIdentity & IBusinessCompanyUserIdentityImmu & IBusinessCompanyUserIdentity & IDBBusinessCompanyUserIdentity
  export type DBUpdateCompanyUser = IBusinessCompanyUserIdentity & IDBUpdateTime
  export type ListCompanyUser = IBusinessCompanyUserIdentityImmu & IBusinessCompanyUserIdentity & IDBBusinessCompanyUserIdentity
}

// REVIEW: G-MARKET
export namespace GappMarket {
  export type Supplier = ISupplierPort
  export type ListProductWithSupplier = IProductWithSupplierCard
  export type ListSupplierWithProduct = ISupplierWithProductCard
  export type Product = IProductWithSupplier
  export type User = IMarketUserIdentity
}


// REVIEW: G-BIZ | PRODUCT
export namespace GappInventory {
  export type ProductEntity = IProductEntity
  export type CreateProduct = IProductCreate
  export type Product = IProduct
  export type ListProduct = IProductList
  export type ProductPackOnly = IProductPackOnly
  export type ProductVariantOnly = IProductVariantOnly
  export type ProductPackInVariant = IProductPackInVariant
  export type ProductVariantInPack = IProductVariantInPack
}

// REVIEW: G-BIZ | SETTING
export namespace GappSetting {
  export type CreatePriceGroup = ISettingCreatePriceGroup & IApiCompanyParams
  export type PriceGroup = ISettingPriceGroup
  export type CreatePriceList = ISettingCreatePriceList & IApiCompanyParams
  export type PriceList = ISettingPriceList
  export type Document = ISettingDoc
  export type CompanyInfo = ICompany & IDBCompanyEntity & ICompanyByGapp
  export type DBUpdateCompanyInfo = ICompany & IDBCompanyEntity
  export type CreateCompanyPort = ICompanyPortfolio
  export type CompanyPort = ICompanyPortfolio & IDBCompanyEntity & ICompanyByGapp
  export type DBUpdateCompanyPort = ICompanyPortfolio & IDBCompanyEntity
  export type ListAdminStaff = IBusinessCompanyUserIdentityImmu & IBusinessCompanyUserIdentity & IDBBusinessCompanyUserIdentity
  export type CreateAdminStaff = IBusinessUserIdentityImmu & IBusinessUserIdentity & IBusinessCompanyUserIdentityImmu & IBusinessCompanyUserIdentity & IDBBusinessCompanyUserIdentity
}

export * as IMarketplace from './type-marketplace'
export * as IConsole from './type-console'
export * as IApps from './type-apps'
export * as ICatalog from './type-catalog'
export * as ICompany from './type-company'

export * as STATUS from './enum-status'
export * as CONST from './enum-const'
