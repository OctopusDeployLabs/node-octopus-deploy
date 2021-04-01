# LifecyclesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLifecycle**](LifecyclesApi.md#createLifecycle) | **POST** /lifecycles | Create a LifecycleResource
[**createLifecycleSpaces**](LifecyclesApi.md#createLifecycleSpaces) | **POST** /{baseSpaceId}/lifecycles | Create a LifecycleResource
[**deleteLifecycle**](LifecyclesApi.md#deleteLifecycle) | **DELETE** /lifecycles/{id} | Delete a LifecycleResource by ID
[**deleteLifecycleSpaces**](LifecyclesApi.md#deleteLifecycleSpaces) | **DELETE** /{baseSpaceId}/lifecycles/{id} | Delete a LifecycleResource by ID
[**getLifecycleById**](LifecyclesApi.md#getLifecycleById) | **GET** /lifecycles/{id} | Get a Lifecycle by ID
[**getLifecycleByIdSpaces**](LifecyclesApi.md#getLifecycleByIdSpaces) | **GET** /{baseSpaceId}/lifecycles/{id} | Get a Lifecycle by ID
[**getLifecyclePreview**](LifecyclesApi.md#getLifecyclePreview) | **GET** /lifecycles/{id}/preview | 
[**getLifecyclePreviewSpaces**](LifecyclesApi.md#getLifecyclePreviewSpaces) | **GET** /{baseSpaceId}/lifecycles/{id}/preview | 
[**getLifecycleProjects**](LifecyclesApi.md#getLifecycleProjects) | **GET** /lifecycles/{id}/projects | 
[**getLifecycleProjectsSpaces**](LifecyclesApi.md#getLifecycleProjectsSpaces) | **GET** /{baseSpaceId}/lifecycles/{id}/projects | 
[**indexLifecycles**](LifecyclesApi.md#indexLifecycles) | **GET** /lifecycles | Get a list of LifecycleResources
[**indexLifecyclesSpaces**](LifecyclesApi.md#indexLifecyclesSpaces) | **GET** /{baseSpaceId}/lifecycles | Get a list of LifecycleResources
[**listAllLifecycles**](LifecyclesApi.md#listAllLifecycles) | **GET** /lifecycles/all | Get a list of LifecycleResources
[**listAllLifecyclesSpaces**](LifecyclesApi.md#listAllLifecyclesSpaces) | **GET** /{baseSpaceId}/lifecycles/all | Get a list of LifecycleResources
[**updateLifecycle**](LifecyclesApi.md#updateLifecycle) | **PUT** /lifecycles/{id} | Modify a LifecycleResource by ID
[**updateLifecycleSpaces**](LifecyclesApi.md#updateLifecycleSpaces) | **PUT** /{baseSpaceId}/lifecycles/{id} | Modify a LifecycleResource by ID


<a name="createLifecycle"></a>
# **createLifecycle**
> LifecycleResource createLifecycle(body)

Create a LifecycleResource

    Creates a new lifecycle.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LifecycleResource**](../model/LifecycleResource.md)| The LifecycleResource resource to create | [optional]

### Return type

[**LifecycleResource**](../model/LifecycleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createLifecycleSpaces"></a>
# **createLifecycleSpaces**
> LifecycleResource createLifecycleSpaces(baseSpaceId, body)

Create a LifecycleResource

    Creates a new lifecycle.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**LifecycleResource**](../model/LifecycleResource.md)| The LifecycleResource resource to create | [optional]

### Return type

[**LifecycleResource**](../model/LifecycleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteLifecycle"></a>
# **deleteLifecycle**
> deleteLifecycle(id)

Delete a LifecycleResource by ID

    Deletes an existing lifecycle.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the LifecycleResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteLifecycleSpaces"></a>
# **deleteLifecycleSpaces**
> deleteLifecycleSpaces(baseSpaceId, id)

Delete a LifecycleResource by ID

    Deletes an existing lifecycle.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the LifecycleResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getLifecycleById"></a>
# **getLifecycleById**
> LifecycleResource getLifecycleById(id)

Get a Lifecycle by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Lifecycle to load | [default to null]

### Return type

[**LifecycleResource**](../model/LifecycleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLifecycleByIdSpaces"></a>
# **getLifecycleByIdSpaces**
> LifecycleResource getLifecycleByIdSpaces(id, baseSpaceId)

Get a Lifecycle by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Lifecycle to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**LifecycleResource**](../model/LifecycleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLifecyclePreview"></a>
# **getLifecyclePreview**
> LifecycleResource getLifecyclePreview(id)



    Gets a single lifecycle by ID, as a preview.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**LifecycleResource**](../model/LifecycleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLifecyclePreviewSpaces"></a>
# **getLifecyclePreviewSpaces**
> LifecycleResource getLifecyclePreviewSpaces(baseSpaceId, id)



    Gets a single lifecycle by ID, as a preview.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**LifecycleResource**](../model/LifecycleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLifecycleProjects"></a>
# **getLifecycleProjects**
> List getLifecycleProjects(id)



    Gets a all projects that use this lifecycle.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/ProjectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLifecycleProjectsSpaces"></a>
# **getLifecycleProjectsSpaces**
> List getLifecycleProjectsSpaces(baseSpaceId, id)



    Gets a all projects that use this lifecycle.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/ProjectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexLifecycles"></a>
# **indexLifecycles**
> LifecycleResourceCollection indexLifecycles(skip, take)

Get a list of LifecycleResources

    Lists all of the lifecycles in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**LifecycleResourceCollection**](../model/LifecycleResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexLifecyclesSpaces"></a>
# **indexLifecyclesSpaces**
> LifecycleResourceCollection indexLifecyclesSpaces(baseSpaceId, skip, take)

Get a list of LifecycleResources

    Lists all of the lifecycles in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**LifecycleResourceCollection**](../model/LifecycleResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllLifecycles"></a>
# **listAllLifecycles**
> List listAllLifecycles()

Get a list of LifecycleResources

    Lists all the lifecycles in the supplied Octopus Deploy Space.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/LifecycleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllLifecyclesSpaces"></a>
# **listAllLifecyclesSpaces**
> List listAllLifecyclesSpaces(baseSpaceId)

Get a list of LifecycleResources

    Lists all the lifecycles in the supplied Octopus Deploy Space.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/LifecycleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateLifecycle"></a>
# **updateLifecycle**
> LifecycleResource updateLifecycle(id, body)

Modify a LifecycleResource by ID

    Modifies an existing lifecycle.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the LifecycleResource to modify | [default to null]
 **body** | [**LifecycleResource**](../model/LifecycleResource.md)| The LifecycleResource resource to create | [optional]

### Return type

[**LifecycleResource**](../model/LifecycleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateLifecycleSpaces"></a>
# **updateLifecycleSpaces**
> LifecycleResource updateLifecycleSpaces(baseSpaceId, id, body)

Modify a LifecycleResource by ID

    Modifies an existing lifecycle.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the LifecycleResource to modify | [default to null]
 **body** | [**LifecycleResource**](../model/LifecycleResource.md)| The LifecycleResource resource to create | [optional]

### Return type

[**LifecycleResource**](../model/LifecycleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

