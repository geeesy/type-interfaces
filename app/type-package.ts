
export type TTypePackage = 'free' | 'demo' | 'micro' | 'small' | 'medium' | 'custom'

// ANCHOR: PACKAGE | Entity (1/4)
export interface IPackageBusinessData {
    countCompany: number;
    countAdmin: number;
    countStaff: number;
}

// ANCHOR: PACKAGE | Entity (2/4)
export interface IPackageCount {
    countCatalog: number;
    countSalePage: number;
    countQuotation: number;
    countReceipt: number;
    countWarehouse: number;
    countInventory: number;
    countProduct: number;
    countOrderLink: number;
    countConnect: number;
    countPooling: number;
    countConversation: number;
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
}


