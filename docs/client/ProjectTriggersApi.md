# ProjectTriggersApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProjectTrigger**](ProjectTriggersApi.md#createProjectTrigger) | **POST** /projecttriggers | Create a ProjectTriggerResource
[**createProjectTriggerSpaces**](ProjectTriggersApi.md#createProjectTriggerSpaces) | **POST** /{baseSpaceId}/projecttriggers | Create a ProjectTriggerResource
[**deleteProjectTrigger**](ProjectTriggersApi.md#deleteProjectTrigger) | **DELETE** /projecttriggers/{id} | Delete a ProjectTriggerResource by ID
[**deleteProjectTriggerSpaces**](ProjectTriggersApi.md#deleteProjectTriggerSpaces) | **DELETE** /{baseSpaceId}/projecttriggers/{id} | Delete a ProjectTriggerResource by ID
[**getProjectTriggerById**](ProjectTriggersApi.md#getProjectTriggerById) | **GET** /projecttriggers/{id} | Get a Project Trigger by ID
[**getProjectTriggerByIdSpaces**](ProjectTriggersApi.md#getProjectTriggerByIdSpaces) | **GET** /{baseSpaceId}/projecttriggers/{id} | Get a Project Trigger by ID
[**indexProjectProjectTriggers**](ProjectTriggersApi.md#indexProjectProjectTriggers) | **GET** /projects/{id}/triggers | Get a list of ProjectTriggerResources for the given ProjectResource
[**indexProjectProjectTriggersSpaces**](ProjectTriggersApi.md#indexProjectProjectTriggersSpaces) | **GET** /{baseSpaceId}/projects/{id}/triggers | Get a list of ProjectTriggerResources for the given ProjectResource
[**indexProjectTriggers**](ProjectTriggersApi.md#indexProjectTriggers) | **GET** /projecttriggers | Get a list of ProjectTriggerResources
[**indexProjectTriggersSpaces**](ProjectTriggersApi.md#indexProjectTriggersSpaces) | **GET** /{baseSpaceId}/projecttriggers | Get a list of ProjectTriggerResources
[**updateProjectTrigger**](ProjectTriggersApi.md#updateProjectTrigger) | **PUT** /projecttriggers/{id} | Modify a ProjectTriggerResource by ID
[**updateProjectTriggerSpaces**](ProjectTriggersApi.md#updateProjectTriggerSpaces) | **PUT** /{baseSpaceId}/projecttriggers/{id} | Modify a ProjectTriggerResource by ID


<a name="createProjectTrigger"></a>
# **createProjectTrigger**
> ProjectTriggerResource createProjectTrigger(body)

Create a ProjectTriggerResource

    Creates a new project trigger

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProjectTriggerResource**](../model/ProjectTriggerResource.md)| The ProjectTriggerResource resource to create | [optional]

### Return type

[**ProjectTriggerResource**](../model/ProjectTriggerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createProjectTriggerSpaces"></a>
# **createProjectTriggerSpaces**
> ProjectTriggerResource createProjectTriggerSpaces(baseSpaceId, body)

Create a ProjectTriggerResource

    Creates a new project trigger

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**ProjectTriggerResource**](../model/ProjectTriggerResource.md)| The ProjectTriggerResource resource to create | [optional]

### Return type

[**ProjectTriggerResource**](../model/ProjectTriggerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteProjectTrigger"></a>
# **deleteProjectTrigger**
> deleteProjectTrigger(id)

Delete a ProjectTriggerResource by ID

    Deletes an existing project trigger.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProjectTriggerResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteProjectTriggerSpaces"></a>
# **deleteProjectTriggerSpaces**
> deleteProjectTriggerSpaces(baseSpaceId, id)

Delete a ProjectTriggerResource by ID

    Deletes an existing project trigger.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ProjectTriggerResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getProjectTriggerById"></a>
# **getProjectTriggerById**
> ProjectTriggerResource getProjectTriggerById(id)

Get a Project Trigger by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProjectTrigger to load | [default to null]

### Return type

[**ProjectTriggerResource**](../model/ProjectTriggerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getProjectTriggerByIdSpaces"></a>
# **getProjectTriggerByIdSpaces**
> ProjectTriggerResource getProjectTriggerByIdSpaces(id, baseSpaceId)

Get a Project Trigger by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProjectTrigger to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**ProjectTriggerResource**](../model/ProjectTriggerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectProjectTriggers"></a>
# **indexProjectProjectTriggers**
> ProjectTriggerResourceCollection indexProjectProjectTriggers(id, skip, take)

Get a list of ProjectTriggerResources for the given ProjectResource

    Lists all the project triggers for the given project

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Project | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**ProjectTriggerResourceCollection**](../model/ProjectTriggerResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectProjectTriggersSpaces"></a>
# **indexProjectProjectTriggersSpaces**
> ProjectTriggerResourceCollection indexProjectProjectTriggersSpaces(baseSpaceId, id, skip, take)

Get a list of ProjectTriggerResources for the given ProjectResource

    Lists all the project triggers for the given project

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the Project | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**ProjectTriggerResourceCollection**](../model/ProjectTriggerResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectTriggers"></a>
# **indexProjectTriggers**
> ProjectTriggerResourceCollection indexProjectTriggers(skip, take)

Get a list of ProjectTriggerResources

    Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ProjectTriggerResourceCollection**](../model/ProjectTriggerResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectTriggersSpaces"></a>
# **indexProjectTriggersSpaces**
> ProjectTriggerResourceCollection indexProjectTriggersSpaces(baseSpaceId, skip, take)

Get a list of ProjectTriggerResources

    Gets all the project triggers in the supplied Octopus Deploy Space, sorted by Id

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ProjectTriggerResourceCollection**](../model/ProjectTriggerResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateProjectTrigger"></a>
# **updateProjectTrigger**
> ProjectTriggerResource updateProjectTrigger(id, body)

Modify a ProjectTriggerResource by ID

    Updates an existing project trigger

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProjectTriggerResource to modify | [default to null]
 **body** | [**ProjectTriggerResource**](../model/ProjectTriggerResource.md)| The ProjectTriggerResource resource to create | [optional]

### Return type

[**ProjectTriggerResource**](../model/ProjectTriggerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateProjectTriggerSpaces"></a>
# **updateProjectTriggerSpaces**
> ProjectTriggerResource updateProjectTriggerSpaces(baseSpaceId, id, body)

Modify a ProjectTriggerResource by ID

    Updates an existing project trigger

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ProjectTriggerResource to modify | [default to null]
 **body** | [**ProjectTriggerResource**](../model/ProjectTriggerResource.md)| The ProjectTriggerResource resource to create | [optional]

### Return type

[**ProjectTriggerResource**](../model/ProjectTriggerResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

