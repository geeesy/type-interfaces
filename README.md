# @Geeesy/type-interfaces

![@geeesy/type-interfaces](https://img.shields.io/npm/v/@geeesy/type-interfaces?style=for-the-badge)

Geeesy's API Interfaces for HTTP Client and Lambda Functions

## Installation

```
  npm install @geeesy/type-interfaces
```

## Usage

#### Enum
```typescript
import { EnumStatus } from '@geeesy/type-interfaces'

  status = Enum.StatusApprovalFlow.Approved
```

### Marketplace

#### Lambda Function
```typescript
import { GeeesyMarketplace } from '@geeesy/type-interfaces'

const foo: GeeesyMarketplace.IResponse = {
  // implement all members
}
```
#### Angular Service
import and use in a simple data service
```typescript
import { GeeesyMarketplace } from '@geeesy/type-interfaces'
// ...

export class AnyService {
  
  items;

  constructor(private http: HttpClient) {
    const API_URI = 'https://api.xxx.com/xxx';
    this.items = this.http.get<GeeesyMarketplace.IResponse>(API_URI)
      .pipe(
        map(results => results.data)
      )
  }

  // ...

}
```
...

check github action push
fix error
fix permission
test bypass pr
update

