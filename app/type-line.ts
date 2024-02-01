import {templateRich} from "./enum-const";

export interface ILineData {
    channelId: string;
    channelSecret: string;
    channelAccessToken: string;
    channelWebHook: string;
}

// ^ interface rich menu
export interface IRichMenuId {
    richId: string;
}

export interface IRichMenuAreasBounds {
    x: number
    y: number
    width: number
    height: number
}

export type TActionType = "postback" | "message" | "uri" | "datetimepicker" | "camera" | "cameraRoll" | "location" | "richmenuswitch" | "NONE"

export interface IRichMenuAreasAction {
    type: TActionType
    data: string
    label?: string
    text?: string
    displayText?: string
    inputOption?: string
    fillInText?: string
    uri?: string
    mode?: string
    initial?: string
    max:string
    min:string
    altUri?: {
        desktop: string
    }
    richMenuAliasId?: string
}
export interface IRichMenuAreas {
    bounds: IRichMenuAreasBounds
    action: IRichMenuAreasAction
    imageUrl: string
}

export interface IRichMenu extends IRichMenuId {
    richName: string;
    template: templateRich
    displayTime: [string,string]
    richShowImageUrl: string
    areas: IRichMenuAreas[]
    chatBarText: boolean
    selected: boolean
}