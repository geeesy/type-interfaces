/**
 * SHIPPING
 */

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
  | 'other';

// ANCHOR: Shipping Method Attribute (Type 1)
export interface IShippingMethodTypeFree {
  shippingMethodType: ShippingMethodType.Free;
  minOrderTotalAmount: number;
}

// ANCHOR: Shipping Method Attribute (Type 2)
export interface IShippingMethodTypeFixedRate {
  shippingMethodType: ShippingMethodType.FixedRate;
  shippingCost: number;
  minOrderTotalAmount: number;
}

// ANCHOR: Shipping Method Attribute (Type 3)
export interface IShippingMethodTypeBasedByPcs {
  shippingMethodType: ShippingMethodType.BasedByPcs;
  minOrderTotalAmount: number;
  shippingCostFirstPcs: number;
  shippingCostPerPcs: number;
}

// ANCHOR: Shipping Method Attribute (Type 4)
export interface IShippingCostByStepPcs {
  minPcs: number;
  shippingCost: number;
}
export interface IShippingMethodTypeBasedByStepPcs {
  shippingMethodType: ShippingMethodType.BasedByStepPcs;
  minOrderTotalAmount: number;
  shippingCost: IShippingCostByStepPcs[];
}

// ANCHOR: Shipping Method Attribute (Type 5)
export interface IShippingCostByStepWeight {
  minWeight: number;
  shippingCost: number;
}
export interface IShippingMethodTypeBasedByStepWeight {
  shippingMethodType: ShippingMethodType.BasedByStepWeight;
  minOrderTotalAmount: number;
  shippingCost: IShippingCostByStepWeight[];
}

// ANCHOR: Shipping Method Attribute (Type 6)
export interface IShippingCostByStepPrice {
  minOrderTotalAmount: number;
  shippingCost: number;
}
export interface IShippingMethodTypeBasedByOrderPrice {
  shippingMethodType: ShippingMethodType.BasedByOrderPrice;
  shippingCost: IShippingCostByStepPrice[];
}

// REVIEW: Shipping Method
export interface IDBShippingMethodImmu {
  shippingMethodId: string;
}

export interface IDBShippingMethod {
  isActive: boolean;
}

export interface IShippingMethodEntityImmu {
  compId: string;
  shippingMethodType: ShippingMethodType;
}

export interface IShippingMethodEntity {
  shippingParty: TShippingParty;
  shippingIconUrl: string;
  shippingAliasName: string;
  deliveryTime: {
    earliest: number;
    last: number;
  };
  note: string;
  shippingMethodAttribute:
    | IShippingMethodTypeFree
    | IShippingMethodTypeFixedRate
    | IShippingMethodTypeBasedByPcs
    | IShippingMethodTypeBasedByStepPcs
    | IShippingMethodTypeBasedByStepWeight
    | IShippingMethodTypeBasedByOrderPrice;
}
