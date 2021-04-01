# ArtifactsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createArtifact**](ArtifactsApi.md#createArtifact) | **POST** /artifacts | Create a ArtifactResource
[**createArtifactSpaces**](ArtifactsApi.md#createArtifactSpaces) | **POST** /{baseSpaceId}/artifacts | Create a ArtifactResource
[**deleteArtifact**](ArtifactsApi.md#deleteArtifact) | **DELETE** /artifacts/{id} | Delete a ArtifactResource by ID
[**deleteArtifactSpaces**](ArtifactsApi.md#deleteArtifactSpaces) | **DELETE** /{baseSpaceId}/artifacts/{id} | Delete a ArtifactResource by ID
[**getArtifactById**](ArtifactsApi.md#getArtifactById) | **GET** /artifacts/{id} | Get an Artifact by ID
[**getArtifactByIdSpaces**](ArtifactsApi.md#getArtifactByIdSpaces) | **GET** /{baseSpaceId}/artifacts/{id} | Get an Artifact by ID
[**getArtifactContent**](ArtifactsApi.md#getArtifactContent) | **GET** /artifacts/{id}/content | 
[**getArtifactContentSpaces**](ArtifactsApi.md#getArtifactContentSpaces) | **GET** /{baseSpaceId}/artifacts/{id}/content | 
[**indexArtifacts**](ArtifactsApi.md#indexArtifacts) | **GET** /artifacts | Get a list of ArtifactResources
[**indexArtifactsSpaces**](ArtifactsApi.md#indexArtifactsSpaces) | **GET** /{baseSpaceId}/artifacts | Get a list of ArtifactResources
[**updateArtifact**](ArtifactsApi.md#updateArtifact) | **PUT** /artifacts/{id} | Modify a ArtifactResource by ID
[**updateArtifactContent**](ArtifactsApi.md#updateArtifactContent) | **PUT** /artifacts/{id}/content | 
[**updateArtifactContentSpaces**](ArtifactsApi.md#updateArtifactContentSpaces) | **PUT** /{baseSpaceId}/artifacts/{id}/content | 
[**updateArtifactSpaces**](ArtifactsApi.md#updateArtifactSpaces) | **PUT** /{baseSpaceId}/artifacts/{id} | Modify a ArtifactResource by ID


<a name="createArtifact"></a>
# **createArtifact**
> ArtifactResource createArtifact(body)

Create a ArtifactResource

    Creates a new artifact.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ArtifactResource**](../model/ArtifactResource.md)| The ArtifactResource resource to create | [optional]

### Return type

[**ArtifactResource**](../model/ArtifactResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createArtifactSpaces"></a>
# **createArtifactSpaces**
> ArtifactResource createArtifactSpaces(baseSpaceId, body)

Create a ArtifactResource

    Creates a new artifact.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**ArtifactResource**](../model/ArtifactResource.md)| The ArtifactResource resource to create | [optional]

### Return type

[**ArtifactResource**](../model/ArtifactResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteArtifact"></a>
# **deleteArtifact**
> deleteArtifact(id)

Delete a ArtifactResource by ID

    Deletes an existing artifact.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ArtifactResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteArtifactSpaces"></a>
# **deleteArtifactSpaces**
> deleteArtifactSpaces(baseSpaceId, id)

Delete a ArtifactResource by ID

    Deletes an existing artifact.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ArtifactResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getArtifactById"></a>
# **getArtifactById**
> ArtifactResource getArtifactById(id)

Get an Artifact by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Artifact to load | [default to null]

### Return type

[**ArtifactResource**](../model/ArtifactResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getArtifactByIdSpaces"></a>
# **getArtifactByIdSpaces**
> ArtifactResource getArtifactByIdSpaces(id, baseSpaceId)

Get an Artifact by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Artifact to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**ArtifactResource**](../model/ArtifactResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getArtifactContent"></a>
# **getArtifactContent**
> getArtifactContent(id)



    Gets the content associated with an artifact.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the artifact | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getArtifactContentSpaces"></a>
# **getArtifactContentSpaces**
> getArtifactContentSpaces(baseSpaceId, id)



    Gets the content associated with an artifact.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the artifact | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="indexArtifacts"></a>
# **indexArtifacts**
> ArtifactResourceCollection indexArtifacts(skip, take)

Get a list of ArtifactResources

    Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ArtifactResourceCollection**](../model/ArtifactResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexArtifactsSpaces"></a>
# **indexArtifactsSpaces**
> ArtifactResourceCollection indexArtifactsSpaces(baseSpaceId, skip, take)

Get a list of ArtifactResources

    Lists all of the artifacts in the supplied Octopus Deploy Space, from all releases. The results will be sorted by date from most recently to least recently created.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ArtifactResourceCollection**](../model/ArtifactResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateArtifact"></a>
# **updateArtifact**
> ArtifactResource updateArtifact(id, body)

Modify a ArtifactResource by ID

    Modifies an existing artifact.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ArtifactResource to modify | [default to null]
 **body** | [**ArtifactResource**](../model/ArtifactResource.md)| The ArtifactResource resource to create | [optional]

### Return type

[**ArtifactResource**](../model/ArtifactResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateArtifactContent"></a>
# **updateArtifactContent**
> updateArtifactContent(id)



    Sets the content associated with an artifact.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the artifact | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateArtifactContentSpaces"></a>
# **updateArtifactContentSpaces**
> updateArtifactContentSpaces(baseSpaceId, id)



    Sets the content associated with an artifact.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the artifact | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateArtifactSpaces"></a>
# **updateArtifactSpaces**
> ArtifactResource updateArtifactSpaces(baseSpaceId, id, body)

Modify a ArtifactResource by ID

    Modifies an existing artifact.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ArtifactResource to modify | [default to null]
 **body** | [**ArtifactResource**](../model/ArtifactResource.md)| The ArtifactResource resource to create | [optional]

### Return type

[**ArtifactResource**](../model/ArtifactResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

