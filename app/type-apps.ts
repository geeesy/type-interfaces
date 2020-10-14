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

// REVIEW: RFQ

export interface IRfqCreate {
  productTitle: string;
  productKeywords: string[];
  productCategoryId: string;
  productQty: string;
  productUnit: string;
  productUnitPrice: string;
  productCurrency: string;
  productDescription: string;
  productImagesUrl: string;
  timeQuotationToExpired: string;
  shippingLoc: string[];
  shippingMethods: string[];
  shippingTimePeriod: string[];
  creditTerm: string;
  paymentMethods: string[];
  sellerSizes: string[];
  sellerBusinessTypes: string[];
  sellerAges: string[];
  sellerProvinces: string[];
  sellerCertificate: boolean;
  sellerVerifiedByGeeesy: boolean;
  buyerFullName: string;
  buyerEmail: string;
  buyerMobile: string;
  buyerCompany: string;
  buyerCompanyPhone: string;
  buyerContactAddress: string;
  rfqScore: number;
}

export interface IRfq extends IRfqCreate {
  rfqId: string;
}

export interface IResRfq {
  status: string;
  statusText: string;
  message: string;
  data: IRfq[];
}
