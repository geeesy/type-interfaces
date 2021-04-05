/* eslint-disable no-unused-vars */
export enum CurrencyCode {
  THAI = 'THB',
  USA = 'USD',
  CHINA = 'CNY',
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
]

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

export const ValidUntilDate = [7, 15, 30, 60, 90]

export const CreditDay = [30, 60, 90]

export const RfqCreditTermArr = [
  {
    text: 'ไม่ระบุ', value: 'none'
  },
  {
    text: 'เงินสด', value: 'cash'
  },
  {
    text: '30 วัน', value: '30'
  },
  {
    text: '60 วัน', value: '60'
  },
  {
    text: '90 วัน', value: '90'
  }
]

export const PackageUnitArr = [
  {
    text: 'มิลลิเมตร', value: 'mm'
  },
  {
    text: 'เซนติเมตร', value: 'cm'
  },
  {
    text: 'เมตร', value: 'm'
  },
  {
    text: 'นิ้ว', value: 'inch'
  },
  {
    text: 'ฟุต', value: 'ft'
  }
]

export const PackageWeightUnitArr = [
  {
    text: 'กรัม', value: 'mm'
  },
  {
    text: 'กิโลกรัม', value: 'cm'
  },
  {
    text: 'ออนซ์', value: 'oz'
  },
  {
    text: 'ปอนด์', value: 'lb'
  },
  {
    text: 'ตัน', value: 'ton'
  }

]

export const RfqPaymentMethodArr = [
  {
    text: 'โอนเงิน', value: 'deposit'
  },
  {
    text: 'เช็ค', value: 'cheque'
  },
  {
    text: 'บัตรเครดิต', value: 'creditCard'
  },
  {
    text: 'ชำระปลายทาง', value: 'onDelivery'
  }
]

export const FunnelBusinessSizeArr = [
  {
    text: 'ขนาดย่อย (Micro)', value: 'micro'
  },
  {
    text: 'ขนาดย่อม (S)', value: 'small'
  },
  {
    text: 'ขนาดกลาง (M)', value: 'medium'
  },
  {
    text: 'ขนาดใหญ่ (L)', value: 'large'
  }
]

export const FunnelBusinessTypeArr = [
  {
    text: 'ผู้ผลิต', value: 'manufacturer'
  },
  {
    text: 'ผู้ค้าส่ง', value: 'wholesaler'
  },
  {
    text: 'ผู้ค้าปลีก', value: 'retailer'
  }
]

export const BankList = {
  bbl: {
    code: '002',
    color: '#1e4598',
    official_name: 'BANGKOK BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงเทพ',
    nice_name: 'Bangkok Bank'
  },
  kbank: {
    code: '004',
    color: '#138f2d',
    official_name: 'KASIKORNBANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกสิกรไทย',
    nice_name: 'Kasikornbank'
  },
  ktb: {
    code: '006',
    color: '#1ba5e1',
    official_name: 'KRUNG THAI BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงไทย',
    nice_name: 'Krungthai Bank'
  },
  tmb: {
    code: '011',
    color: '#1279be',
    official_name: 'TMB BANK PUBLIC COMPANY LIMITED.',
    official_name_thai: 'ธนาคารทหารไทย',
    nice_name: 'TMB Bank'
  },
  scb: {
    code: '014',
    color: '#4e2e7f',
    official_name: 'SIAM COMMERCIAL BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารไทยพาณิชย์',
    nice_name: 'Siam Commercial Bank'
  },
  cimb: {
    code: '022',
    color: '#7e2f36',
    official_name: 'CIMB THAI BANK PUPBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารซีไอเอ็มบี',
    nice_name: 'CIMB Thai Bank'
  },
  uob: {
    code: '024',
    color: '#0b3979',
    official_name: 'UNITED OVERSEAS BANK (THAI) PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารยูโอบี',
    nice_name: 'United Overseas Bank (Thai)'
  },
  bay: {
    code: '025',
    color: '#fec43b',
    official_name: 'BANK OF AYUDHYA PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงศรีอยุธยา',
    nice_name: 'Krungsri'
  },
  gsb: {
    code: '030',
    color: '#eb198d',
    official_name: 'THE GOVERNMENT SAVINGS BANK',
    official_name_thai: 'ธนาคารออมสิน',
    nice_name: 'Government Savings Bank'
  },
  baac: {
    code: '034',
    color: '#4b9b1d',
    official_name: 'BANK FOR AGRICULTURE AND AGRICULTURAL COOPERATIVES',
    official_name_thai: 'ธนาคารเพื่อการเกษตร',
    nice_name: 'Bank for Agriculture and Agricultural Cooperatives'
  },
  tbank: {
    code: '065',
    color: '#fc4f1f',
    official_name: 'THANACHART BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารธนชาติ',
    nice_name: 'Thanachart Bank'
  },
  kk: {
    code: '069',
    color: '#199cc5',
    official_name: 'KIATNAKIN BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารเกียรตินาคิน',
    nice_name: 'Kiatnakin Bank'
  },
  icbc: {
    code: '070',
    color: '#c50f1c',
    official_name: 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (THAI) PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารไอซีบีซี',
    nice_name: 'Industrial and Commercial Bank of China (Thai)'
  },
  lhb: {
    code: '073',
    color: '#6d6e71',
    official_name: 'LAND AND HOUSES BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารแลนด์ แอนด์ เฮ้าส์ ',
    nice_name: 'Land and Houses Bank'
  }
}

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
    text: BankList.tmb.official_name_thai,
    value: BankList.tmb.official_name_thai
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
    text: BankList.tbank.official_name_thai,
    value: BankList.tbank.official_name_thai
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
]
