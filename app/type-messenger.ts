export type TMessenger = 'facebook' | 'line';
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
export interface IDBMessenger{
  messageId:string
}

export interface IMessenger {
  type: TMessenger,
  unread_count: number
  timestamp: string,
  from: IMessengerFrom,
  message: IMessengerMessage
}

export interface IMessengerFrom {
  id: string;
  name:string;
  isPage:boolean
}

export interface IMessengerMessage {
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
