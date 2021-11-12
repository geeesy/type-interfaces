/* eslint-disable no-unused-vars */
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
  market = 'GM'
}

export enum CountForCompanyMetric {
  lowStockProduct = 'TotalLowStockProduct',
  placedOrder = 'TotalPlacedOrder',
  packedOrder = 'TotalPackedOrder',
  shippedOrder = 'TotalShippedOrder',
}

export enum DocWorkSeqIdCount {
  inquiry = 'CountInquiry',
  rfq = 'CountRfq',
  quotation = 'CountQuotation',
  po = 'CountPO',
  so = 'CountSO',
  billingNote = 'CountBillingNote',
  invoice = 'CountInvoice'
}

export enum DocFinanceSeqIdCount {
  receipt = 'CountReceipt',
  taxInvoice = 'CountTaxInvoice'
}

export enum DocOrderSeqIdCount {
  order = 'CountOrder',
  market = 'CountMarket'
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
  Joined = 'joined',
  Cancel = 'cancel',
  RequestCancel = 'request-cancel',
  AcceptedCancel = 'accepted-cancel'
}

export enum StatusPoolShippingMainBuyer {
  'none',
  'to_purchase',
  'prepare',
  'shipped',
  'received',
  'complete'
}

export enum StatusPoolShippingSubBuyer {
  'none',
  'waiting',
  'purchasing',
  'packing',
  'shipping',
  'complete'
}

// export const RfqCreditTerm = ['none', 'cash', '30', '60', '90']

// export const RfqPaymentMethod = ['deposit', 'cheque', 'creditCard', 'onDelivery']

// export const FunnelBusinessSizes = ['micro', 'small', 'medium', 'large']

// export const FunnelBusinessTypes = ['manufacturer', 'wholesaler', 'retailer']

export const ValidUntilDate = [7, 15, 30, 60, 90];

export const CreditDay = [30, 45, 60, 90];

export enum SaleChannelSubType {
  GappMed = 'gappMed',
  GappBiz = 'gappBiz',
  Lazada = 'lazada',
  Shopee = 'shopee',
  JD = 'jd',
  Facebook = 'facebook',
  Line = 'line',
  Ig = 'ig',
  WeChat = 'weChat',
  WhatsApp = 'whatsApp',
  Youtube = 'youtube',
  Website = 'website',
  Phone = 'phone',
  CallCenter = 'callCenter',
  Store = 'store',
  Other = 'other'
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
    value: SaleChannelSubType.Ig
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
  COD = 'COD'
}

export enum ShippingMethodType {
  Free = 'free',
  FixedRate = 'fixedRate',
  BasedByPcs = 'basedByPcs',
  BasedByStepPcs = 'basedByStepPcs',
  BasedByStepWeight = 'basedByStepWeight',
  BasedByOrderPrice = 'basedByOrderPrice'
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

export type TBankName =
  | 'BBL'
  | 'KBANK'
  | 'KTB'
  | 'SCB'
  | 'CIMB'
  | 'UOB'
  | 'BAY'
  | 'GSB'
  | 'BAAC'
  | 'KK'
  | 'ICBC'
  | 'LHB'
  | 'TTB';

export enum BankName {
  BBL = 'BBL',
  KBANK = 'KBANK',
  KTB = 'KTB',
  SCB = 'SCB',
  CIMB = 'CIMB',
  UOB = 'UOB',
  BAY = 'BAY',
  GSB = 'GSB',
  BAAC = 'BAAC',
  KK = 'KK',
  ICBC = 'ICBC',
  LHB = 'LHB',
  TTB = 'TTB'
}

export const BankList = {
  bbl: {
    code: '002',
    color: '#1e4598',
    official_name: 'BANGKOK BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงเทพ',
    nice_name: 'Bangkok Bank',
    acronym: BankName.BBL
  },
  kbank: {
    code: '004',
    color: '#138f2d',
    official_name: 'KASIKORNBANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกสิกรไทย',
    nice_name: 'Kasikornbank',
    acronym: BankName.KBANK
  },
  ktb: {
    code: '006',
    color: '#1ba5e1',
    official_name: 'KRUNG THAI BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงไทย',
    nice_name: 'Krungthai Bank',
    acronym: BankName.KTB
  },
  ttb: {
    code: '011',
    color: '#114ff1',
    official_name: 'TTB BANK',
    official_name_thai: 'ธนาคารทีเอ็มบีธนชาติ',
    nice_name: 'TTB Bank',
    acronym: BankName.TTB
  },
  scb: {
    code: '014',
    color: '#4e2e7f',
    official_name: 'SIAM COMMERCIAL BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารไทยพาณิชย์',
    nice_name: 'Siam Commercial Bank',
    acronym: BankName.SCB
  },
  cimb: {
    code: '022',
    color: '#7e2f36',
    official_name: 'CIMB THAI BANK PUPBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารซีไอเอ็มบี',
    nice_name: 'CIMB Thai Bank',
    acronym: BankName.CIMB
  },
  uob: {
    code: '024',
    color: '#0b3979',
    official_name: 'UNITED OVERSEAS BANK (THAI) PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารยูโอบี',
    nice_name: 'United Overseas Bank (Thai)',
    acronym: BankName.UOB
  },
  bay: {
    code: '025',
    color: '#fec43b',
    official_name: 'BANK OF AYUDHYA PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงศรีอยุธยา',
    nice_name: 'Krungsri',
    acronym: BankName.BAY
  },
  gsb: {
    code: '030',
    color: '#eb198d',
    official_name: 'THE GOVERNMENT SAVINGS BANK',
    official_name_thai: 'ธนาคารออมสิน',
    nice_name: 'Government Savings Bank',
    acronym: BankName.GSB
  },
  baac: {
    code: '034',
    color: '#4b9b1d',
    official_name: 'BANK FOR AGRICULTURE AND AGRICULTURAL COOPERATIVES',
    official_name_thai: 'ธนาคารเพื่อการเกษตร',
    nice_name: 'Bank for Agriculture and Agricultural Cooperatives',
    acronym: BankName.BAAC
  },
  kk: {
    code: '069',
    color: '#199cc5',
    official_name: 'KIATNAKIN BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารเกียรตินาคิน',
    nice_name: 'Kiatnakin Bank',
    acronym: BankName.KK
  },
  icbc: {
    code: '070',
    color: '#c50f1c',
    official_name:
      'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (THAI) PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารไอซีบีซี',
    nice_name: 'Industrial and Commercial Bank of China (Thai)',
    acronym: BankName.ICBC
  },
  lhb: {
    code: '073',
    color: '#6d6e71',
    official_name: 'LAND AND HOUSES BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารแลนด์ แอนด์ เฮ้าส์ ',
    nice_name: 'Land and Houses Bank',
    acronym: BankName.LHB
  }
};

export const BankListArr = [
  {
    text: BankList.bbl.official_name_thai,
    value: BankList.bbl.official_name_thai
  },
  {
    text: BankList.kbank.official_name_thai,
    value: BankList.kbank.official_name_thai
  },
  {
    text: BankList.ktb.official_name_thai,
    value: BankList.ktb.official_name_thai
  },
  {
    text: BankList.ttb.official_name_thai,
    value: BankList.ttb.official_name_thai
  },
  {
    text: BankList.scb.official_name_thai,
    value: BankList.scb.official_name_thai
  },
  {
    text: BankList.cimb.official_name_thai,
    value: BankList.cimb.official_name_thai
  },
  {
    text: BankList.uob.official_name_thai,
    value: BankList.uob.official_name_thai
  },
  {
    text: BankList.bay.official_name_thai,
    value: BankList.bay.official_name_thai
  },
  {
    text: BankList.gsb.official_name_thai,
    value: BankList.gsb.official_name_thai
  },
  {
    text: BankList.baac.official_name_thai,
    value: BankList.baac.official_name_thai
  },
  {
    text: BankList.kk.official_name_thai,
    value: BankList.kk.official_name_thai
  },
  {
    text: BankList.icbc.official_name_thai,
    value: BankList.icbc.official_name_thai
  },
  {
    text: BankList.lhb.official_name_thai,
    value: BankList.lhb.official_name_thai
  }
];
