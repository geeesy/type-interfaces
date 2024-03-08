import {IImage} from "./type-apps";
import {IMessagePush} from "./type-messenger";

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

export interface IReplyDataLine {
  messages: IMessagePush[];
}

