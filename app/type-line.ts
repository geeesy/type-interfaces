import {IApiCompanyParams, IDBLogTime} from "./type-api";
import {IDBActivityLog} from "./type-apps";

export type TActionTypeRich =
  "postback"
  | "message"
  | "uri"
  | "datetimepicker"
  | "camera"
  | "cameraRoll"
  | "location"
  | "richmenuswitch"
  | "NO_ACTION"
export type TTemplateRich = "T0_Large" |
  "T1_Large" |
  "T2_Large" |
  "T3_Large" |
  "T4_Large" |
  "T5_Large" |
  "T6_Large" |
  "T0_Compact" |
  "T1_Compact" |
  "T2_Compact" |
  "T3_Compact" |
  "T4_Compact" |
  "CUSTOM"
export type IInputOptionRich = "closeRichMenu" | "openRichMenu" | "openKeyboard" | "openVoice"
export type IModeRich = "date" | "time" | "datetime"

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
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface IRichMenuAreasAction {
  type: TActionTypeRich;
  label: string;
  uri: string;
  text: string; // Max character limit: 300
  // data: string; // Max character limit: 300
  // mode?: IModeRich;
  // displayText?: string; // Max character limit: 300
  // inputOption?: IInputOptionRich;
  // fillInText?: string;
  // initial?: string;
  // max: string;
  // min: string;
  // richMenuAliasId?: string;
  // altUri?: {
  //   desktop: string
  // };
}

export interface IRichMenuAreas {
  sortNo: number;
  bounds: IRichMenuAreasBounds;
  action: IRichMenuAreasAction;
  imageUrl: string;
}

export interface IRichSize {
  width: number;
  height: number;
}

export interface IRichTemplate {
  size: IRichSize;
  areas: IRichMenuAreas[];
}

export interface IRichMenu extends IRichTemplate {
  richName: string;
  template: TTemplateRich;
  activeStartDateTime: string; // timestamp
  activeEndDateTime: string; // timestamp
  richShowImageUrl: string;
  selected: boolean;
  chatBarText: boolean;
  hasArchived: boolean;
  richMenus: IRicMenus[];
  isActive: boolean;
  // isDefault: boolean;
}

interface IRicMenus extends ISaleChannelRichMenu, IConnectRichMenu, IRichMenuId, IRichMenuLineId, IApiCompanyParams, IDBLogTime, IDBActivityLog {
}


// * START TEMPLATE RICH MENU
const SizeRichLarge: IRichSize = {
  width: 2500,
  height: 1686
};

const SizeRichCompact: IRichSize = {
  width: 2500,
  height: 843
};

// ^ Size Large
const T0_Large: IRichTemplate = {
  size: SizeRichLarge,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 833,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 2,
      bounds: {
        x: 0,
        y: 833,
        width: 833,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 3,
      bounds: {
        x: 0,
        y: 1666,
        width: 834,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 4,
      bounds: {
        x: 843,
        y: 0,
        width: 833,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 5,
      bounds: {
        x: 843,
        y: 833,
        width: 833,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 6,
      bounds: {
        x: 843,
        y: 1666,
        width: 834,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};
const T1_Large: IRichTemplate = {
  size: SizeRichLarge,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 2500,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 2,
      bounds: {
        x: 843,
        y: 0,
        width: 833,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 3,
      bounds: {
        x: 843,
        y: 833,
        width: 833,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 4,
      bounds: {
        x: 843,
        y: 1666,
        width: 834,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};
const T2_Large: IRichTemplate = {
  size: SizeRichLarge,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 2500,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 2,
      bounds: {
        x: 843,
        y: 0,
        width: 2500,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};
const T3_Large: IRichTemplate = {
  size: SizeRichLarge,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 1250,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 2,
      bounds: {
        x: 0,
        y: 1250,
        width: 1250,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 3,
      bounds: {
        x: 843,
        y: 0,
        width: 1250,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 4,
      bounds: {
        x: 843,
        y: 1250,
        width: 1250,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};
const T4_Large: IRichTemplate = {
  size: SizeRichLarge,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 1666,
        height: 1686
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 2,
      bounds: {
        x: 0,
        y: 1666,
        width: 834,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 3,
      bounds: {
        x: 843,
        y: 1666,
        width: 834,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};
const T5_Large: IRichTemplate = {
  size: SizeRichLarge,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 1250,
        height: 1686
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 2,
      bounds: {
        x: 0,
        y: 1250,
        width: 1250,
        height: 1686
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};
const T6_Large: IRichTemplate = {
  size: SizeRichLarge,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 2500,
        height: 1686
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};
// ^ Size Compact
const T0_Compact: IRichTemplate = {
  size: SizeRichCompact,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 833,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 2,
      bounds: {
        x: 0,
        y: 833,
        width: 834,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 3,
      bounds: {
        x: 0,
        y: 1667,
        width: 833,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};
const T1_Compact: IRichTemplate = {
  size: SizeRichCompact,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 833,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 2,
      bounds: {
        x: 0,
        y: 833,
        width: 1667,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};
const T2_Compact: IRichTemplate = {
  size: SizeRichCompact,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 1667,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 2,
      bounds: {
        x: 0,
        y: 1667,
        width: 833,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};
const T3_Compact: IRichTemplate = {
  size: SizeRichCompact,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 1250,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    },
    {
      sortNo: 2,
      bounds: {
        x: 0,
        y: 1250,
        width: 1250,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};
const T4_Compact: IRichTemplate = {
  size: SizeRichCompact,
  areas: [
    {
      sortNo: 1,
      bounds: {
        x: 0,
        y: 0,
        width: 2500,
        height: 843
      },
      action: {
        type: "NO_ACTION",
        label: "",
        uri: "",
        text: ""
      },
      imageUrl: ""
    }
  ]
};

export const TemplateRichMenu = {
  T0_Large,
  T1_Large,
  T2_Large,
  T3_Large,
  T4_Large,
  T5_Large,
  T6_Large,
  T0_Compact,
  T1_Compact,
  T2_Compact,
  T3_Compact,
  T4_Compact
};

export interface IRichMenuLineId {
  richLineId: string;
}

export interface IConnectRichMenu {
  isDefault: boolean;
}

export interface ISaleChannelRichMenu {
  saleChannelId: string;
}



