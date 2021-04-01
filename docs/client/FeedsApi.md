# FeedsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFeed**](FeedsApi.md#createFeed) | **POST** /feeds | Create a FeedResource
[**createFeedSpaces**](FeedsApi.md#createFeedSpaces) | **POST** /{baseSpaceId}/feeds | Create a FeedResource
[**deleteFeed**](FeedsApi.md#deleteFeed) | **DELETE** /feeds/{id} | Delete a FeedResource by ID
[**deleteFeedSpaces**](FeedsApi.md#deleteFeedSpaces) | **DELETE** /{baseSpaceId}/feeds/{id} | Delete a FeedResource by ID
[**getBuiltInFeedStats**](FeedsApi.md#getBuiltInFeedStats) | **GET** /feeds/stats | 
[**getBuiltInFeedStatsSpaces**](FeedsApi.md#getBuiltInFeedStatsSpaces) | **GET** /{baseSpaceId}/feeds/stats | 
[**getFeedById**](FeedsApi.md#getFeedById) | **GET** /feeds/{id} | Get a FeedResource by ID
[**getFeedByIdSpaces**](FeedsApi.md#getFeedByIdSpaces) | **GET** /{baseSpaceId}/feeds/{id} | Get a FeedResource by ID
[**getPackageSearch**](FeedsApi.md#getPackageSearch) | **GET** /feeds/{id}/packages/search | 
[**getPackageSearchSpaces**](FeedsApi.md#getPackageSearchSpaces) | **GET** /{baseSpaceId}/feeds/{id}/packages/search | 
[**getPackageVersionSearch**](FeedsApi.md#getPackageVersionSearch) | **GET** /feeds/{id}/packages/versions | 
[**getPackageVersionSearchSpaces**](FeedsApi.md#getPackageVersionSearchSpaces) | **GET** /{baseSpaceId}/feeds/{id}/packages/versions | 
[**indexFeeds**](FeedsApi.md#indexFeeds) | **GET** /feeds | Get a list of FeedResources
[**indexFeedsSpaces**](FeedsApi.md#indexFeedsSpaces) | **GET** /{baseSpaceId}/feeds | Get a list of FeedResources
[**listAllFeeds**](FeedsApi.md#listAllFeeds) | **GET** /feeds/all | Get a list of FeedResources
[**listAllFeedsSpaces**](FeedsApi.md#listAllFeedsSpaces) | **GET** /{baseSpaceId}/feeds/all | Get a list of FeedResources
[**updateFeed**](FeedsApi.md#updateFeed) | **PUT** /feeds/{id} | Modify a FeedResource by ID
[**updateFeedSpaces**](FeedsApi.md#updateFeedSpaces) | **PUT** /{baseSpaceId}/feeds/{id} | Modify a FeedResource by ID


<a name="createFeed"></a>
# **createFeed**
> FeedResource createFeed(body)

Create a FeedResource

    Creates a feed.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FeedResource**](../model/FeedResource.md)| The FeedResource resource to create | [optional]

### Return type

[**FeedResource**](../model/FeedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createFeedSpaces"></a>
# **createFeedSpaces**
> FeedResource createFeedSpaces(baseSpaceId, body)

Create a FeedResource

    Creates a feed.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**FeedResource**](../model/FeedResource.md)| The FeedResource resource to create | [optional]

### Return type

[**FeedResource**](../model/FeedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteFeed"></a>
# **deleteFeed**
> deleteFeed(id)

Delete a FeedResource by ID

    Deletes an existing feed.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the FeedResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteFeedSpaces"></a>
# **deleteFeedSpaces**
> deleteFeedSpaces(baseSpaceId, id)

Delete a FeedResource by ID

    Deletes an existing feed.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the FeedResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getBuiltInFeedStats"></a>
# **getBuiltInFeedStats**
> BuiltInFeedStatsResource getBuiltInFeedStats()



    Provides statistics for the built-in package repository.

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltInFeedStatsResource**](../model/BuiltInFeedStatsResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getBuiltInFeedStatsSpaces"></a>
# **getBuiltInFeedStatsSpaces**
> BuiltInFeedStatsResource getBuiltInFeedStatsSpaces(baseSpaceId)



    Provides statistics for the built-in package repository.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**BuiltInFeedStatsResource**](../model/BuiltInFeedStatsResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getFeedById"></a>
# **getFeedById**
> FeedResource getFeedById(id)

Get a FeedResource by ID

    Gets a single feed by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the FeedResource to load | [default to null]

### Return type

[**FeedResource**](../model/FeedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getFeedByIdSpaces"></a>
# **getFeedByIdSpaces**
> FeedResource getFeedByIdSpaces(baseSpaceId, id)

Get a FeedResource by ID

    Gets a single feed by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the FeedResource to load | [default to null]

### Return type

[**FeedResource**](../model/FeedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageSearch"></a>
# **getPackageSearch**
> PackageDescriptionResourceCollection getPackageSearch(id)



    Searches the specified feed for packages based on the specified search term

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the feed | [default to null]

### Return type

[**PackageDescriptionResourceCollection**](../model/PackageDescriptionResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageSearchSpaces"></a>
# **getPackageSearchSpaces**
> PackageDescriptionResourceCollection getPackageSearchSpaces(baseSpaceId, id)



    Searches the specified feed for packages based on the specified search term

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the feed | [default to null]

### Return type

[**PackageDescriptionResourceCollection**](../model/PackageDescriptionResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageVersionSearch"></a>
# **getPackageVersionSearch**
> PackageVersionResourceCollection getPackageVersionSearch(id, packageId)



    Lists available versions of the package specified

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the feed | [default to null]
 **packageId** | **String**| Package ID to search | [default to null]

### Return type

[**PackageVersionResourceCollection**](../model/PackageVersionResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageVersionSearchSpaces"></a>
# **getPackageVersionSearchSpaces**
> PackageVersionResourceCollection getPackageVersionSearchSpaces(baseSpaceId, id, packageId)



    Lists available versions of the package specified

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the feed | [default to null]
 **packageId** | **String**| Package ID to search | [default to null]

### Return type

[**PackageVersionResourceCollection**](../model/PackageVersionResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexFeeds"></a>
# **indexFeeds**
> FeedResourceCollection indexFeeds(skip, take)

Get a list of FeedResources

    Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**FeedResourceCollection**](../model/FeedResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexFeedsSpaces"></a>
# **indexFeedsSpaces**
> FeedResourceCollection indexFeedsSpaces(baseSpaceId, skip, take)

Get a list of FeedResources

    Lists all the feeds used by the current Octopus installation. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**FeedResourceCollection**](../model/FeedResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllFeeds"></a>
# **listAllFeeds**
> List listAllFeeds()

Get a list of FeedResources

    Lists all the feeds in the specified Octopus Deploy Space.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/FeedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllFeedsSpaces"></a>
# **listAllFeedsSpaces**
> List listAllFeedsSpaces(baseSpaceId)

Get a list of FeedResources

    Lists all the feeds in the specified Octopus Deploy Space.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/FeedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateFeed"></a>
# **updateFeed**
> FeedResource updateFeed(id, body)

Modify a FeedResource by ID

    Modifies an existing feed.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the FeedResource to modify | [default to null]
 **body** | [**FeedResource**](../model/FeedResource.md)| The FeedResource resource to create | [optional]

### Return type

[**FeedResource**](../model/FeedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateFeedSpaces"></a>
# **updateFeedSpaces**
> FeedResource updateFeedSpaces(baseSpaceId, id, body)

Modify a FeedResource by ID

    Modifies an existing feed.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the FeedResource to modify | [default to null]
 **body** | [**FeedResource**](../model/FeedResource.md)| The FeedResource resource to create | [optional]

### Return type

[**FeedResource**](../model/FeedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

