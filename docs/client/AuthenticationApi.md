# AuthenticationApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLoginInitiated**](AuthenticationApi.md#createLoginInitiated) | **POST** /authentication/checklogininitiated | 
[**getAuthentication**](AuthenticationApi.md#getAuthentication) | **GET** /authentication | 


<a name="createLoginInitiated"></a>
# **createLoginInitiated**
> LoginInitiatedResource createLoginInitiated()



    Given a URL query string, determines whether an external server (.e.g Okta) has initiated login and if so the provider&#39;s name

### Parameters
This endpoint does not need any parameter.

### Return type

[**LoginInitiatedResource**](../model/LoginInitiatedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAuthentication"></a>
# **getAuthentication**
> AuthenticationResource getAuthentication()



    Provides the details of the enabled authentication providers.

### Parameters
This endpoint does not need any parameter.

### Return type

[**AuthenticationResource**](../model/AuthenticationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

