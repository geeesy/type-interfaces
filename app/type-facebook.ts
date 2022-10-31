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
export interface IFacebookLiveCreate {
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

export interface IFacebookLiveList
  extends IFacebookLiveCreate,
    IFacebookLive,
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
}

export interface IFacebookPost {
  products: IProductFacebookRow[];
}

export interface IFacebookPostId {
  postId: string;
}

export interface IFacebookPostList
  extends IFacebookPostCreate,
    IFacebookPost,
    IFacebookPostId {}

export interface ICountFacebookPostRow {
  CountComment: number;
  CountAwaitingConfirmOrder: number;
  CountAwaitingPaymentOrder: number;
  CountCompletedOrder: number;
  TotalAmount: number;
}

export interface IProductFacebookRow extends IProductRow {
  codeCf: string;
}
