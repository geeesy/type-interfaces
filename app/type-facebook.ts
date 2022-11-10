import { IFacebookData } from './type-setting';
import { IOrderProductRow } from './type-order';
import { GappSetting } from './index';
import { IPaymentMethodEntity } from './type-payment';

export type TStatusBroadcast =
  | 'UNPUBLISHED'
  | 'LIVE'
  | 'LIVE_STOPPED'
  | 'PROCESSING'
  | 'VOD'
  | 'SCHEDULED_UNPUBLISHED'
  | 'SCHEDULED_LIVE'
  | 'SCHEDULED_EXPIRED'
  | 'SCHEDULED_CANCELED';

export type TTypeFacebook = 'POST' | 'LIVE';

export type TTypeOverlay =
  | 'LOGO'
  | 'BANK'
  | 'TEXT'
  | 'SOUND'
  | 'TIME'
  | 'PRODUCT';

export type TTypeTemplate = 'DESKTOP' | 'MOBILE';

/**
 * FACEBOOK LIVE
 */
export interface IFacebookLiveCreate {
  facebookLiveId: string;
  facebookLiveName: string;
  facebookData: IFacebookData;
  statusBroadcast: TStatusBroadcast;
  timestampLive: number;
  shippingAvailableIds: string[]; // * USE ID FOR LATER
  paymentAvailableIds: string[]; // * USE ID FOR LATER
  shippingAvailableData: GappSetting.ShippingMethod[];
  paymentAvailableData: GappSetting.PaymentMethod[];
  hasNoShipment: boolean;
  templateOBSId: string; // * OBS OverlayID
}

export interface IFacebookLiveId {
  liveId: string;
}

export interface IFacebookLiveList
  extends IFacebookLiveCreate,
    IFacebookLiveId {}

/**
 * FACEBOOK POST
 */

export interface IFacebookPostCreate {
  facebookPostId: string;
  facebookPostName: string;
  facebookData: IFacebookData;
  statusPost: string;
  periodStartDate: Date;
  periodEndDate: Date;
  shippingAvailableIds: string[]; // * USE ID FOR LATER
  paymentAvailableIds: string[]; // * USE ID FOR LATER
  shippingAvailableData: GappSetting.ShippingMethod[];
  paymentAvailableData: GappSetting.PaymentMethod[];
  hasNoShipment: boolean;
}

export interface IFacebookPostId {
  postId: string;
}

export interface IFacebookPostList
  extends IFacebookPostCreate,
    IFacebookPostId {}

export interface ICountFacebookPostRow {
  CountComment: number;
  CountAwaitingConfirmOrder: number;
  CountAwaitingPaymentOrder: number;
  CountCompletedOrder: number;
  TotalAmount: number;
}

/**
 * FACEBOOK PRODUCT ROW
 */

export interface ICreateFacebookProductRow extends IFacebookConnect {
  products: IProductFacebookRow[];
}

export interface IFacebookConnect {
  type: TTypeFacebook;
  facebookRelationId: string;
}

// export interface IFacebookProductRow extends ICreateFacebookProductRow {
//   facebookProductRowId: string;
// }

export interface IProductFacebookRow extends IOrderProductRow {
  codeCf: string;
  totalReservedStock: number;
  productType: string;
  useInventory: string;
}

/**
 * OBS
 */

// ^ OBS OVERLAY TEMPLATE

export interface IOBSTemplateCreate {
  templateOBSName: string;
  templateType: TTypeTemplate;
}

export interface IOBSTemplateList {
  templateOBSId: string;
  templateOBSName: string;
  templateType: TTypeTemplate;
}

export interface IOBSTemplateUpdate {
  templateOBSId: string;
  templateOBSName: string;
}

export interface IOBSTemplateDetail {
  templateOBSId: string;
  templateOBSName: string;
  templateType: TTypeTemplate;
}

export interface IOBSTemplateRow {
  overlayName: string;
  templateOBSId: string;
  overlayType: TTypeOverlay;
  overlayAttributes:
    | IOverlayLogo
    | IOverlayBank
    | IOverlayText
    | IOverlaySound
    | IOverlayTime
    | IOverlayProduct;
}

export interface IOBSId {
  overlayId: string;
}

export interface IOBSTemplateRowUpdate {
  overlayId: string;
  overlayName: string;
  overlayAttributes:
    | IOverlayLogo
    | IOverlayBank
    | IOverlayText
    | IOverlaySound
    | IOverlayTime
    | IOverlayProduct;
}

// $ Overlay Attributes

export interface IOverlayLogo {
  overlayName: string;
  overlayUrl: string;
  overlayImage: string;
}

export interface IOverlayTime {
  overlayIsCountDown: boolean;
  overlayUrl: string;
  overlayTime: ICountDown | ISetTime;
}

export interface ICountDown {
  overlayDays: string;
  overlayHours: string;
  overlayMinutes: string;
  overlaySeconds: string;
}

export interface ISetTime {
  overlayStartTime: string;
  overlayEndTime: string;
}

export interface IOverlayText {
  overlayUrl: string;
  overlayDescription: string;
  overlayTextStyle: string;
  overlayTextBackgroundColor: string;
}

export interface IOverlayBank {
  overlayUrl: string;
  overlayPaymentData: IPaymentMethodEntity;
}

export interface IOverlaySound {
  overlayName: string;
  overlayUrl: string;
  overlayCodeSound: string;
  overlayNote: string;
}

export interface IOverlayProduct {
  overlayProducts: IProductFacebookRow[];
  overlayUrl: string;
  overlayColorPrimary: string;
  overlayColorCode: string;
  overlayColorProductName: string;
  overlayColorPrice: string;
}
