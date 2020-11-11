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

interface IMapLocation {
  pinImageUrl: string;
  lat: string;
  lng: string;
  locations: string[];
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
  position: string;
}

export interface IContactPerson {
  name: string;
  emails: string[];
  mobiles: string[];
  positions: string[];
  isKeyPerson: boolean;
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
  warranty: boolean;
  haveSample: boolean;
  country: string;
}

export interface ICompanyAsset {
  companyVideosUrl: string[];
  companyLogosUrl: string;
  companyColors: string;
  companyBannersUrl: string[];
}

export interface ICompanySetting {
  paymentsMethod: IPaymentMethod[];
  shippingsZone: IShippingZone[];
  creditsTerm: string[];
}

export interface IDocument {
  url: string;
  type: string;
  title: string;
  expire: string;
  private: boolean;
  verified: boolean;
}

interface ImageAttr {
  url: string;
  captions: string;
}

export interface IImage {
  type: string;
  title: string;
  images: ImageAttr[];
  verified: boolean;
}

export interface ICertificate {
  url: string;
  type: string;
  title: string;
  expire: string;
  private: boolean;
  issued: string;
  issuer: string;
  cerNames: string;
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
  companyImage: IImage
  companyCertificate: ICertificate
  companyRegisterDate: string
  factory: IFactory
  index: ICompanyIndex
}

export interface IPage {
  title: string;
  content: string;
}

export interface ICompPortfolio {
  customPages: IPage[]
}
