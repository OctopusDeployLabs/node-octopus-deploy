# InvitationsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInvitation**](InvitationsApi.md#createInvitation) | **POST** /users/invitations | Create a InvitationResource
[**createInvitationSpaces**](InvitationsApi.md#createInvitationSpaces) | **POST** /{baseSpaceId}/users/invitations | Create a InvitationResource
[**getInvitationById**](InvitationsApi.md#getInvitationById) | **GET** /users/invitations/{id} | Get an Invitation by ID
[**getInvitationByIdSpaces**](InvitationsApi.md#getInvitationByIdSpaces) | **GET** /{baseSpaceId}/users/invitations/{id} | Get an Invitation by ID


<a name="createInvitation"></a>
# **createInvitation**
> InvitationResource createInvitation(body)

Create a InvitationResource

    Invite a user to register.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InvitationResource**](../model/InvitationResource.md)| The InvitationResource resource to create | [optional]

### Return type

[**InvitationResource**](../model/InvitationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createInvitationSpaces"></a>
# **createInvitationSpaces**
> InvitationResource createInvitationSpaces(baseSpaceId, body)

Create a InvitationResource

    Invite a user to register.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**InvitationResource**](../model/InvitationResource.md)| The InvitationResource resource to create | [optional]

### Return type

[**InvitationResource**](../model/InvitationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getInvitationById"></a>
# **getInvitationById**
> InvitationResource getInvitationById(id)

Get an Invitation by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Invitation to load | [default to null]

### Return type

[**InvitationResource**](../model/InvitationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getInvitationByIdSpaces"></a>
# **getInvitationByIdSpaces**
> InvitationResource getInvitationByIdSpaces(id, baseSpaceId)

Get an Invitation by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Invitation to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**InvitationResource**](../model/InvitationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

