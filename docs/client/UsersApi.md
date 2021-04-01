# UsersApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserCreate**](UsersApi.md#createUserCreate) | **POST** /users | 
[**createUserLogin**](UsersApi.md#createUserLogin) | **POST** /users/login | 
[**createUserLogout**](UsersApi.md#createUserLogout) | **POST** /users/logout | 
[**createUserRegister**](UsersApi.md#createUserRegister) | **POST** /users/register | 
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{id} | Delete a UserResource by ID
[**getUserAuthentication**](UsersApi.md#getUserAuthentication) | **GET** /users/authentication | 
[**getUserAuthentication1**](UsersApi.md#getUserAuthentication1) | **GET** /users/authentication/{userId} | 
[**getUserById**](UsersApi.md#getUserById) | **GET** /users/{id} | Get a User by ID
[**getUserExternalSearch**](UsersApi.md#getUserExternalSearch) | **GET** /users/external-search | 
[**getUserGetCurrent**](UsersApi.md#getUserGetCurrent) | **GET** /users/me | 
[**getUserGetSpaces**](UsersApi.md#getUserGetSpaces) | **GET** /users/{id}/spaces | 
[**getUserIdentityMetadata**](UsersApi.md#getUserIdentityMetadata) | **GET** /users/identity-metadata | 
[**indexUsers**](UsersApi.md#indexUsers) | **GET** /users | Get a list of UserResources
[**listAllUsers**](UsersApi.md#listAllUsers) | **GET** /users/all | Get a list of Users
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{id} | 


<a name="createUserCreate"></a>
# **createUserCreate**
> UserResource createUserCreate()



    Creates a new user.

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserResource**](../model/UserResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createUserLogin"></a>
# **createUserLogin**
> createUserLogin()



    Authenticates a user and returns a response with a cookie for the current user. This cookie can be submitted with future requests to avoid re-authentication.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="createUserLogout"></a>
# **createUserLogout**
> createUserLogout()



    Revokes the authentication cookie from the current session.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="createUserRegister"></a>
# **createUserRegister**
> createUserRegister()



    Registers a new user and responds with an authentication cookie. Unless the first administrator user is being registered, an invitation code must be provided.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(id)

Delete a UserResource by ID

    Delete an existing user.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the UserResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getUserAuthentication"></a>
# **getUserAuthentication**
> UserAuthenticationResource getUserAuthentication()



    Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserAuthenticationResource**](../model/UserAuthenticationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserAuthentication1"></a>
# **getUserAuthentication1**
> UserAuthenticationResource getUserAuthentication1(userId)



    Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of the resource being edited | [default to null]

### Return type

[**UserAuthenticationResource**](../model/UserAuthenticationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserById"></a>
# **getUserById**
> UserResource getUserById(id)

Get a User by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the User to load | [default to null]

### Return type

[**UserResource**](../model/UserResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserExternalSearch"></a>
# **getUserExternalSearch**
> getUserExternalSearch()



    Searches for users, using the authentication providers.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getUserGetCurrent"></a>
# **getUserGetCurrent**
> getUserGetCurrent()



    Gets information about the current user.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getUserGetSpaces"></a>
# **getUserGetSpaces**
> getUserGetSpaces(id)



    Gets a list of spaces available to the current authenticated user only.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getUserIdentityMetadata"></a>
# **getUserIdentityMetadata**
> getUserIdentityMetadata()



    Gets the metadata to describe the claims/fields used by authentication providers that support identities.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="indexUsers"></a>
# **indexUsers**
> UserResourceCollection indexUsers(skip, take)

Get a list of UserResources

    Lists all of the users in the current Octopus Deploy instance, from all teams. The results will be sorted alphabetically by username.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**UserResourceCollection**](../model/UserResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllUsers"></a>
# **listAllUsers**
> List listAllUsers()

Get a list of Users

    Lists all the Users in the System. The results will be sorted alphabetically by &#x60;Username&#x60;

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/UserResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> UserResource updateUser(id)



    Modifies an existing user.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**UserResource**](../model/UserResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

