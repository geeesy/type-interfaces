export interface IResVideoList {
  message: string;
  data: IVideoList;
}
export interface IVideoList {
  videoUrl: string;
  videoTitle: string;
  videoDescription: string;
  supplierId: string;
  supplierIconUrl: string;
  supplierName: string;
  supplierCompanyEmail: string;
  supplierRating: number;
  supplierLogoUrl: string;
  badge: {
    supplierWarranty: boolean;
    supplierSample: boolean;
    supplierCountry: string;
  };
}
