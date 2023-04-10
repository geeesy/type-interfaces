import { SaleChannelType } from "./enum-const";

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
// ANCHOR: Social Chat Message | Entity (1/2)
export interface IDBSocialChatMessage{
  messageId:string;
}

// ANCHOR: Social Chat Message | Entity (2/2)
export interface ISocialChatMessage {
  type: TSocialChatMessage;
  timestamp: number;
  from: ISocialChatMessageSender;
  message: IMessage;
}


export interface ISocialChatMessageSender {
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
// ANCHOR Conversations | Entity (1/2)

export interface IDBConversations{
  conversationId:string;
}

// ANCHOR Conversations | Entity (2/2)
export interface IConversations{
  hasBlocked:boolean;
  type: TSocialChatMessage;
  totalUnread: number;
  profileName:string;
  profileUrl:string;
  latestMessage:{
    from: ISocialChatMessageSender;
    text:string;
    receivedTimestamp:number;
  }
}

// ^ SaleChannel Short
// STUB Sale-channel switcher
export interface ISaleChannelShort{
  saleChannelId:string;
  saleChannelType: SaleChannelType;
  pageId:string;
  saleChannelIconUrl: string;
  saleChannelAliasName:string;
  totalUnread:number;
}
