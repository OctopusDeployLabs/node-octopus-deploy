# SubscriptionApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](SubscriptionApi.md#createSubscription) | **POST** /subscriptions | Create a SubscriptionResource
[**createSubscriptionSpaces**](SubscriptionApi.md#createSubscriptionSpaces) | **POST** /{baseSpaceId}/subscriptions | Create a SubscriptionResource
[**deleteSubscription**](SubscriptionApi.md#deleteSubscription) | **DELETE** /subscriptions/{id} | Delete a SubscriptionResource by ID
[**deleteSubscriptionSpaces**](SubscriptionApi.md#deleteSubscriptionSpaces) | **DELETE** /{baseSpaceId}/subscriptions/{id} | Delete a SubscriptionResource by ID
[**indexSubscriptions**](SubscriptionApi.md#indexSubscriptions) | **GET** /subscriptions | Get a list of SubscriptionResources
[**indexSubscriptionsSpaces**](SubscriptionApi.md#indexSubscriptionsSpaces) | **GET** /{baseSpaceId}/subscriptions | Get a list of SubscriptionResources
[**updateSubscription**](SubscriptionApi.md#updateSubscription) | **PUT** /subscriptions/{id} | Modify a SubscriptionResource by ID
[**updateSubscriptionSpaces**](SubscriptionApi.md#updateSubscriptionSpaces) | **PUT** /{baseSpaceId}/subscriptions/{id} | Modify a SubscriptionResource by ID


<a name="createSubscription"></a>
# **createSubscription**
> SubscriptionResource createSubscription(body)

Create a SubscriptionResource

    Creates a new subscription

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubscriptionResource**](../model/SubscriptionResource.md)| The SubscriptionResource resource to create | [optional]

### Return type

[**SubscriptionResource**](../model/SubscriptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createSubscriptionSpaces"></a>
# **createSubscriptionSpaces**
> SubscriptionResource createSubscriptionSpaces(baseSpaceId, body)

Create a SubscriptionResource

    Creates a new subscription

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**SubscriptionResource**](../model/SubscriptionResource.md)| The SubscriptionResource resource to create | [optional]

### Return type

[**SubscriptionResource**](../model/SubscriptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteSubscription"></a>
# **deleteSubscription**
> deleteSubscription(id)

Delete a SubscriptionResource by ID

    Deletes an existing subscription.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the SubscriptionResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteSubscriptionSpaces"></a>
# **deleteSubscriptionSpaces**
> deleteSubscriptionSpaces(baseSpaceId, id)

Delete a SubscriptionResource by ID

    Deletes an existing subscription.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the SubscriptionResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="indexSubscriptions"></a>
# **indexSubscriptions**
> SubscriptionResourceCollection indexSubscriptions(skip, take)

Get a list of SubscriptionResources

    Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**SubscriptionResourceCollection**](../model/SubscriptionResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexSubscriptionsSpaces"></a>
# **indexSubscriptionsSpaces**
> SubscriptionResourceCollection indexSubscriptionsSpaces(baseSpaceId, skip, take)

Get a list of SubscriptionResources

    Lists all of the subscriptions in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**SubscriptionResourceCollection**](../model/SubscriptionResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateSubscription"></a>
# **updateSubscription**
> SubscriptionResource updateSubscription(id, body)

Modify a SubscriptionResource by ID

    Updates an existing subscription

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the SubscriptionResource to modify | [default to null]
 **body** | [**SubscriptionResource**](../model/SubscriptionResource.md)| The SubscriptionResource resource to create | [optional]

### Return type

[**SubscriptionResource**](../model/SubscriptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateSubscriptionSpaces"></a>
# **updateSubscriptionSpaces**
> SubscriptionResource updateSubscriptionSpaces(baseSpaceId, id, body)

Modify a SubscriptionResource by ID

    Updates an existing subscription

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the SubscriptionResource to modify | [default to null]
 **body** | [**SubscriptionResource**](../model/SubscriptionResource.md)| The SubscriptionResource resource to create | [optional]

### Return type

[**SubscriptionResource**](../model/SubscriptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

