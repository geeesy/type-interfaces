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

export interface ISocialChannel {
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
export interface IConversation {
  hasBlocked: boolean;
  socialSource: TSocialSource;
  totalUnread: number;
  profileName: string;
  profileUrl: string;
  latestMessage: {
    from: ISocialChatMessageSender;
    text: string;
    receivedTimestamp: number;
  };
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
  message: IMessageId & IMessage;
}

export interface ISocialChatMessageSender {
  senderId: string;
  senderProfileName: string;
  isPageSender: boolean;
}

export interface IMessageId {
  mid: string;
}

export interface IMessage {
  type: TMessageType;
  text?: string;
  packageId?: string; // type sticker
  stickerId?: string; // type sticker
  title?: string; // type location
  address?: string; // type location
  latitude?: string; // type location
  longitude?: string; // type location
  url?:string // type image, video, audio, file
  fileName?: string // type file
  fileSize?: number // type file
}

export interface IMessagePush extends IMessage {
  emojiList?: IEmoji[]
}

export interface IEmoji {
  index: number;
  productId: string;
  emojiId: string;
}

export interface IPushMessageLine {
  saleChannelId: string,
  receiver: string,
  message: IMessagePush,
  conversationId: string
}



