import {
    IPaymentMethodTypeCash,
    IPaymentMethodTypeCod,
    IPaymentMethodTypeDeposit,
    IPaymentMethodTypePromptPay
} from "./type-payment";
import {PaymentMethodType} from "./enum-const";
import {IPaymentAttachmentData} from "./type-order";

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


// ANCHOR: GAPP SHOP | Entity (1/3)
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
    isShopCompleted: boolean; // False in first time
}

// ANCHOR: GAPP SHOP | Entity (3/3)
export interface IGappUserEntity {
    uid: string;
    userName: string;
    userIconUrl: string;
}

// ANCHOR: GAPP SLIP PACKAGE | Entity (1/3)
export interface IGappPackageEntity {
    packageId: string;
    packageName: string;
    packageType: string;
    packageIndex: number;
    packagePrice: number;
    packageAmount: number;
    isRecommend: boolean;
    hasArchived: boolean;
    expiryDate: string
}

// ANCHOR: GAPP PAY PACKAGE

export enum StatusSubscription {
    PAY0_AwaitingPayment = 'AWAITING_PAYMENT',
    PAY1_CompletedPayment = 'COMPLETED_PAYMENT',
    PAY_Canceled = 'CANCELED',
}

export interface IOrderPackageDB {
    subscriptionId: string;
    subscriptionNumber: string;
    subscriptionStatus: StatusSubscription;
    createdDay: number
    createdMonth: number
    createdYear: number
}

export interface IOrderPackageEntity {
    uid: string;
    shopId: string;
    transRef: number;
    gappPackageId: string;
    gappPackageMonth: number;
    paymentAttachmentData: IPaymentAttachmentData
    paymentConfirmedData: IGappPaymentEntity
    amount: number;
    expiryDate: string;
}

export interface IPlanEntity {
    planId: string;
    subscriptionId: string;
    packageId: string;
    packageName: string;
    packageType: string;
    packagePrice: number;
    packageIndex: number;
    packageAmount: number;
    isRecommend: boolean;
    hasArchived: boolean;
    expiryDate: string;
}

export interface IBranchEntity {
    branchId: string;
    branchNumber: string;
}

export interface ISubscriptionEntity {
    planId: string;
}

export interface ISlipEntity {
    amount: number;
    recordedAt: string;
    shopId: string;
    transRef: string;
}