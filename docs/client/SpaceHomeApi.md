# SpaceHomeApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSpaceHome**](SpaceHomeApi.md#getSpaceHome) | **GET** /{spaceId} | 


<a name="getSpaceHome"></a>
# **getSpaceHome**
> SpaceRootResource getSpaceHome(spaceId)



    Returns a document describing the specified Space and links to other parts of the API that apply to the Space.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | **String**| ID of the space | [default to null]

### Return type

[**SpaceRootResource**](../model/SpaceRootResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

