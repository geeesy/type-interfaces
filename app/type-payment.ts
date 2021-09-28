import { BankAccountType, PaymentMethodType, TBankName } from './enum-const';

export interface IPaymentMethodTypeDeposit {
  paymentMethodType: PaymentMethodType.BankDeposit;
  bankAccountType: BankAccountType.Current | BankAccountType.Saving;
  bankAccountName: TBankName;
  accountName: string;
  accountNo: string;
  branchName: string;
  caption: string;
}

export interface IPaymentMethodTypeCod {
  paymentMethodType: PaymentMethodType.COD;
  caption: string;
}

// REVIEW: Payment Method

export interface IDBPaymentMethodImmu {
  paymentMethodId: string;
  compId: string;
}

export interface IDBPaymentMethod {
  isActive: boolean;
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
