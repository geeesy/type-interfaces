import { IFacebookData } from './type-setting';
import { IProductRow } from './type-apps';

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

/**
 * FACEBOOK LIVE
 */
export interface IFacebookLiveList {
  facebookLiveId: string;
  facebookLiveName: string;
  facebookData: IFacebookData;
  statusBroadcast: TStatusBroadcast;
  timestampLive: number;
}

export interface IFacebookLive {
  products: IProductFacebookRow[];
}

export interface IFacebookLiveId {
  liveId: string;
}

/**
 * FACEBOOK POST
 */
// ANCHOR FACEBOOK POST LIST
export interface IFacebookPostList {
  facebookPostId: string;
  facebookPostName: string;
  facebookData: IFacebookData;
  statusPost: string;
  periodStartDate: Date;
  periodEndDate: Date;
}
// FACEBOOK POST DETAIL
export interface IFacebookPost {
  products: IProductFacebookRow[];
}

export interface ICountFacebookPostRow {
  CountComment: number;
  CountAwaitingConfirmOrder: number;
  CountAwaitingPaymentOrder: number;
  CountCompletedOrder: number;
  TotalAmount: number;
}

export interface IFacebookPostId {
  postId: string;
}

export interface IProductFacebookRow extends IProductRow {
  codeCf: string;
}
