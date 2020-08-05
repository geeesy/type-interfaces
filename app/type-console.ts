export interface IcsResSupplier {
  companyInfo: {
    supplierName: string;
    supplierCompanyCode: string;
    supplierCompanyEmail: string;
    supplierCompanyWebsite: string;
    supplierCompanyRegisterId: string;
    companyOverview: string;
    companyDescription: string;
    mainProduct: string[];
  };
  companyMapLocation: {
    pinImageUrl: string;
    lat: string;
    lng: string;
    location: string[];
  };
  companyBoard: [
    {
      ownerName: string;
      ownerEmail: string;
      ownerMobile: string;
      ownerPosition: string;
    }
  ];
  addressSupplier: [
    {
      supplierAddrName: string;
      supplierAddrFull: string;
      supplierAddrNumber: string;
      supplierAddrProvince: string;
      supplierAddrAmphoe: string;
      supplierAddrTambon: string;
      supplierAddrPostcode: string;
      supplierAddrCountry: string;
      supplierAddrLocationLat: number;
      supplierAddrLocationLng: number;
      supplierAddrPhone: string;
      supplierAddrMobile: string;
      supplierAddrFax: string;
      supplierAddrEmail: string;
      supplierAddrType: string;
      officeHour: [
        {
          day: string;
          time: string;
        }
      ];
    }
  ];
  address: {
    addrName: string;
    addrFull: string;
    addrNumber: string;
    addrProvince: string;
    addrAmphoe: string;
    addrTambon: string;
    addrPostcode: string;
    addrPhone: string[];
    addrMobile: string[];
    addrFax: string[];
    addrEmail: string;
    addrCountry: string;
    addrLat: string;
    addrLng: string;
  };
  badge: {
    supplierWarranty: boolean;
    supplierSample: boolean;
    supplierCountry: string;
  };
  companySetting: {
    paymentCreditMethod: string[];
    paymentWalletMethod: string[];
    paymentBankingMethod: string[];
    paymentCounterMethod: string[];
    shippingZone: {
      zoneName: string;
      zoneProvince: string[];
      zonePostcode: string[];
      zoneMethod: string[];
    };
    creditTerm: string[];
  };
  companyMetric: {
    ages: number;
    leadTime: string[];
    shippingDuration: string[];
    employee: string[];
    companyCapital: number;
  };
  companyAssets: {
    supplierVideoUrl: string[];
    supplierLogoUrl: string;
    supplierColor: string;
    supplierBannersUrl: string[];
  };
  contactPerson: [
    {
      contactName: string;
      contactEmail: string;
      contactMobile: string;
      contactPosition: string;
      contactKeyPerson: boolean;
    }
  ];
  supplierImages: [
    {
      type: string;
      title: string;
      image: [
        {
          url: string;
          caption: string;
        }
      ];
      verified: boolean;
    }
  ];
  supplierDocs: [
    {
      url: string;
      type: string;
      title: string;
      expire: Date;
      private: boolean;
      verified: boolean;
    }
  ];
  supplierCertificates: [
    {
      url: string;
      type: string;
      title: string;
      expire: Date;
      private: boolean;
      issued: Date;
      issuer: string;
      cerName: string;
    }
  ];
  factory: {
    factoryAddress: {
      name: string;
      addressFull: string;
      number: string;
      province: string;
      amphoe: string;
      tambon: string;
      postcode: number;
      lat: string;
      lng: string;
    };
    factoryAreaUnit: string;
    factoryArea: string;
    factoryImageUrl: string[];
    factoryCapacity: string;
    factoryCapacityUnit: string;
  };
  indexing: {
    supplierTag: string[];
    supplierKeyword: string[];
  };
  geeesyAction: {
    supplierVerified: boolean;
    supplierRating: number;
    supplierScore: number;
    supplierActive: boolean;
    supplierRegisterDate: Date;
    supplierHilight: boolean;
    impFactor: number;
    supplierRecommend: boolean;
  };
  followers: number;

  businessType: string;
  supplierCustomPage: [
    {
      title: string;
      content: string;
    }
  ];
}

export interface IcsResDistributor {
  companyInfo: {
    distributorName: string;
    distributorCompanyCode: string;
    distributorCompanyEmail: string;
    distributorCompanyWebsite: string;
    distributorCompanyRegisterId: string;
    companyOverview: string;
    companyDescription: string;
    mainProduct: string[];
  };
  companyMapLocation: {
    pinImageUrl: string;
    lat: string;
    lng: string;
    location: string[];
  };
  companyBoard: [
    {
      ownerName: string;
      ownerEmail: string;
      ownerMobile: string;
      ownerPosition: string;
    }
  ];
  addressSupplier: [
    {
      distributorAddrName: string;
      distributorAddrFull: string;
      distributorAddrNumber: string;
      distributorAddrProvince: string;
      distributorAddrAmphoe: string;
      distributorAddrTambon: string;
      distributorAddrPostcode: string;
      distributorAddrCountry: string;
      distributorAddrLocationLat: number;
      distributorAddrLocationLng: number;
      distributorAddrPhone: string;
      distributorAddrMobile: string;
      distributorAddrFax: string;
      distributorAddrEmail: string;
      distributorAddrType: string;
      officeHour: [
        {
          day: string;
          time: string;
        }
      ];
    }
  ];
  address: {
    addrName: string;
    addrFull: string;
    addrNumber: string;
    addrProvince: string;
    addrAmphoe: string;
    addrTambon: string;
    addrPostcode: string;
    addrPhone: string[];
    addrMobile: string[];
    addrFax: string[];
    addrEmail: string;
    addrCountry: string;
    addrLat: string;
    addrLng: string;
  };
  badge: {
    distributorWarranty: boolean;
    distributorSample: boolean;
    distributorCountry: string;
  };
  companySetting: {
    paymentCreditMethod: string[];
    paymentWalletMethod: string[];
    paymentBankingMethod: string[];
    paymentCounterMethod: string[];
    shippingZone: {
      zoneName: string;
      zoneProvince: string[];
      zonePostcode: string[];
      zoneMethod: string[];
    };
    creditTerm: string[];
  };
  companyMetric: {
    ages: number;
    leadTime: string[];
    shippingDuration: string[];
    employee: string[];
    companyCapital: number;
  };
  companyAssets: {
    distributorVideoUrl: string[];
    distributorLogoUrl: string;
    distributorColor: string;
    distributorBannersUrl: string[];
  };
  contactPerson: [
    {
      contactName: string;
      contactEmail: string;
      contactMobile: string;
      contactPosition: string;
      contactKeyPerson: boolean;
    }
  ];
  distributorImages: [
    {
      type: string;
      title: string;
      image: [
        {
          url: string;
          caption: string;
        }
      ];
      verified: boolean;
    }
  ];
  distributorDocs: [
    {
      url: string;
      type: string;
      title: string;
      expire: Date;
      private: boolean;
      verified: boolean;
    }
  ];
  distributorCertificates: [
    {
      url: string;
      type: string;
      title: string;
      expire: Date;
      private: boolean;
      issued: Date;
      issuer: string;
      cerName: string;
    }
  ];
  factory: {
    factoryAddress: {
      name: string;
      addressFull: string;
      number: string;
      province: string;
      amphoe: string;
      tambon: string;
      postcode: number;
      lat: string;
      lng: string;
    };
    factoryAreaUnit: string;
    factoryArea: string;
    factoryImageUrl: string[];
    factoryCapacity: string;
    factoryCapacityUnit: string;
  };
  indexing: {
    distributorTag: string[];
    distributorKeyword: string[];
  };
  geeesyAction: {
    distributorVerified: boolean;
    distributorRating: number;
    distributorScore: number;
    distributorActive: boolean;
    distributorRegisterDate: Date;
    distributorHilight: boolean;
    impFactor: number;
    distributorRecommend: boolean;
  };
  followers: number;

  businessType: string;
  distributorCustomPage: [
    {
      title: string;
      content: string;
    }
  ];
}

export interface IcsResMainCategory {
  categoryMainId: string
  categoryMainName: string
  categoryMainIconUrl: string
  categoryMainImageUrl: string
}

export interface IcsResCategory {
  categoryId: string
  categoryName: string
  categoryIconUrl: string
  categoryImageUrl: string
}

interface IcsCreateMainCategory {
  categoryName: string
  categoryImageUrl: string
  categoryRecommend: boolean;
  categoryIconUrl: string
  impFactor: number
  categoryDescription: string
  categoryBanners: string[]
}

interface IcsCreateCategoryLevel {
  categoryId: number
  categoryName: string
  categoryImageUrl: string
  categoryRecommend: boolean;
  categoryIconUrl: string
  impFactor: number
  categoryBanners: string[]
}

interface IcsCreateProduct {
  supplierId: string
  distributorId: string
  productImageUrl: string[]
  productName: string
  costPrice: number
  productBuyPrice: number
  productPrice: number
  productSku: string
  productUnit: string
  productWholesaleArray: [
    {
      minWholesaleQty: number
      productWholesalePrice: number
      retailPrice: number
    }
  ];
  productSource: string
  productCategoryId: string
  productCategoryCustomName: string
  productCurrencyCode: string
  productBarcode: string
  productOrigin: string
  productChannel: string[]
  productImageArrayUrl: string[]
  productIsActive: boolean;
  initialStock: number
  warehouseId: string
  productPackage: {
    weight: number
    weightUnit: string
    height: number
    heightUnit: string
    width: number
    widthUnit: string
    length: number
    lengthUnit: string
  };
  productBrand: string
  stockAlert: number
  maximumOnlineStock: number
  minOrderQty: number
  keepSellingPast: boolean;
  minimumWholesaleQty: number
  wholesalePrice: number
  retailPrice: number
  description: string
  productKeyword: string[]
  packSizeLabel: string
  packSizeQty: number
  preparingTime: number
  productHilight: boolean;
  productMarketplace: boolean;
  recommendProduct: boolean;
  showOnCompanyCard: boolean;
  newProduct: boolean;
  productCategorySpec: [
    {
      attriName: string
      attriValue: string
    }
  ];
  showOnMarketplace: boolean;
  showOnInApp: boolean;
  wholesaleOnMarketplace: boolean;
  wholesaleInApp: boolean;
  freeShipPrice: number
  freeShipQuantity: number
  productVideoCoverUrl: string
  wholesale: {
    qtyMinimum: number
    productPrice: number
    retailQtyMinimum: number
    retailProductPrice: number
  };
  leadTime: [
    {
      qty: string[]
      day: number
    }
  ];
}

interface IcsCreateProductGroup {
  supplierId: string
  distributorId: string
  productGroupImageUrl: string[]
  productGroupName: string
  productSource: string
  productCategoryId: string
  productCategoryCustomName: string
  productCurrencyCode: string
  productOrigin: string
  productChannel: string[]
  productIsActive: boolean;
  warehouseId: string
  productBrand: string
  description: string
  productKeyword: string[]
  productHilight: boolean;
  productMarketplace: boolean;
  recommendProduct: boolean;
  showOnCompanyCard: boolean;
  newProduct: boolean;
  productCategorySpec: [
    {
      attriName: string
      attriValue: string
    }
  ];
  showOnMarketplace: boolean;
  showOnInApp: boolean;
  wholesaleOnMarketplace: boolean;
  wholesaleInApp: boolean;
  productVideoCoverUrl: string

  products: [
    {
      productName: string
      costPrice: number
      productBuyPrice: number
      productPrice: number
      productSku: string
      productUnit: string
      productWholesaleArray: [
        {
          minWholesaleQty: number
          productWholesalePrice: number
          retailPrice: number
        }
      ];
      productBarcode: string
      productImageArrayUrl: string[]
      productIsActive: boolean;
      initialStock: number
      productPackage: {
        weight: number
        weightUnit: string
        height: number
        heightUnit: string
        width: number
        widthUnit: string
        length: number
        lengthUnit: string
      };
      stockAlert: number
      maximumOnlineStock: number
      minOrderQty: number
      keepSellingPast: boolean;
      minimumWholesaleQty: number
      wholesalePrice: number
      retailPrice: number
      packSizeLabel: string
      packSizeQty: number
      preparingTime: number
      freeShipPrice: number
      freeShipQuantity: number
      wholesale: {
        qtyMinimum: number
        productPrice: number
        retailQtyMinimum: number
        retailProductPrice: number
      };
      leadTime: [
        {
          qty: string[]
          day: number
        }
      ];
    }
  ];
}

export interface IcsResProductCategorySpec {
  attriName: string;
  attriValue: string[];
}

export interface IcsResProductCategory {
  productCategoryId: number
  productCategoryName: string
  productCategoryIcon: string
}

export interface IcsResProductMainCategory {
  productMCategoryId: number
  productMCategoryName: string
  productMCategoryIcon: string
}

interface IcsCreateProductCategory {
  productCategoryName: string
  productCategoryImageUrl: string
  productCategoryRecommend: boolean;
  productCategoryIconUrl: string
  productCategorySpec: [
    {
      attriName: string;
      attriValue: string[];
    }
  ];
}

interface IcsCreateProductCategoryLevel {
  productCategoryId: number
  productCategoryName: string
  productCategoryImageUrl: string
  productCategoryRecommend: boolean;
  productCategoryIconUrl: string
  productCategorySpec: [
    {
      attriName: string;
      attriValue: string[];
    }
  ];
}

export interface IcsResPaymentMethod {
  paymentMethodType: string;
  paymentMethodTypeAttr: IPaymentMethodTypeAttr[];
}
interface IcsPaymentMethodTypeAttr {
  paymentMethodIconUrl: string;
  paymentMethodName: string;
}

interface IcsCreatePaymentMethod {
  paymentMethodName: string
  paymentMethodType: string
  paymentMethodIconUrl: string
}

interface IcsCreateRfqScore {
  rfqSectionName: string
  rfqScore: number
}

interface IcsCreateShippingMethod {
  shippingMethodPostcode: number
  shippingMethodName: string
  shippingMethodIconUrl: string
}

export interface IcsResShippingMethod {
  shippingMethodId: string
  shippingMethodName: string
  shippingMethodIconUrl: string
}

export interface IcsResBanner {
  bannerSortIndex: number
  bannerLinkUrl: string
  bannerTitle: string
  bannerImageUrl: string
}

interface IcsCreateVideo {
  videoUrl: string
  videoTitle: string
  videoDescription: string
}
