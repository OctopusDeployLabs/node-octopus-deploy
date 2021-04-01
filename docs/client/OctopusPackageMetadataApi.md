# OctopusPackageMetadataApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOctopusPackageMetadata**](OctopusPackageMetadataApi.md#createOctopusPackageMetadata) | **POST** /package-metadata | 
[**createOctopusPackageMetadataSpaces**](OctopusPackageMetadataApi.md#createOctopusPackageMetadataSpaces) | **POST** /{baseSpaceId}/package-metadata | 
[**getOctopusPackageMetadata**](OctopusPackageMetadataApi.md#getOctopusPackageMetadata) | **GET** /package-metadata/{id} | 
[**getOctopusPackageMetadataSpaces**](OctopusPackageMetadataApi.md#getOctopusPackageMetadataSpaces) | **GET** /{baseSpaceId}/package-metadata/{id} | 


<a name="createOctopusPackageMetadata"></a>
# **createOctopusPackageMetadata**
> OctopusPackageMetadataMappedResource createOctopusPackageMetadata()



    Creates package build information. Deprecated. Please use the &#39;build-information&#39; api instead.

### Parameters
This endpoint does not need any parameter.

### Return type

[**OctopusPackageMetadataMappedResource**](../model/OctopusPackageMetadataMappedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createOctopusPackageMetadataSpaces"></a>
# **createOctopusPackageMetadataSpaces**
> OctopusPackageMetadataMappedResource createOctopusPackageMetadataSpaces(baseSpaceId)



    Creates package build information. Deprecated. Please use the &#39;build-information&#39; api instead.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**OctopusPackageMetadataMappedResource**](../model/OctopusPackageMetadataMappedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getOctopusPackageMetadata"></a>
# **getOctopusPackageMetadata**
> OctopusPackageMetadataMappedResource getOctopusPackageMetadata(id)



    Returns package build information for the specified id. Deprecated. Please use the &#39;build-information&#39; api instead.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**OctopusPackageMetadataMappedResource**](../model/OctopusPackageMetadataMappedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getOctopusPackageMetadataSpaces"></a>
# **getOctopusPackageMetadataSpaces**
> OctopusPackageMetadataMappedResource getOctopusPackageMetadataSpaces(baseSpaceId, id)



    Returns package build information for the specified id. Deprecated. Please use the &#39;build-information&#39; api instead.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**OctopusPackageMetadataMappedResource**](../model/OctopusPackageMetadataMappedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

