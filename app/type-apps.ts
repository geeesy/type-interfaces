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

// === === === STUB: Version 2.x

export interface IApprover {
  nameTitle: string;
  fullName: string;
  position: string;
  signatureUrl: string;
}

export interface ISocial {
  line: string;
  facebook: string;
}

export interface ICompanyTaxInfo {
  regisNo: string;
  taxNo: string;
  isHq: boolean;
  branch: {
    id: string;
    name: string;
    address: string;
  }
}

export interface ICompanyContactInfo {
  companyName: string;
  companyPhone: string[];
  companyFax: string[];
  companyWebsite: string[];
  companyEmail: string[];
  companySocial: ISocial;
  contactAddress: string;
  billingAddress: string;
  shippingAddress: string;
  companyNote: string;
  companyTaxInfo: ICompanyTaxInfo
}

export interface IPersonContactInfo {
  fullName: string;
  email: string[];
  mobile: string[];
  social: ISocial[];
  address: string;
  note: string;
}

export interface ISenderContact {
  senderContactInfo: IPersonContactInfo;
  senderCompanyContactInfo: ICompanyContactInfo;
}

export interface IReceiverContact {
  receiverContactInfo: IPersonContactInfo;
  receiverCompanyContactInfo: ICompanyContactInfo;
}

export interface IProductRow {
  productId: string;
  productName: string;
  productCoverUrl: string;
  productSku: string;
  productUnitPrice: string;
  productUnit: string;
  discountUnitPrice: string;
  productQty: string;
}

/* #region  REVIEW: QUOTATION */
export interface IQuotationFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupAccounting: IQuotationFormGroupAccounting;
  formGroupData: IQuotationFormGroupData;
  formGroupApprover: IQuotationFormGroupApprover;
}

export interface IQuotationFormGroupAccounting {
  subtotalAmount: number
  totalDiscountAmount: number
  netAmount: number
  vat: number
  grandTotalAmount: number
  taxWithheldPercent: number
  isVatInc: boolean;
}

export interface IQuotationFormGroupData {
  docNo: string;
  docDate: string;
  validUntilDate: string;
  expiryDate: string;
  creditDay: string;
  shippingDate: string;
  remark: string
  termsCondition: string;
  senderNote: string
  receiverNote: string
  sellerNote: string
  buyerNote: string
  attachmentsUrl: string[]
}

export interface IQuotationFormGroupApprover {
  approver: IApprover[]
  stampUrl: string
}

export interface IQuotationFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  rfqId: string;
}

export interface IQuotation extends IQuotationFormCreate, IQuotationFormCreateParams {
  quotationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResQuotation {
  status: string;
  statusText: string;
  message: string;
  data: IQuotation[];
}

/* #endregion */

/* #region  FIXME: RFQ */
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

export interface IRfqList {
  createdAt: string;
  productImageUrl: string;
  productTitle: string;
  productQty: string;
  productUnit: string;
  buyerFullName: string;
  buyerEmail: string;
  buyerMobile: string;
  buyerCompany: string;
  buyerCompanyPhone: string;
  buyerCompanyAddress: string;
  rfqScore: number;
  shippingTimePeriod: string;
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

/* #region  FIXME: INQUIRY (RFI) */
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

export interface IInquiryFormCreate {
  formGroupProduct: IInquiryFormGroupProduct;
  formGoupData: IInquiryFormGroupData;

}

export interface IInquiryFormGroupProduct {
  description: String;
  productqty: String;
  productUnit: String
}

export interface IInquiryFormGroupData {
  senderNote: string;
  receiverNote: String;
  sellerNote: String;
  buyyerNote: String;
  attachment: String;
}

export interface IInquiryFormCreateParams {
  senderId: string;
  receiverId: string;
  sellerId: string;
  rfqId: string;
}

export interface IInquiry extends IInquiryFormCreate, IQuotationFormCreateParams {
  quotationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResInquiry {
  status: string;
  statusText: string;
  message: string;
  data: IInquiry[];
}

export interface IRFQFormCreate {
  formGroupProduct: IRFQFormGroupProduct;
  formGroupData: IRFQFormGroupData;
}

export interface IRFQFormGroupProduct {
  productTitle: String;
  productKeywords: String;
  description: String;
  category: String;
  productQty: String;
  productUnit: String;
  productUnitPrice: String;
  shippingLoc: String;
  shippingMethods: String;
  paymentMethods: String;
  rfqScore: String
}

export interface IRFQFormGroupData {
  expiryDate: String;
  creditDay: String;
  shippingDate: String;
  senderNote: String;
  receiverNote: String;
  sellerNote: String;
  buyerNote: String;
  attachments: String;
}

export interface IRFQFormCreateParams {
  senderId: string;
  receiverId: string;
  sellerId: string;
}

export interface IRFQ extends IRFQFormCreate, IRFQFormCreateParams {
  quotationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResRFQ {
  status: string;
  statusText: string;
  message: string;
  data: IRFQ[];
}

export interface IPOFormCreate {
  formGroupProducts: IProductRow[];
  formGroupData: IPOFormGroupData;
  formGroupDataAccounting: IPOFormGroupDataAccounting;
}

export interface IPOFormGroupData {
  docNo: String;
  docDate: String;
  creditDay: String;
  shippingDate: String;
  remark: String;
  termsCondition: String;
  senderNote: String;
  reciverNote: String;
  sellerNote: String;
  buyerNote: String;
  attachments: String;
}

export interface IPOFormGroupDataAccounting {
  subtotalAmount: String;
  TotaldiscountAmount: String;
  netAmount: String;
  vat: String;
  grandTotalAmount: String;
}

export interface IPOFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  approverId: String;
  rfqId: string;
  quotationId: string;
}

export interface IPO extends IPOFormCreate, IPOFormCreateParams {
  quotationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResPO {
  status: string;
  statusText: string;
  message: string;
  data: IPO[];
}