# TenantVariablesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTenantVariablesAll**](TenantVariablesApi.md#getTenantVariablesAll) | **GET** /tenantvariables/all | 
[**getTenantVariablesAllSpaces**](TenantVariablesApi.md#getTenantVariablesAllSpaces) | **GET** /{baseSpaceId}/tenantvariables/all | 


<a name="getTenantVariablesAll"></a>
# **getTenantVariablesAll**
> getTenantVariablesAll()



    Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getTenantVariablesAllSpaces"></a>
# **getTenantVariablesAllSpaces**
> getTenantVariablesAllSpaces(baseSpaceId)



    Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

