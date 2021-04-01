# ProjectsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConvertProjectToVersionControlled**](ProjectsApi.md#createConvertProjectToVersionControlled) | **POST** /projects/{projectId}/versioncontrol/convert | 
[**createConvertProjectToVersionControlledSpaces**](ProjectsApi.md#createConvertProjectToVersionControlledSpaces) | **POST** /{baseSpaceId}/projects/{projectId}/versioncontrol/convert | 
[**createProject**](ProjectsApi.md#createProject) | **POST** /projects | Create a ProjectResource
[**createProjectLogo**](ProjectsApi.md#createProjectLogo) | **POST** /projects/{id}/logo | 
[**createProjectLogoSpaces**](ProjectsApi.md#createProjectLogoSpaces) | **POST** /{baseSpaceId}/projects/{id}/logo | 
[**createProjectSpaces**](ProjectsApi.md#createProjectSpaces) | **POST** /{baseSpaceId}/projects | Create a ProjectResource
[**createVersionControlSettingsConnectivityCheck**](ProjectsApi.md#createVersionControlSettingsConnectivityCheck) | **POST** /projects/{id}/versioncontrolsettings/test | 
[**createVersionControlSettingsConnectivityCheckSpaces**](ProjectsApi.md#createVersionControlSettingsConnectivityCheckSpaces) | **POST** /{baseSpaceId}/projects/{id}/versioncontrolsettings/test | 
[**deleteProject**](ProjectsApi.md#deleteProject) | **DELETE** /projects/{id} | Delete a ProjectResource by ID
[**deleteProjectSpaces**](ProjectsApi.md#deleteProjectSpaces) | **DELETE** /{baseSpaceId}/projects/{id} | Delete a ProjectResource by ID
[**getProjectByIdOrSlug**](ProjectsApi.md#getProjectByIdOrSlug) | **GET** /projects/{id} | 
[**getProjectByIdOrSlugSpaces**](ProjectsApi.md#getProjectByIdOrSlugSpaces) | **GET** /{baseSpaceId}/projects/{id} | 
[**getProjectLogo**](ProjectsApi.md#getProjectLogo) | **GET** /projects/{id}/logo | 
[**getProjectLogoSpaces**](ProjectsApi.md#getProjectLogoSpaces) | **GET** /{baseSpaceId}/projects/{id}/logo | 
[**getProjectSettingsMetadata**](ProjectsApi.md#getProjectSettingsMetadata) | **GET** /projects/{id}/metadata | 
[**getProjectSettingsMetadataSpaces**](ProjectsApi.md#getProjectSettingsMetadataSpaces) | **GET** /{baseSpaceId}/projects/{id}/metadata | 
[**getProjectSummary**](ProjectsApi.md#getProjectSummary) | **GET** /projects/{id}/summary | 
[**getProjectSummarySpaces**](ProjectsApi.md#getProjectSummarySpaces) | **GET** /{baseSpaceId}/projects/{id}/summary | 
[**indexProjects**](ProjectsApi.md#indexProjects) | **GET** /projects | 
[**indexProjectsSpaces**](ProjectsApi.md#indexProjectsSpaces) | **GET** /{baseSpaceId}/projects | 
[**listAllProjects**](ProjectsApi.md#listAllProjects) | **GET** /projects/all | 
[**listAllProjectsSpaces**](ProjectsApi.md#listAllProjectsSpaces) | **GET** /{baseSpaceId}/projects/all | 
[**updateProject**](ProjectsApi.md#updateProject) | **PUT** /projects/{id} | Modify a ProjectResource by ID
[**updateProjectLogo**](ProjectsApi.md#updateProjectLogo) | **PUT** /projects/{id}/logo | 
[**updateProjectLogoSpaces**](ProjectsApi.md#updateProjectLogoSpaces) | **PUT** /{baseSpaceId}/projects/{id}/logo | 
[**updateProjectSpaces**](ProjectsApi.md#updateProjectSpaces) | **PUT** /{baseSpaceId}/projects/{id} | Modify a ProjectResource by ID


<a name="createConvertProjectToVersionControlled"></a>
# **createConvertProjectToVersionControlled**
> ConvertProjectToVersionControlledResponse createConvertProjectToVersionControlled(projectId)



    Converts an existing project to store its configuration in version control.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of the project resource. | [default to null]

### Return type

[**ConvertProjectToVersionControlledResponse**](../model/ConvertProjectToVersionControlledResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createConvertProjectToVersionControlledSpaces"></a>
# **createConvertProjectToVersionControlledSpaces**
> ConvertProjectToVersionControlledResponse createConvertProjectToVersionControlledSpaces(baseSpaceId, projectId)



    Converts an existing project to store its configuration in version control.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **projectId** | **String**| ID of the project resource. | [default to null]

### Return type

[**ConvertProjectToVersionControlledResponse**](../model/ConvertProjectToVersionControlledResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createProject"></a>
# **createProject**
> ProjectResource createProject(clone, body)

Create a ProjectResource

    Creates a new project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clone** | **String**| The projectId whose configuration is to be copied to the project being created. | [optional] [default to null]
 **body** | [**ProjectResource**](../model/ProjectResource.md)| The ProjectResource resource to create | [optional]

### Return type

[**ProjectResource**](../model/ProjectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createProjectLogo"></a>
# **createProjectLogo**
> createProjectLogo(id)



    Updates the logo associated with the project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="createProjectLogoSpaces"></a>
# **createProjectLogoSpaces**
> createProjectLogoSpaces(baseSpaceId, id)



    Updates the logo associated with the project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="createProjectSpaces"></a>
# **createProjectSpaces**
> ProjectResource createProjectSpaces(baseSpaceId, clone, body)

Create a ProjectResource

    Creates a new project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **clone** | **String**| The projectId whose configuration is to be copied to the project being created. | [optional] [default to null]
 **body** | [**ProjectResource**](../model/ProjectResource.md)| The ProjectResource resource to create | [optional]

### Return type

[**ProjectResource**](../model/ProjectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createVersionControlSettingsConnectivityCheck"></a>
# **createVersionControlSettingsConnectivityCheck**
> ConnectivityCheckResponse createVersionControlSettingsConnectivityCheck(id)



    Tests the VCS settings to make sure we can connect

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the project | [default to null]

### Return type

[**ConnectivityCheckResponse**](../model/ConnectivityCheckResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createVersionControlSettingsConnectivityCheckSpaces"></a>
# **createVersionControlSettingsConnectivityCheckSpaces**
> ConnectivityCheckResponse createVersionControlSettingsConnectivityCheckSpaces(baseSpaceId, id)



    Tests the VCS settings to make sure we can connect

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the project | [default to null]

### Return type

[**ConnectivityCheckResponse**](../model/ConnectivityCheckResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteProject"></a>
# **deleteProject**
> deleteProject(id)

Delete a ProjectResource by ID

    Deletes an existing project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProjectResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteProjectSpaces"></a>
# **deleteProjectSpaces**
> deleteProjectSpaces(baseSpaceId, id)

Delete a ProjectResource by ID

    Deletes an existing project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ProjectResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getProjectByIdOrSlug"></a>
# **getProjectByIdOrSlug**
> ProjectResource getProjectByIdOrSlug(id)



    Gets a single project by ID or Slug.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or slug of the ProjectResource to load | [default to null]

### Return type

[**ProjectResource**](../model/ProjectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getProjectByIdOrSlugSpaces"></a>
# **getProjectByIdOrSlugSpaces**
> ProjectResource getProjectByIdOrSlugSpaces(baseSpaceId, id)



    Gets a single project by ID or Slug.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID or slug of the ProjectResource to load | [default to null]

### Return type

[**ProjectResource**](../model/ProjectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getProjectLogo"></a>
# **getProjectLogo**
> File getProjectLogo(id)



    Gets the logo associated with the project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**File**](../model/file.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

<a name="getProjectLogoSpaces"></a>
# **getProjectLogoSpaces**
> File getProjectLogoSpaces(baseSpaceId, id)



    Gets the logo associated with the project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**File**](../model/file.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

<a name="getProjectSettingsMetadata"></a>
# **getProjectSettingsMetadata**
> List getProjectSettingsMetadata(id)



    Gets the custom settings metadata from the extensions.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/ProjectSettingsMetadata.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getProjectSettingsMetadataSpaces"></a>
# **getProjectSettingsMetadataSpaces**
> List getProjectSettingsMetadataSpaces(baseSpaceId, id)



    Gets the custom settings metadata from the extensions.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/ProjectSettingsMetadata.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getProjectSummary"></a>
# **getProjectSummary**
> ProjectSummary getProjectSummary(id)



    Gets a summary of project-specific information.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**ProjectSummary**](../model/ProjectSummary.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getProjectSummarySpaces"></a>
# **getProjectSummarySpaces**
> ProjectSummary getProjectSummarySpaces(baseSpaceId, id)



    Gets a summary of project-specific information.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**ProjectSummary**](../model/ProjectSummary.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjects"></a>
# **indexProjects**
> ProjectResourceCollection indexProjects(skip, take)



    Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ProjectResourceCollection**](../model/ProjectResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectsSpaces"></a>
# **indexProjectsSpaces**
> ProjectResourceCollection indexProjectsSpaces(baseSpaceId, skip, take)



    Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**ProjectResourceCollection**](../model/ProjectResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllProjects"></a>
# **listAllProjects**
> List listAllProjects()



    Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/ProjectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllProjectsSpaces"></a>
# **listAllProjectsSpaces**
> List listAllProjectsSpaces(baseSpaceId)



    Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/ProjectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateProject"></a>
# **updateProject**
> ProjectResource updateProject(id, body)

Modify a ProjectResource by ID

    Modifies an existing project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ProjectResource to modify | [default to null]
 **body** | [**ProjectResource**](../model/ProjectResource.md)| The ProjectResource resource to create | [optional]

### Return type

[**ProjectResource**](../model/ProjectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateProjectLogo"></a>
# **updateProjectLogo**
> updateProjectLogo(id)



    Updates the logo associated with the project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateProjectLogoSpaces"></a>
# **updateProjectLogoSpaces**
> updateProjectLogoSpaces(baseSpaceId, id)



    Updates the logo associated with the project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateProjectSpaces"></a>
# **updateProjectSpaces**
> ProjectResource updateProjectSpaces(baseSpaceId, id, body)

Modify a ProjectResource by ID

    Modifies an existing project.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ProjectResource to modify | [default to null]
 **body** | [**ProjectResource**](../model/ProjectResource.md)| The ProjectResource resource to create | [optional]

### Return type

[**ProjectResource**](../model/ProjectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

