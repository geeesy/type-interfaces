export interface IResVideoList {
  message: string;
  data: IVideoList[];
}

export interface IVideoList {
  videoUrls: string;
  videoIFrame?: string;
  videoTitle: string;
  videoDescription: string;
  supplierIds?: string;
  supplierIconsUrl?: string;
  supplierName?: string;
  supplierCompanyEmail?: string;
  supplierRating?: number;
  supplierLogosUrl?: string;
  badge?: {
    supplierWarranty?: boolean;
    supplierSample?: boolean;
    supplierCountry?: string;
  };
}

export interface IResOrderList {
  message: string;
  data: IOrderList[];
}

export interface IOrderList {
  poIds: string;
  channelsUrl: string;
  client: string;
  images: string;
  status: string;
  shipping: string;
  payments: string;
  orderDate: string;
  poNetAmount: string;
}
