# SubscriptionsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSubscriptions**](SubscriptionsApi.md#getAllSubscriptions) | **GET** /subscriptions/all | Get all Subscriptions
[**getAllSubscriptionsSpaces**](SubscriptionsApi.md#getAllSubscriptionsSpaces) | **GET** /{baseSpaceId}/subscriptions/all | Get all Subscriptions
[**getSubscriptionById**](SubscriptionsApi.md#getSubscriptionById) | **GET** /subscriptions/{id} | Get a Subscription by ID
[**getSubscriptionByIdSpaces**](SubscriptionsApi.md#getSubscriptionByIdSpaces) | **GET** /{baseSpaceId}/subscriptions/{id} | Get a Subscription by ID


<a name="getAllSubscriptions"></a>
# **getAllSubscriptions**
> List getAllSubscriptions()

Get all Subscriptions

    Lists all the subscriptions in the supplied Octopus Deploy Space.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/SubscriptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllSubscriptionsSpaces"></a>
# **getAllSubscriptionsSpaces**
> List getAllSubscriptionsSpaces(baseSpaceId)

Get all Subscriptions

    Lists all the subscriptions in the supplied Octopus Deploy Space.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/SubscriptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getSubscriptionById"></a>
# **getSubscriptionById**
> SubscriptionResource getSubscriptionById(id)

Get a Subscription by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Subscription to load | [default to null]

### Return type

[**SubscriptionResource**](../model/SubscriptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getSubscriptionByIdSpaces"></a>
# **getSubscriptionByIdSpaces**
> SubscriptionResource getSubscriptionByIdSpaces(id, baseSpaceId)

Get a Subscription by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Subscription to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**SubscriptionResource**](../model/SubscriptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

