# UserPermissionsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserGetPermissions**](UserPermissionsApi.md#getUserGetPermissions) | **GET** /users/{id}/permissions | 
[**getUserGetPermissionsConfiguration**](UserPermissionsApi.md#getUserGetPermissionsConfiguration) | **GET** /users/{id}/permissions/configuration | 
[**getUserGetPermissionsConfigurationSpaces**](UserPermissionsApi.md#getUserGetPermissionsConfigurationSpaces) | **GET** /{baseSpaceId}/users/{id}/permissions/configuration | 
[**getUserGetPermissionsSpaces**](UserPermissionsApi.md#getUserGetPermissionsSpaces) | **GET** /{baseSpaceId}/users/{id}/permissions | 
[**getUserPermissionsExport**](UserPermissionsApi.md#getUserPermissionsExport) | **GET** /users/{id}/permissions/export | 
[**getUserPermissionsExportSpaces**](UserPermissionsApi.md#getUserPermissionsExportSpaces) | **GET** /{baseSpaceId}/users/{id}/permissions/export | 


<a name="getUserGetPermissions"></a>
# **getUserGetPermissions**
> UserPermissionSetResource getUserGetPermissions(id)



    Gets summarized permission information. Available for the current authenticated user only.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**UserPermissionSetResource**](../model/UserPermissionSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserGetPermissionsConfiguration"></a>
# **getUserGetPermissionsConfiguration**
> UserPermissionSetResource getUserGetPermissionsConfiguration(id)



    Gets a summary of the configuration of the user&#39;s permissions information. Available for the current authenticated user only.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**UserPermissionSetResource**](../model/UserPermissionSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserGetPermissionsConfigurationSpaces"></a>
# **getUserGetPermissionsConfigurationSpaces**
> UserPermissionSetResource getUserGetPermissionsConfigurationSpaces(baseSpaceId, id)



    Gets a summary of the configuration of the user&#39;s permissions information. Available for the current authenticated user only.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**UserPermissionSetResource**](../model/UserPermissionSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserGetPermissionsSpaces"></a>
# **getUserGetPermissionsSpaces**
> UserPermissionSetResource getUserGetPermissionsSpaces(baseSpaceId, id)



    Gets summarized permission information. Available for the current authenticated user only.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**UserPermissionSetResource**](../model/UserPermissionSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserPermissionsExport"></a>
# **getUserPermissionsExport**
> getUserPermissionsExport(id)



    Gets list of permissions as a csv file. Available for the current authenticated user only.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the user | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getUserPermissionsExportSpaces"></a>
# **getUserPermissionsExportSpaces**
> getUserPermissionsExportSpaces(baseSpaceId, id)



    Gets list of permissions as a csv file. Available for the current authenticated user only.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the user | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

