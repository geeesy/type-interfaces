import { SaleChannelSubType } from './enum-const';
import { GappSetting } from './index';
import { IOrderProductRow, StatusOrderSeller, TOrderType } from './type-order';
import { IPaymentMethodEntity } from './type-payment';
import { TShippingParty } from './type-shipping';

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

export type TTypeStatusComment =
  | 'NONE'
  | 'CONFIRM'
  | 'AWAITING_CONFIRM'
  | 'CANCELED';

export type TTypeVideoInsights =
  | 'total_video_views'
  | 'total_video_views_unique'
  | 'total_video_views_autoplayed'
  | 'total_video_views_clicked_to_play'
  | 'total_video_views_organic'
  | 'total_video_views_organic_unique'
  | 'total_video_views_paid'
  | 'total_video_views_paid_unique'
  | 'total_video_views_sound_on'
  | 'total_video_complete_views'
  | 'total_video_complete_views_unique'
  | 'total_video_complete_views_auto_played'
  | 'total_video_complete_views_clicked_to_play'
  | 'total_video_complete_views_organic'
  | 'total_video_complete_views_organic_unique'
  | 'total_video_complete_views_paid'
  | 'total_video_complete_views_paid_unique'
  | 'total_video_10s_views'
  | 'total_video_10s_views_unique'
  | 'total_video_10s_views_auto_played'
  | 'total_video_10s_views_clicked_to_play'
  | 'total_video_10s_views_organic'
  | 'total_video_10s_views_paid'
  | 'total_video_10s_views_sound_on'
  | 'total_video_15s_views'
  | 'total_video_60s_excludes_shorter_views'
  | 'total_video_retention_graph'
  | 'total_video_retention_graph_autoplayed'
  | 'total_video_retention_graph_clicked_to_play'
  | 'total_video_avg_time_watched'
  | 'total_video_view_total_time'
  | 'total_video_view_total_time_organic'
  | 'total_video_view_total_time_paid'
  | 'total_video_impressions'
  | 'total_video_impressions_unique'
  | 'total_video_impressions_paid_unique'
  | 'total_video_impressions_paid'
  | 'total_video_impressions_organic_unique'
  | 'total_video_impressions_organic'
  | 'total_video_impressions_viral_unique'
  | 'total_video_impressions_viral'
  | 'total_video_impressions_fan_unique'
  | 'total_video_impressions_fan'
  | 'total_video_impressions_fan_paid_unique'
  | 'total_video_impressions_fan_paid'
  | 'total_video_stories_by_action_type'
  | 'total_video_reactions_by_type_total'
  | 'total_video_view_time_by_age_bucket_and_gender'
  | 'total_video_view_time_by_region_id'
  | 'total_video_views_by_distribution_type'
  | 'total_video_view_time_by_distribution_type';

export interface IFacebookData
  extends IGraphFacebookPageRequest,
    IGraphFacebookUserRequest {
  facebookUserName: string;
  facebookPageName: string;
  facebookPageLogo: string;
  tokenType: string;
  expiresIn: number;
  statusActive: boolean;
}

export interface IGraphFacebookPageRequest {
  facebookPageId: string;
  facebookPageAccessToken: string;
}

export interface IGraphFacebookPagePostRequest {
  facebookPostId: string;
}

export interface IGraphFacebookUserRequest {
  facebookUserId: string;
  facebookUserAccessToken: string;
}

export interface IGraphFacebookPageLiveRequest {
  facebookLiveId: string;
}

export interface IGraphAPIFacebookDebugTokenRespond {
  app_id: string;
  type: string;
  application: string;
  data_access_expires_at: number;
  expires_at: number;
  is_valid: boolean;
  issued_at: number;
}

/**
 * FACEBOOK LIVE
 */
export interface IFacebookLiveCreate extends IGraphFacebookPageLiveRequest {
  facebookLiveName: string;
  facebookData: IFacebookData;
  statusBroadcast: TStatusBroadcast;
  timeStampLiveAt: string;
  shippingAvailableIds: string[]; // * USE ID FOR LATER
  paymentAvailableIds: string[]; // * USE ID FOR LATER
  shippingAvailableData: GappSetting.ShippingMethod[];
  paymentAvailableData: GappSetting.PaymentMethod[];
  hasNoShipment: boolean;
  templateOBSId: string; // * OBS OverlayID
  liveEndedAt: string;
  liveEndedBy: string;
}

export interface IFacebookLiveId {
  liveId: string;
}


export interface ISocialTransaction {
  liveId?: string,
  postId?: string
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
  chkEndDate: boolean;
  chkSetTime: boolean;
  chkStartDate: boolean;
  chkStartNow: boolean;
  isPooling: boolean; // Pooling CF
}

export interface IFacebookShowPost  extends  IFacebookPostData{
  facebookPageName: string;
  facebookPageLogo: string;
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
  CountViews:number,
  CountComment: number;
  CountOrder:number;
  CountAwaitingShipmentOrder:number;
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
  cfCode: string;
  totalReservedStock: number;
  productType: string;
  useInventory: string;
  isShowOnOBS: boolean;
  productOrderType: TOrderType;
  sortIndex: number;
  useOriginInventory: boolean;
  liveInventoryId: string;
  isLimitedAmountByOrder: boolean;
  limitedAmountByOrder: number;
  stockLive:number;
  reservedStockLive:number;
}

export interface IProductLiveRow {
  liveId: string;
  stockLive:number;
  reservedStockLive:number;
  liveInventoryId: string;
  isLimitedAmountByOrder: boolean;
  limitedAmountByOrder: number;
  productId: string;
  variantId: string; // on product variant
  productTitle: string;
  productUnitPrice: number;
  productUnit: string;
  productQty: number;
  productCoverUrl: string;
  productSku: string;
  itemsPriceRow: number;
  warehouseId: string; // ! -> INVENTORY
  inventoryId: string; // ! -> INVENTORY
  cfCode: string;
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
  sortIndex: number;
  overlayType: TTypeOverlay;
  overlayUrl: string;
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
  sortIndex: number;
  overlayType: TTypeOverlay;
  overlayUrl: string;
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
  overlayImage: string;
}

export interface IOverlayTime extends IOverlayAction {
  overlayName: string;
  overlayIsCountDown: boolean;
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
  overlayDescription: string;
  overlayTextStyle: string;
  overlayTextBackgroundColor: string;
  overlayTextColor: string;
  overlayIsShowBackgroundColor: boolean;
}

export interface IOverlayBank {
  overlayPaymentMethodId: string;
  overlayPaymentData: IPaymentMethodEntity;
  overlayPaymentName: string;
}

export interface IOverlaySound extends IOverlayAction {
  overlayName: string;
  overlayCodeSound: string;
  overlayNote: string;
}

export interface IOverlayAction {
  hasStarted: boolean;
  hasStopped: boolean;
}

export interface IOverlayProduct {
  overlayProducts: IProductFacebookRow[];
  overlayName: string;
  overlayColorPrimary: string;
  overlayColorCode: string;
  overlayColorProductName: string;
  overlayColorPrice: string;
}

// $CF DATA
export interface ICFData {
  cfCode: string;
  cfAmount: number;
  productUnit: string;
}

// $LiveCommentRespond
export interface IFacebookCommentOrderStatus {
  hasOrderCreated: boolean;
  hasOrderConfirmed: boolean;
}

export interface IFacebookLiveCommentRespond {
  message: string;
  userData: IFacebookUser;
  cfData: ICFData[];
  commentId: string;
  commentedTime: string;
  statusComment: TTypeStatusComment;
}

export interface IGraphAPIFacebookLiveCommentRespond
  extends IFacebookLiveCommentRespond {
  likeCount: number;
  userLikes: boolean;
  canComment: boolean;
  canRemove: boolean;
  canHide: boolean;
  canLike: boolean;
  canReplyPrivately: boolean;
  commentCount: number;
  messageTags: string;
  object: string;
  parentId: string;
  privateReplyConversation: IFacebookConversation;
}

export interface IFacebookUser {
  userId: string;
  firstName: string;
  lastName: string;
  middleName: string;
  name: string;
  nameFormat: string;
  pictureUrl: string;
  shortName: string;
}

export interface IFacebookPicForUser {
  height: number;
  isSilhouette: boolean;
  url: string;
  width: number;
}

export interface IFacebookConversation {
  id: string;
  message: string;
  updatedTime: string;
}

export interface IFacebookLiveDetail {
  name: TTypeVideoInsights;
  period: string;
  values: IFacebookLiveDetailValue[];
}

export interface IFacebookLiveDetailValue {
  value: string;
}

export interface IFacebookLiveOrderList {
  docNo: string;
  orderId: string;
  statusOrderOnSeller: StatusOrderSeller;
  productImageUrl: string;
  productTitle: string;
  productSku: string;
  orderType: TOrderType;
  customerFullName: string;
  saleChannelSubType: SaleChannelSubType;
  saleChannelAliasName: string;
  paymentAliasName: string;
  bankAccountName: string;
  shippingParty: TShippingParty;
  shippingAliasName: string;
  totalOrderAmount: number;
  createdAt: string;
  updatedAt: string;
  compId: string;
  paymentPrice: string;
  paymentDate: string;
  paymentTime: string;
  paymentIconUrl: string;
  shippingIconUrl: string;
  isCOD: boolean;
  shippingCost: string;
  shippingTracking: string;
}

// $GLOBAL CF SETTING
export interface IGlobalCFSetting {
  cfLiveAttribute: ILiveSettingAttr;
  cfPostAttribute: IPostSettingAttr;
  cfChatAttribute: IChatSettingAttr;
}

export interface ILiveSettingAttr extends IPostSettingAttr,IChatSettingAttr{
  isExpired: boolean;
  expiredDate: string;
}

export interface IPostSettingAttr {
  isReadKeyword: boolean;
  isProtectDuplicate: boolean;
  isLimitedAmount: boolean;
  limitedAmount: number;
}

export interface IChatSettingAttr {
  textHeader: string;
  textTotalProduct: string;
  textDescription: string;
}

// $TAG
export interface ITagAttr {
  tagId: string;
  tagName: string;
  tagDescription: string;
  tagColor: string;
}
