import { GappBiz, GappSetting } from './index';
import {IImage, IPersonContactInfo} from './type-apps';
import {
  ISalePageComponent,
  ITimePeriod,
  TSalepageType
} from './type-salepage';
import {SaleChannelSubType} from "./enum-const";

export type TTypeCampaignAff =
  | 'SALEPAGE'
  | 'LEADPAGE'
  | 'CONTENTPAGE'
  | 'COUPON_CODE'
  | 'POST_BLOG'
  | 'GAPP_MARKET';

export type TTypeStatusOnCampaignAff = 'Ended' | 'Eligible' | 'Paused'


export type TTypeCommissionStatusAff = 'APPROVE' | 'REJECT' | 'PENDING';

export type TTypeConfigCampaignAff =
  | 'BY_NOT_CALCULATE_COMMISSION'
  | 'BY_PERCENTAGE_OF_SALES'
  | 'BY_ORDERS'
  | 'BY_PRODUCTS_SOLD'
  | 'BY_RESPONSES'
  | 'BY_VISITORS';

export enum configCampaignTypeAff {
  BY_NOT_CALCULATE_COMMISSION = 'ไม่คำนวณค่าคอมมิชชั่น',
  BY_PERCENTAGE_OF_SALES = 'เปอร์เซ็นของยอดขายสินค้า',
  BY_ORDERS = 'ตามจำนวนออเดอร์',
  BY_PRODUCTS_SOLD = 'ตามจำนวนสินค้าที่ขายได้',
  BY_RESPONSES = 'ยอดการตอบกลับ (Lead Page)',
  BY_VISITORS = 'ตามยอดวิวเข้าชม'
}

// ANCHOR: Campaign Type (Type 1)
export interface ICouponCodeAttrAff {
  couponCode: string;
}

// ANCHOR: Campaign Type (Type 2)
export interface ISalepageAttrAff {
  salepageId: string;
  title: string;
  salepageType: TSalepageType;
  timePeriod: ITimePeriod;
  salePageComponent: ISalePageComponent;
  shippingAvailableData: GappSetting.ShippingMethod[];
  paymentAvailableData: GappSetting.PaymentMethod[];
  isActive: boolean;
  hasNoShipment: boolean;
  createdAt: string;
  companyMarketLogoUrl: string;
  companyMarketName: string;
  companyName: string;
  ownerId: string;
  accountId: string;
  shortSalepageId: string;
}

// ANCHOR: Campaign Type (Type 3)
export interface IPostBlogAttrAff {
  postBlogId: string;
}

// ANCHOR: Campaign Type (Type 4)
export interface IMarketAttrAff {
  marketId: string;
}

// ANCHOR: Campaign Type (Type 4)
export interface IUrlAttrAff {
  url: string;
}

// ANCHOR: Campaign Config (Type 1)
export interface ICampaignConfigByNotCalculateCommissionAff {
  caption: string;
}

// ANCHOR: Campaign Config (Type 2)
export interface ICostPercentageByStepAff {
  percentage: number;
  minCost: number;
}
export interface ICampaignConfigByPercentageOfSalesAff {
  caption: string;
  showStepCalculate: boolean;
  minCost: number; // showStep: true ==> 0
  calculateCycle: string; // showStep: true ==> ''
  costs: ICostPercentageByStepAff[];
}

// ANCHOR: Campaign Config (Type 3)
export interface ICostOrderByStepAff {
  minOrder: number;
  minCost: number;
}
export interface ICampaignConfigByOrdersAff {
  caption: string;
  showStepCalculate: boolean;
  minCost: number; // showStep: true ==> 0
  showMinOrder: boolean;
  minOrder: number;
  calculateCycle: string; // showStep: true ==> ''
  costs: ICostOrderByStepAff[];
}

// ANCHOR: Campaign Config (Type 4)
export interface ICostQtyByStepAff {
  minQty: number;
  minCost: number;
}
export interface ICampaignConfigByProductsSoldAff {
  caption: string;
  showStepCalculate: boolean;
  minCost: number; // showStep: true ==> 0
  showMinQty: boolean;
  minQty: number;
  calculateCycle: string; // showStep: true ==> ''
  costs: ICostQtyByStepAff[];
}

// ANCHOR: Campaign Config (Type 5)
export interface ICostReplyByStepAff {
  minReply: number;
  minCost: number;
}
export interface ICampaignConfigByResponsesAff {
  caption: string;
  showStepCalculate: boolean;
  minReply: number; // showStep: true ==> ''
  calculateCycle: string; // showStep: true ==> ''
  costs: ICostReplyByStepAff[];
}

// ANCHOR: Campaign Config (Type 6)
export interface ICampaignConfigByVisitorsAff {
  caption: string;
  minView: number;
  minCost: number;
}

// ANCHOR: CAMPAIGN | Entity (1/5)
export interface ICampaignDataImmuAff {
  campaignId: string;
}

// ANCHOR: CAMPAIGN | Entity (2/5)
export interface ICampaignDateTypeAff {
  campaignType: TTypeCampaignAff;
}

// ANCHOR: CAMPAIGN | Entity (3/5)
export interface ICampaignDataAff {
  campaignName: string;
  campaignAttr: ISalepageAttrAff | ICouponCodeAttrAff | IPostBlogAttrAff | IMarketAttrAff | IUrlAttrAff;
  configType: TTypeConfigCampaignAff;
  campaignDescription: string;
  campaignCoverUrl: string;
  campaignImagesUrl: IImage[];
  isActive: boolean;
  timePeriod: ITimePeriod;
  partners: GappBiz.Partner[];
  hasArchived: boolean;
  statusOnCampaign: TTypeStatusOnCampaignAff
  companyName: string;
  companyEmail: string;
}

// ANCHOR: CAMPAIGN | Entity (4/5)
export interface ICampaignConfigAttrAff {
  configAttr:
    | ICampaignConfigByNotCalculateCommissionAff
    | ICampaignConfigByPercentageOfSalesAff
    | ICampaignConfigByOrdersAff
    | ICampaignConfigByProductsSoldAff
    | ICampaignConfigByResponsesAff
    | ICampaignConfigByVisitorsAff
}

// ANCHOR: CAMPAIGN | Entity (5/5)
export interface ICampaignCountAff {
  viewCount: 0,
  totalSaleAmount: 0,
  conversionCount: 0,
  partnerCount: 0
}

export interface IConversionDataImmuAff {
  conversionId: string;
}

// ANCHOR: PARTNER | Entity (1/3)
export interface IPartnerDataImmuAff {
  partnerId: string;
}

// ANCHOR: PARTNER | Entity (2/3)
export interface IPartnerDataAff {
  partnerContact: IPersonContactInfo;
  partnerFirstName: string;
  partnerLastName: string;
  partnerEmail: string;
  link: string;
  oldShortenLink: string;
  shortenLink: string;
  shortenId: string;
  shortSalepageId: string;
  linkReport: string;
  isCommission: boolean;
  totalSaleAmount: number;
  totalCommission: number;
  hasArchived: boolean;
}

// ANCHOR: PARTNER | Entity (3/3)
export interface IDBPartnerAff {
  latestCampaignById: string;
  latestCampaignByName: string;
}

// ANCHOR: LISTPARTNER | Entity (2/2)
export interface IListPartnerDataAff {
  partnerFirstName: string;
  partnerLastName: string;
  partnerFullName: string;
  partnerImageUrl: string;
  partnerEmail: string;
  link: string;
  shortenLink: string;
  linkReport: string;
  isCommission: boolean;
  totalSaleAmount: number;
  totalCommission: number;
  hasArchived: boolean;
}

// ANCHOR: COMMISSION | Entity (1/1)
export interface IPartnerCommissionDataAff {
  orderId:string;
  salepageId:string;
  docNoConversion: string;
  status: TTypeCommissionStatusAff;
  totalSaleAmount: number;
  partnerFullName: string;
  partnerImageUrl: string;
  docNo: string;
  totalCommission: number;
  channel: SaleChannelSubType;
  channelName: string;
  channelImageUrl: string;
  commissionType: string;
}
