interface CompanyInfoSup {
  supplierNames: string;
  supplierCompanyCodes: string;
  supplierCompanyEmails: string;
  supplierCompanyWebsites: string;
  supplierCompanyRegisterIds: string;
  companyOverview: string;
  companyDescription: string;
  mainProducts: string[];
}
interface CompanyInfoDis {
  distributorNames: string;
  distributorCompanyCodes: string;
  distributorCompanyEmails: string;
  distributorCompanyWebsites: string;
  distributorCompanyRegisterIds: string;
  companyOverview: string;
  companyDescription: string;
  mainProducts: string[];
}

interface CompanyMapLocation {
  pinImagesUrl: string;
  lat: string;
  lng: string;
  locations: string[];
}

interface CompanyBoard {
  ownerNames: string;
  ownerEmails: string;
  ownerMobiles: string;
  ownerPositions: string;
}

interface AddressSupplier {
  supplierAddrNames: string;
  supplierAddrFull: string;
  supplierAddrNumbers: string;
  supplierAddrProvince: string;
  supplierAddrAmphoe: string;
  supplierAddrTambon: string;
  supplierAddrPostcode: string;
  supplierAddrCountry: string;
  supplierAddrLocationLat: number;
  supplierAddrLocationLng: number;
  supplierAddrPhones: string;
  supplierAddrMobiles: string;
  supplierAddrFax: string;
  supplierAddrEmail: string;
  supplierAddrType: string;
  officeHour: OfficeHour[];
}

interface AddressDistributor {
  distributorAddrNames: string;
  distributorAddrFull: string;
  distributorAddrNumber: string;
  distributorAddrProvince: string;
  distributorAddrAmphoe: string;
  distributorAddrTambon: string;
  distributorAddrPostcode: string;
  distributorAddrCountry: string;
  distributorAddrLocationLat: number;
  distributorAddrLocationLng: number;
  distributorAddrPhones: string;
  distributorAddrMobiles: string;
  distributorAddrFax: string;
  distributorAddrEmails: string;
  distributorAddrType: string;
  officeHour: OfficeHour[];
}

interface OfficeHour {
  days: string;
  times: string[];
}

interface Address {
  addrNames: string;
  addrFull: string;
  addrNumber: string;
  addrProvince: string;
  addrAmphoe: string;
  addrTambon: string;
  addrPostcode: string;
  addrPhones: string[];
  addrMobiles: string[];
  addrFax: string[];
  addrEmail: string;
  addrCountry: string;
  addrLat: string;
  addrLng: string;
}

interface BadgeSup {
  supplierWarranty: boolean;
  supplierSample: boolean;
  supplierCountry: string;
}

interface BadgeDis {
  distributorWarranty: boolean;
  distributorSample: boolean;
  distributorCountry: string;
}

interface CompanySetting {
  paymentsMethod: IPaymentMethod[];
  shippingsZone: ShippingZone[];
  creditsTerm: string[];
}

interface ShippingZone {
  zoneNames: string;
  zoneProvince: string[];
  zonePostcode: string[];
  zoneMethod: ZoneMethod[];
}
interface ZoneMethod {
  shippingMethodName: string
  shippingMethodIconUrl: string
}

interface CompanyMetric {
  ages: number;
  leadTime: string[];
  shippingDuration: string[];
  employee: string[];
  companyCapital: number;
}

interface CompanyAssetsSup {
  supplierVideosUrl: string[];
  supplierLogosUrl: string;
  supplierColors: string;
  supplierBannersUrl: string[];
}
interface CompanyAssetsDis {
  distributorVideosUrl: string[];
  distributorLogosUrl: string;
  distributorColors: string;
  distributorBannersUrl: string[];
}

interface ContactPerson {
  contactNames: string;
  contactEmails: string;
  contactMobiles: string;
  contactPositions: string;
  contactKeyPersons: boolean;
}

interface Image {
  type: string;
  title: string;
  images: ImageAttr[];
  verified: boolean;
}
interface ImageAttr {
  url: string;
  captions: string;
}

interface Doc {
  url: string;
  type: string;
  title: string;
  expire: Date;
  private: boolean;
  verified: boolean;
}

interface Certificate {
  url: string;
  type: string;
  title: string;
  expire: Date;
  private: boolean;
  issued: Date;
  issuer: string;
  cerNames: string;
}

interface FactoryAddress {
  names: string;
  addressFull: string;
  number: string;
  province: string;
  amphoe: string;
  tambon: string;
  postcode: number;
  lat: string;
  lng: string;
}

interface Factory {
  factoryAddress: FactoryAddress;
  factoryAreaUnit: string;
  factoryArea: string;
  factoryImagesUrl: string[];
  factoryCapacity: string;
  factoryCapacityUnit: string;
}

interface IndexingSup {
  supplierTag: string[];
  supplierKeyword: string[];
}

interface IndexingDis {
  distributorTag: string[];
  distributorKeyword: string[];
}

interface GeeesyActionSup {
  supplierVerified: boolean;
  supplierRating: number;
  supplierScore: number;
  supplierActive: boolean;
  supplierRegisterDate: Date;
  supplierHilight: boolean;
  impFactor: number;
  supplierRecommend: boolean;
}

interface GeeesyActionDis {
  distributorVerified: boolean;
  distributorRating: number;
  distributorScore: number;
  distributorActive: boolean;
  distributorRegisterDate: Date;
  distributorHilight: boolean;
  impFactor: number;
  distributorRecommend: boolean;
}

interface CustomPage {
  title: string;
  content: string;
}

interface ProductWholesales {
  minWholesaleQty: number;
  productWholesalePrice: number;
  retailPrice: number;
}

interface ProductPackage {
  weight: number;
  weightUnit: string;
  height: number;
  heightUnit: string;
  width: number;
  widthUnit: string;
  length: number;
  lengthUnit: string;
};

interface ProductCategorySpec {
  attriName: string;
  attriValue: string;
}

interface LeadTime {
  qty: string[];
  day: number;
}

interface Wholesale {
  qtyMinimum: number;
  productsPrice: number;
  retailQtyMinimum: number;
  retailProductPrice: number;
};

export interface IResSupplierConsole {
  message: string;
  data: ISupplierConsole[]
}
export interface ISupplierConsole {
  companyInfo: CompanyInfoSup;
  companyMapLocation: CompanyMapLocation;
  companyBoard: CompanyBoard[];
  addressSupplier: AddressSupplier[];
  address: Address;
  badge: BadgeSup;
  companySetting: CompanySetting;
  companyMetric: CompanyMetric;
  companyAssets: CompanyAssetsSup;
  contactPersons: ContactPerson[];
  supplierImages: Image[];
  supplierDocs: Doc[];
  supplierCertificates: Certificate[];
  factory: Factory;
  indexing: IndexingSup;
  geeesyAction: GeeesyActionSup;
  followers: number;
  businessType: string;
  supplierCustomPage: CustomPage[];
}

export interface IResDistributor {
  messages: string;
  data: IDistributor[]
}
export interface IDistributor {
  companyInfo: CompanyInfoDis
  companyMapLocation: CompanyMapLocation
  companyBoard: CompanyBoard[];
  addressDistributor: AddressDistributor[];
  address: Address
  badge: BadgeDis
  companySetting: CompanySetting
  companyMetric: CompanyMetric
  companyAssets: CompanyAssetsDis
  contactPerson: ContactPerson[];
  distributorImages: Image[];
  distributorDocs: Doc[];
  distributorCertificates: Certificate[];
  factory: Factory
  indexing: IndexingDis
  geeesyAction: GeeesyActionDis
  followers: number;
  businessType: string;
  distributorCustomPage: CustomPage[];
}

// REVIEW: READ CATEGORY
export interface IResMainCategoryConsole {
  message: string;
  data: IMainCategoryConsole[]
}
export interface IMainCategoryConsole {
  categoryId: string;
  categoryName: string;
  categoryIconUrl: string;
  categoryImageUrl: string;
  impFactor: number;
  categoryBannersUrl: string[];
}

export interface IResCategoryConsole {
  message: string;
  data: ICategoryConsole[]
}
export interface ICategoryConsole {
  categoryId: string;
  categoryName: string;
  categoryIconUrl: string;
  categoryImageUrl: string;
  impFactor: number;
}

// REVIEW: CREATE CATEGORY
export interface ICreateMainCategory {
  categoryName: string;
  categoryImageUrl: string;
  categoryRecommend: boolean;
  categoryIconUrl: string;
  impFactor: number;
  categoryDescription: string;
  categoryBannersUrl: string[];
  isMainCat: boolean;
}

export interface ICreateCategoryLevel {
  parentCatId: string;
  categoryName: string;
  categoryImageUrl: string;
  categoryRecommend: boolean;
  categoryIconUrl: string;
  impFactor: number;
  categoryDescription: string;
}

// === === === === ===

interface ICreateProduct {
  supplierIds: string;
  distributorIds: string;
  productImagesUrl: string[];
  productNames: string;
  costPrices: number;
  productBuysPrice: number;
  productPrices: number;
  productSku: string;
  productUnit: string;
  productWholesales: ProductWholesales[];
  productSource: string;
  productCategoryIds: string;
  productCategoryCustomName: string;
  productCurrencysCode: string;
  productBarcode: string;
  productOrigin: string;
  productChannels: string[];
  productImagesArrayUrl: string[];
  productIsActive: boolean;
  initialStocks: number;
  warehouseIds: string;
  productPackage: ProductPackage
  productBrand: string;
  stockAlert: number;
  maximumOnlineStock: number;
  minOrderQty: number;
  keepSellingPast: boolean;
  minimumWholesaleQty: number;
  wholesalePrice: number;
  retailPrice: number;
  description: string;
  productKeyword: string[];
  packSizeLabel: string;
  packSizeQty: number;
  preparingTime: number;
  productHilight: boolean;
  productMarketplace: boolean;
  recommendProduct: boolean;
  showOnCompanyCard: boolean;
  newProduct: boolean;
  productCategorySpec: ProductCategorySpec[];
  showOnMarketplace: boolean;
  showOnInApp: boolean;
  wholesaleOnMarketplace: boolean;
  wholesaleInApp: boolean;
  freeShipPrice: number;
  freeShipQuantity: number;
  productVideoCoverUrl: string;
  wholesale: Wholesale
  leadTime: LeadTime[];
}

interface ICreateProductGroup {
  supplierIds: string;
  distributorIds: string;
  productGroupImagesUrl: string[];
  productGroupNames: string;
  productSource: string;
  productCategoryIds: string;
  productCategoryCustomNames: string;
  productCurrencyCodes: string;
  productOrigin: string;
  productChannel: string[];
  productIsActive: boolean;
  warehouseIds: string;
  productBrand: string;
  description: string;
  productKeywords: string[];
  productHilight: boolean;
  productMarketplace: boolean;
  recommendProducts: boolean;
  showOnCompanyCards: boolean;
  newProducts: boolean;
  productCategorySpec: ProductCategorySpec[];
  showOnMarketplace: boolean;
  showOnInApp: boolean;
  wholesaleOnMarketplace: boolean;
  wholesaleInApp: boolean;
  productVideoCoverUrl: string;
  products: {
    productNames: string;
    costPrice: number;
    productBuysPrice: number;
    productPrices: number;
    productSku: string;
    productUnit: string;
    productWholesales: ProductWholesales[];
    productBarcode: string;
    productImagesArrayUrl: string[];
    productIsActive: boolean;
    initialStock: number;
    productPackages: ProductPackage
    stockAlert: number;
    maximumOnlineStock: number;
    minOrderQty: number;
    keepSellingPast: boolean;
    minimumWholesaleQty: number;
    wholesalePrice: number;
    retailPrice: number;
    packSizeLabel: string;
    packSizeQty: number;
    preparingTime: number;
    freeShipPrice: number;
    freeShipQuantity: number;
    wholesale: Wholesale
    leadTime: LeadTime[];
  }[];
}

export interface IResProductCategorySpec {
  message: string;
  data: IProductCategorySpec[]
}
export interface IProductCategorySpec {
  attriNames: string;
  attriValues: string[];
}

export interface IResProductCategory {
  message: string;
  data: IProductCategory[]
}
export interface IProductCategory {
  productCategoryIds: string;
  productCategoryNames: string;
  productCategoryIconsUrl: string;
}

export interface IResProductMainCategory {
  message: string;
  data: IProductMainCategory[]
}
export interface IProductMainCategory {
  productMCategoryIds: string;
  productMCategoryNames: string;
  productMCategoryIconsUrl: string;
}

interface ICreateProductCategory {
  productCategoryNames: string;
  productCategoryImagesUrl: string;
  productCategoryRecommend: boolean;
  productCategoryIconsUrl: string;
  productCategorySpec: ProductCategorySpec[];
}

interface ICreateProductCategoryLevel {
  productCategoryIds: string;
  productCategoryNames: string;
  productCategoryImagesUrl: string;
  productCategoryRecommend: boolean;
  productCategoryIconsUrl: string;
  productCategorySpec: ProductCategorySpec[];
}

export interface IResPaymentMethodConsole {
  message: string;
  data: IPaymentMethod[]
}
export interface IPaymentMethod {
  paymentMethodType: string;
  paymentMethodTypeAttr: IPaymentMethodTypeAttr[];
}
interface IPaymentMethodTypeAttr {
  paymentMethodIconUrl: string;
  paymentMethodNames: string;
}

interface ICreatePaymentMethod {
  paymentMethodNames: string;
  paymentMethodType: string;
  paymentMethodIconsUrl: string;
}

interface ICreateRfqScore {
  rfqSectionsNames: string;
  rfqScore: number;
}

interface ICreateShippingMethod {
  shippingMethodPostcode: number;
  shippingMethodNames: string;
  shippingMethodIconsUrl: string;
}

export interface IResShippingMethodConsole {
  messages: string;
  data: IShippingMethodConsole[]
}
export interface IShippingMethodConsole {
  shippingMethodIds: string;
  shippingMethodNames: string;
  shippingMethodIconsUrl: string;
}

export interface IResBannerConsole {
  messages: string;
  data: IBannerConsole[]
}
export interface IBannerConsole {
  bannerSortIndex: number;
  bannerLinksUrl: string;
  bannerTitle: string;
  bannerImagesUrl: string;
}

interface ICreateVideo {
  videosUrl: string;
  videosTitle: string;
  videosDescription: string;
}
