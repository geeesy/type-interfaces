import { IAddress } from './type-company';
/**
 * REVIEW: WAREHOUSE
 */
export interface IDBWarehouseEntityImmu {
  warehouseId: string;
  compId: string;
  businessId: string;
}
export interface IWarehouseEntity {
  warehouseName: string;
  warehouseIconUrl: string;
  warehouseCoverUrl: string;
  warehouseImageUrls: string[];
  warehouseInfo: string;
  warehouseAddress: IAddress;
}

/**
 * REVIEW: INVENTORY
 */
export interface IDBInventoryEntityImmu {
  inventoryId: string;
  compId: string;
  businessId: string;
}

export interface IInventoryEntity {
  inventoryName: string;
  inventoryInfo: string;
}

/**
 * PRODUCT
 * ON CREATE
 */
export interface IProductInventoryImmu {
  warehouseId: string;
  inventoryId: string;
  productId: string;
  compId: string;
}

export interface IDBProductInventoryFormulaImmu {
  initialStock: number;
  initialCostPrice: number;
}
export interface IProductInventorySetting {
  lowStockQty: number;
  canBelowZero: boolean; // Keep Selling
}

export interface IDBProductInventory {
  stock: number;
  reservedStock: number;
}

export interface ICreateProductWithStock
  extends IProductInventoryImmu,
    IProductInventorySetting,
    IDBProductInventoryFormulaImmu {}

export interface ICreateProductWithMultiStock {
  inventories: ICreateProductWithStock[];
}
