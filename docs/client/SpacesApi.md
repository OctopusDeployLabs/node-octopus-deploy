# SpacesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSpace**](SpacesApi.md#createSpace) | **POST** /spaces | 
[**createSpaceLogo**](SpacesApi.md#createSpaceLogo) | **POST** /spaces/{id}/logo | 
[**deleteSpace**](SpacesApi.md#deleteSpace) | **DELETE** /spaces/{id} | 
[**getSpaceById**](SpacesApi.md#getSpaceById) | **GET** /spaces/{id} | Get a Space by ID
[**getSpaceLogo**](SpacesApi.md#getSpaceLogo) | **GET** /spaces/{id}/logo | 
[**indexSpaces**](SpacesApi.md#indexSpaces) | **GET** /spaces | Get a list of SpaceResources
[**listAllSpaces**](SpacesApi.md#listAllSpaces) | **GET** /spaces/all | Get a list of SpaceResources
[**searchSpace**](SpacesApi.md#searchSpace) | **GET** /spaces/{id}/search | Searches in the supplied Octopus Deploy Space using the given keyword.
[**searchSpaceSpaces**](SpacesApi.md#searchSpaceSpaces) | **GET** /{baseSpaceId}/spaces/{id}/search | Searches in the supplied Octopus Deploy Space using the given keyword.
[**updateModifySpace**](SpacesApi.md#updateModifySpace) | **PUT** /spaces/{id} | 
[**updateSpaceLogo**](SpacesApi.md#updateSpaceLogo) | **PUT** /spaces/{id}/logo | 


<a name="createSpace"></a>
# **createSpace**
> SpaceResource createSpace()



    Creates a new Space.

### Parameters
This endpoint does not need any parameter.

### Return type

[**SpaceResource**](../model/SpaceResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createSpaceLogo"></a>
# **createSpaceLogo**
> createSpaceLogo(id)



    Updates the logo associated with the space.

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

<a name="deleteSpace"></a>
# **deleteSpace**
> deleteSpace(id)



    Deletes an existing space.

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

<a name="getSpaceById"></a>
# **getSpaceById**
> SpaceResource getSpaceById(id)

Get a Space by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Space to load | [default to null]

### Return type

[**SpaceResource**](../model/SpaceResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getSpaceLogo"></a>
# **getSpaceLogo**
> File getSpaceLogo(id)



    Gets the logo associated with the space.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**File**](../model/file.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

<a name="indexSpaces"></a>
# **indexSpaces**
> SpaceResourceCollection indexSpaces(skip, take)

Get a list of SpaceResources

    Lists all of the spaces in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**SpaceResourceCollection**](../model/SpaceResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllSpaces"></a>
# **listAllSpaces**
> List listAllSpaces()

Get a list of SpaceResources

    Lists all of the spaces in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/SpaceResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="searchSpace"></a>
# **searchSpace**
> List searchSpace(id, keyword)

Searches in the supplied Octopus Deploy Space using the given keyword.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Space to search | [default to null]
 **keyword** | **String**| A keyword to search. Example: ABC | [default to null]

### Return type

[**List**](../model/SpaceSearchResult.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="searchSpaceSpaces"></a>
# **searchSpaceSpaces**
> List searchSpaceSpaces(id, keyword, baseSpaceId)

Searches in the supplied Octopus Deploy Space using the given keyword.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Space to search | [default to null]
 **keyword** | **String**| A keyword to search. Example: ABC | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/SpaceSearchResult.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateModifySpace"></a>
# **updateModifySpace**
> SpaceResource updateModifySpace(id)



    Modifies an existing space.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**SpaceResource**](../model/SpaceResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateSpaceLogo"></a>
# **updateSpaceLogo**
> updateSpaceLogo(id)



    Updates the logo associated with the space.

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

