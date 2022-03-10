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

export type TApiErrorModule = 'INVENTORY' | 'ERROR'
