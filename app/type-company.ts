import { IPaymentMethod, IShippingZone } from "./type-console";

/**
 * STUB: Version 5.x
 */
/* #region COMPANY */
export interface OfficeHour {
  day: string;
  times: string[];
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
  faxes: string[];
  emails: string[];
  country: string;
  lat: string;
  lng: string;
  officeHours: OfficeHour[];
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
  categoryId: string;
}

export interface ICompanyBoard {
  fullName: string;
  emails: string[];
  mobiles: string[];
  positions: string[];
}

export interface IContactPerson {
  fullName: string;
  emails: string[];
  mobiles: string[];
  positions: string[];
  isKeyContact: boolean;
}

export interface ICompanyMetric {
  age: number;
  leadTime: string[];
  shippingDuration: string[];
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
  expiryDate: string;
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
  expiryDate: string;
  issuedDate: string;
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

export interface ICompanyIndex {
  tags: string[];
  keywords: string[];
  havePortfolio: boolean; // * to check port init
  isVerified: boolean; // ! core
  rating: number; // ! core
  score: number; // ! core
  isActive: boolean; // ! core
  isRecommend: boolean; // ! core
  isHighlight: boolean; // ! core
  impFactor: number; // ! core
}
/* #endregion */

/**
 * COMPANY
 */
// ANCHOR: COMPANY | Entity
export interface ICompanyEntity {
  companyName: string;

  companyCategoryId?: string;

  // Contact
  contact: ICompanyContactInfo;

  // CI
  companyAsset: ICompanyAsset;

  overview: string;
  description: string;
  registerDate: string;

  // Contact Person
  contactPerson: IContactPerson;

  // Main Products
  mainProducts: string[];

  // Location
  location: IMapLocation;

  // Company Board
  board: ICompanyBoard;

  // Factory
  factory: IFactory;

  // Setting
  setting: ICompanySetting;

  // Metric
  companyMetric: ICompanyMetric;

  // Badge
  companyBadge: ICompanyBadge;

  // Index
  companyIndex: ICompanyIndex;

}

// ANCHOR: COMPANY | Create
// NOTE: === bc -> Create Company 
export interface ICompanyCreate extends ICompanyEntity {
  compId: string; // * gen on client
  businessId: string // * <== tenantId
  companyCode: string; // ! immu & use on Cognito with tenantId
}

// REVIEW: COMPANY
// NOTE: === g-biz -> Company Info (Update)
export interface ICompany extends ICompanyCreate {
  onMarket: boolean;
  supplierId?: string;
  createdAt: string
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

}

export interface IPage {
  title: string;
  content: string;
}

export interface IPortfolio {
  customPages: IPage[];
}
