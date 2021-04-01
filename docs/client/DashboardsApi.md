# DashboardsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDashboardView**](DashboardsApi.md#getDashboardView) | **GET** /dashboard | 
[**getDashboardViewSpaces**](DashboardsApi.md#getDashboardViewSpaces) | **GET** /{baseSpaceId}/dashboard | 
[**getDynamicDashboardView**](DashboardsApi.md#getDynamicDashboardView) | **GET** /dashboard/dynamic | 
[**getDynamicDashboardViewSpaces**](DashboardsApi.md#getDynamicDashboardViewSpaces) | **GET** /{baseSpaceId}/dashboard/dynamic | 


<a name="getDashboardView"></a>
# **getDashboardView**
> DashboardResource getDashboardView()



    Returns information required to render the Octopus dashboard

### Parameters
This endpoint does not need any parameter.

### Return type

[**DashboardResource**](../model/DashboardResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDashboardViewSpaces"></a>
# **getDashboardViewSpaces**
> DashboardResource getDashboardViewSpaces(baseSpaceId)



    Returns information required to render the Octopus dashboard

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**DashboardResource**](../model/DashboardResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDynamicDashboardView"></a>
# **getDynamicDashboardView**
> DashboardResource getDynamicDashboardView()



    Returns the information required to render the dynamic dashboard. Deprecated.

### Parameters
This endpoint does not need any parameter.

### Return type

[**DashboardResource**](../model/DashboardResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDynamicDashboardViewSpaces"></a>
# **getDynamicDashboardViewSpaces**
> DashboardResource getDynamicDashboardViewSpaces(baseSpaceId)



    Returns the information required to render the dynamic dashboard. Deprecated.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**DashboardResource**](../model/DashboardResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

