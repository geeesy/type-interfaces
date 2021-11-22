import { BankAccountType, PaymentMethodType, TBankName } from './enum-const';

// ANCHOR: Payment Attribute (Type 1)
export interface IPaymentMethodTypeDeposit {
  bankAccountType: BankAccountType.Current | BankAccountType.Saving;
  bankAccountName: TBankName;
  accountName: string;
  accountNo: string;
  branchName: string;
  caption: string;
}

// ANCHOR: Payment Attribute (Type 2)
export interface IPaymentMethodTypeCod {
  caption: string;
}

// REVIEW: PAYMENT METHOD
export interface IDBPaymentMethodImmu {
  paymentMethodId: string;
  compId: string;
}

export interface IDBPaymentMethod {
  isActive: boolean;
}

export interface IPaymentMethodEntityImmu {
  paymentMethodType: PaymentMethodType.BankDeposit | PaymentMethodType.COD;
}

export interface IPaymentMethodEntity {
  activeOnMarket: boolean
  paymentIconUrl: string;
  paymentAliasName: string;
  note: string;
  paymentMethodAttribute: IPaymentMethodTypeDeposit | IPaymentMethodTypeCod;
}

export interface IUpdateMarketPaymentMethod {
  paymentMethodId: string
  activeOnMarket: boolean
}