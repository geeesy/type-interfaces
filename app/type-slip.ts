import {BankErrorCodes, TBankName} from "./enum-const";

export interface IRespSlipProxy {
  type: string | null; // (12) -> (NATID, MSISDN, EWALLETID, EMAIL, BILLERID)
  value: string | null;  // (128)
}

export interface IRespSlipAccount {
  type: string;  // (12) -> (BANKAC, TOKEN, DUMMY)
  value: string; // (40)
}

export interface IRespSlipPerson {
  displayName: string | null; // (50) ? Thai or English
  name: string | null; // (50) ? English
  proxy: IRespSlipProxy;
  account: IRespSlipAccount;
}

export interface IRespSlipData {
  language: string | null; // (2) -> (TH, EN)
  receivingBank: string | null; // (3) = bank code
  sendingBank: string; // (3) = bank code
  transRef: string; // (25)
  transDate: string | null; // (8) <- payslip date (yyyy/MM/dd)
  transTime: string | null; // (8) <- payslip time (HH:mm:ss)
  sender: IRespSlipPerson;
  receiver: IRespSlipPerson;
  amount: number | null; // (12)
  paidLocalAmount: number | null; // (12)
  paidLocalCurrency: string | null; // (3)
  countryCode: string | null; // (2) **
  transFeeAmount: number | null; // (12) // TODO: type not match with FastAPI schema
  ref1: string | null; // (20) <- payslip ref number 1
  ref2: string | null; // (20) <- payslip ref number 2
  ref3: string | null; // (20) <- payslip ref number 3
  toMerchantId: string | null; // (15)
}

export interface IExtendSlipData {
  receivingBankCodeName: string | null;
  sendingBankCodeName: string; // ? Always have value
  receivingBankName: string | null;
  sendingBankName: string; // ? Always have value
}

export interface ISlipSettingData {
  isSlipAutomatic: boolean;
  hasChangeStatus: boolean;
  delayTime: number;
}

export interface IReqVerifyPaymentData {
  compId: string;
  businessId: string;
  bankAccountNo: string;
  bankAccountName: string;
  bankAccountType: TBankName;
  paymentDate: string;
  paymentTime: string;
  totalSaleAmount: number;
  fee: number;
}

export interface IReturnSlipMessage {
  message: string;
}

export interface IReturnSlipSuccess {
  invalid: IInvalidSlip;
  slipData: ISlipData;
}

export interface IReturnSlipError {
  errorCode: BankErrorCodes;
}

export interface IInvalidSlip {
  account_number: boolean;
  bank: boolean;
  duplicate: boolean;
  recorded_at: string;
  trans_ref: string;
}

export interface ISlipDataAccount{
   account: {
      type: string
      value: string
    }
    displayName: string
    name: string
    proxy: {
      type: string
      value: string
    }
}
export interface ISlipData {
  amount: string;
  countryCode: string;
  language: string;
  paidLocalAmount: string;
  paidLocalCurrency: string;
  receiver: ISlipDataAccount;
  receivingBank: string;
  ref1: string;
  ref2: string;
  ref3: string;
  sender: ISlipDataAccount;
  sendingBank: string;
  toMerchantId: string;
  transDate: string;
  transFeeAmount: string;
  transRef: string;
  transTime: string;
}
