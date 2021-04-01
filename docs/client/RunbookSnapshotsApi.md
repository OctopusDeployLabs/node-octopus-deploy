# RunbookSnapshotsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRunbookSnapshot**](RunbookSnapshotsApi.md#createRunbookSnapshot) | **POST** /runbookSnapshots | Create a RunbookSnapshotResource
[**createRunbookSnapshotSnapshotVariables**](RunbookSnapshotsApi.md#createRunbookSnapshotSnapshotVariables) | **POST** /runbookSnapshots/{id}/snapshot-variables | 
[**createRunbookSnapshotSnapshotVariablesSpaces**](RunbookSnapshotsApi.md#createRunbookSnapshotSnapshotVariablesSpaces) | **POST** /{baseSpaceId}/runbookSnapshots/{id}/snapshot-variables | 
[**createRunbookSnapshotSpaces**](RunbookSnapshotsApi.md#createRunbookSnapshotSpaces) | **POST** /{baseSpaceId}/runbookSnapshots | Create a RunbookSnapshotResource
[**deleteRunbookSnapshot**](RunbookSnapshotsApi.md#deleteRunbookSnapshot) | **DELETE** /runbookSnapshots/{id} | Delete a RunbookSnapshotResource by ID
[**deleteRunbookSnapshotSpaces**](RunbookSnapshotsApi.md#deleteRunbookSnapshotSpaces) | **DELETE** /{baseSpaceId}/runbookSnapshots/{id} | Delete a RunbookSnapshotResource by ID
[**getRunbookRunPreviewForRunbookSnapshot**](RunbookSnapshotsApi.md#getRunbookRunPreviewForRunbookSnapshot) | **GET** /runbookSnapshots/{id}/runbookRuns/preview/{environment} | 
[**getRunbookRunPreviewForRunbookSnapshot1**](RunbookSnapshotsApi.md#getRunbookRunPreviewForRunbookSnapshot1) | **GET** /runbookSnapshots/{id}/runbookRuns/preview/{environment}/{tenant} | 
[**getRunbookRunPreviewForRunbookSnapshotSpaces**](RunbookSnapshotsApi.md#getRunbookRunPreviewForRunbookSnapshotSpaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/preview/{environment} | 
[**getRunbookRunPreviewForRunbookSnapshotSpaces1**](RunbookSnapshotsApi.md#getRunbookRunPreviewForRunbookSnapshotSpaces1) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/preview/{environment}/{tenant} | 
[**getRunbookRunTemplateForRunbookSnapshot**](RunbookSnapshotsApi.md#getRunbookRunTemplateForRunbookSnapshot) | **GET** /runbookSnapshots/{id}/runbookRuns/template | 
[**getRunbookRunTemplateForRunbookSnapshotSpaces**](RunbookSnapshotsApi.md#getRunbookRunTemplateForRunbookSnapshotSpaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/template | 
[**getRunbookSnapshotById**](RunbookSnapshotsApi.md#getRunbookSnapshotById) | **GET** /runbookSnapshots/{id} | Get a Runbook Snapshot by ID
[**getRunbookSnapshotByIdSpaces**](RunbookSnapshotsApi.md#getRunbookSnapshotByIdSpaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id} | Get a Runbook Snapshot by ID
[**getRunbookSnapshotByProjectAndName**](RunbookSnapshotsApi.md#getRunbookSnapshotByProjectAndName) | **GET** /projects/{id}/runbookSnapshots/{name} | 
[**getRunbookSnapshotByProjectAndNameSpaces**](RunbookSnapshotsApi.md#getRunbookSnapshotByProjectAndNameSpaces) | **GET** /{baseSpaceId}/projects/{id}/runbookSnapshots/{name} | 
[**indexProjectRunbookSnapshots**](RunbookSnapshotsApi.md#indexProjectRunbookSnapshots) | **GET** /projects/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given ProjectResource
[**indexProjectRunbookSnapshotsSpaces**](RunbookSnapshotsApi.md#indexProjectRunbookSnapshotsSpaces) | **GET** /{baseSpaceId}/projects/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given ProjectResource
[**indexRunbookRunbookSnapshots**](RunbookSnapshotsApi.md#indexRunbookRunbookSnapshots) | **GET** /runbooks/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given RunbookResource
[**indexRunbookRunbookSnapshotsSpaces**](RunbookSnapshotsApi.md#indexRunbookRunbookSnapshotsSpaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given RunbookResource
[**indexRunbookSnapshots**](RunbookSnapshotsApi.md#indexRunbookSnapshots) | **GET** /runbookSnapshots | Get a list of Runbook Snapshots
[**indexRunbookSnapshotsSpaces**](RunbookSnapshotsApi.md#indexRunbookSnapshotsSpaces) | **GET** /{baseSpaceId}/runbookSnapshots | Get a list of Runbook Snapshots
[**updateRunbookSnapshot**](RunbookSnapshotsApi.md#updateRunbookSnapshot) | **PUT** /runbookSnapshots/{id} | Modify a RunbookSnapshotResource by ID
[**updateRunbookSnapshotSpaces**](RunbookSnapshotsApi.md#updateRunbookSnapshotSpaces) | **PUT** /{baseSpaceId}/runbookSnapshots/{id} | Modify a RunbookSnapshotResource by ID


<a name="createRunbookSnapshot"></a>
# **createRunbookSnapshot**
> RunbookSnapshotResource createRunbookSnapshot(body)

Create a RunbookSnapshotResource

    Creates a new snapshot.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)| The RunbookSnapshotResource resource to create | [optional]

### Return type

[**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createRunbookSnapshotSnapshotVariables"></a>
# **createRunbookSnapshotSnapshotVariables**
> RunbookSnapshotResource createRunbookSnapshotSnapshotVariables(id)



    Refresh the variable snapshots associated with the runbook snapshot. The runbook&#39;s process must not have changed since the snapshot was created.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createRunbookSnapshotSnapshotVariablesSpaces"></a>
# **createRunbookSnapshotSnapshotVariablesSpaces**
> RunbookSnapshotResource createRunbookSnapshotSnapshotVariablesSpaces(baseSpaceId, id)



    Refresh the variable snapshots associated with the runbook snapshot. The runbook&#39;s process must not have changed since the snapshot was created.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createRunbookSnapshotSpaces"></a>
# **createRunbookSnapshotSpaces**
> RunbookSnapshotResource createRunbookSnapshotSpaces(baseSpaceId, body)

Create a RunbookSnapshotResource

    Creates a new snapshot.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)| The RunbookSnapshotResource resource to create | [optional]

### Return type

[**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteRunbookSnapshot"></a>
# **deleteRunbookSnapshot**
> deleteRunbookSnapshot(id)

Delete a RunbookSnapshotResource by ID

    Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the RunbookSnapshotResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteRunbookSnapshotSpaces"></a>
# **deleteRunbookSnapshotSpaces**
> deleteRunbookSnapshotSpaces(baseSpaceId, id)

Delete a RunbookSnapshotResource by ID

    Deletes an existing snapshot, along with all of the runs, tasks and other associated resources belonging to the snapshot.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the RunbookSnapshotResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getRunbookRunPreviewForRunbookSnapshot"></a>
# **getRunbookRunPreviewForRunbookSnapshot**
> RunbookRunPreviewResource getRunbookRunPreviewForRunbookSnapshot(environment, id)



    Gets a document that describes what steps will/won&#39;t be run during a run to a given environment (and tenant if supplied).

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

<a name="getRunbookRunPreviewForRunbookSnapshot1"></a>
# **getRunbookRunPreviewForRunbookSnapshot1**
> RunbookRunPreviewResource getRunbookRunPreviewForRunbookSnapshot1(environment, id, tenant)



    Gets a document that describes what steps will/won&#39;t be run during a run to a given environment (and tenant if supplied).

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

<a name="getRunbookRunPreviewForRunbookSnapshotSpaces"></a>
# **getRunbookRunPreviewForRunbookSnapshotSpaces**
> RunbookRunPreviewResource getRunbookRunPreviewForRunbookSnapshotSpaces(baseSpaceId, environment, id)



    Gets a document that describes what steps will/won&#39;t be run during a run to a given environment (and tenant if supplied).

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

<a name="getRunbookRunPreviewForRunbookSnapshotSpaces1"></a>
# **getRunbookRunPreviewForRunbookSnapshotSpaces1**
> RunbookRunPreviewResource getRunbookRunPreviewForRunbookSnapshotSpaces1(baseSpaceId, environment, id, tenant)



    Gets a document that describes what steps will/won&#39;t be run during a run to a given environment (and tenant if supplied).

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

<a name="getRunbookRunTemplateForRunbookSnapshot"></a>
# **getRunbookRunTemplateForRunbookSnapshot**
> RunbookRunTemplateResource getRunbookRunTemplateForRunbookSnapshot(id)



    Gets all of the information necessary for creating or editing a run for this snapshot.

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

<a name="getRunbookRunTemplateForRunbookSnapshotSpaces"></a>
# **getRunbookRunTemplateForRunbookSnapshotSpaces**
> RunbookRunTemplateResource getRunbookRunTemplateForRunbookSnapshotSpaces(baseSpaceId, id)



    Gets all of the information necessary for creating or editing a run for this snapshot.

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

<a name="getRunbookSnapshotById"></a>
# **getRunbookSnapshotById**
> RunbookSnapshotResource getRunbookSnapshotById(id)

Get a Runbook Snapshot by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the RunbookSnapshot to load | [default to null]

### Return type

[**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookSnapshotByIdSpaces"></a>
# **getRunbookSnapshotByIdSpaces**
> RunbookSnapshotResource getRunbookSnapshotByIdSpaces(id, baseSpaceId)

Get a Runbook Snapshot by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the RunbookSnapshot to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookSnapshotByProjectAndName"></a>
# **getRunbookSnapshotByProjectAndName**
> RunbookSnapshotResource getRunbookSnapshotByProjectAndName(id, name)



    Gets a single runbookSnapshot by project ID and name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]
 **name** | **String**| Name of the runbook | [default to null]

### Return type

[**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookSnapshotByProjectAndNameSpaces"></a>
# **getRunbookSnapshotByProjectAndNameSpaces**
> RunbookSnapshotResource getRunbookSnapshotByProjectAndNameSpaces(baseSpaceId, id, name)



    Gets a single runbookSnapshot by project ID and name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]
 **name** | **String**| Name of the runbook | [default to null]

### Return type

[**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectRunbookSnapshots"></a>
# **indexProjectRunbookSnapshots**
> RunbookSnapshotResourceCollection indexProjectRunbookSnapshots(id, skip, take)

Get a list of RunbookSnapshotResources for the given ProjectResource

    Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Project | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**RunbookSnapshotResourceCollection**](../model/RunbookSnapshotResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectRunbookSnapshotsSpaces"></a>
# **indexProjectRunbookSnapshotsSpaces**
> RunbookSnapshotResourceCollection indexProjectRunbookSnapshotsSpaces(baseSpaceId, id, skip, take)

Get a list of RunbookSnapshotResources for the given ProjectResource

    Lists all of the runbookSnapshots that belong to the given project. RunbookSnapshots will be ordered from most recent to least recent.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the Project | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**RunbookSnapshotResourceCollection**](../model/RunbookSnapshotResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexRunbookRunbookSnapshots"></a>
# **indexRunbookRunbookSnapshots**
> RunbookSnapshotResourceCollection indexRunbookRunbookSnapshots(id, skip, take)

Get a list of RunbookSnapshotResources for the given RunbookResource

    Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Runbook | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**RunbookSnapshotResourceCollection**](../model/RunbookSnapshotResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexRunbookRunbookSnapshotsSpaces"></a>
# **indexRunbookRunbookSnapshotsSpaces**
> RunbookSnapshotResourceCollection indexRunbookRunbookSnapshotsSpaces(baseSpaceId, id, skip, take)

Get a list of RunbookSnapshotResources for the given RunbookResource

    Lists all of the runbookSnapshots that belong to the given runbook. RunbookSnapshots will be ordered from most recent to least recent.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the Runbook | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**RunbookSnapshotResourceCollection**](../model/RunbookSnapshotResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexRunbookSnapshots"></a>
# **indexRunbookSnapshots**
> RunbookSnapshotResourceCollection indexRunbookSnapshots(skip, take)

Get a list of Runbook Snapshots

    Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**RunbookSnapshotResourceCollection**](../model/RunbookSnapshotResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexRunbookSnapshotsSpaces"></a>
# **indexRunbookSnapshotsSpaces**
> RunbookSnapshotResourceCollection indexRunbookSnapshotsSpaces(baseSpaceId, skip, take)

Get a list of Runbook Snapshots

    Lists all of the snapshots in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent snapshot.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**RunbookSnapshotResourceCollection**](../model/RunbookSnapshotResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateRunbookSnapshot"></a>
# **updateRunbookSnapshot**
> RunbookSnapshotResource updateRunbookSnapshot(id, body)

Modify a RunbookSnapshotResource by ID

    Updates an existing snapshot.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the RunbookSnapshotResource to modify | [default to null]
 **body** | [**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)| The RunbookSnapshotResource resource to create | [optional]

### Return type

[**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateRunbookSnapshotSpaces"></a>
# **updateRunbookSnapshotSpaces**
> RunbookSnapshotResource updateRunbookSnapshotSpaces(baseSpaceId, id, body)

Modify a RunbookSnapshotResource by ID

    Updates an existing snapshot.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the RunbookSnapshotResource to modify | [default to null]
 **body** | [**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)| The RunbookSnapshotResource resource to create | [optional]

### Return type

[**RunbookSnapshotResource**](../model/RunbookSnapshotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

