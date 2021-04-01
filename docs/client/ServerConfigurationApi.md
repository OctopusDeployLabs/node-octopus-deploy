# ServerConfigurationApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getServerConfiguration**](ServerConfigurationApi.md#getServerConfiguration) | **GET** /serverconfiguration | 
[**getServerConfigurationSettingsList**](ServerConfigurationApi.md#getServerConfigurationSettingsList) | **GET** /serverconfiguration/settings | 
[**updateServerConfiguration**](ServerConfigurationApi.md#updateServerConfiguration) | **PUT** /serverconfiguration | 


<a name="getServerConfiguration"></a>
# **getServerConfiguration**
> ServerConfigurationResource getServerConfiguration()



    Gets information about the editable server configuration in use by the Octopus Server

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerConfigurationResource**](../model/ServerConfigurationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getServerConfigurationSettingsList"></a>
# **getServerConfigurationSettingsList**
> List getServerConfigurationSettingsList()



    Gets information about the server configuration in use by the Octopus Server

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/ServerConfigurationSettingsResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateServerConfiguration"></a>
# **updateServerConfiguration**
> updateServerConfiguration()



    Updates the server configuration used by the Octopus Server

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

