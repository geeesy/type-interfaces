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
  productId: string
  productTitle: string
  productUnitPrice: number;
  productUnit: string;
  productQty: number;
  productCoverUrl: string;
  productSku: string;
  discountUnitPrice: number;
  itemsPriceRow: number;
}

export interface IDBOrderImmu {
  orderId: string
  orderTemplateId: string
}

export interface IOrderSellerDataImmu {
  businessId: string
  compId: string
}

export interface IOrderCustomerDataImmu {
  customerId: string
}

export interface IOrderData {
  product: IOrderProduct[]
}
