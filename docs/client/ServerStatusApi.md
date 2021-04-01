# ServerStatusApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSystemGarbageCollect**](ServerStatusApi.md#createSystemGarbageCollect) | **POST** /serverstatus/gc-collect | 
[**getExtensionStats**](ServerStatusApi.md#getExtensionStats) | **GET** /serverstatus/extensions | 
[**getListServerTimezones**](ServerStatusApi.md#getListServerTimezones) | **GET** /serverstatus/timezones | 
[**getRecentLogs**](ServerStatusApi.md#getRecentLogs) | **GET** /serverstatus/logs | 
[**getServerStatus**](ServerStatusApi.md#getServerStatus) | **GET** /serverstatus | 
[**getServerStatusHealth**](ServerStatusApi.md#getServerStatusHealth) | **GET** /serverstatus/health | 
[**getSystemInfo**](ServerStatusApi.md#getSystemInfo) | **GET** /serverstatus/system-info | 
[**getSystemReport**](ServerStatusApi.md#getSystemReport) | **GET** /serverstatus/system-report | 


<a name="createSystemGarbageCollect"></a>
# **createSystemGarbageCollect**
> createSystemGarbageCollect()



    Forces a GC collect.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getExtensionStats"></a>
# **getExtensionStats**
> List getExtensionStats()



    Provides statistics for the loaded server extensions.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/ExtensionsInfoResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListServerTimezones"></a>
# **getListServerTimezones**
> List getListServerTimezones()



    Lists timezones supported by the server.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/ServerTimezoneResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRecentLogs"></a>
# **getRecentLogs**
> getRecentLogs()



    Retrieves the most recent high-priority log messages from this execution of the Octopus Server process.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getServerStatus"></a>
# **getServerStatus**
> getServerStatus()



    Shows information about the status of the Octopus Server.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getServerStatusHealth"></a>
# **getServerStatusHealth**
> ServerStatusHealthResource getServerStatusHealth()



    Provides a super simple interface perfect for checking the general health of your entire Octopus Server cluster.

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerStatusHealthResource**](../model/ServerStatusHealthResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getSystemInfo"></a>
# **getSystemInfo**
> getSystemInfo()



    Provides information about the Octopus Server process and the machine on which it is running.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getSystemReport"></a>
# **getSystemReport**
> getSystemReport()



    Creates a .zip archive containing an aggregate of the other system information APIs.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

