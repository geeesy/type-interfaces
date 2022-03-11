export interface IDBLogTime {
  createdAt: string
  updatedAt: string
}

export interface IDBLogAction {
  updatedBy: string
}

export interface IDBUpdateTime {
  updatedAt: string
}

export interface IDBLogCreate {
  createdAt: string
  createdBy: string
}

export interface IDBLogUpdate {
  updatedAt: string
  updatedBy: string
}

export type TApiErrorModule = 'INVENTORY' | 'ERROR'
