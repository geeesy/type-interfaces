import {SaleChannelSubType, SaleChannelType} from "./enum-const";

export type TSocialSource = 'facebook' | 'line';
export type TMessageType = 'text' | 'image' | 'audio' | 'video' | 'file' | 'location' | 'sticker';
export type TMessageStatus = 'sent' | 'unread' | 'read' | 'failed' | 'unknown';
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

/**
 * REVIEW Social Channel
 * ! AppSync
 * - Social Channel Selector
 */

export interface ISocialChannelImmu {
  compId: string;
  businessId: string;
  channelId: string;
}

export interface ISocialChannel{
  pageId: string;
  saleChannelId: string;
  saleChannelType: SaleChannelType;
  saleChannelSubType: SaleChannelSubType;
  saleChannelIconUrl: string;
  saleChannelAliasName: string;
  totalUnread: number;
}

/**
 * REVIEW Social Conversation
 * ! AppSync
 */

// ANCHOR Conversation | Entity (1/2)

export interface IDBConversationImmu {
  compId: string;
  conversationId: string;
}

// ANCHOR Conversation | Entity (2/2)
export interface IConversation{
  hasBlocked: boolean;
  socialSource: TSocialSource;
  totalUnread: number;
  profileName:string;
  profileUrl: string;
  latestMessage:{
    from: ISocialChatMessageSender;
    text: string;
    receivedTimestamp: number;
  }
}

/**
 * REVIEW Social Chat Message
 * ! AppSync
 */

// ANCHOR: Social Chat Message | Entity (1/2)
export interface IDBSocialChatMessageImmu {
  id: string; //! By AppSync
}

// ANCHOR: Social Chat Message | Entity (2/2)
export interface ISocialChatMessage {
  socialSource: TSocialSource;
  timestamp: number;
  messageStatus: string;
  message: IMessage;
}

export interface ISocialChatMessageSender {
  senderId: string;
  senderProfileName:string;
  isPageSender:boolean;
}

export interface IMessage {
  mid: string;
  type: TMessageType;
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



