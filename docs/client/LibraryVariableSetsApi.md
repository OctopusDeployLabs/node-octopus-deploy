# LibraryVariableSetsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLibraryVariableSet**](LibraryVariableSetsApi.md#createLibraryVariableSet) | **POST** /libraryvariablesets | Create a LibraryVariableSetResource
[**createLibraryVariableSetSpaces**](LibraryVariableSetsApi.md#createLibraryVariableSetSpaces) | **POST** /{baseSpaceId}/libraryvariablesets | Create a LibraryVariableSetResource
[**deleteLibraryVariableSet**](LibraryVariableSetsApi.md#deleteLibraryVariableSet) | **DELETE** /libraryvariablesets/{id} | Delete a LibraryVariableSetResource by ID
[**deleteLibraryVariableSetSpaces**](LibraryVariableSetsApi.md#deleteLibraryVariableSetSpaces) | **DELETE** /{baseSpaceId}/libraryvariablesets/{id} | Delete a LibraryVariableSetResource by ID
[**getLibraryVariableSetById**](LibraryVariableSetsApi.md#getLibraryVariableSetById) | **GET** /libraryvariablesets/{id} | Get a Library Variable Set by ID
[**getLibraryVariableSetByIdSpaces**](LibraryVariableSetsApi.md#getLibraryVariableSetByIdSpaces) | **GET** /{baseSpaceId}/libraryvariablesets/{id} | Get a Library Variable Set by ID
[**getLibraryVariableSetUsageList**](LibraryVariableSetsApi.md#getLibraryVariableSetUsageList) | **GET** /libraryvariablesets/{id}/usages | 
[**getLibraryVariableSetUsageListSpaces**](LibraryVariableSetsApi.md#getLibraryVariableSetUsageListSpaces) | **GET** /{baseSpaceId}/libraryvariablesets/{id}/usages | 
[**indexLibraryVariableSets**](LibraryVariableSetsApi.md#indexLibraryVariableSets) | **GET** /libraryvariablesets | Get a list of LibraryVariableSetResources
[**indexLibraryVariableSetsSpaces**](LibraryVariableSetsApi.md#indexLibraryVariableSetsSpaces) | **GET** /{baseSpaceId}/libraryvariablesets | Get a list of LibraryVariableSetResources
[**listAllLibraryVariableSets**](LibraryVariableSetsApi.md#listAllLibraryVariableSets) | **GET** /libraryvariablesets/all | Get a list of LibraryVariableSetResources
[**listAllLibraryVariableSetsSpaces**](LibraryVariableSetsApi.md#listAllLibraryVariableSetsSpaces) | **GET** /{baseSpaceId}/libraryvariablesets/all | Get a list of LibraryVariableSetResources
[**updateLibraryVariableSet**](LibraryVariableSetsApi.md#updateLibraryVariableSet) | **PUT** /libraryvariablesets/{id} | Modify a LibraryVariableSetResource by ID
[**updateLibraryVariableSetSpaces**](LibraryVariableSetsApi.md#updateLibraryVariableSetSpaces) | **PUT** /{baseSpaceId}/libraryvariablesets/{id} | Modify a LibraryVariableSetResource by ID


<a name="createLibraryVariableSet"></a>
# **createLibraryVariableSet**
> LibraryVariableSetResource createLibraryVariableSet(body)

Create a LibraryVariableSetResource

    Creates a new library variable set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LibraryVariableSetResource**](../model/LibraryVariableSetResource.md)| The LibraryVariableSetResource resource to create | [optional]

### Return type

[**LibraryVariableSetResource**](../model/LibraryVariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createLibraryVariableSetSpaces"></a>
# **createLibraryVariableSetSpaces**
> LibraryVariableSetResource createLibraryVariableSetSpaces(baseSpaceId, body)

Create a LibraryVariableSetResource

    Creates a new library variable set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**LibraryVariableSetResource**](../model/LibraryVariableSetResource.md)| The LibraryVariableSetResource resource to create | [optional]

### Return type

[**LibraryVariableSetResource**](../model/LibraryVariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteLibraryVariableSet"></a>
# **deleteLibraryVariableSet**
> deleteLibraryVariableSet(id)

Delete a LibraryVariableSetResource by ID

    Deletes an existing library variable set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the LibraryVariableSetResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteLibraryVariableSetSpaces"></a>
# **deleteLibraryVariableSetSpaces**
> deleteLibraryVariableSetSpaces(baseSpaceId, id)

Delete a LibraryVariableSetResource by ID

    Deletes an existing library variable set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the LibraryVariableSetResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getLibraryVariableSetById"></a>
# **getLibraryVariableSetById**
> LibraryVariableSetResource getLibraryVariableSetById(id)

Get a Library Variable Set by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the LibraryVariableSet to load | [default to null]

### Return type

[**LibraryVariableSetResource**](../model/LibraryVariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLibraryVariableSetByIdSpaces"></a>
# **getLibraryVariableSetByIdSpaces**
> LibraryVariableSetResource getLibraryVariableSetByIdSpaces(id, baseSpaceId)

Get a Library Variable Set by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the LibraryVariableSet to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**LibraryVariableSetResource**](../model/LibraryVariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLibraryVariableSetUsageList"></a>
# **getLibraryVariableSetUsageList**
> LibraryVariableSetUsageResource getLibraryVariableSetUsageList(id)



    Lists projects and deployments which are using an library variable set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**LibraryVariableSetUsageResource**](../model/LibraryVariableSetUsageResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLibraryVariableSetUsageListSpaces"></a>
# **getLibraryVariableSetUsageListSpaces**
> LibraryVariableSetUsageResource getLibraryVariableSetUsageListSpaces(baseSpaceId, id)



    Lists projects and deployments which are using an library variable set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**LibraryVariableSetUsageResource**](../model/LibraryVariableSetUsageResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexLibraryVariableSets"></a>
# **indexLibraryVariableSets**
> LibraryVariableSetResourceCollection indexLibraryVariableSets(skip, take)

Get a list of LibraryVariableSetResources

    Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**LibraryVariableSetResourceCollection**](../model/LibraryVariableSetResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexLibraryVariableSetsSpaces"></a>
# **indexLibraryVariableSetsSpaces**
> LibraryVariableSetResourceCollection indexLibraryVariableSetsSpaces(baseSpaceId, skip, take)

Get a list of LibraryVariableSetResources

    Lists all of the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**LibraryVariableSetResourceCollection**](../model/LibraryVariableSetResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllLibraryVariableSets"></a>
# **listAllLibraryVariableSets**
> List listAllLibraryVariableSets()

Get a list of LibraryVariableSetResources

    Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/LibraryVariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllLibraryVariableSetsSpaces"></a>
# **listAllLibraryVariableSetsSpaces**
> List listAllLibraryVariableSetsSpaces(baseSpaceId)

Get a list of LibraryVariableSetResources

    Lists all the library variable sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/LibraryVariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateLibraryVariableSet"></a>
# **updateLibraryVariableSet**
> LibraryVariableSetResource updateLibraryVariableSet(id, body)

Modify a LibraryVariableSetResource by ID

    Modifies an existing library variable set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the LibraryVariableSetResource to modify | [default to null]
 **body** | [**LibraryVariableSetResource**](../model/LibraryVariableSetResource.md)| The LibraryVariableSetResource resource to create | [optional]

### Return type

[**LibraryVariableSetResource**](../model/LibraryVariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateLibraryVariableSetSpaces"></a>
# **updateLibraryVariableSetSpaces**
> LibraryVariableSetResource updateLibraryVariableSetSpaces(baseSpaceId, id, body)

Modify a LibraryVariableSetResource by ID

    Modifies an existing library variable set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the LibraryVariableSetResource to modify | [default to null]
 **body** | [**LibraryVariableSetResource**](../model/LibraryVariableSetResource.md)| The LibraryVariableSetResource resource to create | [optional]

### Return type

[**LibraryVariableSetResource**](../model/LibraryVariableSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

