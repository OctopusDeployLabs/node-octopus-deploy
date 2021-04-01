# InterruptionsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubmitInterruption**](InterruptionsApi.md#createSubmitInterruption) | **POST** /interruptions/{id}/submit | 
[**createSubmitInterruptionSpaces**](InterruptionsApi.md#createSubmitInterruptionSpaces) | **POST** /{baseSpaceId}/interruptions/{id}/submit | 
[**getInterruptionById**](InterruptionsApi.md#getInterruptionById) | **GET** /interruptions/{id} | Get an Interruption by ID
[**getInterruptionByIdSpaces**](InterruptionsApi.md#getInterruptionByIdSpaces) | **GET** /{baseSpaceId}/interruptions/{id} | Get an Interruption by ID
[**getInterruptionResponsibility**](InterruptionsApi.md#getInterruptionResponsibility) | **GET** /interruptions/{id}/responsible | 
[**getInterruptionResponsibilitySpaces**](InterruptionsApi.md#getInterruptionResponsibilitySpaces) | **GET** /{baseSpaceId}/interruptions/{id}/responsible | 
[**indexInterruptions**](InterruptionsApi.md#indexInterruptions) | **GET** /interruptions | Get a list of InterruptionResources
[**indexInterruptionsSpaces**](InterruptionsApi.md#indexInterruptionsSpaces) | **GET** /{baseSpaceId}/interruptions | Get a list of InterruptionResources
[**updateInterruptionResponsibility**](InterruptionsApi.md#updateInterruptionResponsibility) | **PUT** /interruptions/{id}/responsible | 
[**updateInterruptionResponsibilitySpaces**](InterruptionsApi.md#updateInterruptionResponsibilitySpaces) | **PUT** /{baseSpaceId}/interruptions/{id}/responsible | 


<a name="createSubmitInterruption"></a>
# **createSubmitInterruption**
> InterruptionResource createSubmitInterruption(id)



    Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**InterruptionResource**](../model/InterruptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createSubmitInterruptionSpaces"></a>
# **createSubmitInterruptionSpaces**
> InterruptionResource createSubmitInterruptionSpaces(baseSpaceId, id)



    Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**InterruptionResource**](../model/InterruptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getInterruptionById"></a>
# **getInterruptionById**
> InterruptionResource getInterruptionById(id)

Get an Interruption by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Interruption to load | [default to null]

### Return type

[**InterruptionResource**](../model/InterruptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getInterruptionByIdSpaces"></a>
# **getInterruptionByIdSpaces**
> InterruptionResource getInterruptionByIdSpaces(id, baseSpaceId)

Get an Interruption by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Interruption to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**InterruptionResource**](../model/InterruptionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getInterruptionResponsibility"></a>
# **getInterruptionResponsibility**
> UserResource getInterruptionResponsibility(id)



    Gets the user that is currently responsible for this interruption.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**UserResource**](../model/UserResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getInterruptionResponsibilitySpaces"></a>
# **getInterruptionResponsibilitySpaces**
> UserResource getInterruptionResponsibilitySpaces(baseSpaceId, id)



    Gets the user that is currently responsible for this interruption.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**UserResource**](../model/UserResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexInterruptions"></a>
# **indexInterruptions**
> InterruptionResourceCollection indexInterruptions(skip, take)

Get a list of InterruptionResources

    Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**InterruptionResourceCollection**](../model/InterruptionResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexInterruptionsSpaces"></a>
# **indexInterruptionsSpaces**
> InterruptionResourceCollection indexInterruptionsSpaces(baseSpaceId, skip, take)

Get a list of InterruptionResources

    Lists interruptions for user attention. The results will be sorted by date from most recently to least recently created.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**InterruptionResourceCollection**](../model/InterruptionResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateInterruptionResponsibility"></a>
# **updateInterruptionResponsibility**
> UserResource updateInterruptionResponsibility(id)



    Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**UserResource**](../model/UserResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateInterruptionResponsibilitySpaces"></a>
# **updateInterruptionResponsibilitySpaces**
> UserResource updateInterruptionResponsibilitySpaces(baseSpaceId, id)



    Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**UserResource**](../model/UserResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

