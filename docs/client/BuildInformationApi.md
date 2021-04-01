# BuildInformationApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBuildInformation**](BuildInformationApi.md#createBuildInformation) | **POST** /build-information | 
[**createBuildInformationSpaces**](BuildInformationApi.md#createBuildInformationSpaces) | **POST** /{baseSpaceId}/build-information | 
[**deleteBuildInformationDeleteById**](BuildInformationApi.md#deleteBuildInformationDeleteById) | **DELETE** /build-information/{id} | 
[**deleteBuildInformationDeleteByIdSpaces**](BuildInformationApi.md#deleteBuildInformationDeleteByIdSpaces) | **DELETE** /{baseSpaceId}/build-information/{id} | 
[**deleteBuildInformationDeleteByIds**](BuildInformationApi.md#deleteBuildInformationDeleteByIds) | **DELETE** /build-information/bulk | 
[**deleteBuildInformationDeleteByIdsSpaces**](BuildInformationApi.md#deleteBuildInformationDeleteByIdsSpaces) | **DELETE** /{baseSpaceId}/build-information/bulk | 
[**getBuildInformation**](BuildInformationApi.md#getBuildInformation) | **GET** /build-information/{id} | 
[**getBuildInformationList**](BuildInformationApi.md#getBuildInformationList) | **GET** /build-information | 
[**getBuildInformationListSpaces**](BuildInformationApi.md#getBuildInformationListSpaces) | **GET** /{baseSpaceId}/build-information | 
[**getBuildInformationSpaces**](BuildInformationApi.md#getBuildInformationSpaces) | **GET** /{baseSpaceId}/build-information/{id} | 


<a name="createBuildInformation"></a>
# **createBuildInformation**
> OctopusPackageVersionBuildInformationMappedResource createBuildInformation()



    Updates a specific build information record describing the vcs information for a given package

### Parameters
This endpoint does not need any parameter.

### Return type

[**OctopusPackageVersionBuildInformationMappedResource**](../model/OctopusPackageVersionBuildInformationMappedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createBuildInformationSpaces"></a>
# **createBuildInformationSpaces**
> OctopusPackageVersionBuildInformationMappedResource createBuildInformationSpaces(baseSpaceId)



    Updates a specific build information record describing the vcs information for a given package

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**OctopusPackageVersionBuildInformationMappedResource**](../model/OctopusPackageVersionBuildInformationMappedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteBuildInformationDeleteById"></a>
# **deleteBuildInformationDeleteById**
> deleteBuildInformationDeleteById(id)



    Deletes a specific build information record

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the build information resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteBuildInformationDeleteByIdSpaces"></a>
# **deleteBuildInformationDeleteByIdSpaces**
> deleteBuildInformationDeleteByIdSpaces(baseSpaceId, id)



    Deletes a specific build information record

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the build information resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteBuildInformationDeleteByIds"></a>
# **deleteBuildInformationDeleteByIds**
> deleteBuildInformationDeleteByIds(ids)



    Bulk deletes specific build information records

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| Comma separated list of IDs to be deleted | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteBuildInformationDeleteByIdsSpaces"></a>
# **deleteBuildInformationDeleteByIdsSpaces**
> deleteBuildInformationDeleteByIdsSpaces(baseSpaceId, ids)



    Bulk deletes specific build information records

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **ids** | **String**| Comma separated list of IDs to be deleted | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getBuildInformation"></a>
# **getBuildInformation**
> OctopusPackageVersionBuildInformationMappedResource getBuildInformation(id)



    Retrieves a specific build information record describing the vcs information for a given package

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**OctopusPackageVersionBuildInformationMappedResource**](../model/OctopusPackageVersionBuildInformationMappedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getBuildInformationList"></a>
# **getBuildInformationList**
> OctopusPackageVersionBuildInformationMappedResourceCollection getBuildInformationList()



    Retrieves a list of build information records describing the vcs information for a given package

### Parameters
This endpoint does not need any parameter.

### Return type

[**OctopusPackageVersionBuildInformationMappedResourceCollection**](../model/OctopusPackageVersionBuildInformationMappedResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getBuildInformationListSpaces"></a>
# **getBuildInformationListSpaces**
> OctopusPackageVersionBuildInformationMappedResourceCollection getBuildInformationListSpaces(baseSpaceId)



    Retrieves a list of build information records describing the vcs information for a given package

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**OctopusPackageVersionBuildInformationMappedResourceCollection**](../model/OctopusPackageVersionBuildInformationMappedResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getBuildInformationSpaces"></a>
# **getBuildInformationSpaces**
> OctopusPackageVersionBuildInformationMappedResource getBuildInformationSpaces(baseSpaceId, id)



    Retrieves a specific build information record describing the vcs information for a given package

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**OctopusPackageVersionBuildInformationMappedResource**](../model/OctopusPackageVersionBuildInformationMappedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

