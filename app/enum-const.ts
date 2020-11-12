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
