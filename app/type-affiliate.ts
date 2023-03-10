import { IImage } from './type-apps';
import {
  ISalePageComponent,
  ITimePeriod,
  TSalepageType
} from './type-salepage';
import {
  IDBOrderActivityLog,
  IDBOrderDataImmu,
  IDBOrderDataOnCancelImmu,
  IDBOrderEntity,
  IDBOrderEntityImmu,
  IDBOrderLinkImmu,
  IDBOrderSellerDataImmu,
  IDBOrderStatus,
  IOrderCustomerData,
  IOrderCustomerDataImmu,
  IOrderData,
  IOrderDataOnComplete,
  IOrderEntity,
  IOrderLinkDataOnConfirm,
  IOrderLinkImmuDataOnConfirm
} from './type-order';
import { IDBLogCreate, IDBLogUpdate } from './type-api';
import { GappBiz, GappSetting } from './index';

export type TTypeCampaign =
  | 'SALEPAGE'
  | 'LEADPAGE'
  | 'CONTENTPAGE'
  | 'COUPON_CODE'
  | 'POST_BLOG'
  | 'GAPP_MARKET';

export type TTypeConfigCampaign =
  | 'BY_NOT_CALCULATE_COMMISSION'
  | 'BY_PERCENTAGE_OF_SALES'
  | 'BY_ORDERS'
  | 'BY_PRODUCTS_SOLD'
  | 'BY_RESPONSES'
  | 'BY_VISITORS';

export enum configCampaignType {
  BY_NOT_CALCULATE_COMMISSION = 'ไม่คำนวณค่าคอมมิชชั่น',
  BY_PERCENTAGE_OF_SALES = 'เปอร์เซ็นของยอดขายสินค้า',
  BY_ORDERS = 'ตามจำนวนออเดอร์',
  BY_PRODUCTS_SOLD = 'ตามจำนวนสินค้าที่ขายได้',
  BY_RESPONSES = 'ยอดการตอบกลับ (Lead Page)',
  BY_VISITORS = 'ตามยอดวิวเข้าชม'
}

// ANCHOR: Campaign Type (Type 1)
export interface ICouponCodeAttr {
  couponCode: string;
}

// ANCHOR: Campaign Type (Type 2)
export interface ISalepageAttr {
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
  businessId: string;
  compId: string;
}

// ANCHOR: Campaign Type (Type 3)
export interface IPostBlogAttr {
  postBlogId: string;
}

// ANCHOR: Campaign Type (Type 4)
export interface IMarketAttr {
  marketId: string;
}

// ANCHOR: Campaign Config (Type 1)
export interface ICampaignConfigByNotCalculateCommission {
  caption: string;
}

// ANCHOR: Campaign Config (Type 2)
export interface ICostPercentageByStep {
  percentage: number;
  minCost: number;
}
export interface ICampaignConfigByPercentageOfSales {
  caption: string;
  showStepCalculate: boolean;
  minCost: number; // showStep: true ==> 0
  calculateCycle: string; // showStep: true ==> ''
  costs: ICostPercentageByStep[];
}

// ANCHOR: Campaign Config (Type 3)
export interface ICostOrderByStep {
  minOrder: number;
  minCost: number;
}
export interface ICampaignConfigByOrders {
  caption: string;
  showStepCalculate: boolean;
  minCost: number; // showStep: true ==> 0
  showMinOrder: boolean;
  minOrder: number;
  calculateCycle: string; // showStep: true ==> ''
  costs: ICostOrderByStep[];
}

// ANCHOR: Campaign Config (Type 4)
export interface ICostQtyByStep {
  minQty: number;
  minCost: number;
}
export interface ICampaignConfigByProductsSold {
  caption: string;
  showStepCalculate: boolean;
  minCost: number; // showStep: true ==> 0
  showMinQty: boolean;
  minQty: number;
  calculateCycle: string; // showStep: true ==> ''
  costs: ICostQtyByStep[];
}

// ANCHOR: Campaign Config (Type 5)
export interface ICostReplyByStep {
  minReply: number;
  minCost: number;
}
export interface ICampaignConfigByResponses {
  caption: string;
  showStepCalculate: boolean;
  minReply: number; // showStep: true ==> ''
  calculateCycle: string; // showStep: true ==> ''
  costs: ICostReplyByStep[];
}

// ANCHOR: Campaign Config (Type 6)
export interface ICampaignConfigByVisitors {
  caption: string;
  minView: number;
  minCost: number;
}

// ANCHOR: CAMPAIGN | Entity (1/4)
export interface ICampaignDataImmu {
  campaignId: string;
}

// ANCHOR: CAMPAIGN | Entity (2/4)
export interface ICampaignDateType {
  campaignType: TTypeCampaign;
}

// ANCHOR: CAMPAIGN | Entity (3/4)
export interface ICampaignData {
  campaignName: string;
  campaignAttr: ISalepageAttr | ICouponCodeAttr | IPostBlogAttr | IMarketAttr;
  configType: TTypeConfigCampaign;
  campaignDescription: string;
  campaignCoverUrl: string;
  campaignImagesUrl: IImage[];
  isActive: boolean;
  timePeriod: ITimePeriod;
  partners: GappBiz.Partner[];
}

// ANCHOR: CAMPAIGN | Entity (4/4)
export interface ICampaignConfigAttr {
  configAttr:
    | ICampaignConfigByNotCalculateCommission
    | ICampaignConfigByPercentageOfSales
    | ICampaignConfigByOrders
    | ICampaignConfigByProductsSold
    | ICampaignConfigByResponses
    | ICampaignConfigByVisitors;
}

// ANCHOR: PARTNER | Entity (1/2)
export interface IPartnerDataImmu {
  partnerId: string;
}

// ANCHOR: PARTNER | Entity (2/2)
export interface IPartnerData {
  partnerFirstName: string;
  partnerLastName: string;
  partnerFullName: string;
  partnerImageUrl: string;
  link: string;
  isCommission: boolean;
}

// ANCHOR: COMMISSION | Entity (1/1)
export interface IPartnerCommissionData {
  docNoCS: string;
  status: string;
  totalSaleAmount: number;
  partnerFullName: string;
  docNo: string;
  totalCommission: number;
  channel: string;
  commissionType: string;
}
