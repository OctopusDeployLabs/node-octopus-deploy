# WorkerPoolsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkerPool**](WorkerPoolsApi.md#createWorkerPool) | **POST** /workerpools | Create a WorkerPoolResource
[**createWorkerPoolSpaces**](WorkerPoolsApi.md#createWorkerPoolSpaces) | **POST** /{baseSpaceId}/workerpools | Create a WorkerPoolResource
[**deleteWorkerPool**](WorkerPoolsApi.md#deleteWorkerPool) | **DELETE** /workerpools/{id} | Delete a WorkerPoolResource by ID
[**deleteWorkerPoolSpaces**](WorkerPoolsApi.md#deleteWorkerPoolSpaces) | **DELETE** /{baseSpaceId}/workerpools/{id} | Delete a WorkerPoolResource by ID
[**getWorkerPoolById**](WorkerPoolsApi.md#getWorkerPoolById) | **GET** /workerpools/{id} | Get a Worker Pool by ID
[**getWorkerPoolByIdSpaces**](WorkerPoolsApi.md#getWorkerPoolByIdSpaces) | **GET** /{baseSpaceId}/workerpools/{id} | Get a Worker Pool by ID
[**getWorkerPoolDynamicWorkerTypes**](WorkerPoolsApi.md#getWorkerPoolDynamicWorkerTypes) | **GET** /workerpools/dynamicworkertypes | 
[**getWorkerPoolDynamicWorkerTypesSpaces**](WorkerPoolsApi.md#getWorkerPoolDynamicWorkerTypesSpaces) | **GET** /{baseSpaceId}/workerpools/dynamicworkertypes | 
[**getWorkerPoolSupportedTypes**](WorkerPoolsApi.md#getWorkerPoolSupportedTypes) | **GET** /workerpools/supportedtypes | 
[**getWorkerPoolSupportedTypesSpaces**](WorkerPoolsApi.md#getWorkerPoolSupportedTypesSpaces) | **GET** /{baseSpaceId}/workerpools/supportedtypes | 
[**getWorkerPoolsSummary**](WorkerPoolsApi.md#getWorkerPoolsSummary) | **GET** /workerpools/summary | 
[**getWorkerPoolsSummarySpaces**](WorkerPoolsApi.md#getWorkerPoolsSummarySpaces) | **GET** /{baseSpaceId}/workerpools/summary | 
[**indexWorkerPoolWorkers**](WorkerPoolsApi.md#indexWorkerPoolWorkers) | **GET** /workerpools/{id}/workers | Get a list of WorkerResources for the given WorkerPoolResource
[**indexWorkerPoolWorkersSpaces**](WorkerPoolsApi.md#indexWorkerPoolWorkersSpaces) | **GET** /{baseSpaceId}/workerpools/{id}/workers | Get a list of WorkerResources for the given WorkerPoolResource
[**indexWorkerPools**](WorkerPoolsApi.md#indexWorkerPools) | **GET** /workerpools | Get a list of WorkerPoolResources
[**indexWorkerPoolsSpaces**](WorkerPoolsApi.md#indexWorkerPoolsSpaces) | **GET** /{baseSpaceId}/workerpools | Get a list of WorkerPoolResources
[**listAllWorkerPools**](WorkerPoolsApi.md#listAllWorkerPools) | **GET** /workerpools/all | Get a list of Worker Pools
[**listAllWorkerPoolsSpaces**](WorkerPoolsApi.md#listAllWorkerPoolsSpaces) | **GET** /{baseSpaceId}/workerpools/all | Get a list of Worker Pools
[**updateSortWorkerPools**](WorkerPoolsApi.md#updateSortWorkerPools) | **PUT** /workerpools/sortorder | 
[**updateSortWorkerPoolsSpaces**](WorkerPoolsApi.md#updateSortWorkerPoolsSpaces) | **PUT** /{baseSpaceId}/workerpools/sortorder | 
[**updateWorkerPool**](WorkerPoolsApi.md#updateWorkerPool) | **PUT** /workerpools/{id} | Modify a WorkerPoolResource by ID
[**updateWorkerPoolSpaces**](WorkerPoolsApi.md#updateWorkerPoolSpaces) | **PUT** /{baseSpaceId}/workerpools/{id} | Modify a WorkerPoolResource by ID


<a name="createWorkerPool"></a>
# **createWorkerPool**
> WorkerPoolResource createWorkerPool(body)

Create a WorkerPoolResource

    Creates a new worker pool.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkerPoolResource**](../model/WorkerPoolResource.md)| The WorkerPoolResource resource to create | [optional]

### Return type

[**WorkerPoolResource**](../model/WorkerPoolResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createWorkerPoolSpaces"></a>
# **createWorkerPoolSpaces**
> WorkerPoolResource createWorkerPoolSpaces(baseSpaceId, body)

Create a WorkerPoolResource

    Creates a new worker pool.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**WorkerPoolResource**](../model/WorkerPoolResource.md)| The WorkerPoolResource resource to create | [optional]

### Return type

[**WorkerPoolResource**](../model/WorkerPoolResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteWorkerPool"></a>
# **deleteWorkerPool**
> deleteWorkerPool(id)

Delete a WorkerPoolResource by ID

    Deletes an existing pool.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the WorkerPoolResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteWorkerPoolSpaces"></a>
# **deleteWorkerPoolSpaces**
> deleteWorkerPoolSpaces(baseSpaceId, id)

Delete a WorkerPoolResource by ID

    Deletes an existing pool.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the WorkerPoolResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getWorkerPoolById"></a>
# **getWorkerPoolById**
> WorkerPoolResource getWorkerPoolById(id)

Get a Worker Pool by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the WorkerPool to load | [default to null]

### Return type

[**WorkerPoolResource**](../model/WorkerPoolResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerPoolByIdSpaces"></a>
# **getWorkerPoolByIdSpaces**
> WorkerPoolResource getWorkerPoolByIdSpaces(id, baseSpaceId)

Get a Worker Pool by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the WorkerPool to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**WorkerPoolResource**](../model/WorkerPoolResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerPoolDynamicWorkerTypes"></a>
# **getWorkerPoolDynamicWorkerTypes**
> WorkerPoolDynamicWorkerTypesResource getWorkerPoolDynamicWorkerTypes()



    Lists the available Worker Types for the Dynamic Worker Pool

### Parameters
This endpoint does not need any parameter.

### Return type

[**WorkerPoolDynamicWorkerTypesResource**](../model/WorkerPoolDynamicWorkerTypesResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerPoolDynamicWorkerTypesSpaces"></a>
# **getWorkerPoolDynamicWorkerTypesSpaces**
> WorkerPoolDynamicWorkerTypesResource getWorkerPoolDynamicWorkerTypesSpaces(baseSpaceId)



    Lists the available Worker Types for the Dynamic Worker Pool

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**WorkerPoolDynamicWorkerTypesResource**](../model/WorkerPoolDynamicWorkerTypesResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerPoolSupportedTypes"></a>
# **getWorkerPoolSupportedTypes**
> WorkerPoolSupportedTypesResource getWorkerPoolSupportedTypes()



    Lists the available Worker Pool types.

### Parameters
This endpoint does not need any parameter.

### Return type

[**WorkerPoolSupportedTypesResource**](../model/WorkerPoolSupportedTypesResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerPoolSupportedTypesSpaces"></a>
# **getWorkerPoolSupportedTypesSpaces**
> WorkerPoolSupportedTypesResource getWorkerPoolSupportedTypesSpaces(baseSpaceId)



    Lists the available Worker Pool types.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**WorkerPoolSupportedTypesResource**](../model/WorkerPoolSupportedTypesResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerPoolsSummary"></a>
# **getWorkerPoolsSummary**
> WorkerPoolsSummaryResource getWorkerPoolsSummary()



    Lists all worker pools, including a summary of machine information

### Parameters
This endpoint does not need any parameter.

### Return type

[**WorkerPoolsSummaryResource**](../model/WorkerPoolsSummaryResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerPoolsSummarySpaces"></a>
# **getWorkerPoolsSummarySpaces**
> WorkerPoolsSummaryResource getWorkerPoolsSummarySpaces(baseSpaceId)



    Lists all worker pools, including a summary of machine information

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**WorkerPoolsSummaryResource**](../model/WorkerPoolsSummaryResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexWorkerPoolWorkers"></a>
# **indexWorkerPoolWorkers**
> WorkerResourceCollection indexWorkerPoolWorkers(id, skip, take)

Get a list of WorkerResources for the given WorkerPoolResource

    Lists all of the machines that belong to the given worker pool.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the WorkerPool | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**WorkerResourceCollection**](../model/WorkerResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexWorkerPoolWorkersSpaces"></a>
# **indexWorkerPoolWorkersSpaces**
> WorkerResourceCollection indexWorkerPoolWorkersSpaces(baseSpaceId, id, skip, take)

Get a list of WorkerResources for the given WorkerPoolResource

    Lists all of the machines that belong to the given worker pool.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the WorkerPool | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**WorkerResourceCollection**](../model/WorkerResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexWorkerPools"></a>
# **indexWorkerPools**
> WorkerPoolResourceCollection indexWorkerPools(skip, take)

Get a list of WorkerPoolResources

    Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the &#x60;SortOrder&#x60; field on each environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**WorkerPoolResourceCollection**](../model/WorkerPoolResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexWorkerPoolsSpaces"></a>
# **indexWorkerPoolsSpaces**
> WorkerPoolResourceCollection indexWorkerPoolsSpaces(baseSpaceId, skip, take)

Get a list of WorkerPoolResources

    Lists all of the worker pools in the supplied Octopus Deploy Space. The results will be sorted by the &#x60;SortOrder&#x60; field on each environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**WorkerPoolResourceCollection**](../model/WorkerPoolResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllWorkerPools"></a>
# **listAllWorkerPools**
> List listAllWorkerPools(ids)

Get a list of Worker Pools

    Lists the name and ID of all of the Worker Pools in the supplied Octopus Deploy Space. The results will be sorted by the &#x60;SortOrder&#x60; field on each Worker Pool.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List**](../model/String.md)| A set of Worker Pool IDs to retrieve Worker Pools for. Example: WorkerPool-101,WorkerPool-201 | [optional] [default to null]

### Return type

[**List**](../model/WorkerPoolResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllWorkerPoolsSpaces"></a>
# **listAllWorkerPoolsSpaces**
> List listAllWorkerPoolsSpaces(baseSpaceId, ids)

Get a list of Worker Pools

    Lists the name and ID of all of the Worker Pools in the supplied Octopus Deploy Space. The results will be sorted by the &#x60;SortOrder&#x60; field on each Worker Pool.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **ids** | [**List**](../model/String.md)| A set of Worker Pool IDs to retrieve Worker Pools for. Example: WorkerPool-101,WorkerPool-201 | [optional] [default to null]

### Return type

[**List**](../model/WorkerPoolResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateSortWorkerPools"></a>
# **updateSortWorkerPools**
> updateSortWorkerPools()



    Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateSortWorkerPoolsSpaces"></a>
# **updateSortWorkerPoolsSpaces**
> updateSortWorkerPoolsSpaces(baseSpaceId)



    Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateWorkerPool"></a>
# **updateWorkerPool**
> WorkerPoolResource updateWorkerPool(id, body)

Modify a WorkerPoolResource by ID

    Modifies an existing worker pool.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the WorkerPoolResource to modify | [default to null]
 **body** | [**WorkerPoolResource**](../model/WorkerPoolResource.md)| The WorkerPoolResource resource to create | [optional]

### Return type

[**WorkerPoolResource**](../model/WorkerPoolResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateWorkerPoolSpaces"></a>
# **updateWorkerPoolSpaces**
> WorkerPoolResource updateWorkerPoolSpaces(baseSpaceId, id, body)

Modify a WorkerPoolResource by ID

    Modifies an existing worker pool.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the WorkerPoolResource to modify | [default to null]
 **body** | [**WorkerPoolResource**](../model/WorkerPoolResource.md)| The WorkerPoolResource resource to create | [optional]

### Return type

[**WorkerPoolResource**](../model/WorkerPoolResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

