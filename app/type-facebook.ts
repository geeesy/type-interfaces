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

export type TTypeFacebook = 'POST' | 'LIVE';

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

export interface ICreateFacebookProductRow extends IProductFacebookRow {
  type: TTypeFacebook;
  facebookRelationId: string;
}

export interface IFacebookProductRow extends ICreateFacebookProductRow {
  facebookProductRowId: string;
}

export interface IProductFacebookRow extends IProductRow {
  codeCf: string;
}
