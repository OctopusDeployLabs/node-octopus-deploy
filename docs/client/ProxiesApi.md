# ProxiesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProxy**](ProxiesApi.md#createProxy) | **POST** /proxies | Create a ProxyResource
[**createProxySpaces**](ProxiesApi.md#createProxySpaces) | **POST** /{baseSpaceId}/proxies | Create a ProxyResource
[**deleteProxy**](ProxiesApi.md#deleteProxy) | **DELETE** /proxies/{id} | Delete a ProxyResource by ID
[**deleteProxySpaces**](ProxiesApi.md#deleteProxySpaces) | **DELETE** /{baseSpaceId}/proxies/{id} | Delete a ProxyResource by ID
[**getProxyById**](ProxiesApi.md#getProxyById) | **GET** /proxies/{id} | Get a Proxy by ID
[**getProxyByIdSpaces**](ProxiesApi.md#getProxyByIdSpaces) | **GET** /{baseSpaceId}/proxies/{id} | Get a Proxy by ID
[**indexProxies**](ProxiesApi.md#indexProxies) | **GET** /proxies | Get a list of ProxyResources
[**indexProxiesSpaces**](ProxiesApi.md#indexProxiesSpaces) | **GET** /{baseSpaceId}/proxies | Get a list of ProxyResources
[**listAllProxies**](ProxiesApi.md#listAllProxies) | **GET** /proxies/all | Get a list of ProxyResources
[**listAllProxiesSpaces**](ProxiesApi.md#listAllProxiesSpaces) | **GET** /{baseSpaceId}/proxies/all | Get a list of ProxyResources
[**updateProxy**](ProxiesApi.md#updateProxy) | **PUT** /proxies/{id} | Modify a ProxyResource by ID
[**updateProxySpaces**](ProxiesApi.md#updateProxySpaces) | **PUT** /{baseSpaceId}/proxies/{id} | Modify a ProxyResource by ID


<a name="createProxy"></a>
# **createProxy**
> ProxyResource createProxy(body)

Create a ProxyResource

    Creates a proxy.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProxyResource**](../model/ProxyResource.md)| The ProxyResource resource to create | [optional]

### Return type

[**ProxyResource**](../model/ProxyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createProxySpaces"></a>
# **createProxySpaces**
> ProxyResource createProxySpaces(baseSpaceId, body)

Create a ProxyResource

    Creates a proxy.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**ProxyResource**](../model/ProxyResource.md)| The ProxyResource resource to create | [optional]

### Return type

[**ProxyResource**](../model/ProxyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteProxy"></a>
# **deleteProxy**
> deleteProxy(id)

Delete a ProxyResource by ID

    Deletes an existing proxy.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProxyResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteProxySpaces"></a>
# **deleteProxySpaces**
> deleteProxySpaces(baseSpaceId, id)

Delete a ProxyResource by ID

    Deletes an existing proxy.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ProxyResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getProxyById"></a>
# **getProxyById**
> ProxyResource getProxyById(id)

Get a Proxy by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Proxy to load | [default to null]

### Return type

[**ProxyResource**](../model/ProxyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getProxyByIdSpaces"></a>
# **getProxyByIdSpaces**
> ProxyResource getProxyByIdSpaces(id, baseSpaceId)

Get a Proxy by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Proxy to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**ProxyResource**](../model/ProxyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProxies"></a>
# **indexProxies**
> ProxyResourceCollection indexProxies(skip, take)

Get a list of ProxyResources

    Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ProxyResourceCollection**](../model/ProxyResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProxiesSpaces"></a>
# **indexProxiesSpaces**
> ProxyResourceCollection indexProxiesSpaces(baseSpaceId, skip, take)

Get a list of ProxyResources

    Lists all of the proxies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ProxyResourceCollection**](../model/ProxyResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllProxies"></a>
# **listAllProxies**
> List listAllProxies()

Get a list of ProxyResources

    Lists the name and ID of all of the proxies in the supplied Octopus Deploy Space. The results will be sorted by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/ProxyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllProxiesSpaces"></a>
# **listAllProxiesSpaces**
> List listAllProxiesSpaces(baseSpaceId)

Get a list of ProxyResources

    Lists the name and ID of all of the proxies in the supplied Octopus Deploy Space. The results will be sorted by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/ProxyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateProxy"></a>
# **updateProxy**
> ProxyResource updateProxy(id, body)

Modify a ProxyResource by ID

    Modifies an existing proxy.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProxyResource to modify | [default to null]
 **body** | [**ProxyResource**](../model/ProxyResource.md)| The ProxyResource resource to create | [optional]

### Return type

[**ProxyResource**](../model/ProxyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateProxySpaces"></a>
# **updateProxySpaces**
> ProxyResource updateProxySpaces(baseSpaceId, id, body)

Modify a ProxyResource by ID

    Modifies an existing proxy.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ProxyResource to modify | [default to null]
 **body** | [**ProxyResource**](../model/ProxyResource.md)| The ProxyResource resource to create | [optional]

### Return type

[**ProxyResource**](../model/ProxyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

