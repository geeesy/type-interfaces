import { ICompanyContactInfo, IPeriodTime } from './type-company';

import { GappSetting } from '.';
import { IPersonContactInfo } from './type-apps';
import { SaleChannelSubType } from './enum-const';

/* eslint-disable no-unused-vars */
export enum StatusOrderSeller {
  S0_None = 'NONE', // TODO: ignore?
  S1_AwaitingConfirm = 'AWAITING_CONFIRM',
  S2_AwaitingPayment = 'AWAITING_PAYMENT',
  S3_ToConfirm = 'TO_CONFIRM',
  S4_AwaitingFulfillment = 'AWAITING_FULFILLMENT',
  S5_AwaitingShipment = 'AWAITING_SHIPMENT',
  S5_AwaitingPickup = 'AWAITING_PICKUP',
  S6_Shipped = 'SHIPPED',
  S6_AwaitingAccepted = 'AWAITING_ACCEPTED',
  S7_AwaitingDeposit = 'AWAITING_DEPOSIT',
  S8_Completed = 'COMPLETED',
  S_Canceled = 'CANCELED'
}

export enum StatusOrderCustomer {
  B0_None = 'NONE', // TODO: ignore?
  B1_AwaitingConfirm = 'AWAITING_CONFIRM',
  B2_AwaitingPayment = 'AWAITING_PAYMENT',
  B3_Paid = 'PAID',
  B4_AwaitingFulfillment = 'AWAITING_FULFILLMENT',
  B5_AwaitingShipment = 'AWAITING_SHIPMENT',
  B5_ToPickup = 'TO_PICKUP',
  B6_Shipped = 'SHIPPED',
  B6_AwaitingAccepted = 'AWAITING_ACCEPTED',
  B7_Accepted = 'ACCEPTED',
  B8_Completed = 'COMPLETED',
  B_Canceled = 'CANCELED'
}

export enum StatusOrderOfPayment {
  PAY0_AwaitingPayment = 'AWAITING_PAYMENT',
  PAY1_ToConfirm = 'TO_CONFIRM',
  PAY2_CompletedPayment = 'COMPLETED_PAYMENT'
}

export enum StatusOrderOfShipment {
  SHIP0_AwaitingShipment = 'AWAITING_SHIPMENT',
  SHIP0_AwaitingPickup = 'AWAITING_PICKUP',
  SHIP1_Shipped = 'SHIPPED',
  SHIP2_CompletedShipment = 'COMPLETED_SHIPMENT'
}

export enum StatusOrderOfStock {
  Reserved = 'RESERVED',
  Deducted = 'DEDUCTED'
}

export enum StatusOrder {
  Placed = 'PLACED',
  Packed = 'PACKED',
  Shipped = 'SHIPPED',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED'
}

export type TOrderType = 'ORDER_LINK' | 'SALEPAGE' | 'GAPP_MARKET' | 'GAPP_BIZ';
export type TOrderItemType = 'SERVICE' | 'PRODUCT';
export type TOrderChannelUTM = 'WEBSITE' | 'FACEBOOK' | 'INSTAGRAM' | 'LINE' | 'YOUTUBE' | 'WHATSAPP' | 'WECHAT' | 'OTHER';
/**
 * ORDER
 */
export interface IOrderProductRow {
  productId: string;
  variantId: string; // on product variant
  productTitle: string;
  productUnitPrice: number;
  productUnit: string;
  productQty: number;
  productCoverUrl: string;
  productWeight: number;
  productWeightUnit: string;
  productSku: string;
  discountUnitPrice: number;
  isDiscountOnPercent: boolean;
  itemsPriceRow: number;
  isVatable: boolean;
  warehouseId: string; // ! -> INVENTORY
  inventoryId: string; // ! -> INVENTORY
  productGroupId: string;
  productGroupName: string;
  productCategoryId: string;
  productCategoryName: string
}

export interface IOrderAccounting {
  subtotalAmount: number; // รวมเงิน
  shippingCost: number; // ค่าขนส่ง
  charges: number; // ค่าเพิ่มเติม
  discount: number; // ส่วนลดเพิ่มเติม
  totalDiscountAmount: number; // ส่วนลดรวม
  netAmount: number; // ยอดรวมก่อนภาษี
  vat: number; // ภาษีมูลค่าเพิ่ม
  grandTotalAmount: number; // ยอดรวมทั้งสิ้น -> USE IN LIST
  taxWithheldPercent: number; // อัตราหัก ณ ที่จ่าย
  withholdingTax: number; // ภาษีหัก ณ ที่จ่าย
  totalPayAmount: number; // ยอดที่ต้องชำระทั้งสิ้น
  isVatInc: boolean;
  isDiscountOnPercent: boolean;
}
export interface IListOrder
  extends IDBOrderSellerDataImmu,
  IDBOrderEntityImmu,
  IDBOrderLinkImmu,
  IDBOrderEntity {
  totalOrderAmount: number; // * === grandTotalAmount
  shippingConfirmedData: GappSetting.ShippingMethod | null;
  paymentConfirmedData: GappSetting.PaymentMethod | null;
  customerContactInfo: IPersonContactInfo;
  statusOrderOnSeller: StatusOrderSeller;
  statusOrderOnBuyer: StatusOrderCustomer;
  statusOrderOfPayment: StatusOrderOfPayment | null;
  paymentAttachmentData: IPaymentAttachmentData | null;
  channel: SaleChannelSubType
}
// ANCHOR: ORDER | Entity (1/13)
export interface IOrderCustomerDataImmu {
  customerId: string;
  iamUserId?: string;
}

// ANCHOR: ORDER | Entity (2/13)
export interface IOrderCustomerData {
  customerContactInfo: IPersonContactInfo;
  customerCompanyContactInfo: ICompanyContactInfo | null;
  customerNote: string;
}

// ANCHOR: ORDER | Entity (3/13)
export interface IDBOrderSellerDataImmu {
  businessId: string;
  compId: string;
}

// ANCHOR: ORDER | Entity (4/13)
export interface IDBOrderEntityImmu {
  orderType: TOrderType;
  orderItemType: TOrderItemType;
  orderChannelUTM: TOrderChannelUTM;
  salepageId?: string;
}

// ANCHOR: ORDER | Entity (5/13)
export interface IDBOrderEntity {
  docNo: string;
  productTitleFirst: string;
  productImageFirstUrl: string;
  productSkuFirst: string;
  wasFinalized: boolean; // stock was adjusted
  totalProductQty: number;
}

// ANCHOR: ORDER | Entity (6/13)
export interface IOrderEntity {
  sellerNote: string;
  products: IOrderProductRow[];
  accountingData: IOrderAccounting;
  sellerContactInfo: IPersonContactInfo;
  sellerCompanyContactInfo: ICompanyContactInfo;
  totalOrderAmount: number; // * === grandTotalAmount
  totalProductAmount: number // ? sum from product rows
}

export interface IOrderAccountingOnly {
  accountingData: IOrderAccounting;
}

// ANCHOR: ORDER | Entity (7/13)
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
  salepageId?: string;
  orderId: string;
  channel: SaleChannelSubType;
  totalOrderAmount: number; // * === grandTotalAmount
  orderType: TOrderType;
  createdAt: string;
  docNo: string;
}

/**
 * ORDER
 * TYPE 1 - ORDER | ALINK
 * * ON CREATE
 */

// ANCHOR: ORDER | Entity (8/13)
export interface IOrderData {
  salepageName?: string;
  saleChannelId: string; // * id = OTHER000
  channel: SaleChannelSubType;
  expiryTimestamp: number; //timestamp
  shippingAvailableIds: string[]; // * USE ID FOR LATER
  paymentAvailableIds: string[]; // * USE ID FOR LATER
  shippingAvailableData: GappSetting.ShippingMethod[];
  paymentAvailableData: GappSetting.PaymentMethod[];
  hasNoShipment: boolean;
}

// ANCHOR: ORDER | Entity (9/13)
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

// ANCHOR: ORDER | Entity (10/13)
// * ON CONFIRM
export interface IOrderLinkDataOnConfirm {
  shippingConfirmedId: string;
  paymentConfirmedId: string;
  shippingConfirmedData: GappSetting.ShippingMethod | null;
  paymentConfirmedData: GappSetting.PaymentMethod | null;
  isNewContactAddress: boolean;
  paymentAttachmentData: IPaymentAttachmentData | null;
  shippingTrackingData: IShippingTrackingData | null;
  OrderStatusDate?: string;
}

export interface IOrderLinkImmuDataOnConfirm {
  saleChannelSourceUTM: TOrderChannelUTM
  saleChannelCustomUTM: ISaleChannelCustomUTM
}

export interface ISaleChannelCustomUTM {
  utmName: string
  utmValue: string
}

// ANCHOR: ORDER | Entity (11/13)
export interface IOrderDataOnComplete {
  finalDeliveryAt: string
  finalDeliveryBy: string
  deliveryImageUrl: string
  completedAt: string
  completedBy: string
}

// ANCHOR: ORDER | Entity (12/13)
export interface IDBOrderDataImmu {
  finalizedAt: string
}

// ANCHOR: ORDER | Entity (13/13)
export interface IDBOrderActivityLog {
  latestNoteOnAction: string;
  latestActivityOnOrderType: TOrderType | null;
  latestActionBy: string | null; // ? use to identify action -> buyer (null) or seller (identityId)
  latestActionByFullName?: string // ? -> firstName + lastName
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
  toFinalizeStock: boolean; // ? to deduct stock
  toCompleteShipping: boolean; // ? to
}

export interface ISellerCancelOrder {
  returnProduct: IOrderProductRow[] | null;
  hasRefunded: boolean;
  refundAmount: number;
  note: string;
}

// FIXME: to remove interface (dup)
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
  TotalPaidAmount: number;
  CountCompletedOrder: number;
  AvgPaidAmount: number;
}

/**
 * LEADPAGE
 */

export interface ILeadpage {
  salepageName: string;
  salepageId: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  description: string;
  address: string;
  createDate: string;
}
export interface ILeadpageId {
  leadpageId: string;
}

export interface ILogOrderValue extends
  IOrderCustomerData,
  IDBOrderEntity,
  IOrderEntity,
  IOrderData {

}

export interface ILogOrder {
  updatedBy: string;
  updatedAt: string;
  note?: string;
  oldStatus: IDBOrderStatus;
  newStatus: IDBOrderStatus;
  oldValue: ILogOrderValue;
  newValue: ILogOrderValue;
}
