# LetsEncryptApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLetsEncryptConfiguration**](LetsEncryptApi.md#getLetsEncryptConfiguration) | **GET** /letsencryptconfiguration | 
[**getLetsEncryptHttpChallenge**](LetsEncryptApi.md#getLetsEncryptHttpChallenge) | **GET** /.well-known/acme-challenge//{token} | 
[**updateLetsEncryptConfiguration**](LetsEncryptApi.md#updateLetsEncryptConfiguration) | **PUT** /letsencryptconfiguration | 


<a name="getLetsEncryptConfiguration"></a>
# **getLetsEncryptConfiguration**
> getLetsEncryptConfiguration()



    Returns the current Let&#39;s Encrypt configuration

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getLetsEncryptHttpChallenge"></a>
# **getLetsEncryptHttpChallenge**
> getLetsEncryptHttpChallenge(token)



    Returns the computed HTTP challenge for a given token

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| LetsEncrypt response token | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateLetsEncryptConfiguration"></a>
# **updateLetsEncryptConfiguration**
> updateLetsEncryptConfiguration()



    Updates the Let&#39;s Encrypt configuration used by the Octopus Server.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

