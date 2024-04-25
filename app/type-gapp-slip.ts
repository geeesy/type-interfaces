import {
    IPaymentMethodTypeCash,
    IPaymentMethodTypeCod,
    IPaymentMethodTypeDeposit,
    IPaymentMethodTypePromptPay
} from "./type-payment";
import {PaymentMethodType} from "./enum-const";

// ANCHOR: PAYMENT | Entity (1/1)
export interface IGappPaymentEntity {
  paymentId: string;
  paymentIconUrl: string;
  paymentAliasName: string;
  note: string;
  paymentMethodAttribute: IPaymentMethodTypeDeposit | IPaymentMethodTypeCod | IPaymentMethodTypeCash | IPaymentMethodTypePromptPay;
  paymentMethodType: PaymentMethodType.BankDeposit | PaymentMethodType.COD | PaymentMethodType.Cash | PaymentMethodType.PromptPay;
  isActive: boolean;
  hasArchived: boolean;
}

export interface IDBGappShopImmu {
    shopId: string;
}

// ANCHOR: GAPP SHOP | Entity (2/3)
export interface IGappShopEntity {
    shopName: string;
    shopIconUrl: string;
    shopBusinessType: string;
    shopBusinessGroup: string;
    shopPhoneNumber: string;
    shopPackageType: string;
    shopPackageCount: number;
    shopPackageAmount: number;
    shopPaymentData: IGappPaymentEntity[];
    shopTotalAmount: number;
    shopTotalAmountPerMonth: number;
}

// ANCHOR: GAPP SHOP | Entity (3/3)
export interface IGappUserEntity {
    uid: string;
    userName: string;
    userIconUrl: string;
}

// ANCHOR: GAPP SLIP PACKAGE | Entity (1/3)
export interface IGappPackageEntity {
    packageName: string;
    packageType: string;
    packageIndex: number;
    packagePrice: number;
    packageAmount: number;
    isRecommend: boolean;
}