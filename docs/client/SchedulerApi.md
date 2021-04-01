# SchedulerApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getScheduledTaskDetails**](SchedulerApi.md#getScheduledTaskDetails) | **GET** /scheduler/{name}/logs | 
[**getScheduledTaskRawDetails**](SchedulerApi.md#getScheduledTaskRawDetails) | **GET** /scheduler/{name}/logs/raw | 
[**getScheduler**](SchedulerApi.md#getScheduler) | **GET** /scheduler | 
[**getSchedulerStart**](SchedulerApi.md#getSchedulerStart) | **GET** /scheduler/start | 
[**getSchedulerStop**](SchedulerApi.md#getSchedulerStop) | **GET** /scheduler/stop | 
[**getSchedulerTrigger**](SchedulerApi.md#getSchedulerTrigger) | **GET** /scheduler/trigger | 


<a name="getScheduledTaskDetails"></a>
# **getScheduledTaskDetails**
> ScheduledTaskDetailsResource getScheduledTaskDetails(name)



    Get the details of a scheduled task.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the task | [default to null]

### Return type

[**ScheduledTaskDetailsResource**](../model/ScheduledTaskDetailsResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getScheduledTaskRawDetails"></a>
# **getScheduledTaskRawDetails**
> getScheduledTaskRawDetails(name)



    Get the details of a scheduled task as raw text.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the scheduled task | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getScheduler"></a>
# **getScheduler**
> SchedulerStatusResource getScheduler()



    Returns status of Octopus scheduled tasks.

### Parameters
This endpoint does not need any parameter.

### Return type

[**SchedulerStatusResource**](../model/SchedulerStatusResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getSchedulerStart"></a>
# **getSchedulerStart**
> getSchedulerStart()



    Returns HTTP OK (200) when the Octopus Server scheduler has been started.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getSchedulerStop"></a>
# **getSchedulerStop**
> getSchedulerStop()



    Returns HTTP OK (200) when the Octopus Server scheduler has been stopped.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getSchedulerTrigger"></a>
# **getSchedulerTrigger**
> getSchedulerTrigger()



    Returns HTTP OK (200) when the Octopus Server scheduler has been triggered.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

