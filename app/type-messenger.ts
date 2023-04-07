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
export interface IDBSocialChatMessage{
  messageId:string
}

export interface ISocialChatMessage {
  type: TSocialChatMessage,
  unread_count: number
  timestamp: string,
  from: ISocialChatMessageFrom,
  message: IMessage
}

export interface ISocialChatMessageFrom {
  id: string;
  name:string;
  isPage:boolean
}

export interface IMessage {
  mid: string,
  type: TMessage,
  text?: string,
  attachments: [
    {
      payload: {
        url?: string,
        title?: string,
        address?: string,
        latitude?: string,
        longitude?: string
      }
    }
  ]
}
