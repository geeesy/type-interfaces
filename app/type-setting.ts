import {
  IDBPaymentMethod,
  IDBPaymentMethodImmu,
  IPaymentMethodEntity,
  IPaymentMethodEntityImmu,
  IUpdateMarketPaymentMethod
} from './type-payment';
import {
  IDBShippingMethod,
  IDBShippingMethodImmu,
  IShippingMethodEntity,
  IShippingMethodEntityImmu,
  IUpdateMarketShippingMethod
} from './type-shipping';
import { ISaleChannelCustomUTM, TOrderChannelUTM } from './type-order';
import { SaleChannelSubType, SaleChannelType } from './enum-const';
import {
  IFacebookData,
} from './type-facebook';
import {ILineData} from "./typ-line";

// ANCHOR: Sale Channel Attribute (Type Default) test
export interface ISaleChannelSubTypeDefault {
  caption: string;
  facebook: IFacebookData;
  line?: ILineData
  countUnread: number
}



// REVIEW: SALE CHANNEL
export interface IDBSaleChannelImmu {
  saleChannelId: string;
  hasApiConnected: boolean;
  isUnique: boolean;
  compId: string;
}

export interface IDBSaleChannel {
  isActive: boolean;
  hasArchived: boolean;
}

export interface ISaleChannelEntityImmu {
  saleChannelType: SaleChannelType; // ! check: use enum obj
  saleChannelSubType: SaleChannelSubType; // ! check: use enum obj
}

export interface ISaleChannelEntity {
  saleChannelIconUrl: string;
  saleChannelAliasName: string;
  saleChannelSourceUTM: TOrderChannelUTM;
  saleChannelCustomUTM: ISaleChannelCustomUTM;
  note: string;
  saleChannelAttributes: ISaleChannelSubTypeDefault;
}

export interface IUpdateShippingAndPaymentMethodOnMarket {
  compId: string;
  businessId: string;
  marketPaymentMethod: IUpdateMarketPaymentMethod[];
  marketShippingMethod: IUpdateMarketShippingMethod[];
}

export interface IPaymentData
  extends IPaymentMethodEntity,
    IPaymentMethodEntityImmu,
    IDBPaymentMethod,
    IDBPaymentMethodImmu {}

export interface IShipmentData
  extends IShippingMethodEntity,
    IDBShippingMethod,
    IDBShippingMethodImmu,
    IShippingMethodEntityImmu {}
export interface IListShipmentAndPaymentByCompany {
  shipmentData: IShipmentData[];
  paymentData: IPaymentData[];
}

// ANCHOR: USER NOTIFICATION SETTING (BY USER)

export interface ISettingNotifyOrderAttribute {
  onCreate: boolean;
  onConfirm: boolean;
  onSubmitPaymentWithSlip: boolean;
  onConfirmPaidWithSlip: boolean;
  onShipped: boolean;
  onCompleted: boolean;
  onCanceled: boolean;
}

export interface ISettingNotifySalepageAttribute
  extends ISettingNotifyOrderAttribute {
  onLeadPageReply: boolean;
}

export interface ISettingNotifyStockAttribute {
  onLowStock: boolean;
  onOutOfStock: boolean;
}

export interface ISettingNotifyInventoryAttribute {
  onEmpty: boolean;
}

export interface ISettingNotifyCommerce {
  orderLinkNotifyMessage: ISettingNotifyOrderAttribute;
  salepageNotifyMessage: ISettingNotifySalepageAttribute;
  orderLinkNotifyEmail: ISettingNotifyOrderAttribute;
  salepageNotifyEmail: ISettingNotifySalepageAttribute;
}

export interface ISettingNotifyInventory {
  productStockNotifyMessage: ISettingNotifyStockAttribute;
  inventoryNotifyMessage: ISettingNotifyInventoryAttribute;
  productStockNotifyEmail: ISettingNotifyStockAttribute;
  inventoryNotifyEmail: ISettingNotifyInventoryAttribute;
}

export interface IUserNotification {
  commerce: ISettingNotifyCommerce;
  inventory: ISettingNotifyInventory;
}

export interface IUserNotificationToggle {
  hasNotifyByMessage: boolean;
  hasNotifyByEmail: boolean;
}

// ANCHOR: NOTIFICATION SETTING (BY COMPANY)

export interface ISettingLineNotifyEntityImmu {
  id: string;
  compId: string;
  businessId: string;
}

export interface ISettingLineNotifyEntity {
  active: boolean;
  token: string;
  title: string;
  caption: string;
}

export interface ISettingNotifyLine {
  orderLink: ISettingNotifyOrderAttribute;
  salepage: ISettingNotifySalepageAttribute;
  productStock: ISettingNotifyStockAttribute;
  inventory: ISettingNotifyInventoryAttribute;
}

export interface ISettingNotifyBuyer {
  order: ISettingNotifyOrderAttribute;
}

export interface ISettingLineNotify
  extends ISettingLineNotifyEntityImmu,
    ISettingLineNotifyEntity,
    ISettingNotifyLine {}

export interface ICompanyNotification {
  lineNotify: ISettingLineNotify[];
  emailToBuyer: ISettingNotifyBuyer;
}

export interface ICompanyNotificationToggle {
  hasNotifyByLineNotify: boolean;
}
