import {IImage} from "./type-apps";

export interface IReplyData {
    replyName: string;
    replyKeyword: string;
    replyDescription: string;
    replyImagesUrl: IImage[];
}

