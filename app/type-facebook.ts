import { IFacebookData } from './type-setting';
import { IProductRow } from './type-apps';

export type TBroadcastStatus =
  | 'UNPUBLISHED'
  | 'LIVE'
  | 'LIVE_STOPPED'
  | 'PROCESSING'
  | 'VOD'
  | 'SCHEDULED_UNPUBLISHED'
  | 'SCHEDULED_LIVE'
  | 'SCHEDULED_EXPIRED'
  | 'SCHEDULED_CANCELED';

export interface IFacebookLive {
  facebookLiveName: string;
  facebookData: IFacebookData;
  broadcastStatus: TBroadcastStatus;
  liveTimestamp: number;
  products: IProductFacebookRow[];
}

export interface IFacebookLiveId {
  facebookLiveId: string;
}

export interface IFacebookPost {
  facebookPostName: string;
  statusPost: string;
  facebookData: IFacebookData;
  postSelectedId: string;
  products: IProductFacebookRow[];
  periodStartDate: Date;
  periodEndDate: Date;
}

export interface IFacebookPostId {
  facebookPostId: string;
}

export interface IProductFacebookRow extends IProductRow {
  codeCf: string;
}
