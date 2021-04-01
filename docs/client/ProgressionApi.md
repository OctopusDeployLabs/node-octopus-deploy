# ProgressionApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProgressionView**](ProgressionApi.md#getProgressionView) | **GET** /progression/{id} | 
[**getProgressionViewSpaces**](ProgressionApi.md#getProgressionViewSpaces) | **GET** /{baseSpaceId}/progression/{id} | 
[**getRunbookTaskRunDashboardItems**](ProgressionApi.md#getRunbookTaskRunDashboardItems) | **GET** /progression/runbooks/taskRuns | 
[**getRunbookTaskRunDashboardItemsSpaces**](ProgressionApi.md#getRunbookTaskRunDashboardItemsSpaces) | **GET** /{baseSpaceId}/progression/runbooks/taskRuns | 
[**getRunbooksProgressionView**](ProgressionApi.md#getRunbooksProgressionView) | **GET** /progression/runbooks/{id} | 
[**getRunbooksProgressionViewSpaces**](ProgressionApi.md#getRunbooksProgressionViewSpaces) | **GET** /{baseSpaceId}/progression/runbooks/{id} | 


<a name="getProgressionView"></a>
# **getProgressionView**
> ProgressionResource getProgressionView(id)



    Returns the progress of a release in the environment lifecycle.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**ProgressionResource**](../model/ProgressionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getProgressionViewSpaces"></a>
# **getProgressionViewSpaces**
> ProgressionResource getProgressionViewSpaces(baseSpaceId, id)



    Returns the progress of a release in the environment lifecycle.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**ProgressionResource**](../model/ProgressionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookTaskRunDashboardItems"></a>
# **getRunbookTaskRunDashboardItems**
> RunbooksDashboardItemResourceCollection getRunbookTaskRunDashboardItems()



    Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds

### Parameters
This endpoint does not need any parameter.

### Return type

[**RunbooksDashboardItemResourceCollection**](../model/RunbooksDashboardItemResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbookTaskRunDashboardItemsSpaces"></a>
# **getRunbookTaskRunDashboardItemsSpaces**
> RunbooksDashboardItemResourceCollection getRunbookTaskRunDashboardItemsSpaces(baseSpaceId)



    Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**RunbooksDashboardItemResourceCollection**](../model/RunbooksDashboardItemResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbooksProgressionView"></a>
# **getRunbooksProgressionView**
> RunbooksProgressionResource getRunbooksProgressionView(id)



    Returns the progress of a runbook in the environment lifecycle

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbooksProgressionResource**](../model/RunbooksProgressionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRunbooksProgressionViewSpaces"></a>
# **getRunbooksProgressionViewSpaces**
> RunbooksProgressionResource getRunbooksProgressionViewSpaces(baseSpaceId, id)



    Returns the progress of a runbook in the environment lifecycle

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**RunbooksProgressionResource**](../model/RunbooksProgressionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

