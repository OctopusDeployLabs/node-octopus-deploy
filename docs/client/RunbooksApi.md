# RunbooksApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRunbook**](RunbooksApi.md#createRunbook) | **POST** /runbooks | Create a RunbookResource
[**createRunbookRunForPublishedRunbookCreate**](RunbooksApi.md#createRunbookRunForPublishedRunbookCreate) | **POST** /runbooks/{id}/run | 
[**createRunbookRunForPublishedRunbookCreateSpaces**](RunbooksApi.md#createRunbookRunForPublishedRunbookCreateSpaces) | **POST** /{baseSpaceId}/runbooks/{id}/run | 
[**createRunbookSpaces**](RunbooksApi.md#createRunbookSpaces) | **POST** /{baseSpaceId}/runbooks | Create a RunbookResource
[**deleteRunbook**](RunbooksApi.md#deleteRunbook) | **DELETE** /runbooks/{id} | Delete a RunbookResource by ID
[**deleteRunbookSpaces**](RunbooksApi.md#deleteRunbookSpaces) | **DELETE** /{baseSpaceId}/runbooks/{id} | Delete a RunbookResource by ID
[**getRunbookById**](RunbooksApi.md#getRunbookById) | **GET** /runbooks/{id} | Get a Runbook by ID
[**getRunbookByIdSpaces**](RunbooksApi.md#getRunbookByIdSpaces) | **GET** /{baseSpaceId}/runbooks/{id} | Get a Runbook by ID
[**getRunbookEnvironments**](RunbooksApi.md#getRunbookEnvironments) | **GET** /runbooks/{id}/environments | 
[**getRunbookEnvironmentsSpaces**](RunbooksApi.md#getRunbookEnvironmentsSpaces) | **GET** /{baseSpaceId}/runbooks/{id}/environments | 
[**getRunbookRunPreviewForRunbook**](RunbooksApi.md#getRunbookRunPreviewForRunbook) | **GET** /runbooks/{id}/runbookRuns/preview/{environment} | 
[**getRunbookRunPreviewForRunbook1**](RunbooksApi.md#getRunbookRunPreviewForRunbook1) | **GET** /runbooks/{id}/runbookRuns/preview/{environment}/{tenant} | 
[**getRunbookRunPreviewForRunbookSpaces**](RunbooksApi.md#getRunbookRunPreviewForRunbookSpaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookRuns/preview/{environment} | 
[**getRunbookRunPreviewForRunbookSpaces1**](RunbooksApi.md#getRunbookRunPreviewForRunbookSpaces1) | **GET** /{baseSpaceId}/runbooks/{id}/runbookRuns/preview/{environment}/{tenant} | 
[**getRunbookRunTemplateForRunbook**](RunbooksApi.md#getRunbookRunTemplateForRunbook) | **GET** /runbooks/{id}/runbookRunTemplate | 
[**getRunbookRunTemplateForRunbookSpaces**](RunbooksApi.md#getRunbookRunTemplateForRunbookSpaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookRunTemplate | 
[**getRunbookSnapshotTemplateForRunbook**](RunbooksApi.md#getRunbookSnapshotTemplateForRunbook) | **GET** /runbooks/{id}/runbookSnapshotTemplate | 
[**getRunbookSnapshotTemplateForRunbookSpaces**](RunbooksApi.md#getRunbookSnapshotTemplateForRunbookSpaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookSnapshotTemplate | 
[**indexProjectRunbooks**](RunbooksApi.md#indexProjectRunbooks) | **GET** /projects/{id}/runbooks | Get a list of RunbookResources for the given ProjectResource
[**indexProjectRunbooksSpaces**](RunbooksApi.md#indexProjectRunbooksSpaces) | **GET** /{baseSpaceId}/projects/{id}/runbooks | Get a list of RunbookResources for the given ProjectResource
[**indexRunbooks**](RunbooksApi.md#indexRunbooks) | **GET** /runbooks | Get a list of RunbookResources
[**indexRunbooksSpaces**](RunbooksApi.md#indexRunbooksSpaces) | **GET** /{baseSpaceId}/runbooks | Get a list of RunbookResources
[**listAllRunbooks**](RunbooksApi.md#listAllRunbooks) | **GET** /runbooks/all | Get a list of RunbookResources
[**listAllRunbooksSpaces**](RunbooksApi.md#listAllRunbooksSpaces) | **GET** /{baseSpaceId}/runbooks/all | Get a list of RunbookResources
[**updateRunbook**](RunbooksApi.md#updateRunbook) | **PUT** /runbooks/{id} | Modify a RunbookResource by ID
[**updateRunbookSpaces**](RunbooksApi.md#updateRunbookSpaces) | **PUT** /{baseSpaceId}/runbooks/{id} | Modify a RunbookResource by ID


<a name="createRunbook"></a>
# **createRunbook**
> RunbookResource createRunbook(body)

Create a RunbookResource

    Creates a new process.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RunbookResource**](../model/RunbookResource.md)| The RunbookResource resource to create | [optional]

### Return type

[**RunbookResource**](../model/RunbookResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createRunbookRunForPublishedRunbookCreate"></a>
# **createRunbookRunForPublishedRunbookCreate**
> List createRunbookRunForPublishedRunbookCreate(id)



    Runs the published version of this Runbook.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/RunbookRunResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createRunbookRunForPublishedRunbookCreateSpaces"></a>
# **createRunbookRunForPublishedRunbookCreateSpaces**
> List createRunbookRunForPublishedRunbookCreateSpaces(baseSpaceId, id)



    Runs the published version of this Runbook.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/RunbookRunResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createRunbookSpaces"></a>
# **createRunbookSpaces**
> RunbookResource createRunbookSpaces(baseSpaceId, body)

Create a RunbookResource

    Creates a new process.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**RunbookResource**](../model/RunbookResource.md)| The RunbookResource resource to create | [optional]

### Return type

[**RunbookResource**](../model/RunbookResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteRunbook"></a>
# **deleteRunbook**
> deleteRunbook(id)

Delete a RunbookResource by ID

    Deletes an existing Runbook.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the RunbookResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteRunbookSpaces"></a>
# **deleteRunbookSpaces**
> deleteRunbookSpaces(baseSpaceId, id)

Delete a RunbookResource by ID

    Deletes an existing Runbook.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the RunbookResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getRunbookById"></a>
# **getRunbookById**
> RunbookResource getRunbookById(id)

Get a Runbook by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Runbook to load | [default to null]

### Return type

[**RunbookResource**](../model/RunbookResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookByIdSpaces"></a>
# **getRunbookByIdSpaces**
> RunbookResource getRunbookByIdSpaces(id, baseSpaceId)

Get a Runbook by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Runbook to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**RunbookResource**](../model/RunbookResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookEnvironments"></a>
# **getRunbookEnvironments**
> List getRunbookEnvironments(id)



    Lists all environments a Runbook can be run within based on its EnvironmentScope.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/EnvironmentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookEnvironmentsSpaces"></a>
# **getRunbookEnvironmentsSpaces**
> List getRunbookEnvironmentsSpaces(baseSpaceId, id)



    Lists all environments a Runbook can be run within based on its EnvironmentScope.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/EnvironmentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookRunPreviewForRunbook"></a>
# **getRunbookRunPreviewForRunbook**
> RunbookRunPreviewResource getRunbookRunPreviewForRunbook(environment, id)



    Gets a document that describes what steps will/won&#39;t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment** | **String**| ID of the environment | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbookRunPreviewResource**](../model/RunbookRunPreviewResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookRunPreviewForRunbook1"></a>
# **getRunbookRunPreviewForRunbook1**
> RunbookRunPreviewResource getRunbookRunPreviewForRunbook1(environment, id, tenant)



    Gets a document that describes what steps will/won&#39;t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment** | **String**| ID of the environment | [default to null]
 **id** | **String**| ID of the resource | [default to null]
 **tenant** | **String**| ID of the tenant | [default to null]

### Return type

[**RunbookRunPreviewResource**](../model/RunbookRunPreviewResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookRunPreviewForRunbookSpaces"></a>
# **getRunbookRunPreviewForRunbookSpaces**
> RunbookRunPreviewResource getRunbookRunPreviewForRunbookSpaces(baseSpaceId, environment, id)



    Gets a document that describes what steps will/won&#39;t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **environment** | **String**| ID of the environment | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbookRunPreviewResource**](../model/RunbookRunPreviewResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookRunPreviewForRunbookSpaces1"></a>
# **getRunbookRunPreviewForRunbookSpaces1**
> RunbookRunPreviewResource getRunbookRunPreviewForRunbookSpaces1(baseSpaceId, environment, id, tenant)



    Gets a document that describes what steps will/won&#39;t be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **environment** | **String**| ID of the environment | [default to null]
 **id** | **String**| ID of the resource | [default to null]
 **tenant** | **String**| ID of the tenant | [default to null]

### Return type

[**RunbookRunPreviewResource**](../model/RunbookRunPreviewResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookRunTemplateForRunbook"></a>
# **getRunbookRunTemplateForRunbook**
> RunbookRunTemplateResource getRunbookRunTemplateForRunbook(id)



    Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbookRunTemplateResource**](../model/RunbookRunTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookRunTemplateForRunbookSpaces"></a>
# **getRunbookRunTemplateForRunbookSpaces**
> RunbookRunTemplateResource getRunbookRunTemplateForRunbookSpaces(baseSpaceId, id)



    Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbookRunTemplateResource**](../model/RunbookRunTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookSnapshotTemplateForRunbook"></a>
# **getRunbookSnapshotTemplateForRunbook**
> RunbookSnapshotTemplateResource getRunbookSnapshotTemplateForRunbook(id)



    Gets all of the information necessary for creating or editing a release using this Runbook.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbookSnapshotTemplateResource**](../model/RunbookSnapshotTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookSnapshotTemplateForRunbookSpaces"></a>
# **getRunbookSnapshotTemplateForRunbookSpaces**
> RunbookSnapshotTemplateResource getRunbookSnapshotTemplateForRunbookSpaces(baseSpaceId, id)



    Gets all of the information necessary for creating or editing a release using this Runbook.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbookSnapshotTemplateResource**](../model/RunbookSnapshotTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectRunbooks"></a>
# **indexProjectRunbooks**
> RunbookResourceCollection indexProjectRunbooks(id, skip, take)

Get a list of RunbookResources for the given ProjectResource

    Lists all of the Runbooks that belong to the given project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Project | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**RunbookResourceCollection**](../model/RunbookResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectRunbooksSpaces"></a>
# **indexProjectRunbooksSpaces**
> RunbookResourceCollection indexProjectRunbooksSpaces(baseSpaceId, id, skip, take)

Get a list of RunbookResources for the given ProjectResource

    Lists all of the Runbooks that belong to the given project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the Project | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**RunbookResourceCollection**](../model/RunbookResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexRunbooks"></a>
# **indexRunbooks**
> RunbookResourceCollection indexRunbooks(skip, take)

Get a list of RunbookResources

    Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**RunbookResourceCollection**](../model/RunbookResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexRunbooksSpaces"></a>
# **indexRunbooksSpaces**
> RunbookResourceCollection indexRunbooksSpaces(baseSpaceId, skip, take)

Get a list of RunbookResources

    Lists all the Runbooks in the supplied Octopus Deploy Space, sorted by Name

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**RunbookResourceCollection**](../model/RunbookResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllRunbooks"></a>
# **listAllRunbooks**
> List listAllRunbooks()

Get a list of RunbookResources

    Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/RunbookResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllRunbooksSpaces"></a>
# **listAllRunbooksSpaces**
> List listAllRunbooksSpaces(baseSpaceId)

Get a list of RunbookResources

    Lists all of the runbooks in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/RunbookResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateRunbook"></a>
# **updateRunbook**
> RunbookResource updateRunbook(id, body)

Modify a RunbookResource by ID

    Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the RunbookResource to modify | [default to null]
 **body** | [**RunbookResource**](../model/RunbookResource.md)| The RunbookResource resource to create | [optional]

### Return type

[**RunbookResource**](../model/RunbookResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateRunbookSpaces"></a>
# **updateRunbookSpaces**
> RunbookResource updateRunbookSpaces(baseSpaceId, id, body)

Modify a RunbookResource by ID

    Modifies a process. Only allowed for processes owned by a project (cannot be used to change the process owned by a release).

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the RunbookResource to modify | [default to null]
 **body** | [**RunbookResource**](../model/RunbookResource.md)| The RunbookResource resource to create | [optional]

### Return type

[**RunbookResource**](../model/RunbookResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

