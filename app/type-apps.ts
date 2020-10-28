/* eslint-disable no-unused-vars */
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

/* #region STUB: Version 2.x */

export interface IApprove {
  nameTitle: string;
  fullName: string;
  position: string;
  signatureUrl: string;
}

export interface IApprovalRule {
  rfqTypeR: boolean
  quotationTypeM: boolean
  quotationTypeR: boolean
  quotationTypeD: boolean
  poTypeR: boolean
  poTypeS: boolean
  poTypeD: boolean
  soTypeR: boolean
  soTypeS: boolean
  soTypeD: boolean
}

export interface IApproverFormCreate {
  formGroupPerson: IApprove
  formGroupApprovalRule: IApprovalRule
}

export interface IApproverFormCreateParams {
  sellerId: string
  buyerId: string
}

export interface IApprover extends IApproverFormCreate, IApproverFormCreateParams {
  approverId: string
  createdAt: string
  updatedAt: string
}

export interface IResApprover {
  status: string;
  statusText: string;
  message: string;
  data: IApprover[];
}

export interface IShippingLoc {
  lat: string;
  lng: string;
  state: string;
  city: string;
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

export interface IRfqProductRow {
  rfqProductId: string;
  productId?: string;
  productTitle: string;
  productImagesUrl: string[];
  productQty: string
  productUnit: string;
  productUnitPrice: string;
  productCurrency: string;
  description: string
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
  productCurrency: string;
}

export interface IInquiryFormGroupData {
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachmentsUrl: string[];
}

export interface IInquiryFormCreateParams {
  productId: string;
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
}

export interface IInquiry extends IInquiryFormCreateParams {
  inquiryId: string;
  sender: ISenderContact;
  receiver: IReceiverContact;
  product: IInquiryFormGroupProduct
  data: IInquiryFormGroupData
  statusInquirySender: string;
  statusInquiryReceiver: string;
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

/* #region ANCHOR: RFQ Market */

export interface IRfqMarketFormCreate {
  formGroupProduct: IRfqMarketFormGroupProduct;
  formGroupData: IRfqMarketFormGroupData;
  formGroupSender: ISenderContact;
  formGroupFunnel: IRfqMarketFormGroupFunnel;
}

export interface IRfqMarketFormGroupFunnel {
  businessSizes: string[]
  businessTypes: string[]
  companyAge: string
  haveCertificate: boolean
  haveVerified: boolean
  companyProvinces: string[]
}

export interface IRfqMarketFormGroupProduct {
  productTitle: string;
  productKeywords: string[];
  description: string;
  category: string;
  productQty: string;
  productUnit: string;
  productCurrency: string;
  productUnitPrice: string;
  shippingLoc: IShippingLoc;
  shippingMethods: string[];
  paymentMethod: string;
  rfqScore: string;
}

export interface IRfqMarketFormGroupData {
  expiryDate: string;
  creditDay: string;
  shippingDate: string;
  receiverNote: string;
  sellerNote: string;
  attachmentsUrl: string[];
}

export interface IRfqMarketFormCreateParams {
  senderId: string;
  receiverId: string;
  sellerId: string;
}

export interface IRfqMarket extends IRfqMarketFormCreateParams {
  rfqId: string;
  product: IRfqMarketFormGroupProduct;
  data: IRfqMarketFormGroupData;
  sender: ISenderContact;
  funnelsData: IRfqMarketFormGroupFunnel;
  statusRfqSender: string;
  statusRfqReceiver: string;
  createdAt: string;
}

export interface IResRfqMarket {
  status: string;
  statusText: string;
  message: string;
  data: IRfqMarket[];
}

/* #endregion */

/* #region REVIEW: RFQ */
export interface IRfqFormCreate {
  formGroupProducts: IRfqProductRow[];
  formGroupData: IRfqFormGroupData;
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupApprover: IRfqFormGroupApprover
}

export interface IRfqFormGroupApprover {
  approve: IApprove[];
  stampUrl: string;
}

export interface IRfqFormGroupData {
  docNo: string;
  docDate: string;
  expiryDate: string;
  shippingDate: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachmentsUrl: string[];
  shippingLoc: IShippingLoc;
  shippingMethods: string[];
  paymentMethod: string;
}

export interface IRfqFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
}

export interface IRfq extends IRfqFormCreateParams {
  rfqId: string;
  product: IRfqProductRow[];
  data: IRfqFormGroupData;
  sender: ISenderContact;
  receiver: IReceiverContact;
  approver: IRfqFormGroupApprover
  statusRfqSender: string;
  statusRfqReceiver: string;
  statusApprovalFlow: string;
  createdAt: string;
}

export interface IResRFQ {
  status: string;
  statusText: string;
  message: string;
  data: IRfq[];
}

/* #endregion */

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

export interface IQuotationFormGroupApprover {
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

export interface IQuotation extends IQuotationFormCreateParams {
  quotationId: string;
  sender: ISenderContact;
  receiver: IReceiverContact;
  products: IProductRow[]
  accounting: IQuotationFormGroupAccounting
  data: IQuotationFormGroupData
  approver: IQuotationFormGroupApprover
  statusQuotationSender: string;
  statusQuotationReceiver: string;
  statusApprovalFlow: string;
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

/* #region REVIEW: PO */
export interface IPOFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: IPOFormGroupData;
  formGroupAccounting: IPOFormGroupAccounting;
  formGroupApprover: IPOFormGroupApprover;
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

export interface IPOFormGroupApprover {
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

export interface IPO extends IPOFormCreateParams {
  purchaseOrderId: string;
  sender: ISenderContact;
  receiver: IReceiverContact;
  products: IProductRow[]
  data: IPOFormGroupData
  accounting: IPOFormGroupAccounting
  approver: IPOFormGroupApprover
  statusPOSender: string;
  statusPOReceiver: string;
  statusApprovalFlow: string;
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
  formGroupApprover: ISOFormGroupApprover;
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

export interface ISOFormGroupApprover {
  approve: IApprove[];
  stampUrl: string;
}

export interface ISO extends ISOFormCreate, ISOFormCreateParams {
  salesOrderId: string;
  statusSOSender: string;
  statusSOReceiver: string;
  statusApprovalFlow: string;
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
  formGroupApprover: IBillingNoteFormGroupApprover;
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
  statusDocSender: string;
  statusApprovalFlow: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResBillingNote {
  status: string;
  statusText: string;
  message: string;
  data: IBillingNote[];
}

export interface IBillingNoteFormGroupApprover {
  approve: IApprove[];
  stampUrl: string;
}

/* #endregion */

/* #region REVIEW: Invoice */

export interface IInvoiceFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: IInvoiceFormGroupData;
  formGroupAccounting: IInvoiceFormGroupAccounting;
  formGroupApprover: IInvoiceFormGroupApprover;
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

export interface IInvoiceFormGroupApprover {
  approve: IApprove[];
  stampUrl: string;
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
  statusDocSender: string;
  statusApprovalFlow: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResInvoice {
  status: string;
  statusText: string;
  message: string;
  data: IInvoice[];
}
/* #endregion */

/* #region REVIEW: TAX Invoice */

export interface ITaxInvoiceFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: ITaxInvoiceFormGroupData;
  formGroupAccounting: ITaxInvoiceFormGroupAccounting;
  formGroupApprover: ITaxInvoiceFormGroupApprover;
}

export interface ITaxInvoiceFormGroupData {
  docNo: string;
  docDate: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
}

export interface ITaxInvoiceFormGroupAccounting {
  subtotalAmount: number;
  shippingCost: number;
  charges: number;
  totalDiscountAmount: number;
  netAmount: number;
  vat: number;
  grandTotalAmount: number;
}

export interface ITaxInvoiceFormGroupApprover {
  approve: IApprove[];
  stampUrl: string;
}

export interface ITaxInvoiceFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  quotationId: string;
  purchaseOrderId: string;
}

export interface ITaxInvoice extends ITaxInvoiceFormCreate, ITaxInvoiceFormCreateParams {
  taxInvoiceId: string;
  statusDocSender: string;
  statusApprovalFlow: string;
  createdAt: string;
}

export interface IResTaxInvoice {
  status: string;
  statusText: string;
  message: string;
  data: ITaxInvoice[];
}
/* #endregion */
