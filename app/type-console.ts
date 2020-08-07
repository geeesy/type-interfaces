interface CompanyInfoSup {
  supplierName: string;
  supplierCompanyCode: string;
  supplierCompanyEmail: string;
  supplierCompanyWebsite: string;
  supplierCompanyRegisterId: string;
  companyOverview: string;
  companyDescription: string;
  mainProduct: string[];
}
interface CompanyInfoDis {
  distributorName: string;
  distributorCompanyCode: string;
  distributorCompanyEmail: string;
  distributorCompanyWebsite: string;
  distributorCompanyRegisterId: string;
  companyOverview: string;
  companyDescription: string;
  mainProduct: string[];
}

interface CompanyMapLocation {
  pinImageUrl: string;
  lat: string;
  lng: string;
  location: string[];
}

interface CompanyBoard {
  ownerName: string;
  ownerEmail: string;
  ownerMobile: string;
  ownerPosition: string;
}

interface AddressSupplier {
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

interface AddressDistributor {
  distributorAddrName: string;
  distributorAddrFull: string;
  distributorAddrNumber: string;
  distributorAddrProvince: string;
  distributorAddrAmphoe: string;
  distributorAddrTambon: string;
  distributorAddrPostcode: string;
  distributorAddrCountry: string;
  distributorAddrLocationLat: number;
  distributorAddrLocationLng: number;
  distributorAddrPhone: string;
  distributorAddrMobile: string;
  distributorAddrFax: string;
  distributorAddrEmail: string;
  distributorAddrType: string;
  officeHour: OfficeHour[];
}

interface OfficeHour {
  day: string;
  time: string[];
}

interface Address {
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
  paymentMethod: IPaymentMethod[];
  shippingZone: ShippingZone[];
  creditTerm: string[];
}

interface ShippingZone {
  zoneName: string;
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
  supplierVideoUrl: string[];
  supplierLogoUrl: string;
  supplierColor: string;
  supplierBannersUrl: string[];
}
interface CompanyAssetsDis {
  distributorVideoUrl: string[];
  distributorLogoUrl: string;
  distributorColor: string;
  distributorBannersUrl: string[];
}

interface ContactPerson {
  contactName: string;
  contactEmail: string;
  contactMobile: string;
  contactPosition: string;
  contactKeyPerson: boolean;
}

interface Image {
  type: string;
  title: string;
  image: ImageAttr[];
  verified: boolean;
}
interface ImageAttr {
  url: string;
  caption: string;
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
  cerName: string;
}

interface FactoryAddress {
  name: string;
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
  factoryImageUrl: string[];
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
  productPrice: number;
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
  contactPerson: ContactPerson[];
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
  message: string;
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

export interface IResMainCategoryConsole {
  message: string;
  data: IMainCategoryConsole[]
}
export interface IMainCategoryConsole {
  categoryMainId: string;
  categoryMainName: string;
  categoryMainIconUrl: string;
  categoryMainImageUrl: string;
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
}

interface ICreateMainCategory {
  categoryName: string;
  categoryImageUrl: string;
  categoryRecommend: boolean;
  categoryIconUrl: string;
  impFactor: number;
  categoryDescription: string;
  categoryBanners: string[];
}

interface ICreateCategoryLevel {
  categoryId: string;
  categoryName: string;
  categoryImageUrl: string;
  categoryRecommend: boolean;
  categoryIconUrl: string;
  impFactor: number;
  categoryBanners: string[];
}

interface ICreateProduct {
  supplierId: string;
  distributorId: string;
  productImageUrl: string[];
  productName: string;
  costPrice: number;
  productBuyPrice: number;
  productPrice: number;
  productSku: string;
  productUnit: string;
  productWholesales: ProductWholesales[];
  productSource: string;
  productCategoryId: string;
  productCategoryCustomName: string;
  productCurrencyCode: string;
  productBarcode: string;
  productOrigin: string;
  productChannel: string[];
  productImageArrayUrl: string[];
  productIsActive: boolean;
  initialStock: number;
  warehouseId: string;
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
  supplierId: string;
  distributorId: string;
  productGroupImageUrl: string[];
  productGroupName: string;
  productSource: string;
  productCategoryId: string;
  productCategoryCustomName: string;
  productCurrencyCode: string;
  productOrigin: string;
  productChannel: string[];
  productIsActive: boolean;
  warehouseId: string;
  productBrand: string;
  description: string;
  productKeyword: string[];
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
  productVideoCoverUrl: string;
  products: {
    productName: string;
    costPrice: number;
    productBuyPrice: number;
    productPrice: number;
    productSku: string;
    productUnit: string;
    productWholesales: ProductWholesales[];
    productBarcode: string;
    productImageArrayUrl: string[];
    productIsActive: boolean;
    initialStock: number;
    productPackage: ProductPackage
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
  attriName: string;
  attriValue: string[];
}

export interface IResProductCategory {
  message: string;
  data: IProductCategory[]
}
export interface IProductCategory {
  productCategoryId: string;
  productCategoryName: string;
  productCategoryIconUrl: string;
}

export interface IResProductMainCategory {
  message: string;
  data: IProductMainCategory[]
}
export interface IProductMainCategory {
  productMCategoryId: string;
  productMCategoryName: string;
  productMCategoryIconUrl: string;
}

interface ICreateProductCategory {
  productCategoryName: string;
  productCategoryImageUrl: string;
  productCategoryRecommend: boolean;
  productCategoryIconUrl: string;
  productCategorySpec: ProductCategorySpec[];
}

interface ICreateProductCategoryLevel {
  productCategoryId: string;
  productCategoryName: string;
  productCategoryImageUrl: string;
  productCategoryRecommend: boolean;
  productCategoryIconUrl: string;
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
  paymentMethodName: string;
}

interface ICreatePaymentMethod {
  paymentMethodName: string;
  paymentMethodType: string;
  paymentMethodIconUrl: string;
}

interface ICreateRfqScore {
  rfqSectionName: string;
  rfqScore: number;
}

interface ICreateShippingMethod {
  shippingMethodPostcode: number;
  shippingMethodName: string;
  shippingMethodIconUrl: string;
}

export interface IResShippingMethodConsole {
  message: string;
  data: IShippingMethodConsole[]
}
export interface IShippingMethodConsole {
  shippingMethodId: string;
  shippingMethodName: string;
  shippingMethodIconUrl: string;
}

export interface IResBannerConsole {
  message: string;
  data: IBannerConsole[]
}
export interface IBannerConsole {
  bannerSortIndex: number;
  bannerLinkUrl: string;
  bannerTitle: string;
  bannerImageUrl: string;
}

interface ICreateVideo {
  videoUrl: string;
  videoTitle: string;
  videoDescription: string;
}
