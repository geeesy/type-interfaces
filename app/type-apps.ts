/* #region STUB: Version 3.x */

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

// TODO: cloned to type-company
export interface ISocial {
  line: string;
  facebook: string;
}

// TODO: cloned to type-company
export interface ICompanyBankingInfo {
  accountType: string
  bankName: string
  bankBranch: string
  accountNumber: string
}

// TODO: cloned to type-company
export interface ICompanyTaxInfo {
  taxNo: string;
  isHq: boolean;
  branch: ICompanyTaxBranch;
}

// TODO: cloned to type-company
export interface ICompanyTaxBranch {
  id: string;
  name: string;
  address: string;
}

// TODO: cloned to type-company
export interface ICompanyContactInfo {
  companyName: string;
  companyPhone: string[];
  companyFax?: string[];
  companyWebsite?: string[];
  companyEmail: string[];
  companySocial?: ISocial;
  contactAddress: string;
  billingAddress?: string;
  shippingAddress?: string;
  companyNote?: string;
  companyRegisNo: string;
  companyTaxInfo?: ICompanyTaxInfo;
}

export interface IPersonContactInfo {
  fullName: string;
  email: string[];
  mobile: string[];
  social?: ISocial;
  address?: string;
  note?: string;
}

export interface ISenderContact {
  senderContactInfo: IPersonContactInfo;
  senderCompanyContactInfo: ICompanyContactInfo;
}

export interface IReceiverContact {
  receiverContactInfo: IPersonContactInfo;
  receiverCompanyContactInfo: ICompanyContactInfo;
}

export interface IProductShort {
  productName: string;
  productCoverUrl: string;
}

export interface IProductRow {
  productId?: string;
  productName: string;
  productCoverUrl: string;
  productSku?: string;
  productUnitPrice: number;
  itemsPriceRow: number;
  productUnit: string;
  discountUnitPrice: number;
  productQty: number;
}

export interface IRfqProductRow {
  rfqProductRowIndex: number;
  productId?: string;
  productTitle: string;
  productImagesUrl: string[];
  productQty: number
  productUnit: string;
  productUnitPrice: number;
  description: string
}

export interface IPaymentTerm {
  percent: number;
  description: string;
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
  productQty: number;
  productUnit: string;
  productCurrency: string;
  productName: string;
  productCoverUrl: string;
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

export interface IInquiryList {
  inquiryId: string;
  sender: ISenderContact;
  receiver: IReceiverContact;
  productShort: IProductShort;
  statusInquirySender: string;
  statusInquiryReceiver: string;
  createdAt: string;
  updatedAt: string;
}

export interface IInquiry extends IInquiryFormCreateParams, IInquiryList {
  product: IInquiryFormGroupProduct
  data: IInquiryFormGroupData
}

export interface IResInquiryList {
  status: string;
  statusText: string;
  message: string;
  data: IInquiryList[];
}

export interface IResInquiry {
  status: string;
  statusText: string;
  message: string;
  data: IInquiry;
}
/* #endregion */

/* #region REVIEW: RFQ Market */

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
  productQty: number;
  productUnit: string;
  productCurrency: string;
  productUnitPrice: number;
}

export interface IRfqMarketFormGroupData {
  expiryDate: string;
  creditDay: number;
  shippingDate: string;
  attachmentsUrl: string[];
  shippingLoc: IShippingLoc;
  shippingMethods: string[];
  paymentMethod: string;
  rfqScore: number;
}

export interface IRfqMarketFormCreateParams {
  senderId: string;
}

export interface IRfqMarketFunnelParams extends IRfqMarketFormCreateParams {
  sellerId: string
}

export interface IRfqMarketList {
  rfqId: string
  sender: ISenderContact
  expiryDate: string;
  shippingDate: string;
  productTitle: string;
  productQty: number;
  productUnit: string;
  productCurrency: string;
  productUnitPrice: number;
  rfqScore: number;
  statusRfqSender: string;
  statusRfqReceiver: string;
  createdAt: string
  updatedAt: string
  senderId: string
}

export interface IRfqMarket extends IRfqMarketFormCreateParams, IRfqMarketList {
  product: IRfqMarketFormGroupProduct;
  data: IRfqMarketFormGroupData;
}

export interface IResRfqMarketList {
  status: string;
  statusText: string;
  message: string;
  data: IRfqMarketList[];
}

export interface IResRfqMarket {
  status: string;
  statusText: string;
  message: string;
  data: IRfqMarket;
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
  creditDay: number;
  shippingDate: string;
  remark: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachmentsUrl: string[];
  shippingLoc: IShippingLoc;
  shippingMethods: string[];
  paymentMethod: string;
  productCurrency: string;
  totalRfqAmount: number;
  rfqScore: number;
}

export interface IRfqFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
}

export interface IRfqList {
  rfqId: string;
  sender: ISenderContact;
  receiver: IReceiverContact;
  docNo: string;
  docDate: string;
  expiryDate: string;
  shippingDate: string;
  totalRfqAmount: number;
  productTitleFirst: string;
  productImageFirstUrl: string;
  statusRfqSender: string;
  statusRfqReceiver: string;
  statusApprovalFlow: string;
  statusReviewerAction: string;
  statusApproverAction: string;
  createdAt: string;
  updatedAt: string
  buyerId: string
  senderId: string
  totalRfqRow: number
  productCurrency: string
}

export interface IRfq extends IRfqFormCreateParams, IRfqList {
  product: IRfqProductRow[];
  data: IRfqFormGroupData;
  approver: IRfqFormGroupApprover
}

export interface IResRfqList {
  status: string;
  statusText: string;
  message: string;
  data: IRfqList[];
}

export interface IResRfq {
  status: string;
  statusText: string;
  message: string;
  data: IRfq;
}

/* #endregion */

/* #region FIXME: QUOTATION */
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
  discount: number;
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
  paymentTerm: IPaymentTerm[]
  bankingInfo: ICompanyBankingInfo[]
  shippingDate: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachmentsUrl: string[];
  productCurrency: string;
  shippingMethods: string[]
  paymentMethods: string[]
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

export interface IQuotationList {
  quotationId: string;
  sender: ISenderContact;
  receiver: IReceiverContact;
  docNo: string;
  docDate: string;
  productTitleFirst: string;
  productImageFirstUrl: string;
  grandTotalAmount: number;
  productCurrency: string
  statusQuotationSender: string;
  statusQuotationReceiver: string;
  statusApprovalFlow: string;
  statusReviewerAction: string;
  statusApproverAction: string;
  createdAt: string;
  updatedAt: string;
  senderId: string;
  sellerId: string
  creditDay: string;
  shippingDate: string;
}

export interface IQuotation extends IQuotationFormCreateParams, IQuotationList {
  products: IProductRow[]
  accounting: IQuotationFormGroupAccounting
  data: IQuotationFormGroupData
  approver: IQuotationFormGroupApprover
}

export interface IResQuotationList {
  status: string;
  statusText: string;
  message: string;
  data: IQuotationList[];
}

export interface IResQuotation {
  status: string;
  statusText: string;
  message: string;
  data: IQuotation;
}

/* #endregion */

/* #region FIXME: PO */
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

/* #region FIXME: SO */

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

/* #region FIXME: Billing Note */

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

/* #region FIXME: Invoice */

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

/* #region FIXME: TAX Invoice */

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
