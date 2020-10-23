export interface IResVideoList {
  message: string;
  data: IVideoList[];
}
export interface IVideoList {
  videoUrls: string;
  videoIFrame?: string;
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
  branch: ICompanyTaxBranch;
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
  companyTaxInfo: ICompanyTaxInfo;
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
  itemsPriceRow: string;
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
  subtotalAmount: number;
  totalDiscountAmount: number;
  netAmount: number;
  vat: number;
  grandTotalAmount: number;
  taxWithheldPercent: number;
  isVatInc: boolean;
}

export interface IQuotationFormGroupData {
  docNo: string;
  docDate: string;
  validUntilDate: string;
  expiryDate: string;
  creditDay: string;
  shippingDate: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachmentsUrl: string[];
}

export interface IQuotationFormGroupApprove {
  approve: IApprove[];
  stampUrl: string;
}

export interface IQuotationFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  rfqId: string;
}

export interface IQuotation
  extends IQuotationFormCreate,
    IQuotationFormCreateParams {
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

/*  interface inquiry  */

export interface IInquiryFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProduct: IInquiryFormGroupProduct;
  formGroupData: IInquiryFormGroupData;
}

export interface IInquiryFormGroupProduct {
  description: string;
  productQty: string;
  productUnit: string;
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

export interface IInquiry
  extends IInquiryFormCreate,
    IQuotationFormCreateParams {
  inquiryId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResInquiry {
  status: string;
  statusText: string;
  message: string;
  data: IInquiry[];
}

/*  interface RFQ  */

export interface IRFQFormCreate {
  formGroupProduct: IRFQFormGroupProduct;
  formGroupData: IRFQFormGroupData;
  formGroupSender: ISenderContact;
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
  rfqScore: string;
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
  rfqId: string;
  createdAt: string;
}

export interface IResRFQ {
  status: string;
  statusText: string;
  message: string;
  data: IRFQ[];
}

/*  interface PO  */

export interface IPOFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: IPOFormGroupData;
  formGroupDataAccounting: IPOFormGroupDataAccounting;
  formGroupApprove: IPOFormGroupApprove;
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
  attachments: string[];
}

export interface IPOFormGroupDataAccounting {
  subtotalAmount: string;
  totalDiscountAmount: string;
  netAmount: string;
  vat: string;
  grandTotalAmount: string;
}

export interface IPOFormGroupApprove {
  approve: IApprove[];
  stampUrl: string;
}

export interface IPOFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  approveId: string;
  quotationId: string;
}

export interface IPO extends IPOFormCreate, IPOFormCreateParams {
  purchaseorderId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResPO {
  status: string;
  statusText: string;
  message: string;
  data: IPO[];
}

/*  interface Sale order  */

export interface ISoFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: ISoFormGroupData;
  formGroupAccounting: ISoFormGroupAccounting;
  formGroupApprove: ISOFormGroupApprove;
}

export interface ISoFormGroupData {
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
  attechment: string[];
}

export interface ISoFormGroupAccounting {
  subtotalAmount: string;
  shippingCost: string;
  charges: string;
  depositAmount: string;
  totalDiscountAmount: string;
  netAmount: string;
  vat: string;
  grandTotalAmount: string;
}
export interface ISoFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  approveId: string;
  rfqId: string;
  quotationId: string;
}

export interface ISO extends ISoFormCreate, ISoFormCreateParams {
  quotationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResSO {
  status: string;
  statusText: string;
  message: string;
  data: ISO[];
}

export interface ISOFormGroupApprove {
  approve: IApprove[];
  stampUrl: string;
}

/*  interface Billing Note  */

export interface IBillFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: IBillFormGroupData;
  formGroupAccounting: IBillFormGroupAccounting;
  formGroupApprove: IBillFormGroupApprove;
}

export interface IBillFormGroupData {
  docNo: string;
  docDate: string;
  creditDate: string;
  paymentDueDate: string;
  paymentPeriod: string;
  totalPaymentPeriod: string;
  remainingAmount: string;
  bankingInfo: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
}

export interface IBillFormGroupAccounting {
  subtotalAmount: string;
  shippingCost: string;
  charges: string;
  totalDiscountAmount: string;
  netAmount: string;
  vat: string;
  grandTotalAmount: string;
  taxWithheldPercent: string;
  withholdingTax: string;
  totalPayAmount: string;
}

export interface IBillFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  approveId: string;
  quotationId: string;
  purchaesOrderId: string;
}

export interface IBill extends IBillFormCreate, IBillFormCreateParams {
  billingnoteId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResbill {
  status: string;
  statusText: string;
  message: string;
  data: IBill[];
}

export interface IBillFormGroupApprove {
  approve: IApprove[];
  stampUrl: string;
}

/* interface invoice */

export interface IInvFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: IInvFormGroupData;
  formGroupAccounting: IInvFormGroupAccounting;
  formGroupApprove: IInvFormGroupApprove;
}

export interface IInvFormGroupData {
  docNo: string;
  docDate: string;
  paymentDueDate: string;
  bankingInfo: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receivernote: string;
  sellerNote: string;
  buyerNote: string;
}

export interface IInvFormGroupAccounting {
  subtotalAmount: string;
  shippingCost: string;
  charges: string;
  totalDiscountAmount: string;
  netAmount: string;
  vat: string;
  grandTotalAmount: string;
  taxWithheldPercent: string;
  withholdingTax: string;
  totalPayAmount: string;
}

export interface IInvFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  approveId: string;
  quotationId: string;
  purchaesOrderId: string;
}

export interface IInv extends IInvFormCreate, IInvFormCreateParams {
  invoiceId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResinv {
  status: string;
  statusText: string;
  message: string;
  data: IInv[];
}

export interface IInvFormGroupApprove {
  approve: IApprove[];
  stampUrl: string;
}

/*  interface Tax invoice   */

export interface ITaxFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: ITaxFormGroupData;
  formGroupAccounting: ITaxFormGroupAccounting;
  formGroupApprove: ITaxFormGroupApprove;
}

export interface ITaxFormGroupData {
  docNo: string;
  docDate: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
}

export interface ITaxFormGroupAccounting {
  subtotalAmount: string;
  shippingCost: string;
  charges: string;
  totalDiscountAmount: string;
  netAmount: string;
  vat: string;
  grandTotalAmount: string;
}

export interface ITaxFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  approveId: string;
  quotationId: string;
  purchaesorderId: string;
}

export interface ITax extends ITaxFormCreate, ITaxFormCreateParams {
  taxinvoiceId: string;
  createdAt: string;
}

export interface IRestax {
  status: string;
  statusText: string;
  message: string;
  data: ITax[];
}

export interface ITaxFormGroupApprove {
  approve: IApprove[];
  stampUrl: string;
}
