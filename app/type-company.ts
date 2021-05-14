import { IPersonContactInfo } from './type-apps';
import { IBusinessCreateCompanyUser, IBusinessUserIdentity, TApproverFlow, TApproverRole, TBusinessSize, TBusinessType } from './type-business';
import { IPaymentMethod, IShippingZone } from './type-console';

/**
 * STUB: Version 5.x
 */
/* #region COMPANY */
export interface IApiCompanyParams {
  businessId: string
  compId: string
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
  companyName: string;
  companyPhones: string[];
  companyFaxes?: string[];
  companyWebsites?: string[];
  companyEmails: string[];
  companySocial?: ISocial;
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

export interface IContactPerson extends IPersonContactInfo {
  positions: string[];
  isKeyContact: boolean;
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
  businessSize: string[];
  businessType: string[];
}

export interface ICompanyBadge {
  haveWarranty: boolean;
  haveSample: boolean;
  countryCode: string;
}

export interface ICompanyAsset {
  companyVideosUrl: string[];
  companyLogoUrl: string;
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

export interface IDocument {
  url: string;
  type: string;
  title: string;
  expiryDate: number;
  isPrivate: boolean;
  isVerified: boolean;
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

export interface ICertificate {
  url: string;
  type: string;
  title: string;
  expiryDate: number;
  issuedDate: number;
  issuer: string;
  certificateName: string;
  isPrivate: boolean;
  isVerified: boolean;
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

/**
 * COMPANY
 */
// REVIEW: USER (COMPANY)
export interface ICompanyUserIdentity extends IBusinessUserIdentity, IBusinessCreateCompanyUser {
  contact: IContactPerson
  signatureUrl: string

}

// ANCHOR: COMPANY | Private Entity
export interface ICompanyPrivateEntity {
  companyStampUrl: string
  companyType: TBusinessType[]
  companySize: TBusinessSize
  companyInterests: string[]
  useApprovalWorkflow: TApproverFlow
}


// ANCHOR: COMPANY | Entity
export interface ICompanyEntity {
  companyName: string;
  companyCode: string; // ! immu & use on Cognito with tenantId
  compId: string; // * gen on client
  businessId: string // * <== tenantId (Cognito)

  companyCategoryId: string;
  companyCategoryCustomName?: string; // * id = OTHER000

  // CI
  companyAsset: ICompanyAsset;
  createdAt?: string // * on server

  // INDEX
  tags: string[];
  keywords: string[];
  isVerified: boolean; // ! core
  rating: number; // ! core
  score: number; // ! core
  isActive: boolean; // ! core
  isRecommend: boolean; // ! core
  isHighlight: boolean; // ! core
  impFactor: number; // ! core
}

export interface IDBCompanyEntity {
  haveCompletedInfo: boolean //* === false on Create
  haveDefaultReceiver: boolean //* === false on Create
}

// ANCHOR: COMPANY | Create
// NOTE: === bc -> Create Company
export interface ICompanyCreate extends ICompanyEntity {

}

// REVIEW: COMPANY
// NOTE: === g-biz -> Company Info (Update)
export interface ICompany extends ICompanyCreate {
  // Contact
  contact: ICompanyContactInfo;

  overview: string;
  description: string;
  registerDate: string;

  // Contact Persons
  contactPerson: IContactPerson[];

  // Main Products
  mainProducts: string[];

  // Location
  location: IMapLocation;

  // Company Board
  board: ICompanyBoard[];

  // Factory
  factory: IFactory;

  // Setting
  setting: ICompanySetting;

  // Metric
  companyMetric: ICompanyMetric;

  // Badge
  companyBadge: ICompanyBadge;

  havePortfolio: boolean; // * to check port init
  onMarket: boolean;
  supplierId?: string;
  updatedAt?: string
}

// REVIEW: SUPPLIER
// NOTE === g-biz -> Portfolio (Create)
export interface ICompanyPortfolio extends ICompany {
  // Image
  companyImages: IImageGroup[];

  // Document
  companyDocuments: IDocument[];
  companyCertificates: ICertificate[];

  // Pages
  customPages: ICustomPage[];

}

// REVIEW: SALES REP
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