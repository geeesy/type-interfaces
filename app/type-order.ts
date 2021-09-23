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

export interface IDBOrderImmu {
  orderId: string;
  orderTemplateId: string;
}

export interface IOrderSellerDataImmu {
  businessId: string;
  compId: string;
}

export interface IOrderCustomerDataImmu {
  customerId: string;
}

export interface IDBOrderData {
  totalOrderAmount: number;
  shippingAvailableData: GappSetting.ShippingMethod[];
  paymentAvailableData: GappSetting.PaymentMethod[];
}

export interface IOrderDataOnConfirm {
  // * CREATE ON SUBMIT ORDER
  shippingData: GappSetting.ShippingMethod;
  paymentData: GappSetting.PaymentMethod;
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

export interface IOrderData {
  sellerNote: string;
  customerNote: string;
  products: IOrderProduct[];
  accountingData: IOrderAccounting;
  sellerContactInfo: IPersonContactInfo;
  sellerCompanyContactInfo: ICompanyContactInfo;
  customerContactInfo: IPersonContactInfo;
  customerCompanyContactInfo: ICompanyContactInfo;
  channel: SaleChannelSubType
  shippingsAvailableId: string[]; // * USE ID ON CREATE
  paymentAvailableId: string[]; // * USE ID ON CREATE
}
