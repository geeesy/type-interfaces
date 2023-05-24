
export type TTypePackage = 'free' | 'demo' | 'micro' | 'small' | 'medium' | 'custom'

// ANCHOR: PACKAGE | Entity (1/4)
export interface IPackageBusinessData {
    countCompany: number;
    countAdmin: number;
    countStaff: number;
}

// ANCHOR: PACKAGE | Entity (2/4)
export interface IPackageCount {
    countCatalog: number | null;
    countSalePage: number | null;
    countQuotation: number | null;
    countReceipt: number | null;
    countWarehouse: number | null;
    countInventory: number | null;
    countProduct: number | null;
    countOrderLink: number | null;
    countConnect: number | null;
    countPooling: number | null;
    countConversation: number | null;
}

// ANCHOR: PACKAGE | Entity (3/4)
export interface IDBPackageImmu {
    packageId: string;
}

// ANCHOR: PACKAGE | Entity (4/4)
export interface IPackageData {
    packageType: string;
    packageName: string;
    packageIndex: number;
    packagePrice: number
    hasReport: boolean;
    startedDate: string;
    expiredDate: string;
    periodTime: string;
}


