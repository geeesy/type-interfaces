import {
  IDBInventoryEntity,
  IDBInventoryEntityImmu,
  IInventoryEntity
} from './type-inventory';
import {
  IDBProductVariantOnlyImmu,
  IProductEntity,
  IProductEntityImmu,
  IProductImage,
  IProductPrice,
  IProductRootEntity,
  IProductVariantEntity,
  IProductVariantSelector,
  ISeoMeta
} from './type-catalog';

import { GappSetting } from '.';
import { IDBLogTime } from './type-api';
import { IOrderProductRow } from './type-order';
import { ISocial } from './type-apps';
import { SaleChannelSubType } from './enum-const';

export type TSalepageType = 'LeadPage' | 'ContentPage' | 'SalePage';

// REVIEW: SALEPAGE
// ANCHOR: SALE PAGE | Entity (1/4)
export interface ISalePageEntityImmu {
  compId: string;
  businessId: string;
  salepageId: string;
  salepageType: TSalepageType;
  isOnePage?: boolean;
}

// ANCHOR: SALE PAGE | Entity (2/4)
export interface IDBSalePageEntity {
  hasBuilded: boolean;
}

// ANCHOR: SALE PAGE | Entity (3/4)
export interface ISalePageEntity {
  title: string;
  contact: ISessionContact;
  shippingAvailableIds: string[];
  paymentAvailableIds: string[];
  shippingAvailableData: GappSetting.ShippingMethod[];
  paymentAvailableData: GappSetting.PaymentMethod[];
  settingFacebook: ISettingFacebook[];
  settingGoogle: ISettingGoogle;
  settingLine: ISettingLine;
  settingSeo: ISeoMeta;
}

// ANCHOR: SALE PAGE | Entity (4/4)
export interface ISalePageUIComponent {
  salePageComponent: ISalePageComponent;
}

export interface ISessionContact extends ISocial {
  mobile: string;
}

export interface ISettingFacebook {
  pixelId: string;
}

export interface ISettingGoogle {
  gtmId: string;
}

export interface ISettingLine {
  lineTagId: string;
}

/**
 * COMPONENT BLOCK
 */

export interface ISalePageComponent {
  componentForm?: IComponentForm;
  componentBlock: IComponentBlock[];
}

// * Component Form
export interface IContactForm {
  buttonColor: string;
  buttonLabel: string;
  formField: IContactFormField;
}

export interface IContactFormField {
  isRequiredAddrName: boolean;
  isRequiredAddrFull: boolean;
  isRequiredAddrNumber: boolean;
  isRequiredProvince: boolean;
  isRequiredAmphoe: boolean;
  isRequiredTambon: boolean;
  isRequiredPostcode: boolean;
  isRequiredPhonesExt?: boolean;
  isRequiredPhones: boolean;
  isRequiredMobiles: boolean;
  isRequiredFaxes?: boolean;
  isRequiredEmails: boolean;
  isRequiredCountry: boolean;
  isRequiredLat?: boolean;
  isRequiredLng?: boolean;
  isRequiredOfficeHours?: boolean;
  isRequiredIsPrimary?: boolean;
}

export interface IThankyouForm {
  caption: string;
  heading: string;
}

export interface IComponentForm {
  contactForm?: IContactForm;
  thankyouForm?: IThankyouForm;
}

// * Component Block
export interface IComponentBlockProgress {
  color: string;
  caption: string;
  iconUrl: string;
  percent: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IComponentBlockProduct extends IOrderProductRow {
  inventorySelect?: IInventorySelect;
  settingDiscount?: ISettingDiscount;
  settingBySku: boolean;
  caption: ICaption;
  isVariant: boolean;
  variantSelectors?: IProductVariantSelector[];
  productVariantArr?: IProductVariantArr[];
}

export interface ISettingDiscount {
  isActive: boolean;
  price: number;
}

export interface ICaption {
  title: string;
  description: string;
}

export interface IInventorySelect
  extends IInventoryEntity,
    IDBInventoryEntityImmu,
    IDBInventoryEntity,
    IDBLogTime {}
export interface IProductVariantArr
  extends IProductRootEntity,
    IProductEntityImmu,
    IProductVariantEntity,
    IDBProductVariantOnlyImmu {
  productImagesUrl: IProductImage[];
  productShortDescription: string;
  productPrice: IProductPrice;
  countRow: number;
}

export interface IComponentBlockHTML {
  html: string;
}

export interface IComponentBlockImage {
  name: string;
  srcUrl: string;
}
export interface IComponentBlockVideo {
  url: string;
}

export interface IRefData {
  channel: SaleChannelSubType;
  title: string;
  channelImageUrl: string;
  color: string;
  url: string;
}

export interface IComponentBlockSocial {
  refData: IRefData[];
}

export interface IComponentBlockLink {
  color: string;
  caption: string;
  url: string;
}

export interface IComponentBlockFlashSale {
  isAutoCountdown: boolean;
  expiryDate: Date;
  countdownTime: ITime;
}
export interface ITime {
  hours: number;
  minutes: number;
  ms: number;
  seconds: number;
}

export enum ComponentBlockType {
  Product = 'product',
  Progress = 'progress',
  Text = 'text',
  Image = 'image',
  Video = 'video',
  Social = 'social',
  Link = 'link',
  FlashSale = 'flashSale'
}
export interface IComponentBlock {
  data:
    | IComponentBlockProgress
    | IComponentBlockProduct
    | IComponentBlockHTML
    | IComponentBlockImage
    | IComponentBlockVideo
    | IComponentBlockSocial
    | IComponentBlockLink
    | IComponentBlockFlashSale;
  type: ComponentBlockType;
}
