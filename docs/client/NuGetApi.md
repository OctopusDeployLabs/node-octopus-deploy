# NuGetApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pushNuGetPackage**](NuGetApi.md#pushNuGetPackage) | **PUT** /nuget/packages | 
[**pushNuGetPackageSpaces**](NuGetApi.md#pushNuGetPackageSpaces) | **PUT** /{baseSpaceId}/nuget/packages | 


<a name="pushNuGetPackage"></a>
# **pushNuGetPackage**
> pushNuGetPackage()



    Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="pushNuGetPackageSpaces"></a>
# **pushNuGetPackageSpaces**
> pushNuGetPackageSpaces(baseSpaceId)



    Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

