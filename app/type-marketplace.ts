export interface IResMainCategory {
  messages: string;
  data: IMainCategory[];
}
export interface IMainCategory {
  categoryMainIds: string;
  categoryMainNames: string;
  categoryMainIconsUrl: string;
  categoryMainCoverUrl: string;
  impFactors: string;
  categoryBanners: string[];
  categoryRecommend: boolean;
}
export interface IResRecommendMainCategory {
  messages: string;
  data: IRecommendMainCategory[];
}
export interface IRecommendMainCategory {
  categoryIds: string;
  categoryNames: string;
  categoryCoverUrl: string;
  impFactors: number;
  supplierCount: number;
  productCount: number;
}
export interface IResBanner {
  messages: string;
  data: IBanner[];
}
export interface IBanner {
  bannerTitle: string;
  bannerLinksUrl: string;
  bannerCoverUrl: string;
  bannerSortIndex: number;
}
export interface IResProduct {
  messages: string;
  data: IProduct[];
}
export interface IProduct {
  productIds: string;
  productNames: string;
  productCoverUrl: string;
  productPrices: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  minOrderQty: number;
  productGroups: IProductGroup;
  supplierIds: string;
  supplierNames: string;
  supplierVerified: boolean;
  savedLists: IsavedList[];
  productCategorys: ISupProductCat;
}
export interface IResSupProductCat {
  message: string;
  data: ISupProductCat[];
}
export interface ISupProductCat {
  productCategoryIds: string;
  productCategoryNames: string;
  productCategoryIcons: string;
}
export interface IProductGroup {
  productGroupIds: string;
  productGroupNames: string;
  productGroupCoverUrl: string;
}
export interface IResRecommendProduct extends IResProduct { } // Like a IProduct
export interface IResTop20ProductsByCategory extends IResProduct { } // Like a IProduct
export interface IResTop20Products {
  messages: string;
  data: ITop20Products[];
}
export interface ITop20Products {
  productIds: string;
  productNames: string;
  productCoverUrl: string;
  productGroups: IProductGroup;
  savedLists: IsavedList[];
}
export interface IResCategoryWithChild {
  messages: string;
  data: ICategoryWithChild[];
}
export interface ICategoryWithChild {
  categoryIds: string;
  categoryNames: string;
  categoryCoverUrl: string;
  impFactor: number;
  childCategories: IChildCategory[];
}
export interface IResCategory {
  messages: string;
  data: ICategory[];
}
export interface ICategory {
  categoryIds: string;
  categoryNames: string;
  categoryIconsUrl: string;
  categoryCoverUrl: string;
  impFactor: number;
}
export interface IResRecommendCategory {
  messages: string;
  data: IRecommendCategory[];
}
export interface IRecommendCategory {
  categoryIds: string;
  categoryNames: string;
  categoryCoverUrl: string;
  supplierCount: number;
  productCount: number;
  impFactor: number;
}
export interface IChildCategory {
  categoryIds: string;
  categoryNames: string;
  impFactor: number;
}
export interface IResAllCategoryInSearchTool {
  messages: string;
  data: IAllCategoryInSearchTool[];
}
export interface IAllCategoryInSearchTool {
  categoryMainIconsUrl: string;
  categoryMainIds: string;
  categoryMainImagesUrl: string;
  categoryMainNames: string;
  impFactor: string;
}
export interface IResSupplierHilight {
  messages: string;
  data: ISupplierHilight[];
}
export interface ISupplierHilight {
  supplierIds: string;
  supplierNames: string;
  supplierLogosUrl: string;
  impFactor: number;
}
export interface IResRelatedProducts extends IResProduct { } // Like a IProduct
export interface ICreateLatestVisitProducts {
  userIds: string;
  productIds: string;
  productNames: string;
  productCoverUrl: string;
  productPrice: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  minOrderQty: number;
  productGroups: IProductGroup;
  supplierIds: string;
  supplierNames: string;
  supplierVerified: boolean;
  savedLists: IsavedList[];
} // Like a IProduct + userId
export interface IResLatestVisitProducts extends IResProduct { } // Like a Products
export interface ICreateMessage {
  msg: string;
  userIds: string;
  msgFilesUrl: string[];
  supplierIds: string;
}
export interface ICreateMessageReply {
  userIds: string;
  msgNames: string;
  supplierIds: string;
}
export interface IResMessageList {
  message: string;
  data: IMessageList[];
}
export interface IMessageList {
  userIds: string;
  supplierLogosUrl: string;
  msgIds: string;
  msgNames: string;
  supplierIds: string;
  supplierNames: string;
  msgDate: Date;
  unread: boolean;
}
export interface IResMessageDetail {
  messages: string;
  data: IMessageDetail[];
}
export interface IMessageDetail {
  msg: string;
  msgDate: Date;
  msgFilesUrl: string;
  msgIsReplied: boolean;
}
export interface ICreateSavedListProduct {
  userIds: string;
  savedListNames: string;
  productIds: string;
  productNames: string;
  productCoverUrl: string;
  productPrices: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  productGroups: IProductGroup;
  supplierIds: string;
  supplierNames: string;
  supplierCompanyEmails: string;
  supplierKeywords: string[];
  supplierVerified: boolean;
  supplierRating: number;
  address: IAddress;
}
export interface IResSavedListProducts {
  message: string;
  data: ISavedListProducts[];
}
export interface ISavedListProducts {
  savedListIds: string;
  savedListNames: string;
  supplierCount: number;
  productCount: number;
  supplierIds: string;
  supplierNames: string;
  supplierCompanyEmails: string;
  supplierKeywords: string[];
  supplierVerified: boolean;
  supplierRating: number;
  supplierCompanyWebsite: string;
  impFactor: number;
  address: IAddress;
  products: IProductWithOutSupplier[];
  savedLists: IsavedList[];
  supplierLogoUrl: string;
}
export interface IsavedList {
  savedListIds: string;
  savedListNames: string;
}
export interface ICreateSavedListSupplier {
  userIds: string;
  savedListNames: string;
  supplierIds: string;
  supplierNames: string;
  supplierCompanyEmails: string;
  supplierKeywords: string[];
  supplierVerified: boolean;
  supplierRating: number;
  supplierCompanyWebsite: string;
  impFactor: number;
  address: IAddress;
  shippingZone: IShippingZone[];
  products: IProductWithOutSupplier[];
  supplierCount: number;
  productCount: number;
}
export interface IResSavedListSuppliers {
  messages: string;
  data: ISavedListSuppliers[];
}
export interface ISavedListSuppliers {
  savedListIds: string;
  savedListNames: string;
  suppliers: ISuppliers[];
  supplierCount: number;
  productCount: number;
}
interface ISuppliers {
  supplierIds: string;
  supplierNames: string;
  supplierCompanyEmails: string;
  supplierKeywords: string[];
  supplierVerified: boolean;
  supplierRating: number;
  supplierCompanyWebsite: string;
  impFactor: number;
  address: IAddress;
  shippingZone: IShippingZone[];
  products: IProductWithOutSupplier[];
  supplierLogosUrl: string;
  supplierRatingAmount: number;
  savedLists: IsavedList[];
}
export interface IProductWithOutSupplier {
  productIds: string;
  productNames: string;
  productCoverUrl: string;
  productPrice: number;
  productUnits: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  minOrderQty: number;
  productGroup: IProductGroup;
  savedLists: IsavedList[];
}
interface IShippingZone {
  zoneNames: string;
  shippingMethod: IShippingMethodInShippingZone[];
}
interface IShippingMethodInShippingZone {
  shippingMethodName: string;
  shippingMethodIconUrl: string;
}

export interface IAddress {
  addrNames: string;
  addrFull: string;
  addrNumber: string;
  addrProvince: string;
  addrAmphoe: string;
  addrTambon: string;
  addrPostcode: string;
  addrPhone: string[];
  addrMobile: string[];
  addrFax: string[];
  addrLat: string;
  addrLng: string;
  addrCountry: string;
  addrEmails: string;
}
export interface IResFilterResultProduct {
  messages: string;
  data: IFilterResultProduct[];
}
export interface IFilterResultProduct {
  supplierIds: string;
  supplierNames: string;
  supplierCompanyEmails: string;
  supplierKeyword: string[];
  supplierVerified: boolean;
  supplierRating: number;
  supplierCompanyWebsite: string;
  impFactor: number;
  address: IAddress;
  products: IProductWithOutSupplier[];
  savedLists: IsavedList[];
  supplierCount: number;
  productCount: number;
  supplierLogosUrl: string;
}
export interface IResProductMayLike extends IResProduct { } // Like a IProduct
export interface IResProductGroupDetail {
  message: string;
  data: IProductGroupDetail[];
}
export interface IProductGroupDetail {
  productGroupIds: string;
  productGroupImagesUrl: string;
  productGroupNames: string;
  productSource: string;
  productCategoryIds: string;
  productCategoryCustomName: string;
  productCurrencyCode: string;
  productOrigin: string;
  productChannel: string[];
  warehouseIds: string;
  productBrands: string;
  productKeywords: string[];
  productCategorySpec: IProductCategorySpec[];
  productVideosCoverUrl: string;
  savedLists: IsavedList[];
  products: [
    {
      productNames: string;
      costPrices: number;
      productBuyPrice: number;
      productPrice: number;
      productSkus: string;
      productUnits: string;
      productWholesales: IProductWholeSale[];
      productBarcode: string;
      productImagesUrl: string[];
      initialStock: number;
      productPackage: IProductPackage;
      stockAlert: number;
      maximumOnlineStock: number;
      minOrderQty: number;
      minimumWholesaleQty: number;
      wholesalePrice: number;
      retailPrice: number;
      packSizeLabel: string;
      packSizeQty: number;
      preparingTime: number;
      freeShipPrice: number;
      freeShipQuantity: number;
      wholesale: IWholesale;
    }
  ];
  leadTime: ILeadTime[];
  suppliers: {
    supplierIds: string;
    supplierNames: string;
    supplierCompanyEmails: string;
    supplierKeywords: string[];
    supplierVerified: boolean;
    supplierRating: number;
    impFactor: number;
    address: IAddress;
    shippingZone: IShippingZone[];
    paymentMethod: IPaymentMethod[];
    supplierLogosUrl: string;
  };
}
export interface IPaymentMethod {
  paymentMethodType: string;
  paymentMethodTypeAttr: IPaymentMethodTypeAttr[];
}
export interface IPaymentMethodTypeAttr {
  paymentMethodIconsUrl: string;
  paymentMethodNames: string;
}
export interface IProductCategorySpec {
  attriNames: string;
  attriValues: string;
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
export interface IWholesale {
  qtyMinimum: number;
  productPrices: number;
  retailQtyMinimum: number;
  retailProductPrice: number;
}
export interface ILeadTime {
  qty: string[]; // ( [1, 100] length = 2 )
  day: number; // (negotiable)
}
export interface IProductWholeSale {
  minWholesaleQty: number;
  productWholesalePrice: number;
  retailPrice: number;
}
export interface IResProductDescription {
  messages: string;
  data: IProductDescription[];
}
export interface IProductDescription {
  description: string; // HTML
}
export interface IResProductBySupplier extends IResProduct { } // Like a IProduct
export interface IResRelatedProductByProduct extends IResProduct { } // Like a IProduct
export interface IResProductDetail {
  message: string;
  data: IProductDetail[];
}
export interface IProductDetail {
  productIds: string;
  productImageUrl: string;
  productNames: string;
  costPrice: number;
  productBuyPrice: number;
  productPrice: number;
  productSku: string;
  productUnit: string;
  productWholesales: IProductWholeSale[];
  productSource: string;
  productCategoryId: string;
  productCategoryCustomName: string;
  productCurrencyCode: string;
  productBarcode: string;
  productOrigin: string;
  productChannel: string[];
  productImagesUrl: string[];
  initialStock: number;
  warehouseId: string;
  productPackage: IProductPackage;
  productBrand: string;
  stockAlert: number;
  maximumOnlineStock: number;
  minOrderQty: number;
  minimumWholesaleQty: number;
  wholesalePrice: number;
  retailPrice: number;
  productKeyword: string[];
  packSizeLabel: string;
  packSizeQty: number;
  preparingTime: number;
  productCategorySpec: IProductCategorySpec[];
  freeShipPrice: number;
  freeShipQuantity: number;
  productVideosCoverUrl: string;
  wholesale: IWholesale;
  leadTime: ILeadTime[];
  suppliers: {
    supplierId: string;
    supplierName: string;
    supplierCompanyEmail: string;
    supplierKeyword: string[];
    supplierVerified: boolean;
    supplierRating: number;
    impFactor: number;
    address: IAddress;
    shippingZone: IShippingZone[];
    paymentMethod: IPaymentMethod[];
    supplierLogoUrl: string;
  };
}
export interface IResProductWithAddr {
  message: string;
  data: IProductWithAddr[];
}
export interface IProductWithAddr extends IProduct {
  supplierCompanyEmail: string;
  supplierKeyword: string[];
  supplierRating: number;
  address: IAddress;
  supplierCount: number;
  productCount: number;
}
export interface IResAllNewProduct extends IResProductWithAddr { } // IProductWithAddr
export interface IResProductWithCount {
  message: string;
  data: IProductWithCount[];
}
export interface IProductWithCount extends IProduct {
  productCount: number;
  supplierCount: number;
}
export interface IResAllRelatedProduct extends IResProductWithCount { } // Like a IProductWithCount
export interface IResAllVisitedProduct extends IResProductWithCount { } // Like a IProductWithCount
export interface IResAllRecommendProduct extends IResProductWithAddr { } // Like a IProductWithAddr
export interface IResRecommendSupplier {
  message: string;
  data: IRecommendSupplier[];
}
export interface IRecommendSupplier {
  supplierIds: string;
  supplierLogosUrl: string;
  supplierNames: string;
  supplierCompanyEmail: string;
  supplierKeyword: string[];
  supplierVerified: boolean;
  supplierRating: number;
  supplierRatingAmount: number;
  impFactor: number;
  address: IAddress;
}
export interface IResFilterResultSupplier {
  messages: string;
  data: IFilterResultSupplier[];
}
export interface IFilterResultSupplier {
  supplierIds: string;
  supplierNames: string;
  supplierCompanyEmails: string;
  supplierKeywords: string[];
  supplierVerified: boolean;
  supplierRating: number;
  supplierCompanyWebsite: string;
  impFactor: number;
  address: IAddress;
  shippingZone: IShippingZone[];
  products: IProductWithOutSupplier[];
  savedLists: IsavedList[];
  supplierCount: number;
  productCount: number;
  supplierLogoUrl: string;
}
export interface IResSupplierWithSavedList {
  messages: string;
  data: ISupplierWithSavedList[];
}
export interface ISupplierWithSavedList {
  supplierIds: string;
  supplierLogosUrl: string;
  supplierNames: string;
  supplierCompanyEmails: string;
  supplierKeywords: string[];
  supplierVerified: boolean;
  supplierRating: number;
  impFactor: number;
  address: IAddress;
  savedLists: IsavedList[];
}
export interface IResSupplierMayLike extends IResSupplierWithSavedList { } // ISupplierWithSavedList
export interface IResLatestVisitSupplier extends IResSupplierWithSavedList { } // ISupplierWithSavedList
export interface IResSupplierOverview {
  message: string;
  data: ISupplierOverview[];
}
export interface ISupplierOverview {
  supplierIds: string;
  supplierNames: string;
  supplierBannerUrlArray: string[];
  supplierCompanyCode: string;
  supplierCompanyEmail: string;
  supplierVerified: boolean;
  supplierRating: number;
  supplierRatingCount: number;
  supplierScore: number;
  supplierResponseTime: string;
  impFactor: number;
  supplierKeyword: string[];
  companyOverview: string;
  supplierLogosUrl: string;
  supplierCoverUrl: string;
  supplierColors: string;
  followers: number;
  ages: number;
  businessType: string;
  companyCapital: number;
  supplierCompanyRegisterId: string;
  mainProducts: string[];
  address: IAddress;
  employee: number;
  shippingZone: IShippingZone[];
  paymentMethod: IPaymentMethod[];
  creditTerm: string[];
  supplierCertificates: ISupplierCertificates[];
}
export interface IResSupplierContact {
  messages: string;
  data: ISupplierContact[];
}
export interface ISupplierContact {
  address: IAddress;
  addressSupplier: IAddressSupplier[];
}
export interface IAddressSupplier {
  supplierAddrNames: string;
  supplierAddrFull: string;
  supplierAddrNumber: string;
  supplierAddrProvince: string;
  supplierAddrAmphoe: string;
  supplierAddrTambon: string;
  supplierAddrPostcode: string;
  supplierAddrCountry: string;
  supplierAddrLocationLat: number;
  supplierAddrLocationLng: number;
  supplierAddrPhone: string;
  supplierAddrMobile: string;
  supplierAddrFax: string;
  supplierAddrEmails: string;
  supplierAddrType: string;
  officeHour: IOfficeHour[];
}
export interface IOfficeHour {
  days: string;
  times: string;
}
export interface IResSupplierFactory {
  messages: string;
  data: ISupplierFactory[];
}
export interface ISupplierFactory {
  factoryAddress: IFactoryAddress;
  factoryAreaUnit: string;
  factoryArea: string;
  factoryCoverUrl: string[];
  factoryCapacity: string;
  factoryCapacityUnit: string;
}
export interface IFactoryAddress {
  names: string;
  addressFull: string;
  number: string;
  province: string;
  amphoe: string;
  tambon: string;
  postal: number;
  lat: string;
  lng: string;
}
export interface IResSupplierCersAndDocs {
  messages: string;
  data: ISupplierCersAndDocs[];
}
export interface ISupplierCersAndDocs {
  supplierDocs: ISupplierDocs[];
  supplierCertificates: ISupplierCertificates[];
}
export interface IResSupplierImgAndVerifiedImg {
  messages: string;
  data: ISupplierImgAndVerifiedImg[];
}
export interface ISupplierImgAndVerifiedImg {
  supplierImage: ISupplierImage[];
  supplierImagesVerified: ISupplierImage[];
}
export interface ISupplierDocs {
  url: string;
  types: string;
  titles: string;
  expire: Date;
}
export interface ISupplierImage {
  type: string;
  title: string;
  image: IImages[];
}
export interface IImages {
  url: string;
  caption: string;
}
export interface ISupplierCertificates {
  url: string;
  type: string;
  title: string;
  expire: Date;
  private: boolean;
  issued: Date;
  issuer: string;
  cerName: string;
}
export interface IResSupplierProduct extends IResProduct { } // IProduct
export interface IResSupplierWebsite {
  messages: string;
  data: ISupplierWebsite[];
}
export interface ISupplierWebsite {
  companyDescription: string;
}
export interface IResSupplierCustomPage {
  message: string;
  data: ISupplierCustomPage[];
}
export interface ISupplierCustomPage {
  title: string;
  content: string;
}
export interface IResRfqScore {
  message: string;
  data: IRfqScore[];
}
export interface IRfqScore {
  rfqScore: number;
  rfqSectionName: string;
}
export interface IResQuotaRfq {
  message: string;
  data: IQuotaRfq[];
}
export interface IQuotaRfq {
  quotaRfq: number;
  usedQuotaRfq: number;
}
export interface IResShippingMethod {
  messages: string;
  data: IShippingMethod[];
}
export interface IShippingMethod {
  shippingMethodId: string;
  shippingMethodName: string;
  shippingMethodIconUrl: string;
}
export interface IResPaymentMethod {
  messages: string;
  data: IPaymentMethods[];
}
export interface IPaymentMethods {
  paymentMethodId: string;
  paymentMethodType: string;
  paymentMethodTypeAttr: IPaymentMethodTypeAttr[];
}
export interface ICreateRfq {
  userIds: string;
  rfqRequestDates: Date;
  rfqScores: number;
  requestors: Requestors[];
  products: {
    productNames: string;
    productKeywords: string[];
    productCategoryIds: string;
  };
  productInfo: {
    productQty: number;
    productUnits: string;
    productCurrencyCode: string;
  };
  shippingLocation: {
    addrFull: string;
    addrNumber: string;
    addrProvince: string;
    addrAmphoe: string;
    addrTambon: string;
    addrPostcode: string;
    shippingMethodId: string[];
  };
  processingTime: {
    rfqExpiryDate: Date;
    requestReceiveDate: Date;
  };
  paymentMethod: {
    creditTerm: number;
    paymentMethodId: string[];
  };
  moreDetail: {
    imageUrl: string[];
    note: string;
  };
}
export interface IResRfqList {
  message: string;
  data: IRfqList[];
}
export interface IRfqList {
  productNames: string;
  productCategoryNames: string[];
  rfqExpiryDate: Date;
  seenRfqSupplierCount: number;
  replyRfqQuotationCount: number;
  rfqId: string;
  rfqList: RfqList[];
}
interface RfqList {
  id: string;
  supplierNames: string;
  supplierRatingCount: number;
  productPrice: number;
  supplierRating: number;
  supplierRecommend: boolean;
  supplierVerified: boolean;
  minOrderQty: number;
  packSizeLabel: string;
  packSizeQty: number;
}
export interface IResReplyRfqList {
  message: string;
  data: IReplyRfqList[];
}
export interface IReplyRfqList {
  supplierNames: string;
  supplierVerified: boolean;
  supplierRating: string;
  supplierRatingAmount: number;
  pricePerUnit: number;
  minOrderQty: number;
}
export interface IResQuotaInquiry {
  messages: string;
  data: IQuotaInquiry[];
}
export interface IQuotaInquiry {
  quotaInquiry: number;
  usedQuotaInquiry: number;
}
export interface IResSupplier {
  messages: string;
  data: ISupplier[];
}
export interface ISupplier {
  supplierIds: string;
  supplierNames: string;
  supplierVerified: boolean;
  supplierLogosUrl: string;
  supplierScore: number;
  supplierResponseTime: string;
  supplierRating: string;
  supplierRatingAmount: number;
  supplierAges: number;
  supplierCompanyEmail: string;
  address: IAddress;
  supplierCompanyWebsite: string;
  supplierKeyword: string[];
  savedLists: IsavedList[];
}
export interface ICreateInquiry {
  userIds: string;
  supplierIds: string;
  productIds: string;
  requestors: Requestors[];
  inquiryMessage: string;
  inquiryCoverUrl: string[];
}
export interface Requestors {
  name: string;
  email: string;
}
export interface IResInquiryProductList {
  message: string;
  data: IInquiryProductList[];
}
export interface IInquiryProductList {
  productIds: string;
  productNames: string;
  productCoverUrl: string;
  productPrice: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  productGroup: IProductGroup;
  supplierIds: string;
  supplierName: string;
  supplierCompanyEmail: string;
  supplierKeywords: string[];
  supplierVerified: boolean;
  supplierRating: number;
  address: IAddress;
  savedLists: IsavedList[];
  unread: false;
}
export interface IResSearchResultSupplier extends IResSearchResultLocation { } // Like a IFilterResultSupplier
export interface IResSearchResultProduct extends IResSearchResultLocation { } // Like a IFilterResultProduct
export interface IResSearchResultLocation {
  message: string;
  data: ISearchResultLocation[];
}
export interface ISearchResultLocation {
  supplierIds: string;
  supplierNames: string;
  supplierCompanyEmail: string;
  supplierKeyword: string[];
  supplierVerified: boolean;
  supplierRating: number;
  supplierRatingCount: number;
  supplierCompanyWebsite: string;
  impFactor: number;
  address: IAddress;
  shippingZone: IShippingZone[];
  products: IProductWithOutSupplier[];
  companyMapLocation: CompanyMapLocation;
  supplierLogosUrl: string;
}
interface CompanyMapLocation {
  lat: string;
  lng: string;
  location: string[];
  pinImagesUrl: string;
}
export interface IResInterest {
  message: string;
  data: IInterest[];
}
export interface IInterest {
  userIds: string;
  categoryIds: string;
}
export interface IResSurvey {
  messages: string;
  data: ISurvey[];
}
export interface ISurvey {
  categoryMainId: string;
  categoryMainName: string;
  categoryMainIconUrl: string;
  categoryMainCoverUrl: string;
  impFactor: string;
}

export interface IResSavedListMarket {
  message: string;
  data: ISavedListMarket[];
}

export interface ISavedListMarket {
  userId: string;
  savedListName: string;
  savedListType: string;
  createdTime: string;
}

/* #region  STUB: Version 3.x */

export interface IResAPI {
  status: string
  statusText: string
  message: string
}

export interface IFilter {
  filterName: string
  filterIconUrl: string
  filterHelper: string
}

export interface ISearchFilter {
  sectionName: string
  sectionFilters: IFilter[]
}

export interface IResSearchFilter extends IResAPI {
  data: ISearchFilter[]
}

/* #endregion */
