/**
 * SHIPPING
 */

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
export interface IShippingMethodFree {
  minOrderTotalAmount: number;
}

// ANCHOR: Shipping Method Attribute (Type 1)
export interface IShippingMethodFixedRate {
  shippingCost: number;
  minOrderTotalAmount: number;
}

// ANCHOR: Shipping Method Attribute (Type 1)
export interface IShippingMethodBasedByPcs {
  minOrderTotalAmount: number;
  shippingCostFirstPcs: number;
  shippingCostPerPcs: number;
}

// ANCHOR: Shipping Method Attribute (Type 1)
export interface IShippingCostByStepPcs {
  minPcs: number;
  shippingCost: number;
}

// ANCHOR: Shipping Method Attribute (Type 1)
export interface IShippingCostByStepWeight {
  minWeight: number;
  shippingCost: number;
}

export interface IShippingCostBasedByStepWeight {
  minOrderTotalAmount: number;
  shippingCost: IShippingCostByStepWeight[];
}
export interface IShippingMethodBasedByStepPcs {
  minOrderTotalAmount: number;
  shippingCost: IShippingCostByStepPcs[];
}

export interface IShippingCostByStepPrice {
  minOrderTotalAmount: number;
  shippingCost: number;
}

export interface IShippingMethodBasedByPrice {
  shippingCost: IShippingCostByStepPrice[];
}

export interface IDBShippingMethodImmu {
  shippingId: string;
}

export interface IShippingMethodEntityImmu {
  compId: string;
}

export interface IShippingMethodEntity {
  shippingParty: TShippingParty;
  shippingIconUrl: string;
  shippingName: string;
  deliveryTime: {
    earliest: number;
    last: number;
  };
  note: string;
  shippingMethodData: string;
}
