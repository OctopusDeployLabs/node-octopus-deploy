# RunbookRunsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRunbookRunCreate**](RunbookRunsApi.md#createRunbookRunCreate) | **POST** /runbookRuns | 
[**createRunbookRunCreateSpaces**](RunbookRunsApi.md#createRunbookRunCreateSpaces) | **POST** /{baseSpaceId}/runbookRuns | 
[**deleteRunbookRun**](RunbookRunsApi.md#deleteRunbookRun) | **DELETE** /runbookRuns/{id} | Delete a RunbookRunResource by ID
[**deleteRunbookRunSpaces**](RunbookRunsApi.md#deleteRunbookRunSpaces) | **DELETE** /{baseSpaceId}/runbookRuns/{id} | Delete a RunbookRunResource by ID
[**getRunbookRunById**](RunbookRunsApi.md#getRunbookRunById) | **GET** /runbookRuns/{id} | Get a Runbook Run by ID
[**getRunbookRunByIdSpaces**](RunbookRunsApi.md#getRunbookRunByIdSpaces) | **GET** /{baseSpaceId}/runbookRuns/{id} | Get a Runbook Run by ID
[**indexRunbookRuns**](RunbookRunsApi.md#indexRunbookRuns) | **GET** /runbookRuns | Get a list of RunbookRunResources
[**indexRunbookRunsSpaces**](RunbookRunsApi.md#indexRunbookRunsSpaces) | **GET** /{baseSpaceId}/runbookRuns | Get a list of RunbookRunResources


<a name="createRunbookRunCreate"></a>
# **createRunbookRunCreate**
> RunbookRunResource createRunbookRunCreate()



    Creates a new runbookRun.

### Parameters
This endpoint does not need any parameter.

### Return type

[**RunbookRunResource**](../model/RunbookRunResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createRunbookRunCreateSpaces"></a>
# **createRunbookRunCreateSpaces**
> RunbookRunResource createRunbookRunCreateSpaces(baseSpaceId)



    Creates a new runbookRun.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**RunbookRunResource**](../model/RunbookRunResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteRunbookRun"></a>
# **deleteRunbookRun**
> deleteRunbookRun(id)

Delete a RunbookRunResource by ID

    Deletes a runbookRun.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the RunbookRunResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteRunbookRunSpaces"></a>
# **deleteRunbookRunSpaces**
> deleteRunbookRunSpaces(baseSpaceId, id)

Delete a RunbookRunResource by ID

    Deletes a runbookRun.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the RunbookRunResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getRunbookRunById"></a>
# **getRunbookRunById**
> RunbookRunResource getRunbookRunById(id)

Get a Runbook Run by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the RunbookRun to load | [default to null]

### Return type

[**RunbookRunResource**](../model/RunbookRunResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookRunByIdSpaces"></a>
# **getRunbookRunByIdSpaces**
> RunbookRunResource getRunbookRunByIdSpaces(id, baseSpaceId)

Get a Runbook Run by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the RunbookRun to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**RunbookRunResource**](../model/RunbookRunResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexRunbookRuns"></a>
# **indexRunbookRuns**
> RunbookRunResourceCollection indexRunbookRuns(skip, take)

Get a list of RunbookRunResources

    Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**RunbookRunResourceCollection**](../model/RunbookRunResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexRunbookRunsSpaces"></a>
# **indexRunbookRunsSpaces**
> RunbookRunResourceCollection indexRunbookRunsSpaces(baseSpaceId, skip, take)

Get a list of RunbookRunResources

    Lists all of the runbookRuns in the supplied Octopus Deploy Space, from projects, snapshots and environments accessible by the current user. The results will be sorted from most recent to least recent runbookRun.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**RunbookRunResourceCollection**](../model/RunbookRunResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

