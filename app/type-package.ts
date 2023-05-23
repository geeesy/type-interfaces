
export type TTypePackage = 'free' | 'demo' | 'micro' | 'small' | 'medium' | 'custom'

// ANCHOR: PACKAGE | Entity (1/2)
export interface IPackageBusinessData {
    countCompany: number;
    countAdmin: number;
    countStaff: number;
}

// ANCHOR: PACKAGE | Entity (2/2)
export interface IPackageData {
    countCatalog: number;
    countSalePage: number;
    countQuotation: number;
    countReceipt: number;
    countWarehouse: number;
    countInventory: number;
    countProduct: number;
    countOrderLink: number;
    hasReport: boolean;
    countConnect: number;
    countPooling: number;
    countConversation: number;
}
