export interface IResMarketPrice {
    message: string;
    data: IMarketPrice[];
}
export interface IMarketPrice {
    date: string;
    price: number;
    month: string;
}
export interface IResManufacturerPrice {
    message: string;
    data: IManufacturerPrice[];
}
export interface IManufacturerPrice {
    supplierId: string;
    supplierName: string;
    supplierAges: number;
    supplierWarranty: Boolean;
    suppierSample: boolean;
    supplierCountry: string;
    supplierRating: number;
    cal: ICal;
}
export interface ICal {
    productPrice: number;
    MinOrderQty: number;
    month: string;

}