# WorkersApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorker**](WorkersApi.md#createWorker) | **POST** /workers | Create a WorkerResource
[**createWorkerSpaces**](WorkersApi.md#createWorkerSpaces) | **POST** /{baseSpaceId}/workers | Create a WorkerResource
[**deleteWorker**](WorkersApi.md#deleteWorker) | **DELETE** /workers/{id} | Delete a WorkerResource by ID
[**deleteWorkerSpaces**](WorkersApi.md#deleteWorkerSpaces) | **DELETE** /{baseSpaceId}/workers/{id} | Delete a WorkerResource by ID
[**getDiscoverWorker**](WorkersApi.md#getDiscoverWorker) | **GET** /workers/discover | 
[**getDiscoverWorkerSpaces**](WorkersApi.md#getDiscoverWorkerSpaces) | **GET** /{baseSpaceId}/workers/discover | 
[**getWorkerById**](WorkersApi.md#getWorkerById) | **GET** /workers/{id} | Get a Worker by ID
[**getWorkerByIdSpaces**](WorkersApi.md#getWorkerByIdSpaces) | **GET** /{baseSpaceId}/workers/{id} | Get a Worker by ID
[**getWorkerConnectionStatus**](WorkersApi.md#getWorkerConnectionStatus) | **GET** /workers/{id}/connection | 
[**getWorkerConnectionStatusSpaces**](WorkersApi.md#getWorkerConnectionStatusSpaces) | **GET** /{baseSpaceId}/workers/{id}/connection | 
[**getWorkerOperatingSystemNamesListAll**](WorkersApi.md#getWorkerOperatingSystemNamesListAll) | **GET** /workers/operatingsystem/names/all | 
[**getWorkerOperatingSystemNamesListAllSpaces**](WorkersApi.md#getWorkerOperatingSystemNamesListAllSpaces) | **GET** /{baseSpaceId}/workers/operatingsystem/names/all | 
[**getWorkerOperatingSystemShellNameListAll**](WorkersApi.md#getWorkerOperatingSystemShellNameListAll) | **GET** /workers/operatingsystem/shells/all | 
[**getWorkerOperatingSystemShellNameListAllSpaces**](WorkersApi.md#getWorkerOperatingSystemShellNameListAllSpaces) | **GET** /{baseSpaceId}/workers/operatingsystem/shells/all | 
[**indexWorkers**](WorkersApi.md#indexWorkers) | **GET** /workers | Get a list of WorkerResources
[**indexWorkersSpaces**](WorkersApi.md#indexWorkersSpaces) | **GET** /{baseSpaceId}/workers | Get a list of WorkerResources
[**listAllWorkers**](WorkersApi.md#listAllWorkers) | **GET** /workers/all | Get a list of WorkerResources
[**listAllWorkersSpaces**](WorkersApi.md#listAllWorkersSpaces) | **GET** /{baseSpaceId}/workers/all | Get a list of WorkerResources
[**updateWorker**](WorkersApi.md#updateWorker) | **PUT** /workers/{id} | Modify a WorkerResource by ID
[**updateWorkerSpaces**](WorkersApi.md#updateWorkerSpaces) | **PUT** /{baseSpaceId}/workers/{id} | Modify a WorkerResource by ID


<a name="createWorker"></a>
# **createWorker**
> WorkerResource createWorker(body)

Create a WorkerResource

    Creates a new worker.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkerResource**](../model/WorkerResource.md)| The WorkerResource resource to create | [optional]

### Return type

[**WorkerResource**](../model/WorkerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createWorkerSpaces"></a>
# **createWorkerSpaces**
> WorkerResource createWorkerSpaces(baseSpaceId, body)

Create a WorkerResource

    Creates a new worker.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**WorkerResource**](../model/WorkerResource.md)| The WorkerResource resource to create | [optional]

### Return type

[**WorkerResource**](../model/WorkerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteWorker"></a>
# **deleteWorker**
> deleteWorker(id)

Delete a WorkerResource by ID

    Deletes an existing worker machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the WorkerResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteWorkerSpaces"></a>
# **deleteWorkerSpaces**
> deleteWorkerSpaces(baseSpaceId, id)

Delete a WorkerResource by ID

    Deletes an existing worker machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the WorkerResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getDiscoverWorker"></a>
# **getDiscoverWorker**
> MachineResource getDiscoverWorker()



    Interrogate a machine for communication details so that it may be added to the installation.

### Parameters
This endpoint does not need any parameter.

### Return type

[**MachineResource**](../model/MachineResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDiscoverWorkerSpaces"></a>
# **getDiscoverWorkerSpaces**
> MachineResource getDiscoverWorkerSpaces(baseSpaceId)



    Interrogate a machine for communication details so that it may be added to the installation.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**MachineResource**](../model/MachineResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerById"></a>
# **getWorkerById**
> WorkerResource getWorkerById(id)

Get a Worker by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Worker to load | [default to null]

### Return type

[**WorkerResource**](../model/WorkerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerByIdSpaces"></a>
# **getWorkerByIdSpaces**
> WorkerResource getWorkerByIdSpaces(id, baseSpaceId)

Get a Worker by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Worker to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**WorkerResource**](../model/WorkerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerConnectionStatus"></a>
# **getWorkerConnectionStatus**
> MachineConnectionStatus getWorkerConnectionStatus(id)



    Get the status of the network connection between the Octopus server and a worker.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**MachineConnectionStatus**](../model/MachineConnectionStatus.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerConnectionStatusSpaces"></a>
# **getWorkerConnectionStatusSpaces**
> MachineConnectionStatus getWorkerConnectionStatusSpaces(baseSpaceId, id)



    Get the status of the network connection between the Octopus server and a worker.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**MachineConnectionStatus**](../model/MachineConnectionStatus.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerOperatingSystemNamesListAll"></a>
# **getWorkerOperatingSystemNamesListAll**
> List getWorkerOperatingSystemNamesListAll()



    Gets all operating system names for workers. The result will be a string array.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/string.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerOperatingSystemNamesListAllSpaces"></a>
# **getWorkerOperatingSystemNamesListAllSpaces**
> List getWorkerOperatingSystemNamesListAllSpaces(baseSpaceId)



    Gets all operating system names for workers. The result will be a string array.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/string.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerOperatingSystemShellNameListAll"></a>
# **getWorkerOperatingSystemShellNameListAll**
> List getWorkerOperatingSystemShellNameListAll()



    Gets all operating system shell names for workers. The result will be a string array.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/string.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkerOperatingSystemShellNameListAllSpaces"></a>
# **getWorkerOperatingSystemShellNameListAllSpaces**
> List getWorkerOperatingSystemShellNameListAllSpaces(baseSpaceId)



    Gets all operating system shell names for workers. The result will be a string array.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/string.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexWorkers"></a>
# **indexWorkers**
> WorkerResourceCollection indexWorkers(skip, take)

Get a list of WorkerResources

    Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**WorkerResourceCollection**](../model/WorkerResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexWorkersSpaces"></a>
# **indexWorkersSpaces**
> WorkerResourceCollection indexWorkersSpaces(baseSpaceId, skip, take)

Get a list of WorkerResources

    Lists all of the registered worker machines in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**WorkerResourceCollection**](../model/WorkerResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllWorkers"></a>
# **listAllWorkers**
> List listAllWorkers()

Get a list of WorkerResources

    Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/WorkerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllWorkersSpaces"></a>
# **listAllWorkersSpaces**
> List listAllWorkersSpaces(baseSpaceId)

Get a list of WorkerResources

    Lists all of the workers in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/WorkerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateWorker"></a>
# **updateWorker**
> WorkerResource updateWorker(id, body)

Modify a WorkerResource by ID

    Modifies an existing worker machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the WorkerResource to modify | [default to null]
 **body** | [**WorkerResource**](../model/WorkerResource.md)| The WorkerResource resource to create | [optional]

### Return type

[**WorkerResource**](../model/WorkerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateWorkerSpaces"></a>
# **updateWorkerSpaces**
> WorkerResource updateWorkerSpaces(baseSpaceId, id, body)

Modify a WorkerResource by ID

    Modifies an existing worker machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the WorkerResource to modify | [default to null]
 **body** | [**WorkerResource**](../model/WorkerResource.md)| The WorkerResource resource to create | [optional]

### Return type

[**WorkerResource**](../model/WorkerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

