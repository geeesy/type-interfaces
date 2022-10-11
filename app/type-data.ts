// $export Inventory
export interface IInventoryData {
  inventoryId: string;
  warehouseId: string;
  warehouseName: string;
  inventoryName: string;
}

export interface IInventoryExport {
  inventoryData: IInventoryData[]
}

// $export OrderList
export interface IOrderStatusExport {
  awaitingPayment: boolean;
  confirmPayment: boolean;
  awaitingShipment: boolean;
  shipped: boolean;
  completed: boolean;
  canceled: boolean;
}

export interface ITimeStamp {
  startDate: string;
  endDate: string;
}

