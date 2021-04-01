# ApiKeysApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApiKey**](ApiKeysApi.md#createApiKey) | **POST** /users/{userId}/apikeys | 
[**deleteApiKey**](ApiKeysApi.md#deleteApiKey) | **DELETE** /users/{userId}/apikeys/{id} | Delete a ApiKeyResource by ID
[**getApiKeyById**](ApiKeysApi.md#getApiKeyById) | **GET** /users/{userId}/apikeys/{id} | Get a ApiKeyResource by ID
[**indexApiKeys**](ApiKeysApi.md#indexApiKeys) | **GET** /users/{userId}/apikeys | Get a list of ApiKeyResources


<a name="createApiKey"></a>
# **createApiKey**
> ApiKeyCreatedResource createApiKey(userId)



    Generates a new API key for the specified user. The API key returned in the result must be saved by the caller, as it cannot be retrieved subsequently from the Octopus server.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of the user | [default to null]

### Return type

[**ApiKeyCreatedResource**](../model/ApiKeyCreatedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteApiKey"></a>
# **deleteApiKey**
> deleteApiKey(id, userId)

Delete a ApiKeyResource by ID

    Revokes an existing API key.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ApiKeyResource to delete | [default to null]
 **userId** | **String**| ID of the User that owns the ApiKey to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getApiKeyById"></a>
# **getApiKeyById**
> ApiKeyResource getApiKeyById(id, userId)

Get a ApiKeyResource by ID

    Gets a API key by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ApiKeyResource to load | [default to null]
 **userId** | **String**| ID of the User that owns the ApiKey | [default to null]

### Return type

[**ApiKeyResource**](../model/ApiKeyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexApiKeys"></a>
# **indexApiKeys**
> ApiKeyResourceCollection indexApiKeys(userId, skip, take)

Get a list of ApiKeyResources

    Lists all API keys for a user, returning the most recent results first.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of the user | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ApiKeyResourceCollection**](../model/ApiKeyResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

