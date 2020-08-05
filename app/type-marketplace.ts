export interface IResMainCategory {
  data?: IMainCategory[];
}
export interface IMainCategory {
  categoryMainId: string;
  categoryMainName: string;
  categoryMainIconUrl: string;
  categoryMainImageUrl: string;
  impFactor: string;
}
export interface IResRecommendMainCategory {
  data?: IRecommendMainCategory[];
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
  data?: IBanner[];
}
export interface IBanner {
  bannerTitle: string;
  bannerLinkUrl: string;
  bannerImageUrl: string;
  bannerSortIndex: number;
}
export interface IResProduct {
  data?: IProduct[];
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
  savedLists: savedList[];
}
interface IProductGroup {
  productGroupId: string;
  productGroupName: string;
  productGroupImageUrl: string;
}
export interface IResRecommendProduct { } // Like a IProduct
export interface IResTop20ProductsByCategory { } // Like a IProduct
export interface IResTop20Products {
  data?: ITop20Products[];
}
export interface ITop20Products {
  productId: string;
  productName: string;
  productImageUrl: string;
  productGroup: IProductGroup;
  savedLists: savedList[];
}
export interface IResCategoryWithChild {
  data?: ICategoryWithChild[];
}
export interface ICategoryWithChild {
  categoryId: string;
  categoryName: string;
  categoryImageUrl: string;
  impFactor: number;
  childCategories: IChildCategory[];
}
export interface IResCategory {
  data?: ICategory[];
}
export interface ICategory {
  categoryId: string;
  categoryName: string;
  categoryIconUrl: string;
  categoryImageUrl: string;
  impFactor: number;
}
export interface IResRecommendCategory {
  data?: IRecommendCategory[];
}
export interface IRecommendCategory {
  categoryId: string;
  categoryName: string;
  categoryImageUrl: string;
  supplierCount: number;
  productCount: number;
  impFactor: number;
}
interface IChildCategory {
  categoryId: string;
  categoryName: string;
  impFactor: number;
}
export interface IResAllCategoryInSearchTool {
  data?: IAllCategoryInSearchTool[];
}
export interface IAllCategoryInSearchTool {
  categoryId: string;
  categoryName: string;
}
export interface IResSupplierHilight {
  data?: ISupplierHilight[];
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
  savedLists: savedList[];
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
  data?: IMessageList[];
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
  data?: IMessageDetail[];
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
  data?: ISavedListProducts[];
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
    }
  ];
  supplierCount: number;
  productCount: number;
}
interface savedList {
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
  data?: ISavedListSuppliers[];
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
}
interface IProductWithOutSupplier {
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
  savedLists: savedList[];
}
interface IShippingZone {
  zoneName: string;
  shippingMethod: IShippingMethodInShippingZone[];
}
interface IShippingMethodInShippingZone {
  shippingMethodName: string;
  shippingMethodIconUrl: string;
}
interface IAddress {
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
  data?: IFilterResultProduct[];
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
  savedLists: savedList[];
  supplierCount: number;
  productCount: number;
}
export interface IResProductMayLike { } // Like a IProduct
export interface IResProductGroupDetail {
  data?: IProductGroupDetail[];
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
  savedLists: savedList[];
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
interface IPaymentMethod {
  paymentMethodType: string;
  paymentMethodTypeAttr: IPaymentMethodTypeAttr[];
}
interface IPaymentMethodTypeAttr {
  paymentMethodIconUrl: string;
  paymentMethodName: string;
}
interface IProductCategorySpec {
  attriName: string;
  attriValue: string;
}
interface IProductPackage {
  weight: number;
  weightUnit: string;
  height: number;
  heightUnit: string;
  width: number;
  widthUnit: string;
  length: number;
  lengthUnit: string;
}
interface IWholesale {
  qtyMinimum: number;
  productPrice: number;
  retailQtyMinimum: number;
  retailProductPrice: number;
}
interface ILeadTime {
  qty: string[]; // ( [1, 100] length = 2 )
  day: number; // (negotiable)
}
interface IProductWholeSale {
  minWholesaleQty: number;
  productWholesalePrice: number;
  retailPrice: number;
}
export interface IResProductDescription {
  data?: IProductDescription[];
}
export interface IProductDescription {
  description: string; // HTML
}
export interface IResProductBySupplier { } // Like a IProduct
export interface IResRelatedProductByProduct { } // Like a IProduct
export interface IResProductDetail {
  data?: IProductDetail[];
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
  data?: IProductWithAddr[];
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
  savedLists: savedList[];
  supplierCount: number;
  productCount: number;
}
export interface IResAllNewProduct { } // IProductV2
export interface IResProductWithCount {
  data?: IProductWithCount[];
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
  savedLists: savedList[];
  supplierCount: number;
  productCount: number;
}
export interface IResAllRelatedProduct { } // Like a IProductWithCount
export interface IResAllVisitedProduct { } // Like a IProductWithCount
export interface IResAllRecommendProduct { } // Like a IProductV2
export interface IResRecommendSupplier {
  data?: IRecommendSupplier[];
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
  data?: IFilterResultSupplier[];
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
  savedLists: savedList[];
  supplierCount: number;
  productCount: number;
}
export interface IResSupplierWithSavedList {
  data?: ISupplierWithSavedList[];
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
  savedLists: savedList[];
}
export interface IResSupplierMayLike { } // ISupplierWithSavedList
export interface IResLatestVisitSupplier { } // ISupplierWithSavedList
export interface IResSupplierOverview {
  data?: ISupplierOverview[];
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
  data?: ISupplierContact[];
}
export interface ISupplierContact {
  address: IAddress;
  addressSupplier: IAddressSupplier[];
}
interface IAddressSupplier {
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
  officeHour: OfficeHour[];
}
interface OfficeHour {
  day: string;
  time: string;
}
export interface IResSupplierFactory {
  data?: ISupplierFactory[];
}
export interface ISupplierFactory {
  factoryAddress: IFactoryAddress;
  factoryAreaUnit: string;
  factoryArea: string;
  factoryImageUrl: string[];
  factoryCapacity: string;
  factoryCapacityUnit: string;
}
interface IFactoryAddress {
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
  data?: ISupplierCersAndDocs[];
}
export interface ISupplierCersAndDocs {
  supplierDocs: ISupplierDocs[];
  supplierCertificates: ISupplierCertificates[];
}
export interface IResSupplierImgAndVerifiedImg {
  data?: ISupplierImgAndVerifiedImg[];
}
export interface ISupplierImgAndVerifiedImg {
  supplierImage: ISupplierImage[];
  supplierImagesVerified: ISupplierImage[];
}
interface ISupplierDocs {
  url: string;
  type: string;
  title: string;
  expire: Date;
}
interface ISupplierImage {
  type: string;
  title: string;
  image: IImages[];
}
interface IImages {
  url: string;
  caption: string;
}
interface ISupplierCertificates {
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
  data?: ISupplierWebsite[];
}
export interface ISupplierWebsite {
  companyDescription: string;
}
export interface IResSupplierCustomPage {
  data?: ISupplierCustomPage[];
}
export interface ISupplierCustomPage {
  title: string;
  content: string;
}
export interface IResRfqScore {
  data?: IRfqScore[];
}
export interface IRfqScore {
  rfqScore: number;
  rfqSectionName: string;
}
export interface IResQuotaRfq {
  data?: IQuotaRfq[];
}
export interface IQuotaRfq {
  quotaRfq: number;
  usedQuotaRfq: number;
}
export interface IShippingMethod {
  data?: IResShippingMethod[];
}
export interface IResShippingMethod {
  shippingMethodId: string;
  shippingMethodName: string;
  shippingMethodIconUrl: string;
}
export interface IResGetPaymentMethod {
  data?: IGetPaymentMethod[];
}
export interface IGetPaymentMethod {
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
  data?: IRfqList[];
}
export interface IRfqList {
  productName: string;
  productCategoryName: string;
  rfqExpiryDate: Date;
  seenRfqSupplierCount: number;
  replyRfqQuotationCount: number;
}
export interface IResReplyRfqList {
  data?: IReplyRfqList[];
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
  data?: IQuotaInquiry[];
}
export interface IQuotaInquiry {
  quotaInquiry: number;
  usedQuotaInquiry: number;
}
export interface IResSupplier {
  data?: ISupplier[];
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
}
export interface ICreateInquiry {
  userId: string;
  supplierId: string;
  productId: string;
  requestors: Requestors[];
  inquiryMessage: string;
  inquiryImagesUrl: string[];
}
interface Requestors {
  name: string;
  email: string;
}
export interface IResInquiryProductList {
  data?: IInquiryProductList[];
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
  savedLists: savedList[];
  unread: false;
}
export interface IResSearchResultSupplier { } // Like a IFilterResultSupplier
export interface IResSearchResultProduct { } // Like a IFilterResultProduct
export interface IResSearchResultLocation {
  data?: ISearchResultLocation[];
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
  data?: IInterest[];
}
export interface IInterest {
  userId: string;
  categoryId: string;
}
