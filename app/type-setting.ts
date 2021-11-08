import { SaleChannelSubType, SaleChannelType } from './enum-const';
import { IUpdateMarketPaymentMethod } from './type-payment';
import { IUpdateMarketShippingMethod } from './type-shipping';

// ANCHOR: Sale Channel Attribute (Type Default)
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
}

export interface ISaleChannelEntityImmu {
  saleChannelType: SaleChannelType; // ! check: use enum obj
  saleChannelSubType: SaleChannelSubType; // ! check: use enum obj
}

export interface ISaleChannelEntity {
  saleChannelIconUrl: string;
  saleChannelAliasName: string;
  note: string;
  saleChannelAttributes: ISaleChannelSubTypeDefault;
}

export interface IUpdateShippingAndPaymentMethodOnMarket {
  marketPaymentMethod: IUpdateMarketPaymentMethod[]
  marketShippingMethod: IUpdateMarketShippingMethod[]
}