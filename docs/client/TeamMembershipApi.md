# TeamMembershipApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeamMembershipPreview**](TeamMembershipApi.md#createTeamMembershipPreview) | **POST** /teammembership/previewteam | Preview Users that would belong to the specified Team
[**createTeamMembershipPreviewSpaces**](TeamMembershipApi.md#createTeamMembershipPreviewSpaces) | **POST** /{baseSpaceId}/teammembership/previewteam | Preview Users that would belong to the specified Team
[**getTeamMembership**](TeamMembershipApi.md#getTeamMembership) | **GET** /teammembership | Gets a list of team memberships for a user
[**getTeamMembershipSpaces**](TeamMembershipApi.md#getTeamMembershipSpaces) | **GET** /{baseSpaceId}/teammembership | Gets a list of team memberships for a user


<a name="createTeamMembershipPreview"></a>
# **createTeamMembershipPreview**
> List createTeamMembershipPreview(body)

Preview Users that would belong to the specified Team

    Lists all the Users that would belong to the specified Team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TeamResource**](../model/TeamResource.md)|  | [optional]

### Return type

[**List**](../model/TeamMembership.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTeamMembershipPreviewSpaces"></a>
# **createTeamMembershipPreviewSpaces**
> List createTeamMembershipPreviewSpaces(baseSpaceId, body)

Preview Users that would belong to the specified Team

    Lists all the Users that would belong to the specified Team, including information about whether they are directly assigned and/or indirectly assigned via external security groups.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**TeamResource**](../model/TeamResource.md)|  | [optional]

### Return type

[**List**](../model/TeamMembership.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getTeamMembership"></a>
# **getTeamMembership**
> List getTeamMembership(userId)

Gets a list of team memberships for a user

    Lists all teams a user is a member of, including any from external auth-provider security groups. Memberships are filtered by userId.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of the user | [default to null]

### Return type

[**List**](../model/TeamMembership.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTeamMembershipSpaces"></a>
# **getTeamMembershipSpaces**
> List getTeamMembershipSpaces(userId, baseSpaceId)

Gets a list of team memberships for a user

    Lists all teams a user is a member of, including any from external auth-provider security groups. Memberships are filtered by userId.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of the user | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/TeamMembership.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

