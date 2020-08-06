/* eslint-disable no-unused-vars */
import { ICheck, IConnect, IData } from './interfaces'
import {
  IResAllCategoryInSearchTool,
  IResBanner,
  IResCategory,
  IResCategoryWithChild,
  IResFilterResultProduct,
  IResFilterResultSupplier,
  IResPaymentMethod,
  IResInquiryProductList,
  IResInterest,
  IResMainCategory,
  IResMessageDetail,
  IResMessageList,
  IResProduct,
  IResProductDescription,
  IResProductDetail,
  IResProductGroupDetail,
  IResProductWithAddr,
  IResProductWithCount,
  IResQuotaInquiry,
  IResQuotaRfq,
  IResRecommendCategory,
  IResRecommendMainCategory,
  IResRecommendSupplier,
  IResReplyRfqList,
  IResRfqList,
  IResRfqScore,
  IResSavedListProducts,
  IResSavedListSuppliers,
  IResSearchResultLocation,
  IResShippingMethod,
  IResSupplier,
  IResSupplierCersAndDocs,
  IResSupplierContact,
  IResSupplierCustomPage,
  IResSupplierFactory,
  IResSupplierHilight,
  IResSupplierImgAndVerifiedImg,
  IResSupplierOverview,
  IResSupplierWebsite,
  IResSupplierWithSavedList,
  IResTop20Products,
  IDataMainCategory,
  IDataRecommendMainCategory,
  IDataBanner,
  IDataProduct,
  IDataTop20Products,
  IDataCategoryWithChild,
  IDataCategory,
  IDataRecommendCategory,
  IDataAllCategoryInSearchTool,
  IDataSupplierHilight,
  IDataMessageList,
  IDataMessageDetail,
  IDataSavedListProducts,
  IDataSavedListSuppliers,
  IDataFilterResultProduct,
  IDataProductGroupDetail,
  IDataProductDescription,
  IDataProductDetail,
  IDataProductWithAddr,
  IDataProductWithCount,
  IDataRecommendSupplier,
  IDataFilterResultSupplier,
  IDataSupplierWithSavedList,
  IDataSupplierOverview,
  IDataSupplierContact,
  IDataSupplierFactory,
  IDataSupplierCersAndDocs,
  IDataSupplierImgAndVerifiedImg,
  IDataSupplierCustomPage,
  IDataSupplierWebsite,
  IDataRfqScore,
  IDataQuotaRfq,
  IDataShippingMethod,
  IDataPaymentMethod,
  IDataRfqList,
  IDataReplyRfqList,
  IDataQuotaInquiry,
  IDataSupplier,
  IDataInquiryProductList,
  IDataSearchResultLocation,
  IDataInterest
} from './type-marketplace'
import {
  IcsResBanner,
  IcsResCategory,
  IcsResDistributor,
  IcsResMainCategory,
  IcsResPaymentMethod,
  IcsResProductCategory,
  IcsResProductCategorySpec,
  IcsResProductMainCategory,
  IcsResShippingMethod,
  IcsResSupplier
} from './type-console'

export namespace Geeesy {
  export type ResConnect = IConnect;
  export type ResCheck = ICheck & IData;
}

export namespace GeeesyMarketplace {
  export type IMainCategory = IResMainCategory | DataMainCategory;
  export type DataMainCategory = IDataMainCategory;

  export type IRecommendMainCategory = IResRecommendMainCategory | DataRecommendMainCategory;
  export type DataRecommendMainCategory = IDataRecommendMainCategory;

  export type IBanner = IResBanner | DataBanner;
  export type DataBanner = IDataBanner;

  export type IProduct = IResProduct | DataProduct;
  export type DataProduct = IDataProduct;

  export type ITop20Products = IResTop20Products | DataTop20Products;
  export type DataTop20Products = IDataTop20Products;

  export type ICategoryWithChild = IResCategoryWithChild | DataCategoryWithChild;
  export type DataCategoryWithChild = IDataCategoryWithChild;

  export type ICategory = IResCategory | DataCategory;
  export type DataCategory = IDataCategory;

  export type IRecommendCategory = IResRecommendCategory | DataRecommendCategory
  export type DataRecommendCategory = IDataRecommendCategory;

  export type IAllCategoryInSearchTool = IResAllCategoryInSearchTool | DataAllCategoryInSearchTool;
  export type DataAllCategoryInSearchTool = IDataAllCategoryInSearchTool;

  export type ISupplierHilight = IResSupplierHilight | DataSupplierHilight;
  export type DataSupplierHilight = IDataSupplierHilight;

  export type IMessageList = IResMessageList | DataMessageList;
  export type DataMessageList = IDataMessageList;

  export type IMessageDetail = IResMessageDetail | DataMessageDetail;
  export type DataMessageDetail = IDataMessageDetail;

  export type ISavedListProducts = IResSavedListProducts | DataSavedListProducts;
  export type DataSavedListProducts = IDataSavedListProducts;

  export type ISavedListSuppliers = IResSavedListSuppliers | DataSavedListSuppliers;
  export type DataSavedListSuppliers = IDataSavedListSuppliers;
  
  export type IFilterResultProduct = IResFilterResultProduct | DataFilterResultProduct;
  export type DataFilterResultProduct = IDataFilterResultProduct;

  export type IProductGroupDetail = IResProductGroupDetail | DataProductGroupDetail;
  export type DataProductGroupDetail = IDataProductGroupDetail;

  export type IProductDescription = IResProductDescription | DataProductDescription;
  export type DataProductDescription = IDataProductDescription;

  export type IProductDetail = IResProductDetail | DataProductDetail;
  export type DataProductDetail = IDataProductDetail;

  export type IProductWithAddr = IResProductWithAddr | DataProductWithAddr;
  export type DataProductWithAddr = IDataProductWithAddr;

  export type IProductWithCount = IResProductWithCount | DataProductWithCount;
  export type DataProductWithCount = IDataProductWithCount;

  export type IRecommendSupplier = IResRecommendSupplier | DataRecommendSupplier;
  export type DataRecommendSupplier = IDataRecommendSupplier;

  export type IFilterResultSupplier = IResFilterResultSupplier | DataFilterResultSupplier;
  export type DataFilterResultSupplier = IDataFilterResultSupplier;

  export type ISupplierWithSavedList = IResSupplierWithSavedList | DataSupplierWithSavedList;
  export type DataSupplierWithSavedList = IDataSupplierWithSavedList;

  export type ISupplierOverview = IResSupplierOverview | DataSupplierOverview;
  export type DataSupplierOverview = IDataSupplierOverview;

  export type ISupplierContact = IResSupplierContact | DataSupplierContact;
  export type DataSupplierContact = IDataSupplierContact;

  export type ISupplierFactory = IResSupplierFactory | DataSupplierFactory;
  export type DataSupplierFactory = IDataSupplierFactory;

  export type ISupplierCersAndDocs = IResSupplierCersAndDocs | DataSupplierCersAndDocs;
  export type DataSupplierCersAndDocs = IDataSupplierCersAndDocs;

  export type ISupplierImgAndVerifiedImg = IResSupplierImgAndVerifiedImg | DataSupplierImgAndVerifiedImg;
  export type DataSupplierImgAndVerifiedImg = IDataSupplierImgAndVerifiedImg;

  export type ISupplierWebsite = IResSupplierWebsite | DataSupplierWebsite;
  export type DataSupplierWebsite = IDataSupplierWebsite;

  export type ISupplierCustomPage = IResSupplierCustomPage | DataSupplierCustomPage;
  export type DataSupplierCustomPage = IDataSupplierCustomPage;

  export type IRfqScore = IResRfqScore | DataRfqScore;
  export type DataRfqScore = IDataRfqScore;

  export type IQuotaRfq = IResQuotaRfq | DataQuotaRfq;
  export type DataQuotaRfq = IDataQuotaRfq;

  export type IShippingMethod = IResShippingMethod | DataShippingMethod;
  export type DataShippingMethod = IDataShippingMethod;

  export type IPaymentMethod = IResPaymentMethod | DataPaymentMethod;
  export type DataPaymentMethod = IDataPaymentMethod;

  export type IRfqList = IResRfqList | DataRfqList;
  export type DataRfqList = IDataRfqList;

  export type IReplyRfqList = IResReplyRfqList | DataReplyRfqList;
  export type DataReplyRfqList = IDataReplyRfqList;

  export type IQuotaInquiry = IResQuotaInquiry | DataQuotaInquiry;
  export type DataQuotaInquiry = IDataQuotaInquiry;

  export type ISupplier = IResSupplier | DataSupplier;
  export type DataSupplier = IDataSupplier;

  export type IInquiryProductList = IResInquiryProductList | DataInquiryProductList;
  export type DataInquiryProductList = IDataInquiryProductList;

  export type ISearchResultLocation = IResSearchResultLocation | DataSearchResultLocation;
  export type DataSearchResultLocation = IDataSearchResultLocation;

  export type IInterest = IResInterest | DataInterest;
  export type DataInterest = IDataInterest;

}

export namespace GeeesyConsole {
  export type IcsPaymentMethod = IcsResPaymentMethod
  export type IcsBanner = IcsResBanner
  export type IcsCategory = IcsResCategory
  export type IcsDistributor = IcsResDistributor
  export type IcsMainCategory = IcsResMainCategory
  export type IcsProductCategory = IcsResProductCategory
  export type IcsProductCategorySpec = IcsResProductCategorySpec
  export type IcsProductMainCategory = IcsResProductMainCategory
  export type IcsShippingMethod = IcsResShippingMethod
  export type IcsSupplier = IcsResSupplier
}
