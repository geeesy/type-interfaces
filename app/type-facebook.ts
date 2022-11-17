import { IFacebookData } from './type-setting';
import { IOrderProductRow, TOrderType } from './type-order';
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
  | 'PRODUCT'
  | 'SELECT';

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
  // facebookPostId: string; // ! Wait Delete When New Api Completed !!!
  postName: string;
  // facebookData: IFacebookData; // ! Wait Delete When New Api Completed !!!
  // facebookConnect: IFacebookConnectPost[];
  statusPost: string;
  periodStartDate: Date;
  periodEndDate: Date;
  shippingAvailableIds: string[]; // * USE ID FOR LATER
  paymentAvailableIds: string[]; // * USE ID FOR LATER
  shippingAvailableData: GappSetting.ShippingMethod[];
  paymentAvailableData: GappSetting.PaymentMethod[];
  hasNoShipment: boolean;
  expiredPayment: IExpiredPayment;
  replyMessage: IReplyMessage;
}

export interface IExpiredPayment {
  setExpiredCheck: boolean;
  setExpiredTime: number;
}

export interface IReplyMessage {
  messageFirst: IReplyMessageDetail;
  messageSecond: IReplyMessageDetail;
  messageThird: IReplyMessageDetail;
}

export interface IReplyMessageDetail {
  patternType: string;
  messageHeaderFirst: string;
  messageHeaderSecond: string;
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

// $ConnectPOST_FB
export interface IFacebookConnectPost {
  facebookPostData: IFacebookPostData[];
  facebookData: IFacebookData;
}

export interface IFacebookPostData {
  facebookPostId: string;
  facebookPostMessage: string;
  facebookPostType: string;
  facebookPostImage: string;
  facebookPostCreated: string;
}
export interface IFacebookConnectPostId {
  facebookPostConnectedRowId: string;
}

export interface IFacebookConnectPosts {
  facebookConnects: IFacebookConnectPost[];
}

/**
 * FACEBOOK PRODUCT ROW
 */

export interface ICreateFacebookProductRow
  extends IProducts,
    IFacebookConnect {}

export interface IProducts {
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
  isShowOnOBS: boolean;
  productOrderType: TOrderType;
}

/**
 * OBS
 */

// ^ OBS OVERLAY TEMPLATE

export interface IOBSTemplate {
  templateOBSName: string;
  templateType: TTypeTemplate;
}

export interface IOverlays {
  overlays: overlayDetail[];
}

export interface IUpdateOverlays {
  overlays: overlayUpdateDetail[];
}

export interface overlayUpdateDetail extends IOBSId {
  overlayType: TTypeOverlay;
  overlayAttributes:
    | IOverlayLogo
    | IOverlayBank
    | IOverlayText
    | IOverlaySound
    | IOverlayTime
    | IOverlayProduct;
}

export interface IOBSTemplateId {
  templateOBSId: string;
}

export interface IOBSTemplateRow {
  templateOBSId: string;
  overlays: overlayDetail[];
}

export interface overlayDetail {
  overlayType: TTypeOverlay;
  isDependentOnLive: boolean;
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

// $ Overlay Attributes

export interface IOverlayLogo {
  overlayName: string;
  overlayUrl: string;
  overlayImage: string;
}

export interface IOverlayTime extends IOverlayAction {
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
  overlayTextColor: string;
  overlayIsShowBackgroundColor: boolean;
}

export interface IOverlayBank {
  overlayUrl: string;
  overlayPaymentData: IPaymentMethodEntity;
}

export interface IOverlaySound extends IOverlayAction {
  overlayName: string;
  overlayUrl: string;
  overlayCodeSound: string;
  overlayNote: string;
}

export interface IOverlayAction {
  hasStarted: boolean;
  hasStopped: boolean;
}

export interface IOverlayProduct {
  overlayProducts: IProductFacebookRow[];
  overlayUrl: string;
  overlayColorPrimary: string;
  overlayColorCode: string;
  overlayColorProductName: string;
  overlayColorPrice: string;
}

// $LiveCommentRespond
export interface IFacebookLiveCommentRespond {
  id: string;
  message: string;
  created_time: string;
  can_comment: boolean;
  can_remove: boolean;
  can_hide: boolean;
  can_like: boolean;
  can_reply_privately: boolean;
  comment_count: number;
  from: IFacebookUser;
  like_count: number;
  message_tags: string
  object: string;
  parent_id: string;
  private_reply_conversation: IFacebookConversation
  user_likes: boolean;
}

export interface IFacebookUser {
  id: string;
  first_name: string
  last_name: string;
  middle_name: string;
  name: string
  name_format: string
  picture: string
  short_name: string
}

export interface IFacebookConversation {
  id: string;
  message: string;
  updated_time: string;
}
