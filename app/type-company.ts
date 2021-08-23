import { ICompanyUserData, TApproverFlow, TBusinessSize, TBusinessTypes } from './type-business'
import { IPaymentMethod, IShippingZone } from './type-console'

import { IPersonContactInfo } from './type-apps'

/* #region COMPANY */
export interface IApiCompanyParams {
  businessId: string
  compId: string
  identityId: string
  companyCode: string
}

export interface IApiSupplierParams {
  businessId: string
  compId: string
  identityId: string
  supplierId: string
}

export interface IPublishParams {
  businessId: string
  compId: string
  companyCode: string
  categoryId: string
  supplierId: string
  identityId: string
}

export interface IApiCompanyCreateUserParams {
  businessId: string
  compId: string
  identityId: string
  createdUserIdentityId: string
}

export interface IDBCompanyActivityLog {
  createdAt: string
  updatedAt: string
  createdBy: string
  updatedBy: string
}

export interface OfficeHour {
  day: string;
  times: [string, string];
}

export interface IAddress {
  addrName: string;
  addrFull: string;
  addrNumber: string;
  province: string;
  amphoe: string;
  tambon: string;
  postcode: string;
  phonesExt?: string[]
  phones: string[];
  mobiles: string[];
  faxes?: string[];
  emails: string[];
  country: string;
  lat?: string;
  lng?: string;
  officeHours?: OfficeHour[];
}

export interface ISocial {
  line: string;
  facebook: string;
}

export interface ICompanyTaxBranch {
  id: string;
  name: string;
  address: string;
  taxNo: string;
}

export interface ICompanyTaxInfo {
  taxNo: string;
  isHq: boolean;
  branch: ICompanyTaxBranch[];
}

export interface IMapLocation {
  pinIconUrl: string;
  mapImageUrl: string
  lat: string;
  lng: string;
  location: string;
}

export interface ICompanyContactInfo {
  companyMarketName: string
  companyName: string
  companyPhones: string[];
  companyWebsite: string;
  companyEmails: string[];
  companySocial: ISocial;
  contactAddress: IAddress;
  billingAddress?: IAddress;
  shippingAddress?: IAddress;
  companyNote?: string;
  companyRegisNo: string;
  companyTaxInfo?: ICompanyTaxInfo;
}

export interface ICompanyBoard {
  fullName: string;
  emails: string[];
  mobiles: string[];
  positions: string[];
  avatarImageUrl: string
}

export interface IPeriodTime {
  day: [number, number]
}

export interface ICompanyMetric {
  age: number;
  leadTime: IPeriodTime;
  shippingDuration: IPeriodTime;
  employee: string[];
  capital: number;
  businessSize: TBusinessSize;
  businessTypes: TBusinessTypes[];
}

export interface ICompanyBadge {
  haveWarranty: boolean;
  haveSample: boolean;
  countryCode: string;
}

export interface ICompanyAsset {
  companyVideosUrl: string[];
  companyPrimaryColor: string;
  companySecondaryColor: string;
  companyBannersUrl: string[];
  companyCoverUrl: string;
}

export interface ICompanySetting {
  /**
   * Choose from CORE SETTING
   */
  paymentMethods: IPaymentMethod[];
  shippingZones: IShippingZone[];
  creditTerms: string[];
}

export interface IImage {
  url: string;
  title: string;
  caption: string;
  isVerified: boolean;
}

export interface IImageGroup {
  type: string;
  title: string;
  images: IImage[];
}

export type TDocumentType = 'ใบทะเบียนภาษีมูลค่าเพิ่ม' | 'ใบจดทะเบียนบริษัท' | 'อื่นๆ'
export type TCertificateType = 'ใบรับรองการผลิด' | 'ใบรับรองคุณภาพ' | 'อื่นๆ'

export interface IDocument {
  filesUrl: string[];
  imagesUrl: string[]
  type: TDocumentType;
  title: string;
  expiryDate: number;
  isPrivate: boolean;
  isVerified: boolean;
}

export interface IDocumentImmu {
  documentId: string
}

export interface IDBDocument extends IDocument, IDocumentImmu {
  createdAt: string
  updatedAt: string
}

export interface ICertificate {
  filesUrl: string[];
  imagesUrl: string[]
  type: TCertificateType;
  title: string;
  expiryDate: number;
  issuedDate: number;
  issuer: string;
  certificateName: string;
  isPrivate: boolean;
  isVerified: boolean;
}

export interface ICertificateImmu {
  certificateId: string
}

export interface IDBCertificate extends ICertificate, ICertificateImmu {
  createdAt: string
  updatedAt: string
}

export interface IFactory {
  address: IAddress;
  areaUnit: string;
  area: string;
  imagesUrl: string[];
  capacity: string;
  capacityUnit: string;
}

export interface ICustomPage {
  title: string;
  content: string;
}

/* #endregion */

// REVIEW: COMPANY | GAPP
// NOTE: Init on company create (Update by GAPP only)
export interface ICompanyByGapp {
  coins: number
  points: number
  impFactor: number;
}

// REVIEW: COMPANY | Entity (1/5)
// NOTE: Init on company create, updated in G-BIZ
export interface IDBCompanyEntity {
  haveCompletedInfo: boolean //* === false on Create (changed only once)
  haveDefaultReceiver: boolean //* === false on Create
}

// REVIEW: COMPANY | Entity (2/5) --> SUPPLIER
export interface IDBCompanySupplierEntity {
  havePortfolio: boolean; // * to check port init , false on Create (changed only once)
  onMarket: boolean; // * false on Create
  onHub: boolean; // * false on Create
}

// REVIEW: COMPANY | Entity (3/5)
export interface ICompanyEntityImmu {
  companyCode: string; // ! use on Cognito with tenantId
  businessId: string // * <== tenantId (Cognito)
}

// REVIEW: COMPANY | Entity (4/5)
// NOTE: Can not update on SUPPLIER
export interface ICompanyPublicEntityImmu {
  compId: string; // * gen on client
  supplierId: string // * init on company creation
}

// REVIEW: COMPANY | Entity (5/5)
// NOTE: Can not update on SUPPLIER
export interface ICompanyPublicEntity {
  companyName: string; // TODO: update on cognito?

  companyCategoryId: string;
  companyCategoryCustomName?: string; // * id = OTHER000

  // CI
  companyFullLogoUrl: string
  companyLogoUrl: string; // * Scale down {companyFullLogoUrl}

  // Contact
  contact: ICompanyContactInfo;

  // Setting
  setting: ICompanySetting;

}

// REVIEW: COMPANY | Private Entity
// NOTE: Not show on public
export interface ICompanyPrivateEntity {
  companyStampUrl: string
  companyTypes: TBusinessTypes[]
  companySize: TBusinessSize
  companyInterests: string[]
  useApprovalWorkflow: TApproverFlow
}

// REVIEW: SUPPLIER | GAPP
export interface ISupplierByGapp {
  isVerified: boolean;
  rating: number;
  score: number;
  isRecommend: boolean;
  isHighlight: boolean;
  impFactor: number;
}

// REVIEW: SUPPLIER | Detail
// NOTE: Init on company creation
export interface IPortfolio {

  companyAsset: ICompanyAsset;

  overview: string;
  description: string;
  registerDate: string;

  // Contact Persons
  contactPerson: ICompanyUserData[];

  // Main Products
  mainProducts: string[];

  // Location
  location: IMapLocation;

  // Company Board
  board: ICompanyBoard[];

  // Factory
  factory: IFactory;

  // Metric
  companyMetric: ICompanyMetric;

  // Badge
  companyBadge: ICompanyBadge;

  // INDEX
  tags: string[];
  keywords: string[];

  // ----------------------------

  // Image
  companyImages: IImageGroup[];

  // Document
  companyDocuments: IDBDocument[];
  companyCertificates: IDBCertificate[];

  // Pages
  customPages: ICustomPage[];

  // Display
  display: ISupplierDisplay

}

export interface ISupplierDisplay {
  showFactory: boolean
  showDocuments: boolean
  showCertificates: boolean

}

export interface IPortfolioImmu {
  portId: string
}

// ANCHOR: SALES REP
export interface ICompanyCreateSalesRep extends IPersonContactInfo {
  salesRepPersonalCode: string
  compId: string
  positions: string[]
  isKeySalesRep: boolean
  avatarImageUrl: string
  salesRepAka: string
  adminPersonalCode: string // * filter on each Admin View
  staffPersonalCode: string // * filter on each Staff View
}

export interface ICompanySalesRep extends ICompanyCreateSalesRep {
  salesRepId: string
  createdAt: string
  updatedAt: string
}

// STUB: SETTING | PRODUCT
export interface ISettingCreatePriceGroup {
  title: string
  discountPercent: number
  discountAmount: number
}
export interface ISettingPriceGroup extends ISettingCreatePriceGroup, IDBCompanyActivityLog {
  priceGroupId: string
}
export interface ISettingCreatePriceList {
  title: string
}
export interface ISettingPriceList extends ISettingCreatePriceList, IDBCompanyActivityLog {
  priceListId: string
}

// STUB: SETTING | DOC
// NOTE: Initial with default value set on server when create company
// ! initialize on server
export type TYearFormat = 'YYYY-MM' | 'YYYY' | 'none'
export type TSeparator = '/' | '-' | 'none'
export interface IDocSeqNoFormat { //! only 4 digit on seqNo
  prefix: string // -> init === enum DocPrefixFormat
  suffix: string // -> init === ''
  yearFormat: TYearFormat // -> init === 'none'
  separator: TSeparator // -> init === 'none'
}
export interface ISettingDocAttributes {
  seqNoFormat: IDocSeqNoFormat
  header: string
  color: string
}
export interface ISettingDoc extends IDBCompanyActivityLog {
  inquiry: ISettingDocAttributes
  rfq: ISettingDocAttributes
  quotation: ISettingDocAttributes
  po: ISettingDocAttributes
  so: ISettingDocAttributes
  billingNote: ISettingDocAttributes
  receipt: ISettingDocAttributes
  invoice: ISettingDocAttributes
  taxInvoice: ISettingDocAttributes
}
