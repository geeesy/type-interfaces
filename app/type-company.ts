import { IPaymentMethod, IShippingZone } from './type-console'

/**
 * STUB: Version 4.x
 */

export interface OfficeHour {
  day: string;
  times: string[];
}

export interface IAddress {
  addrNames: string;
  addrFull: string;
  addrNumber: string;
  province: string;
  amphoe: string;
  tambon: string;
  postcode: string;
  phones: string[];
  mobiles: string[];
  fax: string[];
  email: string;
  country: string;
  lat: string;
  lng: string;
  officeHour: OfficeHour[];
}

export interface ISocial {
  line: string;
  facebook: string;
}

export interface ICompanyTaxBranch {
  id: string;
  name: string;
  address: string;
}

export interface ICompanyTaxInfo {
  taxNo: string;
  isHq: boolean;
  branch: ICompanyTaxBranch;
}

export interface IMapLocation {
  pinIconUrl: string;
  lat: string;
  lng: string;
  location: string;
}

export interface ICompanyContactInfo {
  companyName: string;
  companyPhone: string[];
  companyFax?: string[];
  companyWebsite?: string[];
  companyEmail: string[];
  companySocial?: ISocial;
  contactAddress: IAddress;
  billingAddress?: IAddress;
  shippingAddress?: IAddress;
  companyNote?: string;
  companyRegisNo: string;
  companyTaxInfo?: ICompanyTaxInfo;
  categoryId: string
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
  companyAge: number;
  leadTime: string[];
  shippingDuration: string[];
  employee: string[];
  companyCapital: number;
  businessSizes: string[]
  businessTypes: string[]
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
  companySecondaryColor: string
  companyBannersUrl: string[];
}

export interface ICompanySetting {
  paymentsMethod: IPaymentMethod[];
  shippingsZone: IShippingZone[];
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
  isVerified: boolean
}

export interface IFactory {
  factoryAddress: IAddress;
  factoryAreaUnit: string;
  factoryArea: string;
  factoryImagesUrl: string[];
  factoryCapacity: string;
  factoryCapacityUnit: string;
}

export interface ICompanyIndex {
  tags: string[]
  keywords: string[]
  isVerified: boolean
  rating: number
  score: number
  isActive: boolean
  isRecommend: boolean
  isHighlight: boolean
  impFactor: number
}

export interface ICompany {
  companyId: string
  companyName: string;
  companyCode: string;
  companyContact: ICompanyContactInfo
  companyContactPerson: IContactPerson
  companyOverview: string;
  companyDescription: string;
  mainProducts: string[];
  companyLocation: IMapLocation
  companyBoard: ICompanyBoard
  companyMetric: ICompanyMetric
  companyBadge: ICompanyBadge
  companyAsset: ICompanyAsset
  companySetting: ICompanySetting
  companyDocument: IDocument
  companyImage: IImageGroup
  companyCertificate: ICertificate
  companyRegisterDate: string
  factory: IFactory
  index: ICompanyIndex
}

export interface IPage {
  title: string;
  content: string;
}

export interface IPortfolio {
  customPages: IPage[]
}
