import { IApiCompanyParams, IDBLogTime } from "./type-api";
import { IDBActivityLog } from "./type-apps";

export declare type Action<ExtraFields = {
  label: string;
}> = (TPostBackAction | TMessageAction | TURIAction | TDateTimePickerAction | TRichMenuSwitchAction | {
  type: "camera";
} | {
  type: "cameraRoll";
} | {
  type: "location";
} | {
  type: "none";
}) & ExtraFields;

/**
 * When a control associated with this action is tapped, a postback event is
 * returned via webhook with the specified string in the data property.
 */
export declare type TPostBackAction= {
  type: "postback";
  /**
   * String returned via webhook in the `postback.data` property of the
   * postback event (Max: 300 characters)
   */
  data: string;
  /**
   * Text displayed in the chat as a message sent by the user when the action
   * is performed. Returned from the server through a webhook.
   *
   * - This property cannot be used with quick reply buttons. (Max: 300 characters)
   * - The `displayText` and `text` properties cannot both be used at the same time.
   * @deprecated
   */
  text?: string;
  /**
   * Text displayed in the chat as a message sent by the user when the action is performed.
   *
   * - Required for quick reply buttons.
   * - Optional for the other message types.
   *
   * Max: 300 characters
   *
   * The `displayText` and `text` properties cannot both be used at the same time.
   */
  displayText?: string;
  /**
   * The display method of such as rich menu based on user action. Specify one of the following values:
   *
   * - `closeRichMenu`: Close rich menu
   * - `openRichMenu`: Open rich menu
   * - `openKeyboard`: Open keyboard
   * - `openVoice`: Open voice message input mode
   *
   * This property is available on LINE version 12.6.0 or later for iOS or Android.
   */
  inputOption?: "closeRichMenu" | "openRichMenu" | "openKeyboard" | "openVoice";
  /**
   * String to be pre-filled in the input field when the keyboard is opened.
   * Valid only when the inputOption property is set to openKeyboard.
   * The string can be broken by a newline character (\n).
   *
   * Max: 300 characters
   */
  fillInText?: string;
};
/**
* When a control associated with this action is tapped, the string in the text
* property is sent as a message from the user.
*/
export declare type TMessageAction = {
  type: "message";
  /**
   * Text sent when the action is performed (Max: 300 characters)
   */
  text: string;
};
/**
* When a control associated with this action is tapped, the URI specified in
* the `uri` property is opened.
*/
export declare type TURIAction = {
  type: "uri";
  /**
   * URI opened when the action is performed (Max: 1000 characters).
   * Must start with `http`, `https`, or `tel`.
   */
  uri: string;
  altUri?: AltURI;
};
/**
 * URI opened on LINE for macOS and Windows when the action is performed (Max: 1000 characters)
 * If the altUri.desktop property is set, the uri property is ignored on LINE for macOS and Windows.
 * The available schemes are http, https, line, and tel.
 * For more information about the LINE URL scheme, see Using the LINE URL scheme.
 * This property is supported on the following version of LINE.
 *
 * LINE 5.12.0 or later for macOS and Windows
 * Note: The altUri.desktop property is supported only when you set URI actions in Flex Messages.
 */
export declare type AltURI = {
  desktop: string;
};
/**
* When a control associated with this action is tapped, a
* [postback event](https://developers.line.biz/en/reference/messaging-api/#postback-event)
* is returned via webhook with the date and time selected by the user from the
* date and time selection dialog.
*
* The datetime picker action does not support time zones.
*
* #### Date and time format
*
* The date and time formats for the `initial`, `max`, and `min` values are
* shown below. The `full-date`, `time-hour`, and `time-minute` formats follow
* the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) protocol.
*
* | Mode     | Format                                                       | Example                          |
* | -------- | ------------------------------------------------------------ | -------------------------------- |
* | date     | `full-date` (Max: 2100-12-31; Min: 1900-01-01)               | 2017-06-18                       |
* | time     | `time-hour`:`time-minute` (Max: 23:59; Min: 00:00)           | 00:0006:1523:59                  |
* | datetime | `full-date`T`time-hour`:`time-minute` or `full-date`t`time-hour`:`time-minute` (Max: 2100-12-31T23:59; Min: 1900-01-01T00:00) | 2017-06-18T06:152017-06-18t06:15 |
*/
export declare type TDateTimePickerAction = {
  type: "datetimepicker";
  /**
   * String returned via webhook in the `postback.data` property of the
   * postback event (Max: 300 characters)
   */
  data: string;
  mode: "date" | "time" | "datetime";
  /**
   * Initial value of date or time
   */
  initial?: string;
  /**
   * Largest date or time value that can be selected. Must be greater than the
   * `min` value.
   */
  max?: string;
  /**
   * Smallest date or time value that can be selected. Must be less than the
   * `max` value.
   */
  min?: string;
};
/**
* When a control associated with this action is tapped, the URI specified in
* the `uri` property is opened.
*/
export declare type TRichMenuSwitchAction = {
  type: "richmenuswitch";
  /**
   * Action label. Optional for rich menus. Read when the user's device accessibility feature is enabled.
   * Max character limit: 20. Supported on LINE for iOS 8.2.0 or later.
   */
  label?: string;
  /**
   * Rich menu alias ID to switch to.
   */
  richMenuAliasId: string;
  /**
   * String returned by the postback.data property of the postback event via a webhook
   * Max character limit: 300
   */
  data: string;
};

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

export interface IRichMenuAreas {
  sortNo: number;
  bounds: IRichMenuAreasBounds;
  action: Action<{
    label?: string;
  }>;
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
  chatBarText: string;
  hasArchived: boolean;
  richMenus: IRicMenus[]; //all active
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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
        type: "none",
        label: "",
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

// * saleChannel
export interface ISaleChannelRichMenu {
  saleChannelId: string;
}



