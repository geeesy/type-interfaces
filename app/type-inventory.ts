import { GappInventory } from '.';
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
  inventories?: GappInventory.CreateInventory[];
  isActive: boolean;
}

/**
 * REVIEW: INVENTORY
 */
export type TInventoryType = 'GB' | 'GM' | 'OWN';
export interface IDBInventoryEntityImmu {
  inventoryId: string;
  compId: string;
  businessId: string;
  inventoryType: TInventoryType;
  warehouseId: string;
}
export interface IDBInventoryEntity {
  totalProduct: number;
}

export interface IInventoryEntity {
  inventoryName: string;
  inventoryInfo: string;
  canBelowZero: boolean;
  isDefault: boolean;
  isActive: boolean;
}

/**
 * PRODUCT
 * ON CREATE
 */

// ANCHOR: STOCK (2/6)
export interface IProductInventoryImmu {
  warehouseId: string;
  inventoryId: string; // GB+xxx || GM+xxx
}

// ANCHOR: STOCK (4/6)
export interface IProductInventorySetting {
  lowStockQty: number;
  hasKeepSelling: boolean;
}

// ANCHOR: STOCK (3/6)
export interface IDBProductInventoryFormulaImmu {
  initialStock: number;
  initialCostPrice: number;
}

export interface IProductInventoryData {
  productName: string;
  productThumbnailUrl: string;
  productSku: string;
  productUnit: string
}

// === === ===

// ANCHOR: STOCK (1/6)
export interface IProductCompanyImmu {
  productId: string;
  businessId: string;
  compId: string;
  variantId?: string;
}

// ANCHOR: STOCK (5/6)
export interface IDBProductInventory {
  stock: number;
  reservedStock: number;
}

// ANCHOR: STOCK (6/6)
export interface IDBProductInventoryActivityLog {
  latestNoteOnAction: string; // used in log on stock transfer and adjust
  latestActivityOnStockMovementType: StockMovementType; // used to identify type of adjustment
  latestActivityOnOrderType: TOrderType | null; // used to identify source of adjustment
  latestActivityOnTransferInOut?: string; // used to identify on stock transfer
  latestActionBy: string
  latestActionByFullName: string
}


export interface ICreateProductWithStock
  extends IProductInventoryImmu,
  IProductInventorySetting,
  IDBProductInventoryFormulaImmu { }

export interface ICreateProductWithMultiStock {
  inventories: ICreateProductWithStock[];
  useMultiStock: boolean;
  useInventory: boolean; // ! CHECK TO CREATE STOCK OR NOT
}

export interface IStockRefData {
  inventoryId: string;
  warehouseId: string;
  saleChannel: TOrderType;
}

export interface IUpdateProductStock extends IProductInventoryImmu, IProductInventorySetting, IDBProductInventoryFormulaImmu {
  productId: string;
  variantId?: string;
  stock: number;
  newStock: number;
  increment: number;
  decrement: number;
  note: string;
}

export interface ITransferProductStock {
  sourceStock: IProductInventoryImmu;
  destinationStock: IProductInventoryImmu;
  transferQty: number;
  productId: string;
  variantId?: string;
  note: string;
  hasProductInDestinationStock: boolean;
}

export interface ILogStockValue
  extends IProductInventoryImmu,
  IProductInventorySetting,
  IDBProductInventory { }

export enum StockMovementType {
  Initial = 'initial_entry',
  Adjustment = 'stock_adjustments',
  Transfer = 'stock_transfers',
  Purchase = 'purchases',
  None = 'none'
}

export type TStockMovementAction = 'IN' | 'OUT' | 'NONE';
export interface ILogStock {
  updatedBy: string;
  action: string;
  stockMovementType: StockMovementType;
  stockMovementAction: TStockMovementAction;
  stockOrderType: TOrderType | null;
  createdAt: string;
  updatedAt: string;
  oldValue: ILogStockValue;
  newValue: ILogStockValue;
  note?: string; // only on action
  latestInOutInventoryId?: string; // only on transfer
}
