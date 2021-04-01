# UserTeamsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserGetTeams**](UserTeamsApi.md#getUserGetTeams) | **GET** /users/{id}/teams | 
[**getUserGetTeamsSpaces**](UserTeamsApi.md#getUserGetTeamsSpaces) | **GET** /{baseSpaceId}/users/{id}/teams | 


<a name="getUserGetTeams"></a>
# **getUserGetTeams**
> List getUserGetTeams(id)



    Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/ProjectedTeamReferenceDataItem.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserGetTeamsSpaces"></a>
# **getUserGetTeamsSpaces**
> List getUserGetTeamsSpaces(baseSpaceId, id)



    Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/ProjectedTeamReferenceDataItem.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

