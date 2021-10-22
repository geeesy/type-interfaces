import { IAddress } from './type-company';
import { TOrderType } from './type-order';
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
export type TInventoryType = 'GB' | 'GM' | 'OWN'
export interface IDBInventoryEntityImmu {
  inventoryId: string;
  compId: string;
  businessId: string;
  inventoryType: TInventoryType
}

export interface IInventoryEntity {
  inventoryName: string;
  inventoryInfo: string;
  canBelowZero: boolean;
}

/**
 * PRODUCT
 * ON CREATE
 */
export interface IProductInventoryImmu {
  warehouseId: string;
  inventoryId: string; // GB+xxx || GM+xxx
}

export interface IProductInventorySetting {
  lowStockQty: number;
  hasKeepSelling: boolean;
}

export interface IDBProductInventoryFormulaImmu {
  initialStock: number;
  initialCostPrice: number;
}

// === === ===
export interface IProductCompanyImmu {
  productId: string;
  compId: string;
  variantId?: string;
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
  useMultiStock: boolean;
  useInventory: boolean; // ! CHECK TO CREATE STOCK OR NOT
}

export interface IStockRefData {
  inventoryId: string;
  warehouseId: string;
  saleChannel: TOrderType
}

export interface IUpdateProductStock extends IProductInventoryImmu {
  productId: string;
  variantId?: string;
  stock: number;
  newStock: number;
  increment: number;
  decrement: number;
}

export interface ITransferProductStock {
  sourceStock: IProductInventoryImmu
  destinationStock: IProductInventoryImmu
  transferQty: number;
  productId: string;
  variantId?: string;
  hasProductInDestinationStock: boolean;
}

export interface ILogStockValue extends IProductInventoryImmu, IProductInventorySetting, IDBProductInventory {

}

export enum StockMovementType {
  Initial = 'initial entry',
  Adjustment = 'stock adjustments',
  Transfer = 'stock transfers',
  Purchase = 'purchases',
  None = 'none'
}

export type TStockMovementAction = 'IN' | 'OUT' | 'NONE'
export interface ILogStock {
  updatedBy: string;
  action: string;
  stockMovementType: StockMovementType
  stockMovementAction: TStockMovementAction
  createdAt: string;
  updatedAt: string;
  oldValue: ILogStockValue;
  newValue: ILogStockValue;
}


