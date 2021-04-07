# ChannelsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChannel**](ChannelsApi.md#createChannel) | **POST** /channels | Create a ChannelResource
[**createChannelSpaces**](ChannelsApi.md#createChannelSpaces) | **POST** /{baseSpaceId}/channels | Create a ChannelResource
[**createVersionRuleTest**](ChannelsApi.md#createVersionRuleTest) | **POST** /channels/rule-test | 
[**createVersionRuleTestSpaces**](ChannelsApi.md#createVersionRuleTestSpaces) | **POST** /{baseSpaceId}/channels/rule-test | 
[**deleteChannel**](ChannelsApi.md#deleteChannel) | **DELETE** /channels/{id} | Delete a ChannelResource by ID
[**deleteChannelSpaces**](ChannelsApi.md#deleteChannelSpaces) | **DELETE** /{baseSpaceId}/channels/{id} | Delete a ChannelResource by ID
[**getChannelById**](ChannelsApi.md#getChannelById) | **GET** /channels/{id} | Get a Channel by ID
[**getChannelByIdSpaces**](ChannelsApi.md#getChannelByIdSpaces) | **GET** /{baseSpaceId}/channels/{id} | Get a Channel by ID
[**getVersionRuleTest**](ChannelsApi.md#getVersionRuleTest) | **GET** /channels/rule-test | 
[**getVersionRuleTestSpaces**](ChannelsApi.md#getVersionRuleTestSpaces) | **GET** /{baseSpaceId}/channels/rule-test | 
[**indexChannelReleases**](ChannelsApi.md#indexChannelReleases) | **GET** /channels/{id}/releases | Get a list of ReleaseResources for the given ChannelResource
[**indexChannelReleasesSpaces**](ChannelsApi.md#indexChannelReleasesSpaces) | **GET** /{baseSpaceId}/channels/{id}/releases | Get a list of ReleaseResources for the given ChannelResource
[**indexChannels**](ChannelsApi.md#indexChannels) | **GET** /channels | Get a list of ChannelResources
[**indexChannelsSpaces**](ChannelsApi.md#indexChannelsSpaces) | **GET** /{baseSpaceId}/channels | Get a list of ChannelResources
[**indexProjectChannels**](ChannelsApi.md#indexProjectChannels) | **GET** /projects/{id}/channels | Get a list of ChannelResources for the given ProjectResource
[**indexProjectChannelsSpaces**](ChannelsApi.md#indexProjectChannelsSpaces) | **GET** /{baseSpaceId}/projects/{id}/channels | Get a list of ChannelResources for the given ProjectResource
[**listAllChannels**](ChannelsApi.md#listAllChannels) | **GET** /channels/all | Get a list of Channels
[**listAllChannelsSpaces**](ChannelsApi.md#listAllChannelsSpaces) | **GET** /{baseSpaceId}/channels/all | Get a list of Channels
[**updateChannel**](ChannelsApi.md#updateChannel) | **PUT** /channels/{id} | Modify a ChannelResource by ID
[**updateChannelSpaces**](ChannelsApi.md#updateChannelSpaces) | **PUT** /{baseSpaceId}/channels/{id} | Modify a ChannelResource by ID


<a name="createChannel"></a>
# **createChannel**
> ChannelResource createChannel(body)

Create a ChannelResource

    Creates a new channel

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ChannelResource**](../model/ChannelResource.md)| The ChannelResource resource to create | [optional]

### Return type

[**ChannelResource**](../model/ChannelResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createChannelSpaces"></a>
# **createChannelSpaces**
> ChannelResource createChannelSpaces(baseSpaceId, body)

Create a ChannelResource

    Creates a new channel

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**ChannelResource**](../model/ChannelResource.md)| The ChannelResource resource to create | [optional]

### Return type

[**ChannelResource**](../model/ChannelResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createVersionRuleTest"></a>
# **createVersionRuleTest**
> createVersionRuleTest()



    Perform channel version rule test against provided package version

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="createVersionRuleTestSpaces"></a>
# **createVersionRuleTestSpaces**
> createVersionRuleTestSpaces(baseSpaceId)



    Perform channel version rule test against provided package version

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

<a name="deleteChannel"></a>
# **deleteChannel**
> deleteChannel(id)

Delete a ChannelResource by ID

    Deletes an existing channel.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ChannelResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteChannelSpaces"></a>
# **deleteChannelSpaces**
> deleteChannelSpaces(baseSpaceId, id)

Delete a ChannelResource by ID

    Deletes an existing channel.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ChannelResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getChannelById"></a>
# **getChannelById**
> ChannelResource getChannelById(id)

Get a Channel by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Channel to load | [default to null]

### Return type

[**ChannelResource**](../model/ChannelResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getChannelByIdSpaces"></a>
# **getChannelByIdSpaces**
> ChannelResource getChannelByIdSpaces(id, baseSpaceId)

Get a Channel by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Channel to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**ChannelResource**](../model/ChannelResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getVersionRuleTest"></a>
# **getVersionRuleTest**
> getVersionRuleTest()



    Perform channel version rule test against provided package version

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getVersionRuleTestSpaces"></a>
# **getVersionRuleTestSpaces**
> getVersionRuleTestSpaces(baseSpaceId)



    Perform channel version rule test against provided package version

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

<a name="indexChannelReleases"></a>
# **indexChannelReleases**
> ReleaseResourceCollection indexChannelReleases(id, skip, take)

Get a list of ReleaseResources for the given ChannelResource

    Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Channel | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**ReleaseResourceCollection**](../model/ReleaseResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexChannelReleasesSpaces"></a>
# **indexChannelReleasesSpaces**
> ReleaseResourceCollection indexChannelReleasesSpaces(baseSpaceId, id, skip, take)

Get a list of ReleaseResources for the given ChannelResource

    Lists all of the releases that belong to the given channel. Releases will be ordered from most recent to least recent.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the Channel | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**ReleaseResourceCollection**](../model/ReleaseResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexChannels"></a>
# **indexChannels**
> ChannelResourceCollection indexChannels(skip, take)

Get a list of ChannelResources

    Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ChannelResourceCollection**](../model/ChannelResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexChannelsSpaces"></a>
# **indexChannelsSpaces**
> ChannelResourceCollection indexChannelsSpaces(baseSpaceId, skip, take)

Get a list of ChannelResources

    Lists all of the channels in the supplied Octopus Deploy Space, from all projects, sorted by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ChannelResourceCollection**](../model/ChannelResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectChannels"></a>
# **indexProjectChannels**
> ChannelResourceCollection indexProjectChannels(id, partialName, skip, take)

Get a list of ChannelResources for the given ProjectResource

    Lists all the channels for the given project

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Project | [default to null]
 **partialName** | **String**| A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment | [optional] [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**ChannelResourceCollection**](../model/ChannelResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectChannelsSpaces"></a>
# **indexProjectChannelsSpaces**
> ChannelResourceCollection indexProjectChannelsSpaces(id, baseSpaceId, partialName, skip, take)

Get a list of ChannelResources for the given ProjectResource

    Lists all the channels for the given project

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Project | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **partialName** | **String**| A partial or complete name to limit the set of retrieved Tenants to. This will perform a \&quot;contains\&quot; style match against the supplied name or name-fragment | [optional] [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**ChannelResourceCollection**](../model/ChannelResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllChannels"></a>
# **listAllChannels**
> List listAllChannels(ids)

Get a list of Channels

    Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List**](../model/String.md)| A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201 | [optional] [default to null]

### Return type

[**List**](../model/ChannelResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllChannelsSpaces"></a>
# **listAllChannelsSpaces**
> List listAllChannelsSpaces(baseSpaceId, ids)

Get a list of Channels

    Lists all of the channels in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **ids** | [**List**](../model/String.md)| A set of Channel IDs to retrieve Channels for. Example: Channel-101,Channel-201 | [optional] [default to null]

### Return type

[**List**](../model/ChannelResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateChannel"></a>
# **updateChannel**
> ChannelResource updateChannel(id, body)

Modify a ChannelResource by ID

    Updates an existing channel

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ChannelResource to modify | [default to null]
 **body** | [**ChannelResource**](../model/ChannelResource.md)| The ChannelResource resource to create | [optional]

### Return type

[**ChannelResource**](../model/ChannelResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateChannelSpaces"></a>
# **updateChannelSpaces**
> ChannelResource updateChannelSpaces(baseSpaceId, id, body)

Modify a ChannelResource by ID

    Updates an existing channel

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ChannelResource to modify | [default to null]
 **body** | [**ChannelResource**](../model/ChannelResource.md)| The ChannelResource resource to create | [optional]

### Return type

[**ChannelResource**](../model/ChannelResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

