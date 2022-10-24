import { IFacebookData } from './type-setting';
import { IProductRow } from './type-apps';

export type TBroadcastStatus = 'UNPUBLISHED' | 'LIVE' | 'LIVE_STOPPED' | 'PROCESSING' | 'VOD' | 'SCHEDULED_UNPUBLISHED' | 'SCHEDULED_LIVE' | 'SCHEDULED_EXPIRED' | 'SCHEDULED_CANCELED'

export interface IFacebookLive {
  FacebookLiveName: string;
  facebookData: IFacebookData;
  broadcastStatus: TBroadcastStatus;
  liveTimestamp: number;
  products: IProductFacebookRow[];
}

export interface IFacebookPost {
  FacebookPostName: string;
  statusPost: string;
  facebookData: IFacebookData;
  postId: string;
  products: IProductFacebookRow[];
  periodDateStart: Date;
  periodDateEnd: Date;
}

export interface IProductFacebookRow extends IProductRow {
  codeCf: string;
}
