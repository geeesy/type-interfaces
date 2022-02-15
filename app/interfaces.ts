export interface IConnect {
  message: string;
}

export interface ICheck {
  message: string;
  data: IData[];
}

export interface IData {
  id: string;
  user: string;
}

export interface IResAPI {
  status: string
  statusText: string
  message: string
}

export interface IAnalytics {
  totalSaleAmount: number
  countOrder: number 
}
