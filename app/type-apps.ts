export interface IResVideoList {
  message: string;
  data: IVideoList[];
}
export interface IVideoList {
  videoUrls: string;
  videoIFrame?: string
  videoTitle: string;
  videoDescription: string;
  supplierIds?: string;
  supplierIconsUrl?: string;
  supplierName?: string;
  supplierCompanysEmail?: string;
  supplierRating?: number;
  supplierLogosUrl?: string;
  badge?: {
    supplierWarranty?: boolean;
    supplierSample?: boolean;
    supplierCountry?: string;
  };
}

export interface IResOrderList {
  message: string;
  data: IOrderList[];
}
export interface IOrderList {
  poIds: string;
  channelsUrl: string;
  client: string;
  images: string;
  status: string;
  shipping: string;
  payments: string;
  orderDate: string;
  poNetAmount: string;
}

// REVIEW: RFQ & RFI ===

export interface IRfq {
  rfqId: string;
  senderId: string;
  productTitle: string;
  productKeywords: string[];
  productCategoryId: string;
  productQty: string;
  productUnit: string;
  productUnitPrice: string;
  productCurrency: string;
  productDescription: string;
  productImagesUrl: string[];
  timeLateRfqToQuo: string;
  shippingLoc: string[];
  shippingMethods: string[];
  shippingTimePeriod: string[];
  creditTerm: string;
  paymentMethods: string[];
  sellerSizes: string[];
  sellerBusinessTypes: string[];
  sellerAge: string;
  sellerProvinces: string[];
  sellerCertificate: boolean;
  sellerVerifiedByGeeesy: boolean;
  buyerFullName: string;
  buyerEmail: string;
  buyerMobile: string;
  buyerCompany: string;
  buyerCompanyPhone: string;
  buyerCompanyAddress: string;
  rfqScore: number;
}

export interface IRfi {
  rfiId: string;
  senderId: string;
  supplierId: string;
  productId: string;
  productQty: string;
  productUnit: string;
  rfiInfo: string;
  rfiImagesUrl: string[];
  buyerFullName: string;
  buyerEmail: string;
  buyerMobile: string;
  buyerCompany: string;
  buyerCompanyPhone: string;
  buyerCompanyAddress: string;
}

export interface IRfqFormCreate {
  formGroupProduct: IRfqFormGroupProduct
  formGroupRequest: IRfqFormGroupRequest
  formGroupSeller: IRfqFormGroupSeller
  formGroupBuyer: IRfqFormGroupBuyer
}

export interface IRfiFormCreate {
  formGroupProduct: IRfiFormGroupProduct
  formGroupRequest: IRfiFormGroupRequest
  formGroupBuyer: IRfiFormGroupBuyer
}

export interface IRfiFormGroupProduct {
  productQty: string;
  productUnit: string;
}

export interface IRfiFormGroupRequest {
  rfiInfo: string;
  rfiImagesUrl: string[];
}

export interface IRfiFormGroupBuyer {
  buyerFullName: string;
  buyerEmail: string;
  buyerMobile: string;
  buyerCompany: string;
  buyerCompanyPhone: string;
  buyerCompanyAddress: string;
}

export interface IRfqFormGroupProduct {
  productTitle: string;
  productKeywords: string[];
  productCategoryId: string;
  productQty: string;
  productUnit: string;
  productUnitPrice: string;
  productCurrency: string;
  productDescription: string;
  productImagesUrl: string;
}

export interface IRfqFormGroupRequest {
  timeLateRfqToQuo: string;
  shippingLoc: string[];
  shippingMethods: string[];
  shippingTimePeriod: string[];
  creditTerm: string;
  paymentMethods: string[];
}

export interface IRfqFormGroupSeller {
  sellerSize: string;
  sellerBusinessTypes: string[];
  sellerAge: string;
  sellerProvinces: string[];
  sellerCertificate: boolean;
  sellerVerifiedByGeeesy: boolean;
}

export interface IRfqFormGroupBuyer {
  buyerFullName: string;
  buyerEmail: string;
  buyerMobile: string;
  buyerCompany: string;
  buyerCompanyPhone: string;
  buyerContactAddress: string;
}

export interface IRfqFormCreateParams {
  rfqScore: number;
  senderId: string;
}

export interface IRfiFormCreateParams {
  senderId: string;
  supplierId: string;
  productId: string;
}

export interface IResRfq {
  status: string;
  statusText: string;
  message: string;
  data: IRfq[];
}

export interface IResRfi {
  status: string;
  statusText: string;
  message: string;
  data: IRfi[];
}
