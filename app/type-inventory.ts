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
