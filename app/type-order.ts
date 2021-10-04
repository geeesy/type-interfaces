import { GappSetting } from '.';
import { SaleChannelSubType } from './enum-const';
import { IPersonContactInfo } from './type-apps';
import { ICompanyContactInfo } from './type-company';

/* eslint-disable no-unused-vars */
export enum StatusOrderSeller {
  None = 'none', // TODO: ignore?
  AwaitingPayment = 'awaiting payment',
  ToConfirm = 'to confirm',
  AwaitingFulfillment = 'awaiting fulfillment',
  AwaitingShipment = 'awaiting shipment',
  AwaitingPickup = 'awaiting pickup',
  Shipped = 'shipped',
  AwaitingAccepted = 'awaiting accepted',
  Completed = 'completed'
}

export enum StatusOrderCustomer {
  None = 'none', // TODO: ignore?
  AwaitingPayment = 'awaiting payment',
  AwaitingConfirm = 'awaiting confirm',
  AwaitingFulfillment = 'awaiting fulfillment',
  AwaitingShipment = 'awaiting shipment',
  AwaitingPickup = 'awaiting pickup',
  Shipped = 'shipped',
  AwaitingAccepted = 'awaiting accepted',
  Completed = 'completed'
}

export type TOrderType = 'ORDER_LINK' | 'SALEPAGE' | 'GAPP_MARKET';

/**
 * ORDER
 */
export interface IOrderProduct {
  productId: string;
  productTitle: string;
  productUnitPrice: number;
  productUnit: string;
  productQty: number;
  productCoverUrl: string;
  productSku: string;
  discountUnitPrice: number;
  itemsPriceRow: number;
}

export interface IOrderAccounting {
  subtotalAmount: number;
  shippingCost: number;
  charges: number;
  discount: number;
  totalDiscountAmount: number;
  netAmount: number;
  vat: number;
  grandTotalAmount: number;
  taxWithheldPercent: number;
  withholdingTax: number;
  totalPayAmount: number;
  isVatInc: boolean;
}

// ANCHOR: ORDER | Entity (1/5)
export interface IOrderCustomerDataImmu {
  customerId: string;
}

// ANCHOR: ORDER | Entity (2/5)
export interface IOrderCustomerData {
  customerContactInfo: IPersonContactInfo;
  customerCompanyContactInfo: ICompanyContactInfo;
  customerNote: string;
}

// ANCHOR: ORDER | Entity (3/5)
export interface IDBOrderSellerDataImmu {
  businessId: string;
  compId: string;
}

// ANCHOR: ORDER | Entity (4/5)
export interface IDBOrderEntity {
  orderType: TOrderType;
  productTitleFirst: string;
  productImageFirstUrl: string;
  productSkuFirst: string;
  statusOrderOnSeller: StatusOrderSeller;
  statusOrderOnBuyer: StatusOrderCustomer;
}

// ANCHOR: ORDER | Entity (5/5)
export interface IOrderEntity {
  sellerNote: string;
  products: IOrderProduct[];
  accountingData: IOrderAccounting;
  sellerContactInfo: IPersonContactInfo;
  sellerCompanyContactInfo: ICompanyContactInfo;
  totalOrderAmount: number;
}



/**
 * ORDER
 * TYPE 1 - ORDER | ALINK
 * * ON CREATE
 */

export interface IOrderLinkData {
  channel: SaleChannelSubType;
  expiryTimestamp: number; //timestamp
  shippingAvailableIds: string[]; // * USE ID FOR LATER
  paymentAvailableIds: string[]; // * USE ID FOR LATER
  shippingAvailableData: GappSetting.ShippingMethod[];
  paymentAvailableData: GappSetting.PaymentMethod[];
}

export interface IDBOrderLinkImmu {
  orderId: string;
  // orderTemplateId: string;
}

// * ON CONFIRM
export interface IOrderLinkDataOnConfirm {
  shippingData: GappSetting.ShippingMethod | null;
  paymentData: GappSetting.PaymentMethod | null;
}

/**
 * ORDER
 * TYPE 2 - ORDER | SALE PAGE
 */
export interface IDBOrderSalePageImmu {
  orderId: string;
}

export interface IOrderSalePageData {
  hasStockChecked: boolean;
  hasBackOrderAccepted: boolean;
  shippingData: GappSetting.ShippingMethod;
  paymentData: GappSetting.PaymentMethod;
}

/**
 * ORDER
 * TYPE 3 - ORDER | GAPP MARKET
 */
export interface IDBOrderMarketImmu {
  orderId: string;
}

export interface IOrderMarketData {
  isByCompany: boolean;
  shippingData: GappSetting.ShippingMethod;
  paymentData: GappSetting.PaymentMethod;
}

