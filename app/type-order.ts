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
export type TSalepageType = 'Lead Page' | 'Content Page' | 'Sale Page';

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
  salepageId?: string;
  productAmount: number;
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

// REVIEW: SALEPAGE
/**
 * CREATE SALEPAGE
 */

export type TOrderLink = 'multipage' | 'singlepage';
export interface ICreateSalepage {
  compId: string;
  salepageId: string;
  contentForm: IContentForm;
  salePageData: ISalePageData;
  typeSalepage: TSalepageType;
}
export interface ISalepage extends ICreateSalepage {
  PK: string;
  SK: string;
  builded: string;
  createDate: string;
  updateDate: string;
}
export interface IContentForm {
  contact: IContactLink;
  orderLink: TOrderLink;
  payment: IBankInSalepage;
  settingpixeltag: ISettingpixeltag;
  settings: ISettings;
  settingseo: ISettingseo;
  shipping: IShipping[];
}
export interface IContactLink {
  facebooklink: string;
  linelink: string;
  phone: string;
}

export interface IBankInSalepage {
  bank: IBank[];
  paymentType: string;
}

export interface IBank {
  activeOnMarket: boolean;
  compId: string;
  createdAt: string;
  isActive: boolean;
  note: string;
  paymentAliasName: string;
  paymentIconUrl: string;
  paymentMethodAttribute: IPaymentMethodAttribute;
  paymentMethodId: string;
  paymentMethodType: string;
  updatedAt: string;
}
export interface IPaymentMethodAttribute {
  accountName: string;
  accountNo: string;
  bankAccountName: string;
  bankAccountType: string;
  branchName: string;
  caption: string;
}
export interface ISettingpixeltag {
  advertisefacebook: IAdvertisefacebook[];
  advertisegoogletag: IAdvertisegoogletag;
  advertiseline: IAdvertiseline;
}
export interface IAdvertisefacebook {
  accesstoken: string;
  pixelid: string;
}
export interface IAdvertisegoogletag {
  googletagid: string;
}
export interface IAdvertiseline {
  linetagid: string;
}

export interface ISettings {
  namesalepage: string;
  typesalepage: string;
}
export interface ISettingseo {
  description: string;
  image: string;
  title: string;
}

export interface ISettingseo {
  description: string;
  image: string;
  title: string;
}

export interface IShipping {
  compId: string;
  activeOnMarket: boolean;
  createdAt: string;
  deliveryTime: IDeliveryTime;
  isActive: boolean;
  isCOD: boolean;
  note: string;
  shippingAliasName: string;
  shippingIconUrl: string;
  shippingMethodAttribute: IShippingMethodAttribute;
  shippingMethodId: string;
  shippingMethodType: string;
  shippingParty: string;
  updatedAt: string;
}
export interface IDeliveryTime {
  earliest: number;
  last: number;
}
export interface IShippingMethodAttribute {
  caption: string;
  minOrderTotalAmount: number;
  shippingCost: number;
}
export interface ISalePageData {
  ComponentForm?: IComponentForm;
  componentBlock: IComponentBlock;
}

export interface IComponentForm {
  contactForm?: IContactForm;
  thankyouForm?: IThankyouForm;
}
export interface IContactForm {
  address?: boolean;
  amphoe?: boolean;
  buttondescription?: string;
  color?: string;
  description?: boolean;
  email?: boolean;
  firstname?: boolean;
  lasname?: boolean;
  phone?: boolean;
  postcode?: boolean;
  province?: boolean;
  tambon?: boolean;
}
export interface IThankyouForm {
  description: string;
  heading: string;
}
export interface IComponentBlock {
  data:
    | IComponentBlockProgress
    | IComponentBlockProduct
    | IComponentBlockText
    | IComponentBlockImage
    | IComponentBlockVideo
    | IComponentBlockSocail
    | IComponentBlockLink
    | IComponentBlockFlashSale;
  type: string;
}

export interface IComponentBlockProgress {
  color: string;
  description: string;
  icon: string;
  nameIcon: string;
  percen: number;
}

export interface IComponentBlockProduct {
  brandname: string;
  countStock: string;
  description: string;
  fullprice: number;
  heading: string;
  price: number;
  productUnit: string;
  productid: string;
  productimg: string;
  productname: string;
  sku: string;
  warehouse: IWarehouse;
}

export interface IWarehouse {
  GSI1SK: string;
  businessId: string;
  canBelowZero: boolean;
  compId: string;
  createdAt: string;
  inventoryId: string;
  inventoryInfo: string;
  inventoryName: string;
  inventoryType: string;
  isActive: boolean;
  isDefault: boolean;
  totalProduct: number;
  updatedAt: string;
}

export interface IComponentBlockText {
  text: string;
}

export interface IComponentBlockImage {
  name: string;
  src: string;
}
export interface IComponentBlockVideo {
  url: string;
}

export interface IComponentBlockSocail {
  facebook: string;
  gapp: string;
  lazada: string;
  line: string;
  shopee: string;
}

export interface IComponentBlockLink {
  color: string;
  description: string;
  link: string;
}

export interface IComponentBlockFlashSale {
  autoDate: boolean;
  expiredDate: string;
  time: ITime;
}
export interface ITime {
  hours: number;
  minutes: number;
  ms: number;
  seconds: number;
}
