# EventsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEvent**](EventsApi.md#getEvent) | **GET** /events/{id} | 
[**getEventSpaces**](EventsApi.md#getEventSpaces) | **GET** /{baseSpaceId}/events/{id} | 
[**getListEventAgents**](EventsApi.md#getListEventAgents) | **GET** /events/agents | 
[**getListEventAgentsSpaces**](EventsApi.md#getListEventAgentsSpaces) | **GET** /{baseSpaceId}/events/agents | 
[**getListEventCategories**](EventsApi.md#getListEventCategories) | **GET** /events/categories | 
[**getListEventCategoriesSpaces**](EventsApi.md#getListEventCategoriesSpaces) | **GET** /{baseSpaceId}/events/categories | 
[**getListEventDocumentTypes**](EventsApi.md#getListEventDocumentTypes) | **GET** /events/documenttypes | 
[**getListEventDocumentTypesSpaces**](EventsApi.md#getListEventDocumentTypesSpaces) | **GET** /{baseSpaceId}/events/documenttypes | 
[**getListEventGroups**](EventsApi.md#getListEventGroups) | **GET** /events/groups | 
[**getListEventGroupsSpaces**](EventsApi.md#getListEventGroupsSpaces) | **GET** /{baseSpaceId}/events/groups | 
[**getListEvents**](EventsApi.md#getListEvents) | **GET** /events | 
[**getListEventsSpaces**](EventsApi.md#getListEventsSpaces) | **GET** /{baseSpaceId}/events | 


<a name="getEvent"></a>
# **getEvent**
> EventResource getEvent(id)



    Gets a single event by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**EventResource**](../model/EventResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEventSpaces"></a>
# **getEventSpaces**
> EventResource getEventSpaces(baseSpaceId, id)



    Gets a single event by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**EventResource**](../model/EventResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListEventAgents"></a>
# **getListEventAgents**
> List getListEventAgents()



    Lists event agents.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/EventAgentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListEventAgentsSpaces"></a>
# **getListEventAgentsSpaces**
> List getListEventAgentsSpaces(baseSpaceId)



    Lists event agents.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/EventAgentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListEventCategories"></a>
# **getListEventCategories**
> List getListEventCategories()



    Lists event categories.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/EventCategoryResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListEventCategoriesSpaces"></a>
# **getListEventCategoriesSpaces**
> List getListEventCategoriesSpaces(baseSpaceId)



    Lists event categories.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/EventCategoryResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListEventDocumentTypes"></a>
# **getListEventDocumentTypes**
> List getListEventDocumentTypes()



    Lists subscription event document types.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/DocumentTypeDocument.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListEventDocumentTypesSpaces"></a>
# **getListEventDocumentTypesSpaces**
> List getListEventDocumentTypesSpaces(baseSpaceId)



    Lists subscription event document types.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/DocumentTypeDocument.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListEventGroups"></a>
# **getListEventGroups**
> List getListEventGroups()



    Lists subscription event groups.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/EventGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListEventGroupsSpaces"></a>
# **getListEventGroupsSpaces**
> List getListEventGroupsSpaces(baseSpaceId)



    Lists subscription event groups.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/EventGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListEvents"></a>
# **getListEvents**
> getListEvents()



    List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getListEventsSpaces"></a>
# **getListEventsSpaces**
> getListEventsSpaces(baseSpaceId)



    List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.

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

