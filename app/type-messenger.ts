import {ISaleChannelEntity} from "./type-setting";
import {SaleChannelType} from "./enum-const";

export type TSocialChatMessage = 'facebook' | 'line';
export type TMessage = 'text' | 'image' | 'audio' | 'video' | 'file' | 'location' | 'sticker';

/* type line
Text
Image
Video
Audio
File
Location
Sticker
 */

/* type facebook
text, image, audio, video, or file
 */

// ^ Social Chat Message
export interface IDBSocialChatMessage{
  messageId:string;
}

export interface ISocialChatMessage {
  type: TSocialChatMessage;
  timestamp: number;
  from: ISocialChatMessageFrom;
  message: IMessage;
}

export interface ISocialChatMessageFrom {
  id: string;
  profileName:string;
  isPage:boolean;
}

export interface IMessage {
  mid: string;
  type: TMessage;
  text?: string;
  attachments: [
    {
      payload: {
        url?: string;
        title?: string;
        address?: string;
        latitude?: string;
        longitude?: string;
      }
    }
  ]
}

// ^ Conversations

export interface IDBConversations{
  conversationId:string;
}

export interface IConversations{
  hasBlocked:boolean;
  type: TSocialChatMessage;
  totalUnread: number;
  profileName:string;
  profileUrl:string;
  latestMessage:{
    from: ISocialChatMessageFrom;
    text:string;
    receivedTimestamp:number;
  }
}

// ^ SaleChannel Short

export interface ISaleChannelShort{
  saleChannelId:string;
  saleChannelType: SaleChannelType;
  pageId:string;
  saleChannelIconUrl: string;
  saleChannelAliasName:string;
  totalUnread:number;
}
