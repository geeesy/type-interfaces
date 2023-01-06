/* #region STUB: Version 3.x */

import { GappSetting } from '.';
import {
  DocFinanceSeqIdCount,
  DocOrderSeqIdCount,
  DocUTMCount,
  DocWorkSeqIdCount,
  StatusPoolJoining,
  StatusPoolShippingMainBuyer,
  StatusPoolShippingSubBuyer
} from './enum-const';
import { StatusApprovalFlow, StatusDocSender, StatusQuotationSender } from './enum-status';
import { IAddress, ICompanyContactInfo } from './type-company';
import { IOrderLinkDataOnConfirm, IOrderLinkImmuDataOnConfirm } from './type-order';
import {ITagAttr} from "./type-facebook";

export interface IUpdateDocStatus {
  existingDocStatus: StatusDocSender
  newDocStatus: StatusDocSender
}

export interface IUpdateQuotationStatus {
  existingQuotationStatus: StatusQuotationSender
  newQuotationStatus: StatusQuotationSender
}

export interface IDBActivityLog {
  latestNoteOnAction: string;
  latestActionBy: string | null; // ? use to identify action -> buyer (null) or seller (identityId)
  latestActionByFullName: string // ? -> firstName + lastName
}


export interface IDBCompanyDocHeader {
  receiverCompLogo: string;
  senderCompLogo: string;
}

export interface IDocWorkCount {
  [DocWorkSeqIdCount.inquiry]: number;
  [DocWorkSeqIdCount.rfq]: number;
  [DocWorkSeqIdCount.quotation]: number;
  [DocWorkSeqIdCount.po]: number;
  [DocWorkSeqIdCount.so]: number;
  [DocWorkSeqIdCount.billingNote]: number;
  [DocWorkSeqIdCount.invoice]: number;
  [DocWorkSeqIdCount.receipt]: number;
}

export interface ISalePageUTMCount {
  [DocUTMCount.website]: number;
  [DocUTMCount.facebook]: number;
  [DocUTMCount.instagram]: number;
  [DocUTMCount.line]: number;
  [DocUTMCount.youtube]: number;
  [DocUTMCount.whatsapp]: number;
  [DocUTMCount.wechat]: number;
  [DocUTMCount.other]: number;
}

export interface IDocFinanceCount {
  [DocFinanceSeqIdCount.receipt]: number;
  [DocFinanceSeqIdCount.taxInvoice]: number;
}

export interface IDocOrderCount {
  [DocOrderSeqIdCount.order]: number;
  [DocOrderSeqIdCount.market]: number;
}

export interface IApprove {
  nameTitle: string;
  fullName: string;
  position: string;
  signatureUrl: string;
}

export interface IApprovalRule {
  rfqTypeR: boolean;
  quotationTypeM: boolean;
  quotationTypeR: boolean;
  quotationTypeD: boolean;
  poTypeR: boolean;
  poTypeS: boolean;
  poTypeD: boolean;
  soTypeR: boolean;
  soTypeS: boolean;
  soTypeD: boolean;
}

export interface IApproverFormCreate {
  formGroupPerson: IApprove;
  formGroupApprovalRule: IApprovalRule;
}

export interface IApproverFormCreateParams {
  sellerId: string;
  buyerId: string;
}

export interface IApprover
  extends IApproverFormCreate,
    IApproverFormCreateParams {
  approverId: string;
  createdAt: string;
  updatedAt: string;
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
  accountType: string;
  bankName: string;
  bankBranch: string;
  accountNumber: string;
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

export interface IPersonContactInfo {
  fullName: string;
  emails: string[];
  mobiles: string[];
  social?: ISocial;
  address?: IAddress;
  note?: string;
  shippingAddress?: IAddress[];
  personPic: string;
  tags: string[];
  prefixName: string;
}

// STUB: VENDOR
export type TVendorType = 'seller' | 'buyer' | 'multi' | 'other';

export interface IVendorFromFacebook {
  facebookUserId: string;
  tags: ITagAttr[],
  isBlocked: boolean
}

export interface IVendorCreate extends ICompanyContactInfo,IVendorFromFacebook {
  companyLogoUrl: string;
  companyLogoThumbUrl: string; // * Scale down on init
  contactPersons: IPersonContactInfo[];
  vendorType: TVendorType;
  remark: string;
  note: string;
  isCompanyVendor: boolean;
}

export interface IRefVendorList {
  createdAt: string;
  updatedAt: string;
  companyLogoThumbUrl: string;
  companyName: string;
  contactAddress: IAddress;
  contactPersons: IPersonContactInfo[];
  companyPhones: string[];
  companyEmails: string[];
  companyNote?: string;
  vendorId: string;
  vendorType: TVendorType;
  isCompanyVendor: boolean;
  tags: string[];
  facebookUserId:string
}

export interface IVendor extends IVendorCreate {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  vendorId: string;
  customerId: string;
  relCompId: string;
  hasArchived: boolean;
}

export interface ICompanyOnList {
  compId: string; // * Company have, BUT Vendor maybe
  contact: ICompanyContactInfo;
  companyLogoThumbUrl: string;
  supplierId: string; // * Vendor have, BUT Company maybe
  //! INDEX on CORE
  isVerified: boolean;
  rating: number;
  score: number;
  isActive: boolean;
  isRecommend: boolean;
  isHighlight: boolean;
  impFactor: number;
}

export interface IVendorRequestList extends ICompanyOnList {
  createdAt: string;
  updatedAt: string;
  requestId: string;
  vendorType: TVendorType;
}

export interface ICompRequestVendor {
  companyParams: {
    // ? sender
    compId: string;
    companyCode: string;
    businessId: string;
    senderId: string; // ? identityId
  };
  vendorParams: {
    // ? receiver
    supplierId: string;
    compId: string;
    receiverId: string;
  };
  vendorType: TVendorType;
}

export interface ICredentialCompany {
  compId: string;
  companyCode: string;
  businessId: string;
  supplierId: string;
}

// ! ONLY ON DB
export interface IDBVendorRequest {
  createdAt: string;
  updatedAt: string;
  companyInfo: ICompanyOnList;
  vendorInfo: ICompanyOnList;
  requestId: string;
  senderId: string;
  receiverId: string;
  vendorType: TVendorType;
  acceptedAt?: string;
  idOnCompany: ICredentialCompany;
  idOnVendor: ICredentialCompany;
}

export interface IVendorRequestAccept {
  vendorParams: {
    compId: string;
    supplierId: string;
    companyCode: string;
    businessId: string;
    acceptorId: string;
  };
  companyParams: {
    compId: string;
  };
  requestId: string;
  vendorType: TVendorType;
  vendorTypeOnAccept: TVendorType;
}

export interface ISenderContact {
  senderContactInfo: IPersonContactInfo;
  senderCompanyContactInfo: ICompanyContactInfo;
}

export interface IReceiverContact {
  receiverContactInfo: IPersonContactInfo;
  receiverCompanyContactInfo: ICompanyContactInfo;
}

export interface IReceiverManyContact extends IReceiverContact {
  receiverId: string;
  sellerId: string;
}

export interface IProductShort {
  productName: string;
  productCoverUrl: string;
}

export interface IProductRowEntity {
  productRowIndex: number;
  productId?: string;
  productTitle: string;
  productUnitPrice: number;
  productUnit: string;
  productQty: number;
  productInfo?: string;
  isOption: boolean;
}

export interface IProductRow extends IProductRowEntity {
  productCoverUrl: string;
  productSku?: string;
  discountUnitPrice: number;
  isDiscountOnPercent: boolean;
  itemsPriceRow: number;
}

export interface IRfqProductRow extends IProductRowEntity {
  rfqProductRowIndex: number;
  productImagesUrl: string[];
}

export interface IRfqQuoProductRow extends IProductRow {
  rfqProductRowIndex: number;
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
  productImagesUrl: string[];
}

export interface IInquiryFormGroupData {
  docNo: string;
  docDate: string;
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
  senderId: string;
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
  product: IInquiryFormGroupProduct;
  data: IInquiryFormGroupData;
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
  businessSizes: string[];
  businessTypes: string[];
  companyAge: string;
  haveCertificate: boolean;
  haveVerified: boolean;
  companyProvinces: string[];
}

export interface IRfqMarketFunnel {
  funnel: IRfqMarketFormGroupFunnel;
}

export interface IRfqMarketFormGroupProduct {
  productTitle: string;
  productKeywords: string[];
  description: string;
  categoryId: string;
  categoryName: string;
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
  sellerId: string;
}

export interface IRfqMarketList {
  rfqId: string;
  sender: ISenderContact;
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
  createdAt: string;
  updatedAt: string;
  senderId: string;
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
  formGroupApprover: IRfqFormGroupApprover;
}

export interface IRfqManyFormCreate {
  formGroupProducts: IRfqProductRow[];
  formGroupData: IRfqFormGroupData;
  formGroupSender: ISenderContact;
  formGroupApprover: IRfqFormGroupApprover;
  formGroupReceivers: IReceiverManyContact[];
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

export interface IRfqManyFormCreateParams {
  senderId: string;
  buyerId: string;
  rfqCount: number;
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
  updatedAt: string;
  buyerId: string;
  senderId: string;
  totalRfqRow: number;
  productCurrency: string;
  isMany?: boolean;
}

export interface IRfq extends IRfqFormCreateParams, IRfqList {
  products: IRfqProductRow[];
  data: IRfqFormGroupData;
  approver: IRfqFormGroupApprover;
  receivers?: IReceiverManyContact[];
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

export interface IQuotationRfqFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProductsRfq: IRfqProductRow[]; // from RFQ
  formGroupProductsRfqQuo: IRfqQuoProductRow[]; // Quotation from RFQ
  formGroupAccounting: IQuotationFormGroupAccounting;
  formGroupData: IQuotationFormGroupData;
  formGroupApprover: IQuotationFormGroupApprover;
}

export interface IQuotationFormGroupAccounting {
  subtotalAmount: number;
  shippingCost: number;
  charges: number;
  discount: number;
  totalDiscountAmount: number;
  netAmount: number;
  vat: number;
  grandTotalAmount: number;
  taxWithheldPercent: number;
  withholdingTax: number;
  totalPayAmount: number;
  isVatInc: boolean;
  isDiscountOnPercent: boolean;
}

export interface IQuotationFormGroupData {
  docNo: string;
  docDate: string;
  validUntilDate: string;
  expiryDate: string;
  creditDay: number;
  paymentTerm: IPaymentTerm[];
  bankingInfo: ICompanyBankingInfo[];
  shippingDate: string;
  shippingMethods: string[];
  shippingInfo: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachmentsUrl: string[];
  productCurrency: string;
  paymentMethods: string[];
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
  docNo?: string;
  docDate?: string;
  productTitleFirst: string;
  productImageFirstUrl: string;
  grandTotalAmount: number;
  productCurrency: string;
  statusQuotationSender: string;
  statusQuotationReceiver: string;
  statusApprovalFlow: string;
  statusReviewerAction: string;
  statusApproverAction: string;
  createdAt: string;
  updatedAt: string;
  senderId: string;
  sellerId: string;
  creditDay?: number;
  shippingDate?: string;
}

export interface IQuotationRfqList extends IQuotationList {
  rfqId: string;
}

export interface IQuotation extends IQuotationFormCreateParams, IQuotationList {
  products: IProductRow[];
  accounting: IQuotationFormGroupAccounting;
  data: IQuotationFormGroupData;
  approver: IQuotationFormGroupApprover;
}

export interface IQuotationRfq
  extends IQuotationFormCreateParams,
    IQuotationList {
  products: IRfqQuoProductRow[];
  productsRfq: IRfqProductRow[];
  accounting: IQuotationFormGroupAccounting;
  data: IQuotationFormGroupData;
  approver: IQuotationFormGroupApprover;
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

/* export interface IResQuotationRfqList {
  status: string;
  statusText: string;
  message: string;
  data: IQuotationList[];
} */

export interface IResQuotationRfq {
  status: string;
  statusText: string;
  message: string;
  data: IQuotationRfq;
}

/* #endregion */

// STUB: Quotation Compare List
export interface IWeightScoreRow {
  comment: string;
  weight: number;
  score: number;
}

export interface IQuotationScore {
  price: IWeightScoreRow;
  option: IWeightScoreRow;
  vendorHistory: IWeightScoreRow;
  companyCapital: IWeightScoreRow;
  creditTerm: IWeightScoreRow;
  totalScore: number;
}

export interface IQuotationCompareColumn {
  sender: ISenderContact;
  products: IProductRowEntity[];
  totalProductPrice: number;
  options: IProductRowEntity[];
  totalOptionPrice: number;
  paymentTerm: IPaymentTerm[];
  creditDay: number;
  shippingDate: string;
  shippingMethods: string[];
  shippingInfo: string;
  weightedScore: IQuotationScore;
  note: string;
}

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
  creditDay: number;
  shippingDate: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachmentsUrl: string[];
  productCurrency: string;
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

export interface IPOList {
  purchaseOrderId: string;
  sender: ISenderContact;
  receiver: IReceiverContact;
  docNo: string;
  docDate: string;
  productTitleFirst: string;
  productImageFirstUrl: string;
  grandTotalAmount: number;
  productCurrency: string;
  statusPOSender: string;
  statusPOReceiver: string;
  statusApprovalFlow: string;
  statusReviewerAction: string;
  statusApproverAction: string;
  createdAt: string;
  updatedAt: string;
  senderId: string;
  sellerId: string;
  buyerId: string;
  creditDay: number;
  shippingDate: string;
}

export interface IPO extends IPOFormCreateParams, IPOList {
  products: IProductRow[];
  data: IPOFormGroupData;
  accounting: IPOFormGroupAccounting;
  approver: IPOFormGroupApprover;
}

export interface IResPOList {
  status: string;
  statusText: string;
  message: string;
  data: IPOList[];
}

export interface IResPO {
  status: string;
  statusText: string;
  message: string;
  data: IPO;
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
  creditDay: number;
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

/* #region FIXME: RO */
export interface IROFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: IROFormGroupData;
  formGroupAccounting: IROFormGroupAccounting;
  formGroupApprover: IROFormGroupApprover;
}

export interface IROFormGroupData {
  docNo: string;
  docDate: string;
  creditDay: number;
  shippingDate: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  attachmentsUrl: string[];
  productCurrency: string;
}

export interface IROFormGroupAccounting {
  subtotalAmount: number;
  shippingCost: number;
  charges: number;
  depositAmount: number;
  totalDiscountAmount: number;
  netAmount: number;
  vat: number;
  grandTotalAmount: number;
}

export interface IROFormGroupApprover {
  approve: IApprove[];
  stampUrl: string;
}
export interface IROFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  rfqId: string;
  quotationId: string;
  purchaseOrderId: string;
  orderId: string
}

export interface IROList {
  returnOrderId: string;
  sender: ISenderContact;
  receiver: IReceiverContact;
  docNo: string;
  docDate: string;
  productTitleFirst: string;
  productImageFirstUrl: string;
  grandTotalAmount: number;
  productCurrency: string;
  statusROSender: string;
  statusROReceiver: string;
  statusApprovalFlow: string;
  statusReviewerAction: string;
  statusApproverAction: string;
  createdAt: string;
  updatedAt: string;
  senderId: string;
  sellerId: string;
  buyerId: string;
  creditDay: number;
  shippingDate: string;
}

export interface IRO extends IROList, IROFormCreateParams {
  products: IProductRow[];
  data: IROFormGroupData;
  accounting: IROFormGroupAccounting;
  approver: IROFormGroupApprover;
  orderData: IOrderLinkDataOnConfirm & IOrderLinkImmuDataOnConfirm
}


export interface IResROList {
  status: string;
  statusText: string;
  message: string;
  data: IROList[];
}

export interface IResRO {
  status: string;
  statusText: string;
  message: string;
  data: IRO;
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
  productCurrency: string;
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

export interface IBillingNoteFormGroupApprover {
  approve: IApprove[];
  stampUrl: string;
}

export interface IBillingNoteFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  quotationId: string;
  purchaseOrderId: string;
}

export interface IBillingNoteList {
  billingNoteId: string;
  sender: ISenderContact;
  receiver: IReceiverContact;
  senderId: string;
  sellerId: string;
  docNo: string;
  docDate: string;
  grandTotalAmount: number;
  productCurrency: string;
  statusDocSender: string;
  statusApprovalFlow: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBillingNote
  extends IBillingNoteFormCreateParams,
    IBillingNoteList {
  products: IProductRow[];
  data: IBillingNoteFormGroupData;
  accounting: IBillingNoteFormGroupAccounting;
}

export interface IResBillingNoteList {
  status: string;
  statusText: string;
  message: string;
  data: IBillingNoteList[];
}

export interface IResBillingNote {
  status: string;
  statusText: string;
  message: string;
  data: IBillingNote;
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
  productCurrency: string;
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

export interface IInvoiceList {
  invoiceId: string;
  sender: ISenderContact;
  receiver: IReceiverContact;
  senderId: string;
  sellerId: string;
  docNo: string;
  docDate: string;
  grandTotalAmount: number;
  productCurrency: string;
  statusDocSender: string;
  statusApprovalFlow: string;
  createdAt: string;
  updatedAt: string;
}

export interface IInvoice extends IInvoiceFormCreateParams, IInvoiceList {
  products: IProductRow[];
  data: IInvoiceFormGroupData;
  accounting: IInvoiceFormGroupAccounting;
}

export interface IResInvoiceList {
  status: string;
  statusText: string;
  message: string;
  data: IInvoiceList[];
}

export interface IResInvoice {
  status: string;
  statusText: string;
  message: string;
  data: IInvoice;
}
/* #endregion */

/* #region FIXME: Receipt */

export interface IReceiptFormCreate {
  formGroupSender: ISenderContact;
  formGroupReceiver: IReceiverContact;
  formGroupProducts: IProductRow[];
  formGroupData: IReceiptFormGroupData;
  formGroupAccounting: IReceiptFormGroupAccounting;
  formGroupApprover: IReceiptFormGroupApprover;
}

export interface IReceiptFormGroupData {
  docNo: string;
  docDate: string;
  remark: string;
  termsCondition: string;
  senderNote: string;
  receiverNote: string;
  sellerNote: string;
  buyerNote: string;
  productCurrency: string;
  paymentConfirmedData: GappSetting.PaymentMethod;
}

export interface IReceiptFormGroupAccounting {
  subtotalAmount: number;
  shippingCost: number;
  charges: number;
  totalDiscountAmount: number;
  netAmount: number;
  grandTotalAmount: number;
  taxWithheldPercent: number;
  totalPayAmount: number;
  vat: number,
  withholdingTax: number
}

export interface IReceiptFormGroupApprover {
  approve: IApprove[];
  stampUrl: string;
}

export interface IReceiptFormCreateParams {
  senderId: string;
  receiverId: string;
  buyerId: string;
  sellerId: string;
  quotationId: string;
  purchaseOrderId: string;
  orderId: string
}

export interface IReceiptList {
  receiptId: string;
  orderId: string
  sender: ISenderContact;
  receiver: IReceiverContact;
  senderId: string;
  sellerId: string;
  docNo: string;
  docDate: string;
  grandTotalAmount: number;
  productCurrency: string;
  statusDocSender: StatusDocSender;
  statusApprovalFlow: StatusApprovalFlow;
  createdAt: string;
  updatedAt: string;
}

export interface IReceipt extends IReceiptFormCreateParams, IReceiptList {
  products: IProductRow[];
  data: IReceiptFormGroupData;
  accounting: IReceiptFormGroupAccounting;
}

export interface IResReceiptList {
  status: string;
  statusText: string;
  message: string;
  data: IReceiptList[];
}

export interface IResReceipt {
  status: string;
  statusText: string;
  message: string;
  data: IReceipt;
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
  productCurrency: string;
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
  orderId: string
}

export interface ITaxInvoiceList {
  taxInvoiceId: string;
  sender: ISenderContact;
  receiver: IReceiverContact;
  senderId: string;
  sellerId: string;
  docNo: string;
  docDate: string;
  grandTotalAmount: number;
  productCurrency: string;
  statusDocSender: string;
  statusApprovalFlow: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITaxInvoice
  extends ITaxInvoiceFormCreateParams,
    ITaxInvoiceList {
  products: IProductRow[];
  data: ITaxInvoiceFormGroupData;
  accounting: ITaxInvoiceFormGroupAccounting;
}

export interface IResTaxInvoiceList {
  status: string;
  statusText: string;
  message: string;
  data: ITaxInvoiceList[];
}

export interface IResTaxInvoice {
  status: string;
  statusText: string;
  message: string;
  data: ITaxInvoice;
}
/* #endregion */

/* #region Pooled Procurement */
// STUB: Pooled Procurement Form
export interface IPoolProduct {
  productTitle: string;
  productImageUrls: string[];
  poolQty: number;
  minQty: number;
  stepQty: number;
  productUnitPrice: number;
  productUnit: string;
  productId?: string;
}

export interface IPoolShipping {
  shippingMethod: string;
  shippingCost: number;
}

export interface IPoolData {
  expiryTimestamp: number; //timestamp
  shippingMethods: IPoolShipping[];
  contact: ISenderContact;
  leadTimeDay: number;
  note: string;
  remark: string;
  senderId: string;
  supplierId?: string;
  compId?: string;
  marketCode: string;
  isOverPool: boolean;
}

// ANCHOR: POOL | MAIN-BUYER --> CREATE POOL
export interface IPoolFormCreate {
  formGroupProduct: IPoolProduct;
  formGroupData: IPoolData;
}

// ANCHOR: POOL | MAIN-BUYER --> LIST POOLS
export interface IPoolList extends IPoolProduct {
  poolId: string;
  remainPoolQty: number; // * TO UPDATE
  createdAt: string;
  updatedAt: string;
  expiryDate: string;
  senderId: string;
  joinsCount: number; // * TO UPDATE
  joinersCount: number; // * TO UPDATE
  subBuyersCount: number; // * TO UPDATE
  isClosed: boolean; // * TO UPDATE (on QTY === POOL)
  isOverPool: boolean;
}

// REVIEW: POOL ENTITY
export interface IPool extends IPoolList {
  product: IPoolProduct;
  data: IPoolData;
}

// ANCHOR: POOL | JOINER --> JOIN POOL
export interface IJoinerJoinPool extends IPoolProduct {
  poolId: string;
  senderId: string;
  subSenderId: string;
  contact: ISenderContact;
  joinPoolQty: number;
  supplierId?: string;
  compId?: string;
}

// ANCHOR: POOL | JOINER --> LIST JOINING POOLS
export interface IJoinerListJoiningPools extends IJoinerJoinPool {
  joinedAt: string;
  statusApproved: boolean;
  statusUpdatedAt: string;
  statusJoining: StatusPoolJoining;
}

// STUB: POOL | JOINING
export type IJoining = IJoinerListJoiningPools;

// STUB: POOL | DB | JOINER x POOL ENTITY
export interface IJoinerListPools extends IPoolProduct {
  poolId: string;
  senderId: string;
  subSenderId: string;
  contact: ISenderContact;
  supplierId?: string;
  compId?: string;
  firstJoinedAt: string;
  latestStatusUpdatedAt: string;
  totalJoinPoolQty: number; // * TO UPDATE ON JOIN
  totalAcceptedJoinPoolQty: number; // * TO UPDATE ON ACCEPT
  statusShippingMainBuyer: StatusPoolShippingMainBuyer;
  statusShippingSubBuyer: StatusPoolShippingSubBuyer;
}

export interface IPoolStatus {
  poolQty: number;
  remainPoolQty: number;
  isClosed: boolean;
}

// ANCHOR: POOL | JOINER --> LIST POOLS
export interface IRefJoinerListPools extends IJoinerListPools, IPoolStatus {}

// ANCHOR: POOL | MAIN-BUYER --> ACCEPT JOINING
export interface IPoolAcceptJoining {
  poolId: string;
  senderId: string;
  subSenderId: string;
  joinedAt: string;
  joinPoolQty: number;
}
/* #endregion */

// ANCHOR: Notification Message Center
export type TNotifyTopic = 'commerce' | 'inventory';
export type TNotifySubtopic =
  | 'orderLink'
  | 'salepage'
  | 'productStock'
  | 'inventory';
export type TNotifyEvent =
  | 'orderOnCreate'
  | 'orderOnConfirm'
  | 'orderOnSubmitPaymentWithSlip'
  | 'orderOnConfirmPaidWithSlip'
  | 'orderOnShipped'
  | 'orderOnCompleted'
  | 'orderOnCancelled'
  | 'salepageOnLeadPageReply'
  | 'stockOnLowStock'
  | 'stockOnOutOfStock'
  | 'inventoryOnEmpty';
export type TNotifyStatus = 'unread' | 'read' | 'opened' | 'clicked';
export type TNotifySender =
  | 'gapp'
  | 'seller'
  | 'company'
  | 'business'
  | 'buyer';
export type TNotifyPriority = 'highest' | 'high' | 'normal' | 'low' | 'lowest';

export interface ICreateNotifyMessage {
  compId: string;
  topic: TNotifyTopic;
  subtopic: TNotifySubtopic;
  event: TNotifyEvent;
  message: string;
  sender: TNotifySender;
  actorIdentityId: string;
  actorFullName: string;
  priority: TNotifyPriority;
  entityId: string;
  entityTitle: string;
  entitySubId: string;
  status: TNotifyStatus;
  refDocNo: string;
  notifiedAt: string;
}

export interface INotifyMessage extends ICreateNotifyMessage {
  id: string;
  createdAt: string;
}

export interface IImage {
  url: string;
  title: string;
  caption: string;
}
