## Swagger codegen
- React+typescript 작성시 swagger의 codegen
___


### Todo
- codegen swagger
___


### Commands

```bash
$ yarn start # 앱 실행
$ yarn codegen # openapi-typescript
$ yarn codegen:dev # swagger-typescript-api
```
___

### Examples

```ts

import { Api } from "./generated/swagger.schema";

const baseURL = 'localhost:3000';

/** fetch의 helper객체 */
const api = new Api({
  baseUrl,
  baseApiParams: {
    headers: {
      Authorization: `Bearer JWT_TOKEN`,
    }
  }
});

const handleGetMatches = async () => {
  const res = await api.public.matchControllerGetOrderMatch(1, 1);
  if(res.ok) {
    setBankList(res.data?.banks);
    setOrderList(res.data?.orders);
  } else {
    // 요청실패.
  }
};

```


### Refs
- [openapi-typescript](https://github.com/drwpow/openapi-typescript)
- [swagger-typescript-api](https://www.npmjs.com/package/swagger-typescript-api)
