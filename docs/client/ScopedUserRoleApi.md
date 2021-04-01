# ScopedUserRoleApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createScopedUserRole**](ScopedUserRoleApi.md#createScopedUserRole) | **POST** /scopeduserroles | Create a ScopedUserRoleResource
[**createScopedUserRoleSpaces**](ScopedUserRoleApi.md#createScopedUserRoleSpaces) | **POST** /{baseSpaceId}/scopeduserroles | Create a ScopedUserRoleResource
[**deleteScopedUserRole**](ScopedUserRoleApi.md#deleteScopedUserRole) | **DELETE** /scopeduserroles/{id} | Delete a ScopedUserRoleResource by ID
[**deleteScopedUserRoleSpaces**](ScopedUserRoleApi.md#deleteScopedUserRoleSpaces) | **DELETE** /{baseSpaceId}/scopeduserroles/{id} | Delete a ScopedUserRoleResource by ID
[**getListScopedUserRole**](ScopedUserRoleApi.md#getListScopedUserRole) | **GET** /scopeduserroles | 
[**getListScopedUserRoleSpaces**](ScopedUserRoleApi.md#getListScopedUserRoleSpaces) | **GET** /{baseSpaceId}/scopeduserroles | 
[**updateScopedUserRole**](ScopedUserRoleApi.md#updateScopedUserRole) | **PUT** /scopeduserroles/{id} | Modify a ScopedUserRoleResource by ID
[**updateScopedUserRoleSpaces**](ScopedUserRoleApi.md#updateScopedUserRoleSpaces) | **PUT** /{baseSpaceId}/scopeduserroles/{id} | Modify a ScopedUserRoleResource by ID


<a name="createScopedUserRole"></a>
# **createScopedUserRole**
> ScopedUserRoleResource createScopedUserRole(body)

Create a ScopedUserRoleResource

    Creates a scoped user role.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ScopedUserRoleResource**](../model/ScopedUserRoleResource.md)| The ScopedUserRoleResource resource to create | [optional]

### Return type

[**ScopedUserRoleResource**](../model/ScopedUserRoleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createScopedUserRoleSpaces"></a>
# **createScopedUserRoleSpaces**
> ScopedUserRoleResource createScopedUserRoleSpaces(baseSpaceId, body)

Create a ScopedUserRoleResource

    Creates a scoped user role.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**ScopedUserRoleResource**](../model/ScopedUserRoleResource.md)| The ScopedUserRoleResource resource to create | [optional]

### Return type

[**ScopedUserRoleResource**](../model/ScopedUserRoleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteScopedUserRole"></a>
# **deleteScopedUserRole**
> deleteScopedUserRole(id)

Delete a ScopedUserRoleResource by ID

    Deletes an existing scoped user role.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ScopedUserRoleResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteScopedUserRoleSpaces"></a>
# **deleteScopedUserRoleSpaces**
> deleteScopedUserRoleSpaces(baseSpaceId, id)

Delete a ScopedUserRoleResource by ID

    Deletes an existing scoped user role.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ScopedUserRoleResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getListScopedUserRole"></a>
# **getListScopedUserRole**
> ScopedUserRoleResourceCollection getListScopedUserRole()



    Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**ScopedUserRoleResourceCollection**](../model/ScopedUserRoleResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListScopedUserRoleSpaces"></a>
# **getListScopedUserRoleSpaces**
> ScopedUserRoleResourceCollection getListScopedUserRoleSpaces(baseSpaceId)



    Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**ScopedUserRoleResourceCollection**](../model/ScopedUserRoleResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateScopedUserRole"></a>
# **updateScopedUserRole**
> ScopedUserRoleResource updateScopedUserRole(id, body)

Modify a ScopedUserRoleResource by ID

    Modifies an existing scoped user role.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ScopedUserRoleResource to modify | [default to null]
 **body** | [**ScopedUserRoleResource**](../model/ScopedUserRoleResource.md)| The ScopedUserRoleResource resource to create | [optional]

### Return type

[**ScopedUserRoleResource**](../model/ScopedUserRoleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateScopedUserRoleSpaces"></a>
# **updateScopedUserRoleSpaces**
> ScopedUserRoleResource updateScopedUserRoleSpaces(baseSpaceId, id, body)

Modify a ScopedUserRoleResource by ID

    Modifies an existing scoped user role.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ScopedUserRoleResource to modify | [default to null]
 **body** | [**ScopedUserRoleResource**](../model/ScopedUserRoleResource.md)| The ScopedUserRoleResource resource to create | [optional]

### Return type

[**ScopedUserRoleResource**](../model/ScopedUserRoleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

