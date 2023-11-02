import {BankAccountType, PaymentMethodType, TBankName, TPromptPay} from './enum-const';

// ANCHOR: Payment Attribute (Type 1)
export interface IPaymentMethodTypeDeposit {
  bankAccountType: BankAccountType.Current | BankAccountType.Saving;
  bankAccountName: TBankName;
  accountName: string;
  accountNo: string;
  branchName: string;
  caption: string;
  hasQRImagesUrl: boolean,
  qrImagesUrl: string
}

// ANCHOR: Payment Attribute (Type 2)
export interface IPaymentMethodTypeCod {
  caption: string;
}

export interface IPaymentMethodTypeCash {
  caption: string;
}

export interface IPaymentMethodTypePromptPay {
  caption: string;
  promptPayType: TPromptPay,
  promptPayImagesUrl: string;
  accountNo: string;
  accountName: string;
}

// REVIEW: PAYMENT METHOD
export interface IDBPaymentMethodImmu {
  paymentMethodId: string;
  compId: string;
}

export interface IDBPaymentMethod {
  isActive: boolean;
  hasArchived: boolean;
}

export interface IPaymentMethodEntityImmu {
  paymentMethodType: PaymentMethodType.BankDeposit | PaymentMethodType.COD | PaymentMethodType.Cash | PaymentMethodType.PromptPay;
}

export interface IPaymentMethodEntity {
  activeOnMarket: boolean
  paymentIconUrl: string;
  paymentAliasName: string;
  note: string;
  paymentMethodAttribute: IPaymentMethodTypeDeposit | IPaymentMethodTypeCod | IPaymentMethodTypeCash | IPaymentMethodTypePromptPay;
}

export interface IUpdateMarketPaymentMethod {
  paymentMethodId: string
  activeOnMarket: boolean
}