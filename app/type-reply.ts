import {IImage} from "./type-apps";

export interface IReplyData {
    replyId: string;
    replyName: string;
    replyKeyword: string;
    replyDescription: string;
    replyImagesUrl: IImage[];
}

