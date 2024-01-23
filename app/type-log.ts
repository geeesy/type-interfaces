// * Log User

export type TLogUserAction = 'create' | 'update' | 'delete' | 'read' | 'list' | 'manage'
export type TLogUserType =
    'PURCHASE'
    | 'ORDER'
    | 'SOCIAL'
    | 'PRODUCT'
    | 'INVENTORY'
    | 'PARTNER'
    | 'CATALOG'
    | 'SALEPAGE'
    | 'SETTING'
    | 'REPORT'
export type TLogUserName =
    'CAMPAIGN'
    | 'PARTNER_IN_CAMPAIGN'
    | 'USER_ROLE'
    | 'REPLY'
    | 'TAG'
    | 'CUSTOMER'
    | 'BLOCK_CUSTOMER'
    | 'MEMBER_CUSTOMER'
    | 'TAG_CUSTOMER'
    | 'SALE_REP'
    | 'SETTING_PRICE_GROUP'
    | 'SETTING_CF'
    | 'SETTING_GTM'
    | 'SETTING_SLIP'
    | 'SETTING_DOC'
    | 'SETTING_BUYER'
    | 'SETTING_NOTIFY'
    | 'SETTING_MARKET'
    | 'PAYMENT'
    | 'SALE_CHANNEL'
    | 'SHIPMENT'
    | 'WAREHOUSE'
    | 'DASHBOARD'
    | 'USER'
    | 'COMPANY'
    | 'DOCUMENT'
    | 'INVENTORY'
    | 'FACEBOOK'
    | 'LINE'
    | 'FINANCE'
    | 'BUSINESS'
    | 'PACKAGE'
    | 'IMPORT'
    | 'EXPORT'
    | 'ORDER'
    | 'PRODUCT'
    | 'RFQ'
    | 'QUOTATION'
    | 'PURCHASE'
    | 'BILLING'
    | 'INVOICE'
    | 'SLIP'
    | 'VENDOR'

export interface ILogsData {
    requestID: string;
    eventID: string;
    eventName: TLogUserName;
    eventAction: TLogUserAction;
    eventType: TLogUserType;
    eventTime: string; // 2023-07-19T21:14:20Z
    eventSource: string; // ec2.amazonaws.com
    awsRegion: string; // us-east-1
    sourceIPAddress: string; //192.0.2.0
}
