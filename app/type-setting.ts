import { SaleChannelSubType, SaleChannelType } from './enum-const';

export interface ISaleChannelSubTypeDefault {
  caption: string;
}

// REVIEW: SALE CHANNEL

export interface IDBSaleChannelImmu {
  saleChannelId: string;
  hasApiConnected: boolean;
  isUnique: boolean;
}

export interface IDBSaleChannel {
  isActive: boolean;
}

export interface ISaleChannelEntityImmu {
  saleChannelType: SaleChannelType;
  saleChannelSubType: SaleChannelSubType;
}

export interface ISaleChannelEntity {
  saleChannelIconUrl: string;
  saleChannelAliasName: string;
  note: string;
  saleChannelAttributes: ISaleChannelSubTypeDefault;
}
