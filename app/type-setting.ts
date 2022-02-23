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
import { SaleChannelSubType, SaleChannelType } from './enum-const';

// ANCHOR: Sale Channel Attribute (Type Default) test
export interface ISaleChannelSubTypeDefault {
  caption: string;
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
  saleChannelTagUTM: string;
  saleChannelCustomUTM: string;
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
