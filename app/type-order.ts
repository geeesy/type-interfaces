import { IPersonContactInfo } from './type-apps';
import { ICompanyContactInfo } from './type-company';
import { IPaymentMethod, IShippingMethod } from './type-console';

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

export type TOrderChannel = 'facebook' | 'line' | 'other';

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

export type IShippingData = IShippingMethod;

export type IPaymentData = IPaymentMethod;

export interface IOrderData {
  sellerNote: string;
  customerNote: string;
  products: IOrderProduct[];
  accountingData: IOrderAccounting;
  sellerContactInfo: IPersonContactInfo;
  sellerCompanyContactInfo: ICompanyContactInfo;
  customerContactInfo: IPersonContactInfo;
  customerCompanyContactInfo: ICompanyContactInfo;
  channel: TOrderChannel;
  shippingsAvailable: string[]; // * USE ID ON CREATE
  shippingData: IShippingData; // * CREATE ON SUBMIT ORDER
  paymentAvailable: string[];
  paymentData: IPaymentData;
}
