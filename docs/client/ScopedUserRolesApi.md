# ScopedUserRolesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getScopedUserRoleById**](ScopedUserRolesApi.md#getScopedUserRoleById) | **GET** /scopeduserroles/{id} | Get a Scoped User Role by ID
[**getScopedUserRoleByIdSpaces**](ScopedUserRolesApi.md#getScopedUserRoleByIdSpaces) | **GET** /{baseSpaceId}/scopeduserroles/{id} | Get a Scoped User Role by ID


<a name="getScopedUserRoleById"></a>
# **getScopedUserRoleById**
> ScopedUserRoleResource getScopedUserRoleById(id)

Get a Scoped User Role by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ScopedUserRole to load | [default to null]

### Return type

[**ScopedUserRoleResource**](../model/ScopedUserRoleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getScopedUserRoleByIdSpaces"></a>
# **getScopedUserRoleByIdSpaces**
> ScopedUserRoleResource getScopedUserRoleByIdSpaces(id, baseSpaceId)

Get a Scoped User Role by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ScopedUserRole to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**ScopedUserRoleResource**](../model/ScopedUserRoleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

