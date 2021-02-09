import { IPaymentMethod, IShippingZone } from "./type-console";

/**
 * STUB: Version 4.x
 */

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
  isVerified: boolean;
  rating: number;
  score: number;
  isActive: boolean;
  isRecommend: boolean;
  isHighlight: boolean;
  impFactor: number;
}

/**
 * COMPANY
 */
export interface ICompany {
  // Company Information
  compId: string; // use in Gapp-bc
  name: string;
  code: string;
  overview: string;
  description: string;
  registerDate: string;

  // Contact
  contact: ICompanyContactInfo;

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

  companyAsset: ICompanyAsset;

  // Image
  companyImage: IImageGroup;

  // Document
  companyDocument: IDocument;
  companyCertificate: ICertificate;
}

export interface IPage {
  title: string;
  content: string;
}

export interface IPortfolio {
  customPages: IPage[];
}
