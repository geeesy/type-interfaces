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

export interface IshippingLoc {
  lat: string;
  lng: string;
  state: string;
  city: string;
}

export interface ISOcial {
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
  companySocial: ISOcial;
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
  social: ISOcial;
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

/* #region REVIEW: INQUIRY */

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
  attachmentsUrl: string[];
}

export interface IInquiryFormCreateParams {
  senderId: string;
  receiverId: string;
  sellerId: string;
  buyerId: string;
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

/* #endregion */

/* #region REVIEW: RFQ */
export interface IRfqFormCreate {
  formGroupProduct: IRfqFormGroupProduct;
  formGroupData: IRfqFormGroupData;
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupApprove: IRfqFormGroupApprove;
}

export interface IRfqFormGroupApprove {
  approve: IApprove[];
  stampUrl: string;
}

export interface IRfqFormGroupProduct {
  productTitle: string;
  productKeywords: string;
  description: string;
  category: string;
  productQty: string;
  productUnit: string;
  productUnitPrice: string;
  shippingLoc: IshippingLoc;
  shippingMethods: string;
  paymentMethods: string;
  rfqScore: string;
}

export interface IRfqFormGroupData {
  expiryDate: string;
  creditDay: string;
  shippingDate: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachmentsUrl: string[];
}

export interface IRfqFormCreateParams {
  senderId: string;
  receiverId: string;
  sellerId: string;
}

export interface IRfq extends IRfqFormCreate, IRfqFormCreateParams {
  rfqId: string;
  createdAt: string;
}

export interface IResRFQ {
  status: string;
  statusText: string;
  message: string;
  data: IRfq[];
}

/* #endregion */

/* #region REVIEW: PO */
export interface IPOFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: IPOFormGroupData;
  formGroupAccounting: IPOFormGroupAccounting;
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
  attachmentsUrl: string[];
}

export interface IPOFormGroupAccounting {
  subtotalAmount: number;
  totalDiscountAmount: number;
  netAmount: number;
  vat: number;
  grandTotalAmount: number;
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
  rfqId: string;
  quotationId: string;
}

export interface IPO extends IPOFormCreate, IPOFormCreateParams {
  purchaseOrderId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResPO {
  status: string;
  statusText: string;
  message: string;
  data: IPO[];
}

/* #endregion */

/* #region REVIEW: SO */

export interface ISOFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: ISOFormGroupData;
  formGroupAccounting: ISOFormGroupAccounting;
  formGroupApprove: ISOFormGroupApprove;
}

export interface ISOFormGroupData {
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
  attachmentsUrl: string[];
}

export interface ISOFormGroupAccounting {
  subtotalAmount: number;
  shippingCost: number;
  charges: number;
  depositAmount: number;
  totalDiscountAmount: number;
  netAmount: number;
  vat: number;
  grandTotalAmount: number;
}
export interface ISOFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  rfqId: string;
  quotationId: string;
  purchaseOrderId: string;
}

export interface ISOFormGroupApprove {
  approve: IApprove[];
  stampUrl: string;
}

export interface ISO extends ISOFormCreate, ISOFormCreateParams {
  salesOrderId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResSO {
  status: string;
  statusText: string;
  message: string;
  data: ISO[];
}

/* #endregion */

/* #region REVIEW: Billing Note */

export interface IBillingNoteFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: IBillingNoteFormGroupData;
  formGroupAccounting: IBillingNoteFormGroupAccounting;
  formGroupApprove: IBillingNoteFormGroupApprove;
}

export interface IBillingNoteFormGroupData {
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

export interface IBillingNoteFormGroupAccounting {
  subtotalAmount: number;
  shippingCost: number;
  charges: number;
  totalDiscountAmount: number;
  netAmount: number;
  vat: number;
  grandTotalAmount: number;
  taxWithheldPercent: number;
  withholdingTax: number;
  totalPayAmount: number;
}

export interface IBillingNoteFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  quotationId: string;
  purchaseOrderId: string;
}

export interface IBillingNote extends IBillingNoteFormCreate, IBillingNoteFormCreateParams {
  billingNoteId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResBillingNote {
  status: string;
  statusText: string;
  message: string;
  data: IBillingNote[];
}

export interface IBillingNoteFormGroupApprove {
  approve: IApprove[];
  stampUrl: string;
}

/* #endregion */

/* #region  Invoice */

export interface IInvoiceFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: IInvoiceFormGroupData;
  formGroupAccounting: IInvoiceFormGroupAccounting;
  formGroupApprove: IInvoiceFormGroupApprove;
}

export interface IInvoiceFormGroupData {
  docNo: string;
  docDate: string;
  paymentDueDate: string;
  bankingInfo: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
}

export interface IInvoiceFormGroupAccounting {
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

export interface IInvoiceFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  quotationId: string;
  purchaseOrderId: string;
}

export interface IInvoice extends IInvoiceFormCreate, IInvoiceFormCreateParams {
  invoiceId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResinv {
  status: string;
  statusText: string;
  message: string;
  data: IInvoice[];
}

export interface IInvoiceFormGroupApprove {
  approve: IApprove[];
  stampUrl: string;
}

/*  interface Tax invoice   */

export interface ITaxFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: ITaxFormGroupData;
  formGroupAccounting: ITaxFormGroupDataAccounting;
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

export interface ITaxFormGroupDataAccounting {
  subtotalAmount: number;
  shippingCost: number;
  charges: number;
  totalDiscountAmount: number;
  netAmount: number;
  vat: number;
  grandTotalAmount: number;
}

export interface ITaxFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  quotationId: string;
  purchaseOrderId: string;
}

export interface ITax extends ITaxFormCreate, ITaxFormCreateParams {
  taxInvoiceId: string;
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
