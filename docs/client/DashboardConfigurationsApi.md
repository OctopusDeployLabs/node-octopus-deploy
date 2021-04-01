# DashboardConfigurationsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDashboardConfiguration**](DashboardConfigurationsApi.md#getDashboardConfiguration) | **GET** /dashboardconfiguration | 
[**getDashboardConfigurationSpaces**](DashboardConfigurationsApi.md#getDashboardConfigurationSpaces) | **GET** /{baseSpaceId}/dashboardconfiguration | 
[**updateDashboardConfiguration**](DashboardConfigurationsApi.md#updateDashboardConfiguration) | **PUT** /dashboardconfiguration | 
[**updateDashboardConfigurationSpaces**](DashboardConfigurationsApi.md#updateDashboardConfigurationSpaces) | **PUT** /{baseSpaceId}/dashboardconfiguration | 


<a name="getDashboardConfiguration"></a>
# **getDashboardConfiguration**
> DashboardConfigurationResource getDashboardConfiguration()



    Returns the dashboard configuration for the current user

### Parameters
This endpoint does not need any parameter.

### Return type

[**DashboardConfigurationResource**](../model/DashboardConfigurationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDashboardConfigurationSpaces"></a>
# **getDashboardConfigurationSpaces**
> DashboardConfigurationResource getDashboardConfigurationSpaces(baseSpaceId)



    Returns the dashboard configuration for the current user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**DashboardConfigurationResource**](../model/DashboardConfigurationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateDashboardConfiguration"></a>
# **updateDashboardConfiguration**
> DashboardConfigurationResource updateDashboardConfiguration()



    Updates the dashboard configuration for the current user

### Parameters
This endpoint does not need any parameter.

### Return type

[**DashboardConfigurationResource**](../model/DashboardConfigurationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateDashboardConfigurationSpaces"></a>
# **updateDashboardConfigurationSpaces**
> DashboardConfigurationResource updateDashboardConfigurationSpaces(baseSpaceId)



    Updates the dashboard configuration for the current user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**DashboardConfigurationResource**](../model/DashboardConfigurationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

