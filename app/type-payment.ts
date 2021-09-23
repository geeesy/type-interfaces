import { BankAccountType, PaymentMethodType, TBankName } from './enum-const';

export interface IPaymentMethodTypeDeposit {
  paymentMethodType: PaymentMethodType.BankDeposit;
  bankAccountType: BankAccountType.Current | BankAccountType.Saving;
  bankAccountName: TBankName;
  accountName: string;
  accountNo: string;
  branchName: string;
}

export interface IPaymentMethodTypeCod {
  paymentMethodType: PaymentMethodType.COD;
  caption: string;
}

// REVIEW: Payment Method

export interface IDBPaymentMethodImmu {
  paymentMethodId: string;
}

export interface IPaymentMethodEntityImmu {
  paymentMethodType: PaymentMethodType;
}

export interface IPaymentMethodEntity {
  paymentIconUrl: string;
  paymentAliasName: string;
  note: string;
  paymentMethodAttribute: IPaymentMethodTypeDeposit | IPaymentMethodTypeCod;
}
