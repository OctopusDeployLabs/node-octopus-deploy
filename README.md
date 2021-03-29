## node-octopus-deploy

This is a Node.js API client for Octopus Deploy. Under the hood, it utilizes [axios](https://github.com/axios/axios).

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