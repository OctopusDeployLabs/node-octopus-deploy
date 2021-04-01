# ConfigurationApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConfigurationItemMetadata**](ConfigurationApi.md#getConfigurationItemMetadata) | **GET** /configuration/{id}/metadata | 
[**getConfigurationItemValues**](ConfigurationApi.md#getConfigurationItemValues) | **GET** /configuration/{id}/values | 
[**getConfigurationSectionList**](ConfigurationApi.md#getConfigurationSectionList) | **GET** /configuration | 
[**getConfigurationSectionMetadata**](ConfigurationApi.md#getConfigurationSectionMetadata) | **GET** /configuration/{id} | 
[**updateConfigurationItem**](ConfigurationApi.md#updateConfigurationItem) | **PUT** /configuration/{id}/values | 


<a name="getConfigurationItemMetadata"></a>
# **getConfigurationItemMetadata**
> Metadata getConfigurationItemMetadata(id)



    Returns a structure that describes how to dynamically render the configuration section

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**Metadata**](../model/Metadata.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getConfigurationItemValues"></a>
# **getConfigurationItemValues**
> Object getConfigurationItemValues(id)



    Returns the current configuration for a specific configuration section

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**Object**](../model/object.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getConfigurationSectionList"></a>
# **getConfigurationSectionList**
> ConfigurationSectionMetadataCollection getConfigurationSectionList()



    Returns a list of configuration section settings

### Parameters
This endpoint does not need any parameter.

### Return type

[**ConfigurationSectionMetadataCollection**](../model/ConfigurationSectionMetadataCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getConfigurationSectionMetadata"></a>
# **getConfigurationSectionMetadata**
> ConfigurationSectionMetadata getConfigurationSectionMetadata(id)



    Returns a single configuration section for the given id

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**ConfigurationSectionMetadata**](../model/ConfigurationSectionMetadata.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateConfigurationItem"></a>
# **updateConfigurationItem**
> Object updateConfigurationItem(id)



    Updates the configuration values for a specific configuration section

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**Object**](../model/object.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

