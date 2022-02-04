import { ShippingMethodType } from './enum-const';

export type TShippingParty =
  | 'thaipost'
  | 'kerry'
  | 'jt'
  | 'flash'
  | 'ninja'
  | 'grab'
  | 'lalamove'
  | 'lineman'
  | 'pickup'
  | 'other';

// ANCHOR: Shipping Method Attribute (Type 1)
export interface IShippingMethodTypeFree {
  minOrderTotalAmount: number;
  caption: string;
}

// ANCHOR: Shipping Method Attribute (Type 2)
export interface IShippingMethodTypeFixedRate {
  shippingCost: number;
  minOrderTotalAmount: number;
  caption: string;
  showMinOrderTotalAmount: boolean
}

// ANCHOR: Shipping Method Attribute (Type 3)
export interface IShippingMethodTypeBasedByPcs {
  minOrderTotalAmount: number;
  shippingCostFirstPcs: number;
  shippingCostPerPcs: number;
  caption: string;
  showMinOrderTotalAmount: boolean
}

// ANCHOR: Shipping Method Attribute (Type 4)
export interface IShippingCostByStepPcs {
  minPcs: number;
  shippingCost: number;
}
export interface IShippingMethodTypeBasedByStepPcs {
  minOrderTotalAmount: number;
  shippingCost: IShippingCostByStepPcs[];
  caption: string
  showMinOrderTotalAmount: boolean
}

// ANCHOR: Shipping Method Attribute (Type 5)
export interface IShippingCostByStepWeight {
  minWeight: number;
  shippingCost: number;
}
export interface IShippingMethodTypeBasedByStepWeight {
  minOrderTotalAmount: number;
  shippingCost: IShippingCostByStepWeight[];
  caption: string
  showMinOrderTotalAmount: boolean
}

// ANCHOR: Shipping Method Attribute (Type 6)
export interface IShippingCostByStepPrice {
  minOrderTotalAmount: number;
  shippingCost: number;
}
export interface IShippingMethodTypeBasedByOrderPrice {
  shippingCost: IShippingCostByStepPrice[];
  caption: string
}

// ANCHOR: Shipping Method Attribute (Type 7)
export interface IShippingMethodTypePickup {
  caption: string;
}

// REVIEW: SHIPPING METHOD
export interface IDBShippingMethodImmu {
  shippingMethodId: string;
  compId: string;
}

export interface IDBShippingMethod {
  isActive: boolean;
  hasArchived: boolean;
}

export interface IShippingMethodEntityImmu {
  shippingMethodType: ShippingMethodType.Free 
  | ShippingMethodType.FixedRate 
  | ShippingMethodType.BasedByPcs 
  | ShippingMethodType.BasedByStepPcs 
  | ShippingMethodType.BasedByStepWeight 
  | ShippingMethodType.BasedByOrderPrice
  | ShippingMethodType.Pickup;
}

export interface IShippingMethodEntity {
  activeOnMarket: boolean
  shippingParty: TShippingParty;
  shippingIconUrl: string;
  shippingAliasName: string;
  isCOD: boolean;
  deliveryTime: {
    earliest: number;
    last: number;
  };
  note: string;
  shippingMethodAttribute: IShippingMethodTypeFree
    | IShippingMethodTypeFixedRate
    | IShippingMethodTypeBasedByPcs
    | IShippingMethodTypeBasedByStepPcs
    | IShippingMethodTypeBasedByStepWeight
    | IShippingMethodTypeBasedByOrderPrice
    | IShippingMethodTypePickup;
}

export interface IUpdateMarketShippingMethod {
  shippingMethodId: string
  activeOnMarket: boolean
}