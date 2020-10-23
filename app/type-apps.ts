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
  supplierCompanyEmail?: string;
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

export interface IApprove {
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
  branch: ICompanyTaxBranch
}

export interface ICompanyTaxBranch {
  id: string;
  name: string;
  address: string;
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
  social: ISocial;
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
  formGroupApprove: IQuotationFormGroupApprove;
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

export interface IQuotationFormGroupApprove {
  approve: IApprove[]
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

export interface IInquiryFormCreate {
  formGroupProduct: IInquiryFormGroupProduct;
  formGroupData: IInquiryFormGroupData;

}

export interface IInquiryFormGroupProduct {
  description: string;
  productQty: string;
  productUnit: string
}

export interface IInquiryFormGroupData {
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachment: string;
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
  productTitle: string;
  productKeywords: string;
  description: string;
  category: string;
  productQty: string;
  productUnit: string;
  productUnitPrice: string;
  shippingLoc: string;
  shippingMethods: string;
  paymentMethods: string;
  rfqScore: string
}

export interface IRFQFormGroupData {
  expiryDate: string;
  creditDay: string;
  shippingDate: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachments: string;
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
  docNo: string;
  docDate: string;
  creditDay: string;
  shippingDate: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachments: string;
}

export interface IPOFormGroupDataAccounting {
  subtotalAmount: string;
  TotalDiscountAmount: string;
  netAmount: string;
  vat: string;
  grandTotalAmount: string;
}

export interface IPOFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  approveId: string;
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
