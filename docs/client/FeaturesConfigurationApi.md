# FeaturesConfigurationApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFeaturesConfiguration**](FeaturesConfigurationApi.md#getFeaturesConfiguration) | **GET** /featuresconfiguration | 
[**updateFeaturesConfiguration**](FeaturesConfigurationApi.md#updateFeaturesConfiguration) | **PUT** /featuresconfiguration | 


<a name="getFeaturesConfiguration"></a>
# **getFeaturesConfiguration**
> FeaturesConfigurationResource getFeaturesConfiguration()



    Gets information about the features configuration in use by the Octopus Server

### Parameters
This endpoint does not need any parameter.

### Return type

[**FeaturesConfigurationResource**](../model/FeaturesConfigurationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateFeaturesConfiguration"></a>
# **updateFeaturesConfiguration**
> FeaturesConfigurationResource updateFeaturesConfiguration()



    Updates the features configuration used by the Octopus Server

### Parameters
This endpoint does not need any parameter.

### Return type

[**FeaturesConfigurationResource**](../model/FeaturesConfigurationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

