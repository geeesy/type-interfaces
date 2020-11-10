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

export enum CreditTerm {
  None = 'none',
  Cash = 'cash',
  D30 = '30',
  D60 = '60',
  D90 = '90'
}
