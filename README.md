# node-octopus-deploy

This is a Node.js API client for [Octopus Deploy](https://octopus.com/). ✨🐙🚀✨

This client leverages the OpenAPI specification of the [Octopus REST API](https://octopus.com/docs/octopus-rest-api). It is expected that the source code underpinning this package will change frequently. For that reason, it is made available as-is.

## ✨ Install

```
npm install @octopusdeploy/octopus-deploy --save-dev
```

## 🚀 Use

Under the hood, this client utilizes [axios](https://github.com/axios/axios). The usage patterns outlined here should be familiar for experienced users of this library.

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

## 🛠 Build

To build and compile the TypeScript sources to JavaScript use:

```
npm install
npm run build
```