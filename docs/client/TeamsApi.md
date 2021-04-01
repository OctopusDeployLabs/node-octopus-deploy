# TeamsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeam**](TeamsApi.md#createTeam) | **POST** /teams | Creates a new Team
[**createTeamSpaces**](TeamsApi.md#createTeamSpaces) | **POST** /{baseSpaceId}/teams | Creates a new Team
[**deleteTeam**](TeamsApi.md#deleteTeam) | **DELETE** /teams/{id} | Deletes an existing Team
[**deleteTeamSpaces**](TeamsApi.md#deleteTeamSpaces) | **DELETE** /{baseSpaceId}/teams/{id} | Deletes an existing Team
[**getListScopedUserRoleForTeam**](TeamsApi.md#getListScopedUserRoleForTeam) | **GET** /teams/{id}/scopeduserroles | Get a list of a Team&#39;s Scoped User Roles
[**getListScopedUserRoleForTeamSpaces**](TeamsApi.md#getListScopedUserRoleForTeamSpaces) | **GET** /{baseSpaceId}/teams/{id}/scopeduserroles | Get a list of a Team&#39;s Scoped User Roles
[**getTeamById**](TeamsApi.md#getTeamById) | **GET** /teams/{id} | Get a Team by ID
[**getTeamByIdSpaces**](TeamsApi.md#getTeamByIdSpaces) | **GET** /{baseSpaceId}/teams/{id} | Get a Team by ID
[**listAllTeams**](TeamsApi.md#listAllTeams) | **GET** /teams/all | Get a list of Teams
[**listAllTeamsSpaces**](TeamsApi.md#listAllTeamsSpaces) | **GET** /{baseSpaceId}/teams/all | Get a list of Teams
[**listTeams**](TeamsApi.md#listTeams) | **GET** /teams | Gets a list of teams
[**listTeamsSpaces**](TeamsApi.md#listTeamsSpaces) | **GET** /{baseSpaceId}/teams | Gets a list of teams
[**updateTeam**](TeamsApi.md#updateTeam) | **PUT** /teams/{id} | Modifies an existing Team
[**updateTeamSpaces**](TeamsApi.md#updateTeamSpaces) | **PUT** /{baseSpaceId}/teams/{id} | Modifies an existing Team


<a name="createTeam"></a>
# **createTeam**
> TeamResource createTeam(body)

Creates a new Team

    Creates a team.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TeamResource**](../model/TeamResource.md)|  | [optional]

### Return type

[**TeamResource**](../model/TeamResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTeamSpaces"></a>
# **createTeamSpaces**
> TeamResource createTeamSpaces(baseSpaceId, body)

Creates a new Team

    Creates a team.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**TeamResource**](../model/TeamResource.md)|  | [optional]

### Return type

[**TeamResource**](../model/TeamResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteTeam"></a>
# **deleteTeam**
> deleteTeam(id)

Deletes an existing Team

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Team to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteTeamSpaces"></a>
# **deleteTeamSpaces**
> deleteTeamSpaces(id, baseSpaceId)

Deletes an existing Team

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Team to delete | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListScopedUserRoleForTeam"></a>
# **getListScopedUserRoleForTeam**
> ScopedUserRoleResourceCollection getListScopedUserRoleForTeam(id, skip, take)

Get a list of a Team&#39;s Scoped User Roles

    List all the Scoped User Roles for the Team. Results will be sorted by Space Id with System Teams being sorted before Space Teams.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Team | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**ScopedUserRoleResourceCollection**](../model/ScopedUserRoleResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListScopedUserRoleForTeamSpaces"></a>
# **getListScopedUserRoleForTeamSpaces**
> ScopedUserRoleResourceCollection getListScopedUserRoleForTeamSpaces(id, baseSpaceId, skip, take)

Get a list of a Team&#39;s Scoped User Roles

    List all the Scoped User Roles for the Team. Results will be sorted by Space Id with System Teams being sorted before Space Teams.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Team | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**ScopedUserRoleResourceCollection**](../model/ScopedUserRoleResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTeamById"></a>
# **getTeamById**
> TeamResource getTeamById(id)

Get a Team by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Team to load | [default to null]

### Return type

[**TeamResource**](../model/TeamResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTeamByIdSpaces"></a>
# **getTeamByIdSpaces**
> TeamResource getTeamByIdSpaces(id, baseSpaceId)

Get a Team by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Team to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**TeamResource**](../model/TeamResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllTeams"></a>
# **listAllTeams**
> List listAllTeams()

Get a list of Teams

    Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/TeamResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllTeamsSpaces"></a>
# **listAllTeamsSpaces**
> List listAllTeamsSpaces(baseSpaceId)

Get a list of Teams

    Lists the name and ID of all of the teams in the supplied Octopus Deploy Space. The results will be sorted by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/TeamResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listTeams"></a>
# **listTeams**
> TeamResourceCollection listTeams(ids, partialName, skip, take)

Gets a list of teams

    Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List**](../model/String.md)| A list of Team IDs, to limit the matching of Teams to those with a particular ID. Example: [\&quot;Teams-1\&quot;, \&quot;Teams-2\&quot;] | [optional] [default to null]
 **partialName** | **String**| A partial name, to limit the set of Teams to those with a name that includes the partial name | [optional] [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**TeamResourceCollection**](../model/TeamResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listTeamsSpaces"></a>
# **listTeamsSpaces**
> TeamResourceCollection listTeamsSpaces(baseSpaceId, ids, partialName, skip, take)

Gets a list of teams

    Lists all of the teams in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **ids** | [**List**](../model/String.md)| A list of Team IDs, to limit the matching of Teams to those with a particular ID. Example: [\&quot;Teams-1\&quot;, \&quot;Teams-2\&quot;] | [optional] [default to null]
 **partialName** | **String**| A partial name, to limit the set of Teams to those with a name that includes the partial name | [optional] [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**TeamResourceCollection**](../model/TeamResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateTeam"></a>
# **updateTeam**
> TeamResource updateTeam(id, body)

Modifies an existing Team

    The Everyone team is treated as a special case and its members and external groups may not be changed.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [default to null]
 **body** | [**TeamResource**](../model/TeamResource.md)|  | [optional]

### Return type

[**TeamResource**](../model/TeamResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateTeamSpaces"></a>
# **updateTeamSpaces**
> TeamResource updateTeamSpaces(id, baseSpaceId, body)

Modifies an existing Team

    The Everyone team is treated as a special case and its members and external groups may not be changed.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**TeamResource**](../model/TeamResource.md)|  | [optional]

### Return type

[**TeamResource**](../model/TeamResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

