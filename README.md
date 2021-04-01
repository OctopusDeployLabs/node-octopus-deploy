## node-octopus-deploy

This is a Node.js API client for Octopus Deploy. ✨🐙🚀✨ Under the hood, it utilizes [axios](https://github.com/axios/axios).

The source code in this repository is autogenerated based on the OpenAPI specification of the Octopus REST API. It is expected that this source code will change frequently. For that reason, it is located in the Octopus Deploy Labs organisation.

### Building

To build and compile the TypeScript sources to JavaScript use:

```
npm install
npm run build
```

### Consuming (Soon!)

```
npm install node-octopus-deploy --save
```

### Using

```typescript
// establish configuration
const configuration = new octopusDeploy.Configuration({
  apiKey: 'api-key',
  basePath: 'uri-to-octopus'
})

// GET home document (i.e. ~/api)
octopusDeploy.HomeApiFactory(configuration).getHome().then(
  // onfulfilled (output home document)
  (value) => { console.log(value.data) },
  // onrejected
  (reason) => { console.error(reason) }
)

octopusDeploy.FeedsApiFactory(configuration).listAllFeedsSpaces('Spaces-1').then(
  // onfulfilled (output feeds)
  (value) => { console.log(value.data) },
  (reason) => { console.error(reason) }
)
```