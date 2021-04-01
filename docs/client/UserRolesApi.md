# UserRolesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserRole**](UserRolesApi.md#createUserRole) | **POST** /userroles | Create a UserRoleResource
[**deleteUserRole**](UserRolesApi.md#deleteUserRole) | **DELETE** /userroles/{id} | Delete a UserRoleResource by ID
[**getUserRoleById**](UserRolesApi.md#getUserRoleById) | **GET** /userroles/{id} | Get a User Role by ID
[**indexUserRoles**](UserRolesApi.md#indexUserRoles) | **GET** /userroles | Get a list of UserRoleResources
[**listAllUserRoles**](UserRolesApi.md#listAllUserRoles) | **GET** /userroles/all | Get a list of UserRoleResources
[**updateUserRole**](UserRolesApi.md#updateUserRole) | **PUT** /userroles/{id} | Modify a UserRoleResource by ID


<a name="createUserRole"></a>
# **createUserRole**
> UserRoleResource createUserRole(body)

Create a UserRoleResource

    Creates a custom user role definition.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserRoleResource**](../model/UserRoleResource.md)| The UserRoleResource resource to create | [optional]

### Return type

[**UserRoleResource**](../model/UserRoleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteUserRole"></a>
# **deleteUserRole**
> deleteUserRole(id)

Delete a UserRoleResource by ID

    Deletes an existing user role.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the UserRoleResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getUserRoleById"></a>
# **getUserRoleById**
> UserRoleResource getUserRoleById(id)

Get a User Role by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the UserRole to load | [default to null]

### Return type

[**UserRoleResource**](../model/UserRoleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexUserRoles"></a>
# **indexUserRoles**
> UserRoleResourceCollection indexUserRoles(skip, take)

Get a list of UserRoleResources

    Lists all of the user roles in the current Octopus Deploy instance. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**UserRoleResourceCollection**](../model/UserRoleResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllUserRoles"></a>
# **listAllUserRoles**
> List listAllUserRoles()

Get a list of UserRoleResources

    Lists all of the user roles in the current Octopus Deploy instance. The results will be sorted alphabetically by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/UserRoleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateUserRole"></a>
# **updateUserRole**
> UserRoleResource updateUserRole(id, body)

Modify a UserRoleResource by ID

    Modifies an existing user role definition.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the UserRoleResource to modify | [default to null]
 **body** | [**UserRoleResource**](../model/UserRoleResource.md)| The UserRoleResource resource to create | [optional]

### Return type

[**UserRoleResource**](../model/UserRoleResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

