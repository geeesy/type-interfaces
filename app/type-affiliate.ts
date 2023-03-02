import { IImage } from './type-apps';
import { ITimePeriod } from './type-salepage';
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

export type TTypeCampaign =
  | 'SALEPAGE'
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

export interface ICampaignId {
  campaignId: string;
}

export interface ICampaignData {
  campaignName: string;
  campaignType: TTypeCampaign;
  campaignAttr: ISalepageAttr | ICouponCodeAttr | IPostBlogAttr | IMarketAttr;
  configType: TTypeConfigCampaign;
  campaignDescription: string;
  campaignCoverUrl: string;
  campaignImagesUrl: IImage[];
  isActive: boolean;
  timePeriod: ITimePeriod;
  partners: IPartnerData[];
}

export interface ICouponCodeAttr {
  couponCode: string;
}

export interface ISalepageAttr
  extends IDBOrderEntity,
    IDBOrderEntityImmu,
    IOrderEntity,
    IDBOrderSellerDataImmu,
    IOrderCustomerData,
    IOrderCustomerDataImmu,
    IDBOrderStatus,
    IOrderData,
    IDBOrderLinkImmu,
    IOrderLinkDataOnConfirm,
    IOrderDataOnComplete,
    IDBOrderDataImmu,
    IDBOrderActivityLog,
    IOrderLinkImmuDataOnConfirm,
    IDBOrderDataOnCancelImmu,
    IDBLogUpdate,
    IDBLogCreate {}

export interface IPostBlogAttr {
  postBlogId: string;
}

export interface IMarketAttr {
  marketId: string;
}

export interface IPartnerId {
  partnerId: string;
}

export interface IPartnerData extends IPartnerId {
  firstName: string;
  lastName: string;
  imageUrl: string;
  link: string;
  isCommission: boolean;
  totalCommission: number;
}
