export interface IResMainCategory {
  message: string;
  data: IMainCategory[];
}
export interface IMainCategory {
  categoryMainId: string;
  categoryMainName: string;
  categoryMainIconUrl: string;
  categoryMainImageUrl: string;
  impFactor: string;
}
export interface IResRecommendMainCategory {
  message: string;
  data: IRecommendMainCategory[];
}
export interface IRecommendMainCategory {
  categoryId: string;
  categoryName: string;
  categoryImageUrl: string;
  impFactor: number;
  supplierCount: number;
  productCount: number;
}
export interface IResBanner {
  message: string;
  data: IBanner[];
}
export interface IBanner {
  bannerTitle: string;
  bannerLinkUrl: string;
  bannerImageUrl: string;
  bannerSortIndex: number;
}
export interface IResProduct {
  message: string;
  data: IProduct[];
}
export interface IProduct {
  productId: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  minOrderQty: number;
  productGroup: IProductGroup;
  supplierId: string;
  supplierName: string;
  supplierVerified: boolean;
  savedLists: IsavedList[];
}
export interface IProductGroup {
  productGroupId: string;
  productGroupName: string;
  productGroupImageUrl: string;
}
export interface IResRecommendProduct { } // Like a IProduct
export interface IResTop20ProductsByCategory { } // Like a IProduct
export interface IResTop20Products {
  message: string;
  data: ITop20Products[];
}
export interface ITop20Products {
  productId: string;
  productName: string;
  productImageUrl: string;
  productGroup: IProductGroup;
  savedLists: IsavedList[];
}
export interface IResCategoryWithChild {
  message: string;
  data: ICategoryWithChild[];
}
export interface ICategoryWithChild {
  categoryId: string;
  categoryName: string;
  categoryImageUrl: string;
  impFactor: number;
  childCategories: IChildCategory[];
}
export interface IResCategory {
  message: string;
  data: ICategory[];
}
export interface ICategory {
  categoryId: string;
  categoryName: string;
  categoryIconUrl: string;
  categoryImageUrl: string;
  impFactor: number;
}
export interface IResRecommendCategory {
  message: string;
  data: IRecommendCategory[];
}
export interface IRecommendCategory {
  categoryId: string;
  categoryName: string;
  categoryImageUrl: string;
  supplierCount: number;
  productCount: number;
  impFactor: number;
}
export interface IChildCategory {
  categoryId: string;
  categoryName: string;
  impFactor: number;
}
export interface IResAllCategoryInSearchTool {
  message: string;
  data: IAllCategoryInSearchTool[];
}
export interface IAllCategoryInSearchTool {
  categoryMainIconUrl: string,
  categoryMainId: string,
  categoryMainImageUrl: string,
  categoryMainName: string,
  impFactor: string,
}
export interface IResSupplierHilight {
  message: string;
  data: ISupplierHilight[];
}
export interface ISupplierHilight {
  supplierId: string;
  supplierName: string;
  supplierLogoUrl: string;
  impFactor: number;
}
export interface IResRelatedProducts { } // Like a IProduct
export interface ICreateLatestVisitProducts {
  userId: string;
  productId: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  minOrderQty: number;
  productGroup: IProductGroup;
  supplierId: string;
  supplierName: string;
  supplierVerified: boolean;
  savedLists: IsavedList[];
} // Like a IProduct + userId
export interface IResLatestVisitProducts { } // Like a Products
export interface ICreateMessage {
  msg: string;
  userId: string;
  msgFileUrl: string[];
  supplierId: string;
}
export interface ICreateMessageReply {
  userId: string;
  msgName: string;
  supplierId: string;
}
export interface IResMessageList {
  message: string;
  data: IMessageList[];
}
export interface IMessageList {
  userId: string;
  supplierLogoUrl: string;
  msgId: string;
  msgName: string;
  supplierId: string;
  supplierName: string;
  msgDate: Date;
  unread: boolean;
}
export interface IResMessageDetail {
  message: string;
  data: IMessageDetail[];
}
export interface IMessageDetail {
  msg: string;
  msgDate: Date;
  msgFileUrl: string;
  msgIsReplied: boolean;
}
export interface ICreateSavedListProduct {
  userId: string;
  savedListName: string;
  productId: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  productGroup: IProductGroup;
  supplierId: string;
  supplierName: string;
  supplierCompanyEmail: string;
  supplierKeyword: string[];
  supplierVerified: boolean;
  supplierRating: number;
  address: IAddress;
}
export interface IResSavedListProducts {
  message: string;
  data: ISavedListProducts[];
}
export interface ISavedListProducts {
  savedListId: string;
  savedListName: string;
  products: [
    {
      productId: string;
      productName: string;
      productImageUrl: string;
      productPrice: number;
      productUnit: string;
      productCurrencyCode: string;
      packSizeLabel: string;
      packSizeQty: number;
      impFactor: number;
      productGroup: IProductGroup;
      supplierId: string;
      supplierName: string;
      supplierCompanyEmail: string;
      supplierKeyword: string[];
      supplierVerified: boolean;
      supplierRating: number;
      address: IAddress;
      savedLists: IsavedList[];
      supplierLogoUrl: string;
    }
  ];
  supplierCount: number;
  productCount: number;
}
export interface IsavedList {
  savedListId: string;
  savedListName: string;
}
export interface ICreateSavedListSupplier {
  userId: string;
  savedListName: string;
  supplierId: string;
  supplierName: string;
  supplierCompanyEmail: string;
  supplierKeyword: string[];
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
  message: string;
  data: ISavedListSuppliers[];
}
export interface ISavedListSuppliers {
  savedListId: string;
  savedListName: string;
  suppliers: ISuppliers[];
  supplierCount: number;
  productCount: number;
}
interface ISuppliers {
  supplierId: string;
  supplierName: string;
  supplierCompanyEmail: string;
  supplierKeyword: string[];
  supplierVerified: boolean;
  supplierRating: number;
  supplierCompanyWebsite: string;
  impFactor: number;
  address: IAddress;
  shippingZone: IShippingZone[];
  products: IProductWithOutSupplier[];
  supplierLogoUrl: string;
  supplierRatingAmount: number;
}
export interface IProductWithOutSupplier {
  productId: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  minOrderQty: number;
  productGroup: IProductGroup;
  savedLists: IsavedList[];
}
interface IShippingZone {
  zoneName: string;
  shippingMethod: IShippingMethodInShippingZone[];
}
interface IShippingMethodInShippingZone {
  shippingMethodName: string;
  shippingMethodIconUrl: string;
}

export interface IAddress {
  addrName: string;
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
}
export interface IResFilterResultProduct {
  message: string;
  data: IFilterResultProduct[];
}
export interface IFilterResultProduct {
  productId: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  productGroup: IProductGroup;
  supplierId: string;
  supplierName: string;
  supplierCompanyEmail: string;
  supplierKeyword: string[];
  supplierVerified: boolean;
  supplierRating: number;
  address: IAddress;
  savedLists: IsavedList[];
  supplierCount: number;
  productCount: number;
}
export interface IResProductMayLike { } // Like a IProduct
export interface IResProductGroupDetail {
  message: string;
  data: IProductGroupDetail[];
}
export interface IProductGroupDetail {
  productGroupId: string;
  productGroupImageUrl: string;
  productGroupName: string;
  productSource: string;
  productCategoryId: string;
  productCategoryCustomName: string;
  productCurrencyCode: string;
  productOrigin: string;
  productChannel: string[];
  warehouseId: string;
  productBrand: string;
  productKeyword: string[];
  productCategorySpec: IProductCategorySpec[];
  productVideoCoverUrl: string;
  savedLists: IsavedList[];
  products: [
    {
      productName: string;
      costPrice: number;
      productBuyPrice: number;
      productPrice: number;
      productSku: string;
      productUnit: string;
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
  };
}
export interface IPaymentMethod {
  paymentMethodType: string;
  paymentMethodTypeAttr: IPaymentMethodTypeAttr[];
}
export interface IPaymentMethodTypeAttr {
  paymentMethodIconUrl: string;
  paymentMethodName: string;
}
export interface IProductCategorySpec {
  attriName: string;
  attriValue: string;
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
  productPrice: number;
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
  message: string;
  data: IProductDescription[];
}
export interface IProductDescription {
  description: string; // HTML
}
export interface IResProductBySupplier { } // Like a IProduct
export interface IResRelatedProductByProduct { } // Like a IProduct
export interface IResProductDetail {
  message: string;
  data: IProductDetail[];
}
export interface IProductDetail {
  productId: string;
  productImageUrl: string;
  productName: string;
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
  productVideoCoverUrl: string;
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
  };
}
export interface IResProductWithAddr {
  message: string;
  data: IProductWithAddr[];
}
export interface IProductWithAddr {
  productId: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  productGroup: IProductGroup;
  supplierId: string;
  supplierName: string;
  supplierCompanyEmail: string;
  supplierKeyword: string[];
  supplierVerified: boolean;
  supplierRating: number;
  impFactor: number;
  address: IAddress;
  savedLists: IsavedList[];
  supplierCount: number;
  productCount: number;
}
export interface IResAllNewProduct { } // IProductV2
export interface IResProductWithCount {
  message: string;
  data: IProductWithCount[];
}
export interface IProductWithCount {
  productId: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  minOrderQty: number;
  productGroup: IProductGroup;
  supplierId: string;
  supplierName: string;
  supplierVerified: boolean;
  savedLists: IsavedList[];
  supplierCount: number;
  productCount: number;
}
export interface IResAllRelatedProduct { } // Like a IProductWithCount
export interface IResAllVisitedProduct { } // Like a IProductWithCount
export interface IResAllRecommendProduct { } // Like a IProductV2
export interface IResRecommendSupplier {
  message: string;
  data: IRecommendSupplier[];
}
export interface IRecommendSupplier {
  supplierId: string;
  supplierIconUrl: string;
  supplierName: string;
  supplierCompanyEmail: string;
  supplierKeyword: string[];
  supplierVerified: boolean;
  supplierRating: number;
  supplierRatingAmount: number;
  impFactor: number;
  address: IAddress;
}
export interface IResFilterResultSupplier {
  message: string;
  data: IFilterResultSupplier[];
}
export interface IFilterResultSupplier {
  supplierId: string;
  supplierName: string;
  supplierCompanyEmail: string;
  supplierKeyword: string[];
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
  message: string;
  data: ISupplierWithSavedList[];
}
export interface ISupplierWithSavedList {
  supplierId: string;
  supplierIconUrl: string;
  supplierName: string;
  supplierCompanyEmail: string;
  supplierKeyword: string[];
  supplierVerified: boolean;
  supplierRating: number;
  impFactor: number;
  address: IAddress;
  savedLists: IsavedList[];
}
export interface IResSupplierMayLike { } // ISupplierWithSavedList
export interface IResLatestVisitSupplier { } // ISupplierWithSavedList
export interface IResSupplierOverview {
  message: string;
  data: ISupplierOverview[];
}
export interface ISupplierOverview {
  supplierId: string;
  supplierName: string;
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
  supplierLogoUrl: string;
  supplierImageUrl: string;
  supplierColor: string;
  followers: number;
  ages: number;
  businessType: string;
  companyCapital: number;
  supplierCompanyRegisterId: string;
  mainProduct: string[];
  address: IAddress;
  employee: number;
  shippingZone: IShippingZone[];
  paymentMethod: IPaymentMethod[];
  creditTerm: string[];
  supplierCertificates: ISupplierCertificates[];
}
export interface IResSupplierContact {
  message: string;
  data: ISupplierContact[];
}
export interface ISupplierContact {
  address: IAddress;
  addressSupplier: IAddressSupplier[];
}
export interface IAddressSupplier {
  supplierAddrName: string;
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
  supplierAddrEmail: string;
  supplierAddrType: string;
  officeHour: IOfficeHour[];
}
export interface IOfficeHour {
  day: string;
  time: string;
}
export interface IResSupplierFactory {
  message: string;
  data: ISupplierFactory[];
}
export interface ISupplierFactory {
  factoryAddress: IFactoryAddress;
  factoryAreaUnit: string;
  factoryArea: string;
  factoryImageUrl: string[];
  factoryCapacity: string;
  factoryCapacityUnit: string;
}
export interface IFactoryAddress {
  name: string;
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
  message: string;
  data: ISupplierCersAndDocs[];
}
export interface ISupplierCersAndDocs {
  supplierDocs: ISupplierDocs[];
  supplierCertificates: ISupplierCertificates[];
}
export interface IResSupplierImgAndVerifiedImg {
  message: string;
  data: ISupplierImgAndVerifiedImg[];
}
export interface ISupplierImgAndVerifiedImg {
  supplierImage: ISupplierImage[];
  supplierImagesVerified: ISupplierImage[];
}
export interface ISupplierDocs {
  url: string;
  type: string;
  title: string;
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
export interface IResSupplierProduct { } // IProduct
export interface IResSupplierWebsite {
  message: string;
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
  message: string;
  data: IShippingMethod[];
}
export interface IShippingMethod {
  shippingMethodId: string;
  shippingMethodName: string;
  shippingMethodIconUrl: string;
}
export interface IResPaymentMethod {
  message: string;
  data: IPaymentMethods[];
}
export interface IPaymentMethods {
  paymentMethodId: string;
  paymentMethodType: string;
  paymentMethodTypeAttr: IPaymentMethodTypeAttr[];
}
export interface ICreateRfq {
  userId: string;
  rfqRequestDate: Date;
  rfqScore: number;
  requestors: Requestors[];
  products: {
    productName: string;
    productKeyword: string[];
    productCategoryId: string;
  };
  productInfo: {
    productQty: number;
    productUnit: string;
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
  productName: string;
  productCategoryName: string;
  rfqExpiryDate: Date;
  seenRfqSupplierCount: number;
  replyRfqQuotationCount: number;
  rfqId: number;
}
export interface IResReplyRfqList {
  message: string;
  data: IReplyRfqList[];
}
export interface IReplyRfqList {
  supplierName: string;
  supplierVerified: boolean;
  supplierRating: string;
  supplierRatingAmount: number;
  pricePerUnit: number;
  minOrderQty: number;
}
export interface IResQuotaInquiry {
  message: string;
  data: IQuotaInquiry[];
}
export interface IQuotaInquiry {
  quotaInquiry: number;
  usedQuotaInquiry: number;
}
export interface IResSupplier {
  message: string;
  data: ISupplier[];
}
export interface ISupplier {
  supplierId: string;
  supplierName: string;
  supplierVerified: boolean;
  supplierLogoUrl: string;
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
  userId: string;
  supplierId: string;
  productId: string;
  requestors: Requestors[];
  inquiryMessage: string;
  inquiryImagesUrl: string[];
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
  productId: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  productUnit: string;
  productCurrencyCode: string;
  packSizeLabel: string;
  packSizeQty: number;
  impFactor: number;
  productGroup: IProductGroup;
  supplierId: string;
  supplierName: string;
  supplierCompanyEmail: string;
  supplierKeyword: string[];
  supplierVerified: boolean;
  supplierRating: number;
  address: IAddress;
  savedLists: IsavedList[];
  unread: false;
}
export interface IResSearchResultSupplier { } // Like a IFilterResultSupplier
export interface IResSearchResultProduct { } // Like a IFilterResultProduct
export interface IResSearchResultLocation {
  message: string;
  data: ISearchResultLocation[];
}
export interface ISearchResultLocation {
  supplierId: string;
  supplierName: string;
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
}
interface CompanyMapLocation {
  lat: string;
  lng: string;
  location: string[];
  pinImageUrl: string;
}
export interface IResInterest {
  message: string;
  data: IInterest[];
}
export interface IInterest {
  userId: string;
  categoryId: string;
}
export interface IResSurvey {
  message: string;
  data: ISurvey[];
}
export interface ISurvey {
  categoryMainId: string;
  categoryMainName: string;
  categoryMainIconUrl: string;
  categoryMainImageUrl: string;
  impFactor: string;
}
