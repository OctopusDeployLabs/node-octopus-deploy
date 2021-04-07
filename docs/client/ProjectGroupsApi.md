# ProjectGroupsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProjectGroup**](ProjectGroupsApi.md#createProjectGroup) | **POST** /projectgroups | Create a ProjectGroupResource
[**createProjectGroupSpaces**](ProjectGroupsApi.md#createProjectGroupSpaces) | **POST** /{baseSpaceId}/projectgroups | Create a ProjectGroupResource
[**deleteProjectGroup**](ProjectGroupsApi.md#deleteProjectGroup) | **DELETE** /projectgroups/{id} | Delete a ProjectGroupResource by ID
[**deleteProjectGroupSpaces**](ProjectGroupsApi.md#deleteProjectGroupSpaces) | **DELETE** /{baseSpaceId}/projectgroups/{id} | Delete a ProjectGroupResource by ID
[**getProjectGroupById**](ProjectGroupsApi.md#getProjectGroupById) | **GET** /projectgroups/{id} | Get a Project Group by ID
[**getProjectGroupByIdSpaces**](ProjectGroupsApi.md#getProjectGroupByIdSpaces) | **GET** /{baseSpaceId}/projectgroups/{id} | Get a Project Group by ID
[**indexProjectGroupProjects**](ProjectGroupsApi.md#indexProjectGroupProjects) | **GET** /projectgroups/{id}/projects | Lists all of the Projects that belong to the given Project Group
[**indexProjectGroupProjectsSpaces**](ProjectGroupsApi.md#indexProjectGroupProjectsSpaces) | **GET** /{baseSpaceId}/projectgroups/{id}/projects | Lists all of the Projects that belong to the given Project Group
[**indexProjectGroups**](ProjectGroupsApi.md#indexProjectGroups) | **GET** /projectgroups | Get a list of ProjectGroupResources
[**indexProjectGroupsSpaces**](ProjectGroupsApi.md#indexProjectGroupsSpaces) | **GET** /{baseSpaceId}/projectgroups | Get a list of ProjectGroupResources
[**listAllProjectGroups**](ProjectGroupsApi.md#listAllProjectGroups) | **GET** /projectgroups/all | Get a list of Project Group
[**listAllProjectGroupsSpaces**](ProjectGroupsApi.md#listAllProjectGroupsSpaces) | **GET** /{baseSpaceId}/projectgroups/all | Get a list of Project Group
[**updateProjectGroup**](ProjectGroupsApi.md#updateProjectGroup) | **PUT** /projectgroups/{id} | Modify a ProjectGroupResource by ID
[**updateProjectGroupSpaces**](ProjectGroupsApi.md#updateProjectGroupSpaces) | **PUT** /{baseSpaceId}/projectgroups/{id} | Modify a ProjectGroupResource by ID


<a name="createProjectGroup"></a>
# **createProjectGroup**
> ProjectGroupResource createProjectGroup(body)

Create a ProjectGroupResource

    Creates a new project group.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProjectGroupResource**](../model/ProjectGroupResource.md)| The ProjectGroupResource resource to create | [optional]

### Return type

[**ProjectGroupResource**](../model/ProjectGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createProjectGroupSpaces"></a>
# **createProjectGroupSpaces**
> ProjectGroupResource createProjectGroupSpaces(baseSpaceId, body)

Create a ProjectGroupResource

    Creates a new project group.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**ProjectGroupResource**](../model/ProjectGroupResource.md)| The ProjectGroupResource resource to create | [optional]

### Return type

[**ProjectGroupResource**](../model/ProjectGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteProjectGroup"></a>
# **deleteProjectGroup**
> deleteProjectGroup(id)

Delete a ProjectGroupResource by ID

    Deletes an existing project group.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProjectGroupResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteProjectGroupSpaces"></a>
# **deleteProjectGroupSpaces**
> deleteProjectGroupSpaces(baseSpaceId, id)

Delete a ProjectGroupResource by ID

    Deletes an existing project group.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ProjectGroupResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getProjectGroupById"></a>
# **getProjectGroupById**
> ProjectGroupResource getProjectGroupById(id)

Get a Project Group by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProjectGroup to load | [default to null]

### Return type

[**ProjectGroupResource**](../model/ProjectGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getProjectGroupByIdSpaces"></a>
# **getProjectGroupByIdSpaces**
> ProjectGroupResource getProjectGroupByIdSpaces(id, baseSpaceId)

Get a Project Group by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProjectGroup to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**ProjectGroupResource**](../model/ProjectGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectGroupProjects"></a>
# **indexProjectGroupProjects**
> ProjectResourceCollection indexProjectGroupProjects(id, skip, take)

Lists all of the Projects that belong to the given Project Group

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Project Group to load | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**ProjectResourceCollection**](../model/ProjectResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectGroupProjectsSpaces"></a>
# **indexProjectGroupProjectsSpaces**
> ProjectResourceCollection indexProjectGroupProjectsSpaces(id, baseSpaceId, skip, take)

Lists all of the Projects that belong to the given Project Group

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Project Group to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**ProjectResourceCollection**](../model/ProjectResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectGroups"></a>
# **indexProjectGroups**
> ProjectGroupResourceCollection indexProjectGroups(skip, take)

Get a list of ProjectGroupResources

    Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ProjectGroupResourceCollection**](../model/ProjectGroupResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectGroupsSpaces"></a>
# **indexProjectGroupsSpaces**
> ProjectGroupResourceCollection indexProjectGroupsSpaces(baseSpaceId, skip, take)

Get a list of ProjectGroupResources

    Lists all of the project groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ProjectGroupResourceCollection**](../model/ProjectGroupResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllProjectGroups"></a>
# **listAllProjectGroups**
> List listAllProjectGroups()

Get a list of Project Group

    Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/ProjectGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllProjectGroupsSpaces"></a>
# **listAllProjectGroupsSpaces**
> List listAllProjectGroupsSpaces(baseSpaceId)

Get a list of Project Group

    Lists the name and ID of all of the Project Groups in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/ProjectGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateProjectGroup"></a>
# **updateProjectGroup**
> ProjectGroupResource updateProjectGroup(id, body)

Modify a ProjectGroupResource by ID

    Modifies an existing project group.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProjectGroupResource to modify | [default to null]
 **body** | [**ProjectGroupResource**](../model/ProjectGroupResource.md)| The ProjectGroupResource resource to create | [optional]

### Return type

[**ProjectGroupResource**](../model/ProjectGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateProjectGroupSpaces"></a>
# **updateProjectGroupSpaces**
> ProjectGroupResource updateProjectGroupSpaces(baseSpaceId, id, body)

Modify a ProjectGroupResource by ID

    Modifies an existing project group.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ProjectGroupResource to modify | [default to null]
 **body** | [**ProjectGroupResource**](../model/ProjectGroupResource.md)| The ProjectGroupResource resource to create | [optional]

### Return type

[**ProjectGroupResource**](../model/ProjectGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

