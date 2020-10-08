import { IProduct } from "./type-marketplace";

export interface IResMarketPrice {
  messages: string;
  data: IMarketPrice[];
}
export interface IMarketPrice {
  dates: string;
  prices: number;
  months: string;
}
export interface IResManufacturerPrice {
  messages: string;
  data: IManufacturerPrice[];
}
export interface IManufacturerPrice {
  supplierIds: string;
  supplierNames: string;
  supplierAges: number;
  supplierWarranty: Boolean;
  suppierSamples: boolean;
  supplierCountrys: string;
  supplierRating: number;
  cal: ICal;
}
export interface ICal {
  productsPrice: number;
  MinOrderQty: number;
  months: string;
}
export interface IResCompareProduct {
  messages: string;
  data: ICompareProduct[];
}
export interface ICompareProduct {
  productIds: string;
  compareNames: string;
  compareProducts: IProduct[];
}
