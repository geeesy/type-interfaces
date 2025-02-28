export interface IParamCreateAccount {
  ownerId: string;
  name: string;
  avatarUrl: string;
}

export interface IAccount {
  accountId: string;
}

export interface IParamCreateOwner {
  firstName: string;
  lastName: string;
  avatarUrl: string;
}
export interface IOwner  {
   username: string;
}