/* eslint-disable no-unused-vars */
export enum CurrencyCode {
  THAI = 'THB',
  USA = 'USD',
  CHINA = 'CNY',
}

export enum UnitTH {
  pcs = 'ชิ้น'
}

export enum UnitEN {
  pcs = 'pcs'
}

export enum SavedListType {
  Product = 'product',
  Supplier = 'supplier'
}

export enum SearchPage {
  Product = 'product',
  Supplier = 'supplier',
  Location = 'location'
}

export const SearchPageArr = [
  SearchPage.Product,
  SearchPage.Supplier,
  SearchPage.Location
]

export const RfqCreditTerm = ['none', 'cash', '30', '60', '90']

export const RfqPaymentMethod = ['deposit', 'cheque', 'creditCard', 'onDelivery']

export const FunnelBusinessSizes = ['micro', 'small', 'medium', 'large']

export const FunnelBusinessTypes = ['manufacturer', 'wholesaler', 'retailer']
