import {SaleChannelSubType, SaleChannelType} from "./enum-const";

export type TSocialSource = 'facebook' | 'line';
export type TMessageType = 'text' | 'image' | 'audio' | 'video' | 'file' | 'location' | 'sticker' | 'flex';
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
  hasFollowed: boolean;
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
  message: IMessageId & TMessagePush;
}

export interface ISocialChatMessageSender {
  senderId: string;
  senderProfileName: string;
  isPageSender: boolean;
}

export interface IMessageId {
  mid: string;
}

export type TMessageText = {
  type: "text";
  text: string;
  emojiList?: IEmoji[]
  aliasNameList?: IAliasNameList[]
  innerHtml?: string
}

export type TMessageImage = {
  type: "image";
  attachments: [
    {
      payload: {
        url: string
        previewUrl: string
      }
    }
  ];
}

export type TMessageVideo = {
  type: "video";
  attachments: [
    {
      payload: {
        url: string
        previewUrl: string
        duration: number
      }
    }
  ];
}

export type TMessageAudio = {
  type: "audio";
  attachments: [
    {
      payload: {
        url: string
        duration: number
      }
    }
  ];
}

export type TMessageLocation = {
  type: "location";
  attachments: [
    {
      payload: {
        title: string;
        address: string;
        latitude: string;
        longitude: string;
      }
    }
  ];
}

export type TMessageSticker = {
  type: "sticker";
  attachments: [
    {
      payload: {
        packageId: string;
        stickerId: string;
      }
    }
  ];
}

export type TMessageFile = {
  type: "file";
  attachments: [
    {
      payload: {
        url: string;
        fileName: string
        fileSize: number
      }
    }
  ]
}

export type TMessageFlex = {
  type: "flex";
  altText: string;
  contents: any; // ##dynamic element dom##
}

export type TMessageFlexImage = {
  type: "flexImage";
  altText: string;
  contents: TFlexImage;
  contentsJson: any;
}

export type TFlexImage = {
  imageUrl: string
  hasBanner: boolean
  bannerText: string
  bannerColor: string
  hasAction: boolean
  actionText: string
  action?: TFlexImageActionText | TFlexImageActionLink | undefined
}

export type TFlexImageActionText = {
  type: "text";
  text: string;
}

export type TFlexImageActionLink = {
  type: "link";
  uri: string;
}


export type TAliasNameType = 'customerName' | 'marketName';

export interface IAliasNameList {
  "index": number,
  "type": TAliasNameType,
  "value"?: string
}


export type TMessagePush =
  TMessageText |
  TMessageImage |
  TMessageVideo |
  TMessageAudio |
  TMessageLocation |
  TMessageSticker |
  TMessageFile |
  TMessageFlex |
  TMessageFlexImage

export interface IEmoji {
  index: number;
  productId: string;
  emojiId: string;
}

export interface IPushMessageLine {
  saleChannelId: string,
  receiver: string,
  messages: TMessagePush[],
  conversationId: string
}



