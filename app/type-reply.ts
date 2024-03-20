import {IImage} from "./type-apps";
import {TMessagePush} from "./type-messenger";

export interface IReplyTemplate {
  replyName: string;
  replyKeyword: string;
}

export interface IReplyData {
  replyDescription: string;
  replyImagesUrl: IImage[];
}

export interface IDBReplyId {
  replyId: string;
}

export  interface IDBReplyHasArchived{
  hasArchived: boolean;
}
export interface IReplyDataLine {
  messages: TMessagePush[];

}

