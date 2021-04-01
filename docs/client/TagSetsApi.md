# TagSetsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTagSet**](TagSetsApi.md#createTagSet) | **POST** /tagsets | Create a TagSetResource
[**createTagSetSpaces**](TagSetsApi.md#createTagSetSpaces) | **POST** /{baseSpaceId}/tagsets | Create a TagSetResource
[**deleteTagSet**](TagSetsApi.md#deleteTagSet) | **DELETE** /tagsets/{id} | Delete a TagSetResource by ID
[**deleteTagSetSpaces**](TagSetsApi.md#deleteTagSetSpaces) | **DELETE** /{baseSpaceId}/tagsets/{id} | Delete a TagSetResource by ID
[**getTagSetById**](TagSetsApi.md#getTagSetById) | **GET** /tagsets/{id} | Get a Tag Set by ID
[**getTagSetByIdSpaces**](TagSetsApi.md#getTagSetByIdSpaces) | **GET** /{baseSpaceId}/tagsets/{id} | Get a Tag Set by ID
[**indexTagSets**](TagSetsApi.md#indexTagSets) | **GET** /tagsets | Get a list of TagSetResources
[**indexTagSetsSpaces**](TagSetsApi.md#indexTagSetsSpaces) | **GET** /{baseSpaceId}/tagsets | Get a list of TagSetResources
[**listAllTagSets**](TagSetsApi.md#listAllTagSets) | **GET** /tagsets/all | Get a list of TagSetResources
[**listAllTagSetsSpaces**](TagSetsApi.md#listAllTagSetsSpaces) | **GET** /{baseSpaceId}/tagsets/all | Get a list of TagSetResources
[**updateSortTagSets**](TagSetsApi.md#updateSortTagSets) | **PUT** /tagsets/sortorder | 
[**updateSortTagSetsSpaces**](TagSetsApi.md#updateSortTagSetsSpaces) | **PUT** /{baseSpaceId}/tagsets/sortorder | 
[**updateTagSet**](TagSetsApi.md#updateTagSet) | **PUT** /tagsets/{id} | Modify a TagSetResource by ID
[**updateTagSetSpaces**](TagSetsApi.md#updateTagSetSpaces) | **PUT** /{baseSpaceId}/tagsets/{id} | Modify a TagSetResource by ID


<a name="createTagSet"></a>
# **createTagSet**
> TagSetResource createTagSet(body)

Create a TagSetResource

    Creates a new tag set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TagSetResource**](../model/TagSetResource.md)| The TagSetResource resource to create | [optional]

### Return type

[**TagSetResource**](../model/TagSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTagSetSpaces"></a>
# **createTagSetSpaces**
> TagSetResource createTagSetSpaces(baseSpaceId, body)

Create a TagSetResource

    Creates a new tag set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**TagSetResource**](../model/TagSetResource.md)| The TagSetResource resource to create | [optional]

### Return type

[**TagSetResource**](../model/TagSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteTagSet"></a>
# **deleteTagSet**
> deleteTagSet(id)

Delete a TagSetResource by ID

    Deletes an existing tag set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the TagSetResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteTagSetSpaces"></a>
# **deleteTagSetSpaces**
> deleteTagSetSpaces(baseSpaceId, id)

Delete a TagSetResource by ID

    Deletes an existing tag set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the TagSetResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getTagSetById"></a>
# **getTagSetById**
> TagSetResource getTagSetById(id)

Get a Tag Set by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the TagSet to load | [default to null]

### Return type

[**TagSetResource**](../model/TagSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTagSetByIdSpaces"></a>
# **getTagSetByIdSpaces**
> TagSetResource getTagSetByIdSpaces(id, baseSpaceId)

Get a Tag Set by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the TagSet to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**TagSetResource**](../model/TagSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexTagSets"></a>
# **indexTagSets**
> TagSetResourceCollection indexTagSets(skip, take)

Get a list of TagSetResources

    Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the &#x60;SortOrder&#x60; field on each tag set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**TagSetResourceCollection**](../model/TagSetResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexTagSetsSpaces"></a>
# **indexTagSetsSpaces**
> TagSetResourceCollection indexTagSetsSpaces(baseSpaceId, skip, take)

Get a list of TagSetResources

    Lists all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by the &#x60;SortOrder&#x60; field on each tag set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**TagSetResourceCollection**](../model/TagSetResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllTagSets"></a>
# **listAllTagSets**
> List listAllTagSets()

Get a list of TagSetResources

    Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the &#x60;SortOrder&#x60; field on each tag set.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/TagSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllTagSetsSpaces"></a>
# **listAllTagSetsSpaces**
> List listAllTagSetsSpaces(baseSpaceId)

Get a list of TagSetResources

    Lists the details of all of the tag sets in the supplied Octopus Deploy Space. The results will be sorted by the &#x60;SortOrder&#x60; field on each tag set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/TagSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateSortTagSets"></a>
# **updateSortTagSets**
> updateSortTagSets()



    Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateSortTagSetsSpaces"></a>
# **updateSortTagSetsSpaces**
> updateSortTagSetsSpaces(baseSpaceId)



    Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.

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

<a name="updateTagSet"></a>
# **updateTagSet**
> TagSetResource updateTagSet(id, body)

Modify a TagSetResource by ID

    Modifies an existing tag set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the TagSetResource to modify | [default to null]
 **body** | [**TagSetResource**](../model/TagSetResource.md)| The TagSetResource resource to create | [optional]

### Return type

[**TagSetResource**](../model/TagSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateTagSetSpaces"></a>
# **updateTagSetSpaces**
> TagSetResource updateTagSetSpaces(baseSpaceId, id, body)

Modify a TagSetResource by ID

    Modifies an existing tag set.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the TagSetResource to modify | [default to null]
 **body** | [**TagSetResource**](../model/TagSetResource.md)| The TagSetResource resource to create | [optional]

### Return type

[**TagSetResource**](../model/TagSetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

