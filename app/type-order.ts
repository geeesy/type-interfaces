import { ICompanyContactInfo, IPeriodTime } from './type-company';

import { GappSetting } from '.';
import { IPersonContactInfo } from './type-apps';
import { SaleChannelSubType } from './enum-const';

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

export enum StatusOrderOfPayment {
  PAY0_AwaitingPayment = 'awaiting payment',
  PAY1_ToConfirm = 'to confirm',
  PAY2_CompletedPayment = 'completed payment'
}

export enum StatusOrderOfShipment {
  SHIP0_AwaitingShipment = 'awaiting shipment',
  SHIP0_AwaitingPickup = 'awaiting pickup',
  SHIP1_Shipped = 'shipped',
  SHIP2_CompletedShipment = 'completed shipment'
}

export enum StatusOrderOfStock {
  Reserved = 'reserved',
  Deducted = 'deducted'
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
export interface IOrderProductRow {
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
  isVatable: boolean;
  warehouseId: string; // ! -> INVENTORY
  inventoryId: string; // ! -> INVENTORY
}

export interface IOrderAccounting {
  subtotalAmount: number; // รวมเงิน
  shippingCost: number; // ค่าขนส่ง
  charges: number; // ค่าเพิ่มเติม
  discount: number; // ส่วนลดเพิ่มเติม
  totalDiscountAmount: number; // ส่วนลดรวม
  netAmount: number; // ยอดรวมก่อนภาษี
  vat: number; // ภาษีมูลค่าเพิ่ม
  grandTotalAmount: number; // ยอดรวมทั้งสิ้น
  taxWithheldPercent: number; // อัตราหัก ณ ที่จ่าย
  withholdingTax: number; // ภาษีหัก ณ ที่จ่าย
  totalPayAmount: number; // ยอดที่ต้องชำระทั้งสิ้น
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
  salepageId?: string;
  productAmount: number;
}

// ANCHOR: ORDER | Entity (5/6)
export interface IOrderEntity {
  sellerNote: string;
  products: IOrderProductRow[];
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
  statusOrderOfPayment: StatusOrderOfPayment | null;
  statusOrderOfShipment: StatusOrderOfShipment | null;
  statusOrderOfStock: StatusOrderOfStock | null;
}

// REVIEW: Ordered Product
export interface IDBListOrderByProduct
  extends IDBOrderStatus,
    IOrderCustomerData {
  orderId: string;
  channel: SaleChannelSubType;
  totalOrderAmount: number;
  createdAt: string;
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
  paymentImageUrl: string;
  paymentTime: string;
  paymentDate: string;
  paymentPrice: number;
  note: string;
}

export interface IShippingTrackingData {
  trackingNo: string;
  deliveryOn: IPeriodTime;
  note: string;
}

// * ON CONFIRM
export interface IOrderLinkDataOnConfirm {
  shippingConfirmedId: string;
  paymentConfirmedId: string;
  shippingConfirmedData: GappSetting.ShippingMethod | null;
  paymentConfirmedData: GappSetting.PaymentMethod | null;
  isNewContactAddress: boolean;
  paymentAttachmentData: IPaymentAttachmentData | null;
  shippingTrackingData: IShippingTrackingData | null;
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

export interface ISellerCreateOrder {
  newSellerStatus: StatusOrderSeller;
  orderType: TOrderType;
  toFinalizeStock: boolean;
}

export interface ISellerUpdateOrderStatus extends ISellerCreateOrder {
  existingSellerStatus: StatusOrderSeller;
}

export interface ISellerUpdateOrderStatus {
  existingSellerStatus: StatusOrderSeller;
  newSellerStatus: StatusOrderSeller;
  orderType: TOrderType;
  toFinalizeStock: boolean;
}

export interface ISellerUpdateOrderDataOnStatusChanged {
  paymentAttachmentData: IPaymentAttachmentData | null;
  shippingTrackingData: IShippingTrackingData | null;
}

/**
 * ORDER
 */
export interface ICustomerWithOrder
  extends IOrderCustomerDataImmu,
    IOrderCustomerData {
  latestOrderType: TOrderType;
  latestOrderId: string;
}
