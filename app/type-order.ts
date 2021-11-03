import { GappSetting } from '.';
import { SaleChannelSubType } from './enum-const';
import { IPersonContactInfo } from './type-apps';
import { ICompanyContactInfo, IPeriodTime } from './type-company';

/* eslint-disable no-unused-vars */
export enum StatusOrderSeller {
  S0_None = 'none', // TODO: ignore?
  S1_AwaitingConfirm = 'awaiting confirm',
  S2_AwaitingPayment = 'awaiting payment',
  S3_ToConfirm = 'to confirm',
  S4_AwaitingFulfillment = 'awaiting fulfillment',
  S5_AwaitingShipment = 'awaiting shipment',
  S5_AwaitingPickup = 'awaiting pickup',
  S6_Shipped = 'shipped',
  S7_AwaitingAccepted = 'awaiting accepted',
  S8_Completed = 'completed',
  S_Cancelled = 'cancelled'
}

export enum StatusOrderCustomer {
  B0_None = 'none', // TODO: ignore?
  B1_AwaitingConfirm = 'awaiting confirm',
  B2_AwaitingPayment = 'awaiting payment',
  B3_Paid = 'paid',
  B4_AwaitingFulfillment = 'awaiting fulfillment',
  B5_AwaitingShipment = 'awaiting shipment',
  B5_AwaitingPickup = 'awaiting pickup',
  B6_Shipped = 'shipped',
  B7_AwaitingAccepted = 'awaiting accepted',
  B8_Completed = 'completed',
  B_Cancelled = 'cancelled'
}

export enum StatusOrder {
  Placed = 'PLACED',
  Packed = 'PACKED',
  Shipped = 'SHIPPED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED'
}

export type TOrderType = 'ORDER_LINK' | 'SALEPAGE' | 'GAPP_MARKET' | 'GAPP_BIZ';

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
  productWeight: number;
  productWeightUnit: string;
  productSku: string;
  discountUnitPrice: number;
  itemsPriceRow: number;
  warehouseId: string; // ! -> INVENTORY
  inventoryId: string; // ! -> INVENTORY
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

// ANCHOR: ORDER | Entity (1/6)
export interface IOrderCustomerDataImmu {
  customerId: string;
  iamUserId?: string;
}

// ANCHOR: ORDER | Entity (2/6)
export interface IOrderCustomerData {
  customerContactInfo: IPersonContactInfo;
  customerCompanyContactInfo: ICompanyContactInfo;
  customerNote: string;
}

// ANCHOR: ORDER | Entity (3/6)
export interface IDBOrderSellerDataImmu {
  businessId: string;
  compId: string;
}

// ANCHOR: ORDER | Entity (4/6)
export interface IDBOrderEntity {
  orderType: TOrderType;
  productTitleFirst: string;
  productImageFirstUrl: string;
  productSkuFirst: string;
  wasFinalized: boolean; // stock was adjusted
  salepageId?: string
}

// ANCHOR: ORDER | Entity (5/6)
export interface IOrderEntity {
  sellerNote: string;
  products: IOrderProduct[];
  accountingData: IOrderAccounting;
  sellerContactInfo: IPersonContactInfo;
  sellerCompanyContactInfo: ICompanyContactInfo;
  totalOrderAmount: number;
}

// ANCHOR: ORDER | Entity (6/6)
export interface IDBOrderStatus {
  statusOrderOnSeller: StatusOrderSeller;
  statusOrderOnBuyer: StatusOrderCustomer;
  statusOrder: StatusOrder | null;
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

export interface IPaymentAttachmentData {
  paymentImageUrl: string
  paymentTime: string;
  paymentDate: string;
  paymentPrice: number
  note: string
}

export interface IShippingTrackingData {
  trackingNo: string;
  deliveryOn: IPeriodTime
  note: string;
}

// * ON CONFIRM
export interface IOrderLinkDataOnConfirm {
  shippingConfirmedId: string
  paymentConfirmedId: string
  shippingConfirmedData: GappSetting.ShippingMethod | null;
  paymentConfirmedData: GappSetting.PaymentMethod | null;
  isNewContactAddress: boolean;
  paymentAttachmentData: IPaymentAttachmentData | null
  shippingTrackingData: IShippingTrackingData | null
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

export interface ISellerUpdateOrderStatus {
  existingSellerStatus: StatusOrderSeller
  newSellerStatus: StatusOrderSeller
  orderType: TOrderType
  toFinalizeStock: boolean;
}

export interface ISellerUpdateOrderDataOnStatusChanged {
  paymentAttachmentData: IPaymentAttachmentData | null
  shippingTrackingData: IShippingTrackingData | null
}

