/* eslint-disable no-unused-vars */
export enum StatusPackage {
  fulled = 'package is fulled',
  notFulled = 'package is availabled'
}

export enum AccessName {
  menuPurchase = 'เอกสารขาย',
  menuOrder = 'ออเดอร์สินค้า',
  menuFacebook = 'การเชื่อมต่อ',
  menuProduct = 'สินค้า',
  menuInventory = 'คลังสินค้า',
  menuPartner = 'คู่ค้า',
  menuCatalog = 'แค็ตตาล็อกสินค้า',
  menuSalePage = 'เซลเพจ',
  menuReport = 'รายงาน',
  menuSetting = 'การตั้งค่า',
  userRole = 'จัดการบทบาท',
  user = 'จัดการผู้ใช้งาน',
  companyInfo = 'ข้อมูลบริษัท',
  documentSetting = 'ตั้งค่าเอกสาร',
  personalInfo = 'ข้อมูลส่วนตัว',
  saleChannel = 'ช่องทางการขาย',
  paymentChannel = 'ช่องทางการชำระเงิน',
  shipmentChannel = 'ช่องทางการขนส่ง',
  notification = 'การแจ้งเตือน',
  emailNotifySetting = 'การแจ้งเตือนผ่านระบบ Email',
  lineNotifySetting = 'การแจ้งเตือนผ่านระบบ Line'
}

export enum AccessScope {
  commerce = 'commerce',
  products = 'products',
  inventory = 'inventory',
  procurement = 'procurement',
  purchases = 'purchases',
  biz = 'biz',
  finance = 'finance'
}

export enum AccessStatementEntity {
  // $เอกสารขาย
  menuPurchase = 'menuPurchase',
  quotation = 'quotation',
  receipt = 'receipt',
  // $ออเดอร์สินค้า
  menuOrder = 'menuOrder',
  orderLink = 'orderLink',
  allOrder = 'allOrder',
  allReturnOrder = 'allReturnOrder',
  // $การเชื่อมต่อ
  menuFacebook = 'menuFacebook',
  facebookConnecting = 'facebookConnecting',
  liveOrder = 'liveOrder',
  postOrder = 'postOrder',
  allChat = 'allChat',
  obsTemplate = 'obsTemplate',
  // $สินค้า
  menuProduct = 'menuProduct',
  allProduct = 'allProduct',
  allProductGroup = 'allProductGroup',
  // $คลังสินค้า
  menuInventory = 'menuInventory',
  allWarehouse = 'allWarehouse',
  allStock = 'allStock',
  // $คู่ค้า
  menuPartner = 'menuPartner',
  allPartner = 'allPartner',
  // $แค็ตตาล็อก
  menuCatalog = 'menuCatalog',
  catalog = 'catalog',
  allCatalog = 'allCatalog',
  // $เซลเพจ
  menuSalePage = 'menuSalePage',
  salePage = 'salePage',
  allSalePage = 'allSalePage',
  // $รายงาน
  menuReport = 'menuReport',
  overviewReport = 'overviewReport',
  saleReportBySaleChannel = 'saleReportBySaleChannel',
  saleReportByProductGroup = 'saleReportByProductGroup',
  saleReportByProduct = 'saleReportByProduct',
  saleReportByPaymentChannel = 'saleReportByPaymentChannel',
  // $การตั้งค่า
  menuSetting = 'menuSetting',
  userRole = 'userRole',
  userRoleOnStaff = 'userRoleOnStaff',
  user = 'user',
  companyInfo = 'companyInfo',
  documentSetting = 'documentSetting',
  personalInfo = 'personalInfo',
  saleChannel = 'saleChannel',
  paymentChannel = 'paymentChannel',
  shipmentChannel = 'shipmentChannel',
  emailNotifySetting = 'emailNotifySetting',
  lineNotifySetting = 'lineNotifySetting'
}

export enum DocPrefixFormat {
  inquiry = 'INQ',
  rfq = 'RFQ',
  quotation = 'QUO',
  po = 'PO',
  so = 'SO',
  billingNote = 'BN',
  receipt = 'RE',
  invoice = 'INV',
  taxInvoice = 'TIV',
  order = 'OD',
  market = 'GM',
  returnOrder = 'RO',
  returnVoucher = 'RV'
}

export enum DocWorkSeqIdCount {
  inquiry = 'CountInquiry',
  rfq = 'CountRfq',
  quotation = 'CountQuotation',
  po = 'CountPO',
  so = 'CountSO',
  billingNote = 'CountBillingNote',
  invoice = 'CountInvoice',
  receipt = 'CountReceipt',
  conversion = 'CountConversion'
}

export enum DocUTMCount {
  website = 'CountUtmWebsite',
  facebook = 'CountUtmFacebook',
  instagram = 'CountUtmInstagram',
  line = 'CountUtmLine',
  youtube = 'CountUtmYoutube',
  whatsapp = 'CountUtmWhatsApp',
  wechat = 'CountUtmWeChat',
  other = 'CountUtmOther'
}

export type TOrderChannelUTM =
  | 'WEBSITE'
  | 'FACEBOOK'
  | 'INSTAGRAM'
  | 'LINE'
  | 'YOUTUBE'
  | 'WHATSAPP'
  | 'WECHAT'
  | 'OTHER';

export enum DocFinanceSeqIdCount {
  receipt = 'CountReceipt',
  taxInvoice = 'CountTaxInvoice'
}

export enum DocOrderSeqIdCount {
  order = 'CountOrder',
  market = 'CountMarket',
  returnOrder = 'CountRO',
  returnVoucher = 'CountRV'
}

export enum CountForCompanyMetric {
  lowStockProduct = 'TotalLowStockProduct',
  placedOrder = 'TotalPlacedOrder',
  awaitingPaymentOrder = 'TotalAwaitingPaymentOrder',
  toConfirmPaymentOrder = 'TotalToConfirmPaymentOrder',
  packedOrder = 'TotalPackedOrder',
  shippedOrder = 'TotalShippedOrder',
  repliedSalepage = 'TotalRepliedSalepage',
  product = 'TotalProduct',
  placedOrderAmount = 'TotalPlacedOrderAmount',
  toConfirmPaymentOrderAmount = 'TotalToConfirmOrderPaymentAmount',
  awaitingPaymentOrderAmount = 'TotalAwaitingPaymentOrderAmount',
  packedOrderAmount = 'TotalPackedOrderAmount',
  shippedOrderAmount = 'TotalShippedOrderAmount',
  awaitingConfirmOrder = 'TotalAwaitingConfirmOrder',
  awaitingConfirmOrderAmount = 'TotalAwaitingConfirmOrderAmount',
  awaitingDepositOrder = 'TotalAwaitingDepositOrder',
  awaitingDepositOrderAmount = 'TotalAwaitingDepositOrderAmount'
}

export enum ReportForCompanyMetric {
  netSales = 'NetSales',
  productsSold = 'TotalProductsSold',
  itemsSold = 'TotalItemsSold',
  netOrderLinkSales = 'NetOrderLinkSales',
  netSalePageSales = 'NetSalePageSales',
  netGappMarketSales = 'NetGappMarketSales',
  netGappBizSales = 'NetGappBizSales',
  cancellationRate = 'CancellationRate',
  avgOrderValue = 'AvgOrderValue'
}

export enum CurrencyTranslateTH {
  THB = 'บาท',
  USD = 'ดอลลาร์สหรัฐ',
  CNY = 'หยวน'
}

export enum CurrencyCode {
  THAI = 'THB',
  USA = 'USD',
  CHINA = 'CNY'
}

export enum UnitTH {
  pcs = 'ชิ้น'
}

export enum UnitEN {
  pcs = 'pcs'
}

export enum SavedListType {
  Product = 'product',
  Supplier = 'supplier'
}

export enum SearchPage {
  Product = 'product',
  Supplier = 'supplier',
  Location = 'location'
}

export const SearchPageArr = [
  SearchPage.Product,
  SearchPage.Supplier,
  SearchPage.Location
];

export enum StatusPoolJoining {
  Joined = 'JOINED',
  Cancel = 'CANCEL',
  RequestCancel = 'REQUEST_CANCEL',
  AcceptedCancel = 'ACCEPTED_CANCEL'
}

export enum StatusPoolShippingMainBuyer {
  'NONE',
  'TO_PURCHASE',
  'PREPARE',
  'SHIPPED',
  'RECEIVED',
  'COMPLETE'
}

export enum StatusPoolShippingSubBuyer {
  'NONE',
  'WAITING',
  'PURCHASING',
  'PACKING',
  'SHIPPING',
  'COMPLETE'
}

// export const RfqCreditTerm = ['none', 'cash', '30', '60', '90']

// export const RfqPaymentMethod = ['deposit', 'cheque', 'creditCard', 'onDelivery']

// export const FunnelBusinessSizes = ['micro', 'small', 'medium', 'large']

// export const FunnelBusinessTypes = ['manufacturer', 'wholesaler', 'retailer']

export const ValidUntilDate = [7, 15, 30, 60, 90];

export const CreditDay = [30, 45, 60, 90];

export type ExpireInMin = 15 | 60 | 180 | 480 | 720 | 1440 | 2880;

export enum SaleChannelSubType {
  GappMed = 'gappMed',
  GappBiz = 'gappBiz',
  Lazada = 'lazada',
  Shopee = 'shopee',
  ShopeeConnect = 'shopeeConnect',
  JD = 'jd',
  Facebook = 'facebook',
  FacebookConnect = 'facebookconnect',
  Line = 'line',
  LineOA = 'lineoa',
  Instagram = 'instagram',
  WeChat = 'weChat',
  WhatsApp = 'whatsApp',
  Youtube = 'youtube',
  Website = 'website',
  Phone = 'phone',
  CallCenter = 'callCenter',
  Store = 'store',
  Other = 'other',
  Unknown = 'unknown',
  TikTok = 'tiktok'
}

export const SaleChannelSubTypeArr = [
  {
    text: 'GAPP med',
    value: SaleChannelSubType.GappMed
  },
  {
    text: 'GAPP Biz',
    value: SaleChannelSubType.GappBiz
  },
  {
    text: 'Lazada',
    value: SaleChannelSubType.Lazada
  },
  {
    text: 'Shopee',
    value: SaleChannelSubType.Shopee
  },
  {
    text: 'JD Central',
    value: SaleChannelSubType.JD
  },
  {
    text: 'Facebook',
    value: SaleChannelSubType.Facebook
  },
  {
    text: 'LINE',
    value: SaleChannelSubType.Line
  },
  {
    text: 'Instagram',
    value: SaleChannelSubType.Instagram
  },
  {
    text: 'WeChat',
    value: SaleChannelSubType.WeChat
  },
  {
    text: 'WhatsApp',
    value: SaleChannelSubType.WhatsApp
  },
  {
    text: 'Youtube',
    value: SaleChannelSubType.Youtube
  },
  {
    text: 'Website',
    value: SaleChannelSubType.Website
  },
  {
    text: 'Phone',
    value: SaleChannelSubType.Phone
  },
  {
    text: 'Call Center',
    value: SaleChannelSubType.CallCenter
  },
  {
    text: 'หน้าร้าน / สาขา',
    value: SaleChannelSubType.Store
  }
];

export enum SaleChannelType {
  Online = 'online',
  Social = 'social',
  Offline = 'offline',
  Other = 'other'
}

export const OrderTypeAttr = {
  orderLink: {
    title_th: 'ออเดอร์ออนไลน์',
    title_en: 'Order Link'
  },
  salePage: {
    title_th: 'เซลเพจ',
    title_en: 'Sale Page'
  },
  gappMarket: {
    title_th: 'มาร์เก็ตเพลส',
    title_en: 'GAPP market'
  },
  gappBiz: {
    title_th: 'ออเดอร์',
    title_en: 'Order'
  }
};

export const OrderItemTypeAttr = {
  service: {
    title_th: 'บริการ',
    title_en: 'Service'
  },
  product: {
    title_th: 'สินค้า',
    title_en: 'Product'
  }
};

export const SaleChannelTypeArr = [
  {
    text: 'ช่องทางขายสินค้าออนไลน์',
    value: SaleChannelType.Online
  },
  {
    text: 'ช่องทางขายสินค้าโซเชียลมีเดีย',
    value: SaleChannelType.Social
  },
  {
    text: 'ช่องทางขายสินค้าออฟไลน์',
    value: SaleChannelType.Offline
  },
  {
    text: 'ช่องทางขายอื่นๆ',
    value: SaleChannelType.Other
  }
];

export enum BankAccountType {
  Saving = 'saving',
  Current = 'current'
}

export const BankAccountTypeArr = [
  {
    text: 'บัญชีออมทรัพย์',
    value: BankAccountType.Saving
  },
  {
    text: 'บัญชีกระแสรายวัน',
    value: BankAccountType.Current
  }
];

export enum PaymentMethodType {
  BankDeposit = 'bankDeposit',
  COD = 'COD',
  Cash = 'cash',
  PromptPay = 'promptPay'
}

export type TPromptPay =
    | 'MOBILE'
    | 'IDENTITYID';

export enum ShippingMethodType {
  Free = 'free',
  FixedRate = 'fixedRate',
  BasedByPcs = 'basedByPcs',
  BasedByStepPcs = 'basedByStepPcs',
  BasedByStepWeight = 'basedByStepWeight',
  BasedByOrderPrice = 'basedByOrderPrice',
  Pickup = 'pickup'
}

export const ShippingMethodTypeArr = [
  {
    text: 'ฟรี ไม่เก็บค่าจัดส่ง',
    value: ShippingMethodType.Free
  },
  {
    text: 'กำหนดค่าจัดส่งแบบคงที่',
    value: ShippingMethodType.FixedRate
  },
  {
    text: 'คิดตามจำนวนสินค้า (คิดเป็นชิ้น)',
    value: ShippingMethodType.BasedByPcs
  },
  {
    text: 'คิดตามจำนวนสินค้า',
    value: ShippingMethodType.BasedByStepPcs
  },
  {
    text: 'คิดตามน้ำหนักรวมของสินค้า',
    value: ShippingMethodType.BasedByStepWeight
  },
  {
    text: 'คิดตามราคาของสินค้าหลังหักส่วนลดแล้ว',
    value: ShippingMethodType.BasedByOrderPrice
  }
];

export const RfqCreditTermArr = [
  {
    text: 'ไม่ระบุ',
    value: 'none'
  },
  {
    text: 'เงินสด',
    value: 'cash'
  },
  {
    text: '30 วัน',
    value: '30'
  },
  {
    text: '45 วัน',
    value: '45'
  },
  {
    text: '60 วัน',
    value: '60'
  },
  {
    text: '90 วัน',
    value: '90'
  }
];

export type TPackageUnit = 'm' | 'cm' | 'mm' | 'inch' | 'ft';

export const PackageUnitArr = [
  {
    text: 'เมตร',
    value: 'm'
  },
  {
    text: 'เซนติเมตร',
    value: 'cm'
  },
  {
    text: 'มิลลิเมตร',
    value: 'mm'
  },
  {
    text: 'นิ้ว',
    value: 'inch'
  },
  {
    text: 'ฟุต',
    value: 'ft'
  }
];

export type TPackageWeightUnit = 'kg' | 'g' | 'oz' | 'lb' | 'ton';

export const PackageWeightUnitArr = [
  {
    text: 'กิโลกรัม',
    value: 'kg'
  },
  {
    text: 'กรัม',
    value: 'g'
  },
  {
    text: 'ออนซ์',
    value: 'oz'
  },
  {
    text: 'ปอนด์',
    value: 'lb'
  },
  {
    text: 'ตัน',
    value: 'ton'
  }
];

export const RfqPaymentMethodArr = [
  {
    text: 'โอนเงิน',
    value: 'deposit'
  },
  {
    text: 'เช็ค',
    value: 'cheque'
  },
  {
    text: 'บัตรเครดิต',
    value: 'creditCard'
  },
  {
    text: 'ชำระปลายทาง',
    value: 'onDelivery'
  }
];

export const FunnelBusinessSizeArr = [
  {
    text: 'ขนาดย่อย (Micro)',
    value: 'micro'
  },
  {
    text: 'ขนาดย่อม (S)',
    value: 'small'
  },
  {
    text: 'ขนาดกลาง (M)',
    value: 'medium'
  },
  {
    text: 'ขนาดใหญ่ (L)',
    value: 'large'
  }
];

export const FunnelBusinessTypeArr = [
  {
    text: 'ผู้ผลิต',
    value: 'manufacturer'
  },
  {
    text: 'ผู้ค้าส่ง',
    value: 'wholesaler'
  },
  {
    text: 'ผู้ค้าปลีก',
    value: 'retailer'
  }
];

//ANCHOR - BANK
export enum BankCode {
  BBL = '002',
  KBANK = '004',
  KTB = '006',
  TMB = '011',
  SCB = '014',
  CITI = '017',
  SCBT = '020',
  CIMB = '022',
  UOB = '024',
  BAY = '025',
  GOV = '030',
  HSBC = '031',
  GHB = '033',
  AGRI = '034',
  EXIM = '035',
  MHCB = '039',
  TBANK = '065',
  ISBT = '066',
  TISCO = '067',
  KK = '069',
  ICBCT = '070',
  TCRB = '071',
  LHBANK = '073',
  SMEB = '098'
}

export enum CodeBank {
    '002' = 'BBL',
    '004' = 'KBANK',
    '006' = 'KTB',
    '011' = 'TMB', // ! TTB
    '014' = 'SCB',
    '017' = 'CITI',
    '020' = 'SCBT',
    '022' = 'CIMB', // ! CIMBT
    '024' = 'UOB', // ! UOBT
    '025' = 'BAY',
    '030' = 'GOV',  // GSB
    '031' = 'HSBC',
    '033' = 'GHB',
    '034' = 'AGRI',  // BAAC
    '035' = 'EXIM',
    '039' = 'MHCB',
    '065' = 'TBANK',
    '066' = 'ISBT',
    '067' = 'TISCO',
    '069' = 'KK',  // KKP
    '070' = 'ICBCT',
    '071' = 'TCRB',  //  TCD
    '073' = 'LHBANK', // LHFG | LHB
    '099' = 'SMEB'
}

export type TBankName =
  | 'BBL'
  | 'KBANK'
  | 'KTB'
  | 'SCB'
  | 'CITI'
  | 'SCBT'
  | 'CIMB'
  | 'UOB'
  | 'BAY'
  | 'GSB'
  | 'HSBC'
  | 'GHB'
  | 'BAAC'
  | 'EXIM'
  | 'MHCB'
  | 'TBANK'
  | 'ISBT'
  | 'TISCO'
  | 'KK'
  | 'ICBC'
  | 'TCRB'
  | 'LHB'
  | 'SMEB'
  | 'TTB';

export enum BankName {
  BBL = 'BBL',
  KBANK = 'KBANK',
  KTB = 'KTB',
  SCB = 'SCB',
  CITI = 'CITI',
  SCBT = 'SCBT',
  CIMB = 'CIMB',
  UOB = 'UOB',
  BAY = 'BAY',
  GSB = 'GSB',
  HSBC = 'HSBC',
  GHB = 'GHB',
  BAAC = 'BAAC',
  EXIM = 'EXIM',
  MHCB = 'MHCB',
  TBANK = 'TBANK',
  ISBT = 'ISBT',
  TISCO = 'TISCO',
  KK = 'KK',
  ICBC = 'ICBC',
  TCRB = 'TCRB',
  LHB = 'LHB',
  TTB = 'TTB',
  SMEB = 'SMEB'
}

export type TBankList = {
  [key in TBankName]: {
    code: BankCode;
    color: string;
    official_name: string;
    official_name_thai: string;
    official_short_name_thai: string;
    nice_name: string;
    acronym: TBankName;
    image: string;
    maskNumber: string;
  };
};

// BANKLIST
export const BankList: TBankList = {
  BBL: {
    code: BankCode.BBL,
    color: '#1e4598',
    official_name: 'BANGKOK BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงเทพ',
    official_short_name_thai: 'กรุงเทพ',
    nice_name: 'Bangkok Bank',
    acronym: BankName.BBL,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/bbl.webp',
    maskNumber: '000-0-00000-0',
  },
  KBANK: {
    code: BankCode.KBANK,
    color: '#138f2d',
    official_name: 'KASIKORNBANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกสิกรไทย',
    official_short_name_thai: 'กสิกรไทย',
    nice_name: 'Kasikornbank',
    acronym: BankName.KBANK,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/kbank.webp',
    maskNumber: '000-0-00000-0',
  },
  KTB: {
    code: BankCode.KTB,
    color: '#1ba5e1',
    official_name: 'KRUNG THAI BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงไทย',
    official_short_name_thai: 'กรุงไทย',
    nice_name: 'Krungthai Bank',
    acronym: BankName.KTB,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/ktb.webp',
    maskNumber: '000-0-00000-0',
  },
  TTB: {
    code: BankCode.TMB,
    color: '#114ff1',
    official_name: 'TMBThanachart Bank',
    official_name_thai: 'ธนาคารทหารไทยธนชาต',
    official_short_name_thai: 'ทหารไทยธนชาต',
    nice_name: 'TTB Bank',
    acronym: BankName.TTB,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/ttb.webp',
    maskNumber: '000-0-00000-0',
  },
  SCB: {
    code: BankCode.SCB,
    color: '#4e2e7f',
    official_name: 'SIAM COMMERCIAL BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารไทยพาณิชย์',
    official_short_name_thai: 'ไทยพาณิชย์',
    nice_name: 'Siam Commercial Bank',
    acronym: BankName.SCB,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/scb.webp',
    maskNumber: '000-0-00000-0',
  },
  // ! NEW
  CITI: {
    code: BankCode.CITI,
    color: '#000000',
    official_name: 'CITIBANK, N.A.',
    official_name_thai: 'ธนาคารซิตี้แบงก์',
    official_short_name_thai: 'ซิตี้แบงก์',
    nice_name: 'Citibank',
    acronym: BankName.CITI,
    image: 'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/citi.webp', // empty
    maskNumber: '000-0-00000-0',
  },
  // ! NEW
  SCBT: {
    code: BankCode.SCBT,
    color: '#000000',
    official_name: 'STANDARD CHARTERED BANK (THAI) PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)',
    official_short_name_thai: 'สแตนดาร์ดชาร์เตอร์ด',
    nice_name: 'Standard Chartered',
    acronym: BankName.SCBT,
    image: 'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/scbt.webp', // empty
    maskNumber: '000-0-00000-0',
  },
  CIMB: {
    code: BankCode.CIMB,
    color: '#7e2f36',
    official_name: 'CIMB THAI BANK PUPBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารซีไอเอ็มบี',
    official_short_name_thai: 'ซีไอเอ็มบี',
    nice_name: 'CIMB Thai Bank',
    acronym: BankName.CIMB,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/cimb.webp',
    maskNumber: '000-0-00000-0',
  },
  UOB: {
    code: BankCode.UOB,
    color: '#0b3979',
    official_name: 'UNITED OVERSEAS BANK (THAI) PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารยูโอบี',
    official_short_name_thai: 'ยูโอบี',
    nice_name: 'United Overseas Bank (Thai)',
    acronym: BankName.UOB,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/uob.webp',
    maskNumber: '000-0-00000-0',
  },
  BAY: {
    code: BankCode.BAY,
    color: '#fec43b',
    official_name: 'BANK OF AYUDHYA PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงศรีอยุธยา',
    official_short_name_thai: 'กรุงศรีอยุธยา',
    nice_name: 'Krungsri',
    acronym: BankName.BAY,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/bay.webp',
    maskNumber: '000-0-00000-0',
  },
  GSB: {
    code: BankCode.GOV,
    color: '#eb198d',
    official_name: 'THE GOVERNMENT SAVINGS BANK',
    official_name_thai: 'ธนาคารออมสิน',
    official_short_name_thai: 'ออมสิน',
    nice_name: 'Government Savings Bank',
    acronym: BankName.GSB,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/gsb.webp',
    maskNumber: '000-0-00000-000000',
  },
  // ! NEW
  HSBC: {
    code: BankCode.HSBC,
    color: '#000000',
    official_name: 'THE HONGKONG AND SHANGHAI BANKING CORPORATION LTD.',
    official_name_thai: 'ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น',
    official_short_name_thai: 'ฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น',
    nice_name: 'HSBC',
    acronym: BankName.HSBC,
    image: 'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/hsbc.webp', // empty
    maskNumber: '000-0-00000-0',
  },
  // ! NEW
  GHB: {
    code: BankCode.GHB,
    color: '#000000',
    official_name: 'THE GOVERNMENT HOUSING BANK',
    official_name_thai: 'ธนาคารอาคารสงเคราะห์',
    official_short_name_thai: 'อาคารสงเคราะห์',
    nice_name: 'Government Housing Bank',
    acronym: BankName.GHB,
    image: 'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/ghb.webp', // empty
    maskNumber: '000-0-00000-000',
  },
  BAAC: {
    code: BankCode.AGRI,
    color: '#4b9b1d',
    official_name: 'BANK FOR AGRICULTURE AND AGRICULTURAL COOPERATIVES',
    official_name_thai: 'ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร',
    official_short_name_thai: 'เพื่อการเกษตรและสหกรณ์การเกษตร',
    nice_name: 'Bank for Agriculture and Agricultural Cooperatives',
    acronym: BankName.BAAC,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/baac.webp',
    maskNumber: '000-0-00000-000'
  },
  // ! NEW
  EXIM: {
    code: BankCode.EXIM,
    color: '#000000',
    official_name: 'EXPORT-IMPORT BANK OF THAILAND',
    official_name_thai: 'ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย',
    official_short_name_thai: 'เพื่อการส่งออกและนำเข้า',
    nice_name: 'EXIM Bank',
    acronym: BankName.EXIM,
    image: 'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/exim.webp', // empty
    maskNumber: '000-0-00000-0',
  },
  // ! NEW
  MHCB: {
    code: BankCode.MHCB,
    color: '#000000',
    official_name: 'MIZUHO CORPORATE BANK, LTD.',
    official_name_thai: 'ธนาคาร มิซูโฮ คอร์ปอเรต จำกัด',
    official_short_name_thai: 'มิซูโฮ คอร์ปอเรต',
    nice_name: 'MIZUHO',
    acronym: BankName.MHCB,
    image: 'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/mhcb.webp', // empty
    maskNumber: '000-0-00000-0',
  },
  // ! NEW
  TBANK: {
    code: BankCode.TBANK,
    color: '#000000',
    official_name: 'THANACHART BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคาร ธนชาต จำกัด (มหาชน)',
    official_short_name_thai: 'ธนชาต',
    nice_name: 'Thanachart Bank',
    acronym: BankName.TBANK,
    image: 'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/tbank.webp', // empty
    maskNumber: '000-0-00000-0',
  },
  // ! NEW
  ISBT: {
    code: BankCode.ISBT,
    color: '#000000',
    official_name: 'ISLAMIC BANK OF THAILAND',
    official_name_thai: 'ธนาคารอิสลามแห่งประเทศไทย',
    official_short_name_thai: 'อิสลาม',
    nice_name: 'ibank',
    acronym: BankName.ISBT,
    image: 'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/isbt.webp', // empty
    maskNumber: '000-0-00000-0',
  },
  // ! NEW
  TISCO: {
    code: BankCode.TISCO,
    color: '#000000',
    official_name: 'TISCO BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคาร ทิสโก้ จำกัด (มหาชน)',
    official_short_name_thai: 'ทิสโก้',
    nice_name: 'TISCO',
    acronym: BankName.TISCO,
    image: 'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/tisco.webp', // empty
    maskNumber: '000-0-00000-00000',
  },
  KK: {
    code: BankCode.KK,
    color: '#199cc5',
    official_name: 'KIATNAKIN BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารเกียรตินาคิน',
    official_short_name_thai: 'เกียรตินาคิน',
    nice_name: 'Kiatnakin Bank',
    acronym: BankName.KK,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/kk.webp',
    maskNumber: '000-0-00000-00000',
  },
  ICBC: {
    code: BankCode.ICBCT,
    color: '#c50f1c',
    official_name:
      'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (THAI) PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารไอซีบีซี',
    official_short_name_thai: 'ไอซีบีซี',
    nice_name: 'Industrial and Commercial Bank of China (Thai)',
    acronym: BankName.ICBC,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/icbc.webp',
    maskNumber: '000-0-00000-0',
  },
  // ! NEW
  TCRB: {
    code: BankCode.TCRB,
    color: '#000000',
    official_name: 'THE THAI CREDIT RETAIL BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคาร ไทยเครดิต เพื่อรายย่อย จำกัด (มหาชน)',
    official_short_name_thai: 'ไทยเครดิต เพื่อรายย่อย',
    nice_name: 'THAI CREDIT',
    acronym: BankName.TCRB,
    image: 'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/tcrb.webp', // empty,
    maskNumber: '000-0-00000-0',
  },
  LHB: {
    code: BankCode.LHBANK,
    color: '#6d6e71',
    official_name: 'LAND AND HOUSES BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารแลนด์ แอนด์ เฮ้าส์',
    official_short_name_thai: 'แลนด์ แอนด์ เฮ้าส์',
    nice_name: 'Land and Houses Bank',
    acronym: BankName.LHB,
    image:
      'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/lhb.webp',
    maskNumber: '000-0-00000-0',
  },
  // ! NEW
  SMEB: {
    code: BankCode.SMEB,
    color: '#000000',
    official_name: 'SMALL AND MEDIUM ENTERPRISE DEVELOPMENT BANK OF THAILAND',
    official_name_thai: 'ธนาคาร พัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย',
    official_short_name_thai: 'พัฒนาวิสาหกิจขนาดกลางและขนาดย่อม',
    nice_name: 'SME D Bank',
    acronym: BankName.SMEB,
    image: 'https://gapp-media.s3.ap-southeast-1.amazonaws.com/public/icons/payment/smeb.webp', // empty
    maskNumber: '000-0-00000-0',
  }
};

export const BankListArr = [
  {
    text: BankList.BBL.official_name_thai,
    value: BankList.BBL.official_name_thai
  },
  {
    text: BankList.KBANK.official_name_thai,
    value: BankList.KBANK.official_name_thai
  },
  {
    text: BankList.KTB.official_name_thai,
    value: BankList.KTB.official_name_thai
  },
  {
    text: BankList.TTB.official_name_thai,
    value: BankList.TTB.official_name_thai
  },
  {
    text: BankList.SCB.official_name_thai,
    value: BankList.SCB.official_name_thai
  },
  {
    text: BankList.CIMB.official_name_thai,
    value: BankList.CIMB.official_name_thai
  },
  {
    text: BankList.UOB.official_name_thai,
    value: BankList.UOB.official_name_thai
  },
  {
    text: BankList.BAY.official_name_thai,
    value: BankList.BAY.official_name_thai
  },
  {
    text: BankList.GSB.official_name_thai,
    value: BankList.GSB.official_name_thai
  },
  {
    text: BankList.BAAC.official_name_thai,
    value: BankList.BAAC.official_name_thai
  },
  {
    text: BankList.KK.official_name_thai,
    value: BankList.KK.official_name_thai
  },
  {
    text: BankList.ICBC.official_name_thai,
    value: BankList.ICBC.official_name_thai
  },
  {
    text: BankList.LHB.official_name_thai,
    value: BankList.LHB.official_name_thai
  }
];

export type TWarningLevel = 'Level1' | 'Level2' | 'Level3';

export enum BankWarning {
  B0_NOT_FOUND = 'Cannot decode the QR code', // ไม่พบ QR Code
  B1_SUCCESS = 'Success', // ตรวจสอบผ่าน
  B2_DUPLICATE = 'Duplicate Slip', // ตรวจพบสลิปซ้ำในระบบ
  B3_MATCHED_BANK = 'Bank Not Matched', // ธนาคารที่รับโอนไม่ตรงกับธนาคารที่ระบุ
  B4_MATCHED_ACCOUNT_NO = 'Bank Account Not Matched', // บัญชีผู้รับไม่ถูกต้อง
  B5_MATCHED_TIME = 'Invalid Payment Time', // เวลาการชำระไม่ถูกต้อง
  B6_LESS_AMOUNT = 'Transfer Amount is Less Than Specified', // ยอดโอนน้อยกว่าที่ระบุ'
  B7_MORE_AMOUNT = 'Transfer Amount is Greater Than Specified', // ยอดโอนมากกว่าที่ระบุ
  B8_ERROR = 'No slip data from API',// ไม่สามารถตรวจสอบได้
  B9_CANNOT_GET_SLIP = 'Cannot get slip data from K-Bank API', // ไม่สามารถตรวจสอบได้
  B10_INCORRECT_QR = 'In Correct QR code' // QR Code ผิดรูปแบบ
}

export enum BankErrorCodes {
  SERVER_ERROR, // error code 500 Server Error
  CANNOT_GET_SLIP , // error code 404 Cannot get slip data from K-Bank API
  DECODE_QR_CODE, // error code 400 Cannot decode the QR code
  INCORRECT_QR , // error code 404 In Correct QR code
  NO_SLIP_DATA , // error code 404 No slip data from API
}

export enum SlipPackageType {
  FREE = 'ฟรี',
  START = 'เริ่มต้น'
}