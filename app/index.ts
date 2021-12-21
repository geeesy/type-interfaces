/* eslint-disable no-unused-vars */
import {
  IAddress,
  IAddressSupplier,
  IAllCategoryInSearchTool,
  ICategoryWithChild,
  IChildCategory,
  IDBMarketUserIdentityImmu,
  IFactoryAddress,
  IFilterResultProduct,
  IFilterResultSupplier,
  IImages,
  IInterest,
  ILeadTime,
  IMarketUserData,
  IMarketUserIdentity,
  IMessageDetail,
  IMessageList,
  IOfficeHour,
  IPaymentMethodTypeAttr,
  IPaymentMethods,
  IProductDescription,
  IProductDetail,
  IProductPackage,
  IProductWholeSale,
  IProductWithAddr,
  IProductWithCount,
  IProductWithOutSupplier,
  IProductWithSupplier,
  IProductWithSupplierCard,
  IProductWithoutSupplier,
  IRecommendCategory,
  IRecommendSupplier,
  IResAllCategoryInSearchTool,
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
  ISupplierData,
  ISupplierDocs,
  ISupplierFactory,
  ISupplierHighlight,
  ISupplierImage,
  ISupplierImgAndVerifiedImg,
  ISupplierOverview,
  ISupplierWebsite,
  ISupplierWithProductCard,
  ISupplierWithSavedList,
  ISurvey,
  ITop20Products,
  IWholesale
} from './type-marketplace';
import {
  IApiCategoryParams,
  IApiConsoleParams,
  IBanner,
  IBannerGroup,
  ICategoryByGapp,
  ICategoryEntity,
  ICategoryProductSpecAttributeGroup,
  ICategoryProductSpecGroup,
  ICategorySpecGroup,
  IDBBannerGroupImmu,
  IDBBannerImmu,
  IDBCategory,
  IDBCategoryImmu,
  IDBCategoryProductSpecAttributeGroup,
  IDBCategoryProductSpecGroup,
  IPaymentMethod
} from './type-console';
import {
  IApiCompanyParams,
  IApiSupplierParams,
  ICertificate,
  ICompanyByGapp,
  ICompanyCreateSalesRep,
  ICompanyEntityImmu,
  ICompanyPrivateEntity,
  ICompanyPublicEntity,
  ICompanyPublicEntityImmu,
  ICompanySalesRep,
  ICustomer,
  IDBCertificate,
  IDBCompanyEntity,
  IDBCompanySupplierEntity,
  IDBDocument,
  IDocument,
  IPortfolio,
  IPortfolioImmu,
  IPublishParams,
  ISettingCreatePriceGroup,
  ISettingCreatePriceList,
  ISettingDoc,
  ISettingNotification,
  ISettingPriceGroup,
  ISettingPriceList,
  ISupplierByGapp
} from './type-company';
import {
  IApprover,
  IApproverFormCreate,
  IApproverFormCreateParams,
  IBillingNote,
  IBillingNoteFormCreate,
  IBillingNoteFormCreateParams,
  IBillingNoteList,
  ICompRequestVendor,
  ICompanyOnList,
  IDBCompanyDocHeader,
  IDBVendorRequest,
  IDocFinanceCount,
  IDocOrderCount,
  IDocWorkCount,
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
  IQuotationRfqList,
  IReceipt,
  IReceiptFormCreate,
  IReceiptFormCreateParams,
  IReceiptList,
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
  IResReceipt,
  IResReceiptList,
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
  IRfqMarketFunnel,
  IRfqMarketList,
  ISO,
  ISOFormCreate,
  ISOFormCreateParams,
  ITaxInvoice,
  ITaxInvoiceFormCreate,
  ITaxInvoiceFormCreateParams,
  ITaxInvoiceList,
  IVendor,
  IVendorCreate,
  IVendorCreateParams,
  IVendorRequestAccept,
  IVendorRequestList
} from './type-apps';
import {
  IBusinessCompanyUserIdentity,
  IBusinessCompanyUserIdentityImmu,
  IBusinessEntity,
  IBusinessEntityImmu,
  IBusinessListCompany,
  IBusinessOwnerIdentity,
  IBusinessOwnerIdentityImmu,
  IBusinessUserIdentity,
  IBusinessUserIdentityImmu,
  ICompanyUserData,
  ICompanyUserPrivateData,
  IDBBusinessCompanyUserData,
  IDBBusinessCompanyUserIdentity,
  IDBBusinessUserIdentity,
  IDBBusinessUserIdentityStatus
} from './type-business';
import {
  ICreateProductWithMultiStock,
  IDBInventoryEntity,
  IDBInventoryEntityImmu,
  IDBProductInventory,
  IDBProductInventoryActivityLog,
  IDBProductInventoryFormulaImmu,
  IDBWarehouseEntityImmu,
  IInventoryEntity,
  ILogStock,
  IProductCompanyImmu,
  IProductInventoryImmu,
  IProductInventorySetting,
  ITransferProductStock,
  IUpdateProductStock,
  IWarehouseEntity
} from './type-inventory';
import {
  ICustomerWithOrder,
  IDBListOrderByProduct,
  IDBOrderEntity,
  IDBOrderEntityImmu,
  IDBOrderLinkImmu,
  IDBOrderSellerDataImmu,
  IDBOrderStatus,
  ILeadpage,
  ILeadpageId,
  IListOrder,
  IOrderAccountingOnly,
  IOrderCustomerData,
  IOrderCustomerDataImmu,
  IOrderEntity,
  IOrderLinkData,
  IOrderLinkDataOnConfirm,
  ISellerCreateOrder,
  ISellerUpdateOrderStatus
} from './type-order';
import { IDBLogTime, IDBUpdateTime } from './type-api';
import {
  IDBPaymentMethod,
  IDBPaymentMethodImmu,
  IPaymentMethodEntity,
  IPaymentMethodEntityImmu
} from './type-payment';
/* eslint-disable @typescript-eslint/no-namespace */
import {
  IDBProduct,
  IDBProductByGapp,
  IDBProductGroupCount,
  IDBProductGroupImmu,
  IDBProductImmu,
  IDBProductVariantOnlyImmu,
  ILogProduct,
  IProductAttributes,
  IProductEntity,
  IProductEntityImmu,
  IProductGroup,
  IProductList,
  IProductMarketList,
  IProductPackInVariant,
  IProductPackOnly,
  IProductRootEntity,
  IProductVariantAttributes,
  IProductVariantAttributesOnCreate,
  IProductVariantEntity,
  IProductVariantInPack
} from './type-catalog';
import {
  IDBSaleChannel,
  IDBSaleChannelImmu,
  IListShipmentAndPaymentByCompany,
  ISaleChannelEntity,
  ISaleChannelEntityImmu,
  IUpdateShippingAndPaymentMethodOnMarket
} from './type-setting';
import {
  IDBSalePageEntity,
  ISalePageEntity,
  ISalePageEntityImmu,
  ISalePageUIComponent
} from './type-salepage';
import {
  IDBShippingMethod,
  IDBShippingMethodImmu,
  IShippingMethodEntity,
  IShippingMethodEntityImmu
} from './type-shipping';

/* #region FIXME: Marketplace */
export namespace GeeesyMarketplace {
  export type ResSearchFilter = IResSearchFilter;
  export type SearchFilter = ISearchFilter;

  export type ResSavedList = IResSavedList;
  export type SavedList = ISavedList;

  // TODO: Refactor

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

/* export namespace GeeesyCatalog {
  export type ResMainCategory = IResMainCategory | IMainCategory
  export type MainCategory = IMainCategory
  export type ResSubCategory = IResSubCategory | ISubCategory
  export type SubCategory = ISubCategory
  export type CategoryList = ICategoryList
} */

// REVIEW: G-BIZ
export namespace GeeesyApps {
  /**
   * @description
   * Interface for Inquiry
   * @param
   */
  export type InquiryFormCreate = IInquiryFormCreate;
  export type InquiryFormCreateParams = IInquiryFormCreateParams;
  export type InquiryFormSubmit = IInquiryFormCreate &
    IInquiryFormCreateParams &
    IApiCompanyParams &
    IDBCompanyDocHeader;
  export type ResInquiryList = IResInquiryList | IInquiryList;
  export type InquiryList = IInquiryList;
  export type ResInquiry = IResInquiry | IInquiry;
  export type Inquiry = IInquiry & IDBCompanyDocHeader;

  /**
   * @description
   * Interface for RFQ Market
   * @param
   */
  export type RfqMarketFormCreate = IRfqMarketFormCreate;
  export type RfqMarketFormCreateParams = IRfqMarketFormCreateParams;
  export type RfqMarketFormSubmit = IRfqMarketFormCreate &
    IRfqMarketFormCreateParams;
  export type ResRfqMarketList = IResRfqMarketList | IRfqMarketList;
  export type RfqMarketList = IRfqMarketList;
  export type ResRfqMarket = IResRfqMarket | IRfqMarket;
  export type RfqMarket = IRfqMarket;
  export type DBRfqMarket = IRfqMarket & IRfqMarketFunnel;
  /**
   * @description
   * Interface for RFQ creation
   * @param
   */
  export type RfqFormCreate = IRfqFormCreate;
  export type RfqManyFormCreate = IRfqManyFormCreate;

  export type RfqFormCreateParams = IRfqFormCreateParams;
  export type RfqManyFormCreateParams = IRfqManyFormCreateParams;

  export type RfqFormSubmit = IRfqFormCreate &
    IRfqFormCreateParams &
    IApiCompanyParams &
    IDBCompanyDocHeader;
  export type RfqManyFormSubmit = IRfqManyFormCreate &
    IRfqManyFormCreateParams &
    IApiCompanyParams &
    IDBCompanyDocHeader;

  export type ResRfqList = IResRfqList | IRfqList;
  export type RfqList = IRfqList;
  export type ResRfq = IResRfq | IRfq;
  export type Rfq = IRfq & IDBCompanyDocHeader;
  export type RfqMany = Partial<IRfq> & IDBCompanyDocHeader;

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
  export type QuotationRfqFormCreate = IQuotationRfqFormCreate;

  export type QuotationFormCreateParams = IQuotationFormCreateParams;
  export type QuotationRfqFormCreateParams = IQuotationFormCreateParams;

  export type QuotationFormSubmit = IQuotationFormCreate &
    IQuotationFormCreateParams &
    IApiCompanyParams &
    IDBCompanyDocHeader; // REVIEW: Quotation Type D | Create
  export type QuotationRfqFormSubmit = IQuotationRfqFormCreate &
    IQuotationFormCreateParams &
    IApiCompanyParams &
    IDBCompanyDocHeader; // FIXME

  export type ResQuotationList = IResQuotationList | IQuotationList;
  export type QuotationList = IQuotationList;
  export type QuotationRfqList = IQuotationRfqList;

  export type ResQuotation = IResQuotation | IQuotation;
  export type Quotation = IQuotation & IDBCompanyDocHeader;
  export type ResQuotationRfq = IResQuotationRfq | IQuotationRfq;
  export type QuotationRfq = IQuotationRfq & IDBCompanyDocHeader;

  /**
   * @description
   * FORM Interface for Purchase Order (PO) creation
   * @param

   */
  export type POFormCreate = IPOFormCreate;
  export type POFormCreateParams = IPOFormCreateParams;
  export type POFormSubmit = IPOFormCreate &
    IPOFormCreateParams &
    IApiCompanyParams &
    IDBCompanyDocHeader;
  export type ResPOList = IResPOList | IPOList;
  export type POList = IPOList;
  export type ResPO = IResPO | IPO;
  export type PO = IPO & IDBCompanyDocHeader;

  /**
   * @description
   * FORM Interface for Sales Order (SO) creation
   * @param

   */
  export type SOFormCreate = ISOFormCreate;
  export type SoFormCreateParams = ISOFormCreateParams;
  export type SOFormSubmit = ISOFormCreate &
    ISOFormCreateParams &
    IApiCompanyParams &
    IDBCompanyDocHeader;
  export type ResSO = IResSO | ISO;
  export type SO = ISO & IDBCompanyDocHeader;

  /**
   * @description
   * FORM Interface for Billing Note creation
   * @param

   */
  export type BillingNoteFormCreate = IBillingNoteFormCreate;
  export type BillingNoteFormCreateParams = IBillingNoteFormCreateParams;
  export type BillingNoteFormSubmit = IBillingNoteFormCreate &
    IBillingNoteFormCreateParams &
    IApiCompanyParams &
    IDBCompanyDocHeader;
  export type ResBillingNoteList = IResBillingNoteList | IBillingNoteList;
  export type BillingNoteList = IBillingNoteList;
  export type ResBillingNote = IResBillingNote | IBillingNote;
  export type BillingNote = IBillingNote & IDBCompanyDocHeader;

  /**
   * @description
   * FORM Interface for Invoice creation
   * @param

   */
  export type InvoiceFormCreate = IInvoiceFormCreate;
  export type InvoiceFormCreateParams = IInvoiceFormCreateParams;
  export type InvoiceFormSubmit = IInvoiceFormCreate &
    IInvoiceFormCreateParams &
    IApiCompanyParams &
    IDBCompanyDocHeader;
  export type ResInvoiceList = IResInvoiceList | IInvoiceList;
  export type InvoiceList = IInvoiceList;
  export type ResInvoice = IResInvoice | IInvoice;
  export type Invoice = IInvoice & IDBCompanyDocHeader;

  /**
   * @description
   * FORM Interface for RECEIPT creation
   * @param

   */
  export type ReceiptFormCreate = IReceiptFormCreate;
  export type ReceiptFormCreateParams = IReceiptFormCreateParams;
  export type ReceiptFormSubmit = IReceiptFormCreate &
    IReceiptFormCreateParams &
    IApiCompanyParams &
    IDBCompanyDocHeader;
  export type ResReceiptList = IResReceiptList | IReceiptList;
  export type ReceiptList = IReceiptList;
  export type ResReceipt = IResReceipt | IReceipt;
  export type Receipt = IReceipt & IDBCompanyDocHeader;

  /**
   * @description
   * FORM Interface for TAX Invoice creation
   * @param

   */
  export type TaxInvoiceFormCreate = ITaxInvoiceFormCreate;
  export type TaxInvoiceFormCreateParams = ITaxInvoiceFormCreateParams;
  export type TaxInvoiceFormSubmit = ITaxInvoiceFormCreate &
    ITaxInvoiceFormCreateParams &
    IApiCompanyParams &
    IDBCompanyDocHeader;
  export type TaxInvoiceList = ITaxInvoiceList;
  export type ResTaxInvoice = IResTaxInvoice | ITaxInvoice;
  export type TaxInvoice = ITaxInvoice & IDBCompanyDocHeader;

  /**
   * @description
   * FORM Interface for Approver Setting
   * @param

   */
  export type ApproverFormCreate = IApproverFormCreate;
  export type ApproverFormCreateParams = IApproverFormCreateParams;
  export type ApproverFormSubmit = IApproverFormCreate &
    IApproverFormCreateParams;
  export type ResApprover = IResApprover | IApprover;
  export type Approver = IApprover;

  /**
   * Pooled Procurement
   */
  export type PoolFormCreate = IPoolFormCreate;
  export type Pool = IPool;
  export type PoolStatus = IPoolStatus;
  export type PoolList = IPoolList;
  export type PoolJoining = IJoining;
  export type PoolJoinerJoinPool = IJoinerJoinPool;
  export type PoolJoinerListPools = IJoinerListPools;
  export type PoolJoinerListJoiningPools = IJoinerListJoiningPools;
  export type PoolAcceptJoining = IPoolAcceptJoining;

  /**
   * Vendor
   */
  export type VendorCreate = IVendorCreate & IVendorCreateParams;
  export type Vendor = IVendor;
  export type VendorList = IRefVendorList;
  export type VendorRequestCreate = ICompRequestVendor;
  export type VendorRequest = IDBVendorRequest;
  export type VendorRequestList = IVendorRequestList;
  export type VendorRequestAccept = IVendorRequestAccept;
  export type CompanyOnList = ICompanyOnList;

  /**
  Sales Rep
   */
  export type CreateSalesRep = ICompanyCreateSalesRep;
  export type SalesRep = ICompanySalesRep;
}

// --------------------------------
// REVIEW: CONSOLE
// --------------------------------
export namespace GappConsole {
  // * CATEGORY
  export type CreateCategory = ICategoryEntity &
    IApiCategoryParams &
    ICategoryByGapp;
  export type Category = ICategoryByGapp &
    IDBCategoryImmu &
    IDBCategory &
    ICategoryEntity &
    IDBLogTime;
  export type ListCategory = IDBCategoryImmu & ICategoryEntity;
  // * SUPPLIER
  export type CreateSupplier = ISupplierByGapp &
    ISupplierData &
    IPortfolio &
    ICompanyPublicEntity;
  export type Supplier = GappMarket.Supplier;
  export type ListSupplier = ICompanyPublicEntityImmu & ICompanyPublicEntity;
  // * PRODUCT SPECIFICATION BY CATEGORY
  export type CreateCategoryProductSpec = ICategorySpecGroup &
    IApiConsoleParams;
  export type SpecGroup = IDBCategoryProductSpecGroup &
    ICategoryProductSpecGroup &
    IDBLogTime;
  export type CreateSpecAttributeGroup = ICategoryProductSpecAttributeGroup &
    IApiConsoleParams;
  export type SpecAttributeGroup = IDBCategoryProductSpecAttributeGroup &
    ICategoryProductSpecAttributeGroup &
    IDBLogTime;
  // * PRODUCTS
  export type ListProduct = IProductMarketList &
    IDBProductImmu &
    IDBProductByGapp;
  export type Product = GappInventory.Product;
  // * BANNER
  export type CreateBannerGroup = IBannerGroup & IApiConsoleParams;
  export type BannerGroup = IDBBannerGroupImmu & IBannerGroup & IDBLogTime;
  export type CreateBanner = IBanner & IApiConsoleParams;
  export type Banner = IDBBannerImmu & IBanner & IDBLogTime;
}

// --------------------------------
// REVIEW: BUSINESS CENTER
// --------------------------------
export namespace GappBusiness {
  // * BUSINESS
  export type CreateBusiness = IBusinessEntityImmu &
    IBusinessEntity &
    IBusinessOwnerIdentity &
    IBusinessOwnerIdentityImmu;
  export type Business = IBusinessEntityImmu & IBusinessEntity & IDBLogTime;
  export type DBUpdateBusiness = IBusinessEntity & IDBUpdateTime;
  // * BUSINESS OWNER
  export type Owner = IBusinessOwnerIdentity &
    IBusinessOwnerIdentityImmu &
    IDBLogTime;
  export type DBUpdateOwner = IBusinessOwnerIdentity & IDBUpdateTime;
  // * BUSINESS USER
  export type CreateBusinessUser = IBusinessUserIdentityImmu &
    IBusinessUserIdentity;
  export type DBCreateUser = IBusinessUserIdentityImmu &
    IBusinessUserIdentity &
    IDBBusinessUserIdentityStatus &
    IDBLogTime;
  export type User = IBusinessUserIdentityImmu &
    IBusinessUserIdentity &
    IDBBusinessUserIdentityStatus &
    IDBBusinessUserIdentity &
    IDBLogTime;
  export type DBUpdateUser = IBusinessUserIdentity &
    IDBBusinessUserIdentityStatus &
    IDBUpdateTime;
  // * COMPANY
  export type CreateCompany = ICompanyPublicEntity &
    ICompanyPrivateEntity &
    IApiCompanyParams;
  export type Company = IDBCompanyEntity &
    IDBCompanySupplierEntity &
    ICompanyEntityImmu &
    ICompanyPublicEntityImmu &
    ICompanyPublicEntity &
    ICompanyByGapp &
    ICompanyPrivateEntity &
    IDBLogTime;
  export type DBUpdateCompany = ICompanyPublicEntity &
    ICompanyPrivateEntity &
    IDBUpdateTime;
  export type ListCompany = IBusinessListCompany;
  // * COMPANY USER
  export type CreateCompanyUser = IBusinessUserIdentityImmu &
    IBusinessUserIdentity &
    IBusinessCompanyUserIdentityImmu &
    IBusinessCompanyUserIdentity &
    ICompanyUserData;
  export type DBUpdateCompanyUser = IBusinessCompanyUserIdentity &
    ICompanyUserData &
    IDBBusinessCompanyUserData &
    IDBUpdateTime;
  export type ListCompanyUser = IBusinessCompanyUserIdentityImmu &
    IBusinessCompanyUserIdentity &
    IDBBusinessCompanyUserIdentity &
    IDBBusinessCompanyUserData &
    ICompanyUserData;
}

// --------------------------------
// REVIEW: GAPP BIZ
// --------------------------------
export namespace GappBiz {
  export type User = IBusinessCompanyUserIdentityImmu &
    IBusinessCompanyUserIdentity &
    IDBBusinessCompanyUserIdentity &
    IDBBusinessCompanyUserData &
    ICompanyUserData &
    ICompanyUserPrivateData &
    IDBLogTime;
  export type DBUpdateUser = IBusinessCompanyUserIdentity &
    IDBBusinessCompanyUserData &
    ICompanyUserData &
    IDBUpdateTime;
  export type DBUpdateSupplier = IPortfolio &
    ICompanyPublicEntity &
    IDBUpdateTime;
  export type CreateSupplierDocument = IDocument & IApiCompanyParams;
  export type CreateSupplierCertificate = ICertificate & IApiCompanyParams;
  export type DBUpdateSupplierDocument = IDocument & IDBUpdateTime;
  export type DBUpdateSupplierCertificate = ICertificate & IDBUpdateTime;
  export type Document = IDBDocument;
  export type Certificate = IDBCertificate;
  export type PublishOnMarket = IPublishParams & IDBCompanySupplierEntity;
  export type PublishOnHub = IPublishParams & IDBCompanySupplierEntity;
  export type Company = GappBusiness.Company; // * COMPANY
  export type CreatePortfolio = IPortfolio & IApiCompanyParams;
  export type DBUpdatePortfolio = IPortfolio & IDBUpdateTime;
  export type Portfolio = IPortfolio &
    ICompanyEntityImmu &
    IDBLogTime &
    IPortfolioImmu;
  // ! ORDER
  export type UpdateOrderStatus = ISellerUpdateOrderStatus &
    IApiCompanyParams &
    IOrderAccountingOnly &
    IOrderLinkDataOnConfirm;
  // ! ORDER_LINK
  export type CreateOrderLink = IOrderEntity &
    IOrderCustomerData &
    IOrderCustomerDataImmu &
    IOrderLinkData &
    ISellerCreateOrder &
    IApiCompanyParams;
  // ! MANUAL ORDER
  export type CreateManualOrder = IOrderEntity &
    IOrderCustomerData &
    IOrderCustomerDataImmu &
    IOrderLinkData &
    ISellerCreateOrder &
    IOrderLinkDataOnConfirm &
    IApiCompanyParams;
  export type OrderLink = IDBOrderEntity &
    IDBOrderEntityImmu &
    IOrderEntity &
    IDBOrderSellerDataImmu &
    IOrderCustomerData &
    IOrderCustomerDataImmu &
    IDBOrderStatus &
    IOrderLinkData &
    IDBOrderLinkImmu &
    IOrderLinkDataOnConfirm &
    IDBOrderSellerDataImmu &
    IDBLogTime;
  export type OrderSalePage = GappBiz.OrderLink;
  export type OrderGappMed = GappBiz.OrderLink;
  export type ListOrderLink = IListOrder &
    IDBLogTime;
  export type DBUpdateOrderLink = IOrderEntity &
    IDBOrderEntity &
    IOrderCustomerData &
    IOrderCustomerDataImmu &
    IOrderLinkDataOnConfirm & 
    IOrderLinkData &
    IDBUpdateTime;
  export type CreateOrderSalePage = GappBiz.CreateOrderLink &
    IOrderLinkDataOnConfirm;
  export type CreateOrderGappMed = GappBiz.CreateOrderLink &
    IOrderLinkDataOnConfirm;
  export type ListOrderByProduct = IDBListOrderByProduct;
  export type ListCustomerWithOrder = ICustomerWithOrder;
  export type Customer = ICustomer;
  export type CreateSalepage = ISalePageEntityImmu &
    ISalePageEntity &
    ISalePageUIComponent;
  export type ListSalepage = Salepage;
  export type Salepage = ISalePageEntityImmu &
    IDBSalePageEntity &
    ISalePageEntity &
    ISalePageUIComponent &
    IDBLogTime;
  export type LeadpageCreate = IDBOrderSellerDataImmu & ILeadpage;
  export type Leadpage = IDBOrderSellerDataImmu & ILeadpage & ILeadpageId;
}

// REVIEW: G-MARKET
export namespace GappMarket {
  export type Category = GappConsole.Category;
  export type ListCategory = GappConsole.ListCategory;
  export type Supplier = ISupplierData &
    IPortfolio &
    ISupplierByGapp &
    IDBCompanySupplierEntity &
    ICompanyPublicEntityImmu &
    ICompanyPublicEntity &
    IDBLogTime; // * SUPPLIER
  export type ListProductWithSupplier = IProductWithSupplierCard;
  export type ListSupplierWithProduct = ISupplierWithProductCard;
  export type ProductWithSupplier = IProductWithSupplier;
  export type Product = IProductWithoutSupplier;
  export type CreateUser = IMarketUserIdentity &
    IMarketUserData &
    ICompanyUserData;
  export type User = IMarketUserIdentity &
    IMarketUserData &
    IBusinessCompanyUserIdentityImmu &
    IDBBusinessCompanyUserIdentity &
    IDBBusinessCompanyUserData &
    IDBMarketUserIdentityImmu &
    ICompanyUserData &
    IDBLogTime;
  export type DbUpdateUser = IMarketUserIdentity &
    IMarketUserData &
    IDBBusinessCompanyUserData &
    ICompanyUserData &
    IDBUpdateTime;
  export type ListBanner = IDBBannerImmu & IBanner;
  export type ListShipmentAndPaymentByCompany =
    IListShipmentAndPaymentByCompany;
}

// REVIEW: G-BIZ | PRODUCT
export namespace GappInventory {
  export type ProductRootEntity = IProductRootEntity;
  export type ProductEntity = IProductEntity;
  export type ProductAttributes = IProductAttributes;
  export type CreateProduct = IProductRootEntity &
    IProductEntity &
    IProductEntityImmu &
    IProductAttributes &
    ICreateProductWithMultiStock &
    IApiSupplierParams;
  export type CreateProductWithVariant = IProductAttributes &
    IProductEntityImmu &
    IProductVariantAttributesOnCreate &
    IApiSupplierParams;
  export type Product = IProductRootEntity &
    IProductEntity &
    IProductEntityImmu &
    IProductAttributes &
    IDBProduct &
    IDBProductImmu &
    IDBProductByGapp &
    IDBLogTime;
  export type DBUpdateProduct = IProductRootEntity &
    IProductEntity &
    IProductAttributes &
    IDBProduct &
    IDBUpdateTime;
  export type ListProduct = IProductList;
  export type ProductPackOnly = IProductPackOnly;
  export type CreateManyVariantOnly = IProductVariantAttributes &
    IApiSupplierParams;
  export type CreateOneVariantOnly = IProductRootEntity &
    IProductEntity &
    IProductEntityImmu &
    IProductVariantEntity &
    IProductInventoryImmu &
    IProductInventorySetting &
    IDBProductInventoryFormulaImmu &
    IApiSupplierParams;
  export type ProductVariantOnly = IProductRootEntity &
    IProductEntity &
    IProductEntityImmu &
    IProductVariantEntity &
    IDBProductVariantOnlyImmu &
    IDBLogTime;
  export type DBUpdateVariantOnly = IProductRootEntity &
    IProductEntity &
    IProductVariantEntity &
    IDBUpdateTime;
  export type ProductPackInVariant = IProductPackInVariant;
  export type ProductVariantInPack = IProductVariantInPack;
  export type LogProduct = ILogProduct;
  export type CreateProductGroup = IProductGroup & IApiCompanyParams;
  export type ProductGroup = IProductGroup &
    IDBProductGroupImmu &
    IDBLogTime &
    IDBProductGroupCount;
  export type DBUpdateProductGroup = IProductGroup & IDBUpdateTime;
  export type CreateWarehouse = IWarehouseEntity & IApiCompanyParams;
  export type Warehouse = IWarehouseEntity &
    IDBWarehouseEntityImmu &
    IDBLogTime;
  export type DBUpdateWarehouse = IWarehouseEntity & IDBUpdateTime;
  export type CreateInventory = IInventoryEntity & IApiCompanyParams;
  export type Inventory = IInventoryEntity &
    IDBInventoryEntityImmu &
    IDBInventoryEntity &
    IDBLogTime;
  export type DBUpdateInventory = IInventoryEntity & IDBUpdateTime;
  export type Stock = IProductCompanyImmu &
    IProductInventoryImmu &
    IDBProductInventoryFormulaImmu &
    IProductInventorySetting &
    IDBProductInventory &
    IDBProductInventoryActivityLog &
    IDBLogTime;
  export type UpdateProductStock = IApiCompanyParams & IUpdateProductStock;
  export type TransferProductStock = IApiCompanyParams & ITransferProductStock;
  export type LogProductStock = ILogStock;
}

// REVIEW: G-BIZ | SETTING
export namespace GappSetting {
  export type CreatePriceGroup = ISettingCreatePriceGroup & IApiCompanyParams;
  export type PriceGroup = ISettingPriceGroup;
  export type CreatePriceList = ISettingCreatePriceList & IApiCompanyParams;
  export type PriceList = ISettingPriceList;
  export type Document = ISettingDoc;
  export type Notification = ISettingNotification;
  export type CompanyInfo = ICompanyPublicEntity &
    IDBCompanyEntity &
    IDBCompanySupplierEntity &
    ICompanyByGapp &
    ICompanyEntityImmu &
    ICompanyPublicEntityImmu;
  export type DBUpdateCompanyInfo = GappBusiness.DBUpdateCompany; // * COMPANY - UPDATE
  export type CreateCompanyPort = IPortfolio & ICompanyEntityImmu; // FIXME: IApiCompanyParam
  export type CompanyPort = IPortfolio &
    IDBCompanySupplierEntity &
    ISupplierByGapp &
    ICompanyEntityImmu &
    IDBLogTime;
  export type DBUpdateCompanyPort = IPortfolio &
    IDBCompanySupplierEntity &
    IDBUpdateTime;
  export type ListAdminStaff = IBusinessCompanyUserIdentityImmu &
    IBusinessCompanyUserIdentity &
    IDBBusinessCompanyUserIdentity &
    IDBBusinessCompanyUserData &
    ICompanyUserData;
  export type CreateAdminStaff = IBusinessUserIdentityImmu &
    IBusinessUserIdentity &
    IBusinessCompanyUserIdentityImmu &
    IBusinessCompanyUserIdentity &
    IDBBusinessCompanyUserIdentity &
    ICompanyUserData;
  export type CountDocument = IDocWorkCount & IDocFinanceCount & IDocOrderCount;
  // * SHIPMENT
  export type CreateShippingMethod = IShippingMethodEntity &
    IShippingMethodEntityImmu &
    IApiCompanyParams;
  export type ShippingMethod = IShippingMethodEntity &
    IDBShippingMethod &
    IDBShippingMethodImmu &
    IShippingMethodEntityImmu &
    IDBLogTime;
  export type DBUpdateShippingMethod = IShippingMethodEntity &
    IDBShippingMethod &
    IDBUpdateTime;
  // * PAYMENT
  export type CreatePaymentMethod = IPaymentMethodEntity &
    IPaymentMethodEntityImmu &
    IApiCompanyParams;
  export type PaymentMethod = IPaymentMethodEntity &
    IPaymentMethodEntityImmu &
    IDBPaymentMethod &
    IDBPaymentMethodImmu &
    IDBLogTime;
  export type DBUpdatePaymentMethod = IPaymentMethodEntity &
    IDBPaymentMethod &
    IDBUpdateTime;
  // * SALECHANNEL
  export type CreateSaleChannel = ISaleChannelEntity &
    ISaleChannelEntityImmu &
    IApiCompanyParams;
  export type SaleChannel = ISaleChannelEntity &
    ISaleChannelEntityImmu &
    IDBSaleChannel &
    IDBSaleChannelImmu &
    IDBLogTime;
  export type DBUpdateSaleChannel = ISaleChannelEntity &
    IDBSaleChannel &
    IDBUpdateTime;
  export type DBUpdateShippingAndPaymentMethodOnMarket =
    IUpdateShippingAndPaymentMethodOnMarket;
}

// REVIEW: GAPP INBOUND & OUTBOUND API
export namespace GappApi {
  export type ConfirmOrderLink = IOrderLinkDataOnConfirm &
    IOrderCustomerData &
    IOrderCustomerDataImmu & IOrderAccountingOnly;
  export type ConfirmOrderSalepage = GappApi.ConfirmOrderLink;
  export type ConfirmOrderGappmed = GappApi.ConfirmOrderLink;
  export type DBUpdateOrderLink = IOrderCustomerData &
    IOrderLinkDataOnConfirm &
    IDBUpdateTime &
    IDBOrderStatus;
  export type ListOrderLink = GappBiz.ListOrderLink;
  export type OrderLink = GappBiz.OrderLink;
  export type OrderSalePage = GappBiz.OrderLink;
  export type OrderGappMed = GappBiz.OrderLink;
}

export * as IMarketplace from './type-marketplace';
export * as IConsole from './type-console';
export * as IApps from './type-apps';
export * as ICatalog from './type-catalog';
export * as ICompany from './type-company';

export * as STATUS from './enum-status';
export * as CONST from './enum-const';
