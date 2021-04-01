# RunbookProcessesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRunbookProcessById**](RunbookProcessesApi.md#getRunbookProcessById) | **GET** /runbookProcesses/{id} | Get a Runbook Process by ID
[**getRunbookProcessByIdSpaces**](RunbookProcessesApi.md#getRunbookProcessByIdSpaces) | **GET** /{baseSpaceId}/runbookProcesses/{id} | Get a Runbook Process by ID
[**getRunbookSnapshotTemplateForRunbookStep**](RunbookProcessesApi.md#getRunbookSnapshotTemplateForRunbookStep) | **GET** /runbookProcesses/{id}/runbookSnapshotTemplate | 
[**getRunbookSnapshotTemplateForRunbookStepSpaces**](RunbookProcessesApi.md#getRunbookSnapshotTemplateForRunbookStepSpaces) | **GET** /{baseSpaceId}/runbookProcesses/{id}/runbookSnapshotTemplate | 
[**indexRunbookProcesses**](RunbookProcessesApi.md#indexRunbookProcesses) | **GET** /runbookProcesses | Get a list of Runbook Processes
[**indexRunbookProcessesSpaces**](RunbookProcessesApi.md#indexRunbookProcessesSpaces) | **GET** /{baseSpaceId}/runbookProcesses | Get a list of Runbook Processes
[**indexRunbookSnapshotRunbookRuns**](RunbookProcessesApi.md#indexRunbookSnapshotRunbookRuns) | **GET** /runbookSnapshots/{id}/runbookRuns | Lists all of the Runbook Runs that belong to the given Runbook Snapshot
[**indexRunbookSnapshotRunbookRunsSpaces**](RunbookProcessesApi.md#indexRunbookSnapshotRunbookRunsSpaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns | Lists all of the Runbook Runs that belong to the given Runbook Snapshot
[**updateRunbookProcess**](RunbookProcessesApi.md#updateRunbookProcess) | **PUT** /runbookProcesses/{id} | 
[**updateRunbookProcessSpaces**](RunbookProcessesApi.md#updateRunbookProcessSpaces) | **PUT** /{baseSpaceId}/runbookProcesses/{id} | 


<a name="getRunbookProcessById"></a>
# **getRunbookProcessById**
> RunbookProcessResource getRunbookProcessById(id)

Get a Runbook Process by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the RunbookProcess to load | [default to null]

### Return type

[**RunbookProcessResource**](../model/RunbookProcessResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookProcessByIdSpaces"></a>
# **getRunbookProcessByIdSpaces**
> RunbookProcessResource getRunbookProcessByIdSpaces(id, baseSpaceId)

Get a Runbook Process by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the RunbookProcess to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**RunbookProcessResource**](../model/RunbookProcessResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookSnapshotTemplateForRunbookStep"></a>
# **getRunbookSnapshotTemplateForRunbookStep**
> RunbookSnapshotTemplateResource getRunbookSnapshotTemplateForRunbookStep(id)



    Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.

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

<a name="getRunbookSnapshotTemplateForRunbookStepSpaces"></a>
# **getRunbookSnapshotTemplateForRunbookStepSpaces**
> RunbookSnapshotTemplateResource getRunbookSnapshotTemplateForRunbookStepSpaces(baseSpaceId, id)



    Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.

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

<a name="indexRunbookProcesses"></a>
# **indexRunbookProcesses**
> RunbookProcessResourceCollection indexRunbookProcesses(skip, take)

Get a list of Runbook Processes

    Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**RunbookProcessResourceCollection**](../model/RunbookProcessResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexRunbookProcessesSpaces"></a>
# **indexRunbookProcessesSpaces**
> RunbookProcessResourceCollection indexRunbookProcessesSpaces(baseSpaceId, skip, take)

Get a list of Runbook Processes

    Lists all the Runbook Processes in the supplied Octopus Deploy Space, sorted by Id

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**RunbookProcessResourceCollection**](../model/RunbookProcessResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexRunbookSnapshotRunbookRuns"></a>
# **indexRunbookSnapshotRunbookRuns**
> RunbookRunResourceCollection indexRunbookSnapshotRunbookRuns(id, skip, take)

Lists all of the Runbook Runs that belong to the given Runbook Snapshot

    Runs will be ordered from most recent to least recent

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Runbook Snapshot to load | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**RunbookRunResourceCollection**](../model/RunbookRunResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexRunbookSnapshotRunbookRunsSpaces"></a>
# **indexRunbookSnapshotRunbookRunsSpaces**
> RunbookRunResourceCollection indexRunbookSnapshotRunbookRunsSpaces(id, baseSpaceId, skip, take)

Lists all of the Runbook Runs that belong to the given Runbook Snapshot

    Runs will be ordered from most recent to least recent

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Runbook Snapshot to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**RunbookRunResourceCollection**](../model/RunbookRunResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateRunbookProcess"></a>
# **updateRunbookProcess**
> RunbookProcessResource updateRunbookProcess(id)



    Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbookProcessResource**](../model/RunbookProcessResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateRunbookProcessSpaces"></a>
# **updateRunbookProcessSpaces**
> RunbookProcessResource updateRunbookProcessSpaces(baseSpaceId, id)



    Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbookProcessResource**](../model/RunbookProcessResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

