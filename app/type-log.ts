// * Log User

import {AccessScope} from "./enum-const";

export type TLogUserAction = 'create' | 'update' | 'delete' | 'read' | 'list' | 'manage'

export type ResourceEntity =
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
    logId: string // random ksuid
    eventName: string;
    eventApiAction: 'POST' | 'PUT' | 'GET';
    eventUserAction: TLogUserAction;
    resourceScope: AccessScope;
    resourceEntity: ResourceEntity;
    eventTime: string; // 2023-07-19T21:14:20Z
    sourceIPAddress: string; //192.0.2.0
    cognitoUsername: string;
    context: Record<string,string|number|boolean>;
}
