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

/* #region  ANCHOR: QUOTATION */
export interface IQuotationFormCreate {
  senderContact: string[];
  receiverContact: string[];
  buyerContact: string[];
  sellerContact: string[];
  quoProductsData: IQuoProduct[];
  quoNote: string;
  quoAttachments: string[];
  quoTotalPrice: string;
  quoTotalDiscountPrice: string;
  quoCreditTerm: string;
  quoNo: string;
  quoDate: string;
  quoExpiryDate: string;
  quoShippingDate: string;
}

export interface IQuotationFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
}

export interface IQuotation extends IQuotationFormCreate, IQuotationFormCreateParams {
  quotationId: string;
}

export interface IQuoProduct {
  productId: string;
  productName: string;
  discountUnitPrice: string;
  unitPrice: string;
  productQty: string
  productUnit: string;
}

export interface IResQuotation {
  status: string;
  statusText: string;
  message: string;
  data: IQuotation[];
}

/* #endregion */

/* #region  ANCHOR: RFQ */
export interface IRfqFormCreate {
  formGroupProduct: IRfqFormGroupProduct
  formGroupRequest: IRfqFormGroupRequest
  formGroupSeller: IRfqFormGroupSeller
  formGroupBuyer: IRfqFormGroupBuyer
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
  sellerSizes: string[];
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
  buyerCompanyAddress: string;
}

export interface IRfqFormCreateParams {
  rfqScore: number;
  senderId: string;
}

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

export interface IResRfq {
  status: string;
  statusText: string;
  message: string;
  data: IRfq[];
}
/* #endregion */

/* #region  ANCHOR: INQUIRY (RFI) */
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

export interface IRfiFormCreateParams {
  senderId: string;
  supplierId: string;
  productId: string;
}

export interface IRfi extends IRfiFormGroupProduct, IRfiFormGroupRequest, IRfiFormGroupBuyer, IRfiFormCreateParams {
  rfiId: string;
}

export interface IResRfi {
  status: string;
  statusText: string;
  message: string;
  data: IRfi[];
}
/* #endregion */
