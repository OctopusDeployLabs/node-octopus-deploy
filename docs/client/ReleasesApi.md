# ReleasesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDefectReported**](ReleasesApi.md#createDefectReported) | **POST** /releases/{id}/defects | 
[**createDefectReportedSpaces**](ReleasesApi.md#createDefectReportedSpaces) | **POST** /{baseSpaceId}/releases/{id}/defects | 
[**createDefectResolved**](ReleasesApi.md#createDefectResolved) | **POST** /releases/{id}/defects/resolve | 
[**createDefectResolvedSpaces**](ReleasesApi.md#createDefectResolvedSpaces) | **POST** /{baseSpaceId}/releases/{id}/defects/resolve | 
[**createDeploymentPreviewCollection**](ReleasesApi.md#createDeploymentPreviewCollection) | **POST** /releases/{id}/deployments/previews | 
[**createDeploymentPreviewCollectionSpaces**](ReleasesApi.md#createDeploymentPreviewCollectionSpaces) | **POST** /{baseSpaceId}/releases/{id}/deployments/previews | 
[**createRelease**](ReleasesApi.md#createRelease) | **POST** /releases | Create a ReleaseResource
[**createReleaseSnapshotVariables**](ReleasesApi.md#createReleaseSnapshotVariables) | **POST** /releases/{id}/snapshot-variables | 
[**createReleaseSnapshotVariablesSpaces**](ReleasesApi.md#createReleaseSnapshotVariablesSpaces) | **POST** /{baseSpaceId}/releases/{id}/snapshot-variables | 
[**createReleaseSpaces**](ReleasesApi.md#createReleaseSpaces) | **POST** /{baseSpaceId}/releases | Create a ReleaseResource
[**deleteRelease**](ReleasesApi.md#deleteRelease) | **DELETE** /releases/{id} | Delete a ReleaseResource by ID
[**deleteReleaseSpaces**](ReleasesApi.md#deleteReleaseSpaces) | **DELETE** /{baseSpaceId}/releases/{id} | Delete a ReleaseResource by ID
[**getDeploymentPreview**](ReleasesApi.md#getDeploymentPreview) | **GET** /releases/{id}/deployments/preview/{environment} | 
[**getDeploymentPreview1**](ReleasesApi.md#getDeploymentPreview1) | **GET** /releases/{id}/deployments/preview/{environment}/{tenant} | 
[**getDeploymentPreviewSpaces**](ReleasesApi.md#getDeploymentPreviewSpaces) | **GET** /{baseSpaceId}/releases/{id}/deployments/preview/{environment} | 
[**getDeploymentPreviewSpaces1**](ReleasesApi.md#getDeploymentPreviewSpaces1) | **GET** /{baseSpaceId}/releases/{id}/deployments/preview/{environment}/{tenant} | 
[**getDeploymentTemplate**](ReleasesApi.md#getDeploymentTemplate) | **GET** /releases/{id}/deployments/template | 
[**getDeploymentTemplateSpaces**](ReleasesApi.md#getDeploymentTemplateSpaces) | **GET** /{baseSpaceId}/releases/{id}/deployments/template | 
[**getListDefects**](ReleasesApi.md#getListDefects) | **GET** /releases/{id}/defects | 
[**getListDefectsSpaces**](ReleasesApi.md#getListDefectsSpaces) | **GET** /{baseSpaceId}/releases/{id}/defects | 
[**getReleaseById**](ReleasesApi.md#getReleaseById) | **GET** /releases/{id} | Get a Release by ID
[**getReleaseByIdSpaces**](ReleasesApi.md#getReleaseByIdSpaces) | **GET** /{baseSpaceId}/releases/{id} | Get a Release by ID
[**getReleaseByProjectAndVersion**](ReleasesApi.md#getReleaseByProjectAndVersion) | **GET** /projects/{id}/releases/{version} | 
[**getReleaseByProjectAndVersionSpaces**](ReleasesApi.md#getReleaseByProjectAndVersionSpaces) | **GET** /{baseSpaceId}/projects/{id}/releases/{version} | 
[**getReleaseLifecycleProgression**](ReleasesApi.md#getReleaseLifecycleProgression) | **GET** /releases/{id}/progression | 
[**getReleaseLifecycleProgressionSpaces**](ReleasesApi.md#getReleaseLifecycleProgressionSpaces) | **GET** /{baseSpaceId}/releases/{id}/progression | 
[**indexProjectReleases**](ReleasesApi.md#indexProjectReleases) | **GET** /projects/{id}/releases | Get a list of ReleaseResources for the given ProjectResource
[**indexProjectReleasesSpaces**](ReleasesApi.md#indexProjectReleasesSpaces) | **GET** /{baseSpaceId}/projects/{id}/releases | Get a list of ReleaseResources for the given ProjectResource
[**indexReleaseDeployments**](ReleasesApi.md#indexReleaseDeployments) | **GET** /releases/{id}/deployments | Lists all of the Deployments that belong to the given Release
[**indexReleaseDeploymentsSpaces**](ReleasesApi.md#indexReleaseDeploymentsSpaces) | **GET** /{baseSpaceId}/releases/{id}/deployments | Lists all of the Deployments that belong to the given Release
[**indexReleases**](ReleasesApi.md#indexReleases) | **GET** /releases | Get a list of Releases
[**indexReleasesSpaces**](ReleasesApi.md#indexReleasesSpaces) | **GET** /{baseSpaceId}/releases | Get a list of Releases
[**updateRelease**](ReleasesApi.md#updateRelease) | **PUT** /releases/{id} | Modify a ReleaseResource by ID
[**updateReleaseSpaces**](ReleasesApi.md#updateReleaseSpaces) | **PUT** /{baseSpaceId}/releases/{id} | Modify a ReleaseResource by ID


<a name="createDefectReported"></a>
# **createDefectReported**
> DefectResource createDefectReported(id)



    Record defect in a release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**DefectResource**](../model/DefectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createDefectReportedSpaces"></a>
# **createDefectReportedSpaces**
> DefectResource createDefectReportedSpaces(baseSpaceId, id)



    Record defect in a release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**DefectResource**](../model/DefectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createDefectResolved"></a>
# **createDefectResolved**
> DefectResource createDefectResolved(id)



    Update or resolve defect in a release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**DefectResource**](../model/DefectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createDefectResolvedSpaces"></a>
# **createDefectResolvedSpaces**
> DefectResource createDefectResolvedSpaces(baseSpaceId, id)



    Update or resolve defect in a release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**DefectResource**](../model/DefectResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createDeploymentPreviewCollection"></a>
# **createDeploymentPreviewCollection**
> List createDeploymentPreviewCollection(id)



    Returns an array of documents that describes what steps will/won&#39;t be run during deployments to a given set of environments and tenants.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/DeploymentPreviewResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createDeploymentPreviewCollectionSpaces"></a>
# **createDeploymentPreviewCollectionSpaces**
> List createDeploymentPreviewCollectionSpaces(baseSpaceId, id)



    Returns an array of documents that describes what steps will/won&#39;t be run during deployments to a given set of environments and tenants.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/DeploymentPreviewResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createRelease"></a>
# **createRelease**
> ReleaseResource createRelease(ignoreChannelRules, body)

Create a ReleaseResource

    Creates a new release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ignoreChannelRules** | **Boolean**| Ignore channel rules. | [optional] [default to null]
 **body** | [**ReleaseResource**](../model/ReleaseResource.md)| The ReleaseResource resource to create | [optional]

### Return type

[**ReleaseResource**](../model/ReleaseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createReleaseSnapshotVariables"></a>
# **createReleaseSnapshotVariables**
> ReleaseResource createReleaseSnapshotVariables(id)



    Refresh the variable snapshots associated with the release. The project&#39;s deployment process must not have changed since the release was created.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**ReleaseResource**](../model/ReleaseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createReleaseSnapshotVariablesSpaces"></a>
# **createReleaseSnapshotVariablesSpaces**
> ReleaseResource createReleaseSnapshotVariablesSpaces(baseSpaceId, id)



    Refresh the variable snapshots associated with the release. The project&#39;s deployment process must not have changed since the release was created.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**ReleaseResource**](../model/ReleaseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createReleaseSpaces"></a>
# **createReleaseSpaces**
> ReleaseResource createReleaseSpaces(baseSpaceId, ignoreChannelRules, body)

Create a ReleaseResource

    Creates a new release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **ignoreChannelRules** | **Boolean**| Ignore channel rules. | [optional] [default to null]
 **body** | [**ReleaseResource**](../model/ReleaseResource.md)| The ReleaseResource resource to create | [optional]

### Return type

[**ReleaseResource**](../model/ReleaseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteRelease"></a>
# **deleteRelease**
> deleteRelease(id)

Delete a ReleaseResource by ID

    Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ReleaseResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteReleaseSpaces"></a>
# **deleteReleaseSpaces**
> deleteReleaseSpaces(baseSpaceId, id)

Delete a ReleaseResource by ID

    Deletes an existing release, along with all of the deployments, tasks and other associated resources belonging to the release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ReleaseResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getDeploymentPreview"></a>
# **getDeploymentPreview**
> DeploymentPreviewResource getDeploymentPreview(environment, id)



    Gets a document that describes what steps will/won&#39;t be run during a deployment to a given environment (and tenant if supplied).

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment** | **String**| ID of the environment | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**DeploymentPreviewResource**](../model/DeploymentPreviewResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentPreview1"></a>
# **getDeploymentPreview1**
> DeploymentPreviewResource getDeploymentPreview1(environment, id, tenant)



    Gets a document that describes what steps will/won&#39;t be run during a deployment to a given environment (and tenant if supplied).

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment** | **String**| ID of the environment | [default to null]
 **id** | **String**| ID of the resource | [default to null]
 **tenant** | **String**| ID of the tenant | [default to null]

### Return type

[**DeploymentPreviewResource**](../model/DeploymentPreviewResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentPreviewSpaces"></a>
# **getDeploymentPreviewSpaces**
> DeploymentPreviewResource getDeploymentPreviewSpaces(baseSpaceId, environment, id)



    Gets a document that describes what steps will/won&#39;t be run during a deployment to a given environment (and tenant if supplied).

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **environment** | **String**| ID of the environment | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**DeploymentPreviewResource**](../model/DeploymentPreviewResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentPreviewSpaces1"></a>
# **getDeploymentPreviewSpaces1**
> DeploymentPreviewResource getDeploymentPreviewSpaces1(baseSpaceId, environment, id, tenant)



    Gets a document that describes what steps will/won&#39;t be run during a deployment to a given environment (and tenant if supplied).

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **environment** | **String**| ID of the environment | [default to null]
 **id** | **String**| ID of the resource | [default to null]
 **tenant** | **String**| ID of the tenant | [default to null]

### Return type

[**DeploymentPreviewResource**](../model/DeploymentPreviewResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentTemplate"></a>
# **getDeploymentTemplate**
> DeploymentTemplateResource getDeploymentTemplate(id)



    Gets all of the information necessary for creating or editing a deployment for this release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**DeploymentTemplateResource**](../model/DeploymentTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentTemplateSpaces"></a>
# **getDeploymentTemplateSpaces**
> DeploymentTemplateResource getDeploymentTemplateSpaces(baseSpaceId, id)



    Gets all of the information necessary for creating or editing a deployment for this release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**DeploymentTemplateResource**](../model/DeploymentTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListDefects"></a>
# **getListDefects**
> DefectResourceCollection getListDefects(id)



    Gets all defects for a release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the defect | [default to null]

### Return type

[**DefectResourceCollection**](../model/DefectResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListDefectsSpaces"></a>
# **getListDefectsSpaces**
> DefectResourceCollection getListDefectsSpaces(baseSpaceId, id)



    Gets all defects for a release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the defect | [default to null]

### Return type

[**DefectResourceCollection**](../model/DefectResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getReleaseById"></a>
# **getReleaseById**
> ReleaseResource getReleaseById(id)

Get a Release by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Release to load | [default to null]

### Return type

[**ReleaseResource**](../model/ReleaseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getReleaseByIdSpaces"></a>
# **getReleaseByIdSpaces**
> ReleaseResource getReleaseByIdSpaces(id, baseSpaceId)

Get a Release by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Release to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**ReleaseResource**](../model/ReleaseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getReleaseByProjectAndVersion"></a>
# **getReleaseByProjectAndVersion**
> ReleaseResource getReleaseByProjectAndVersion(id, version)



    Gets a single release by project ID and version number.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]
 **version** | **String**| Release version number | [default to null]

### Return type

[**ReleaseResource**](../model/ReleaseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getReleaseByProjectAndVersionSpaces"></a>
# **getReleaseByProjectAndVersionSpaces**
> ReleaseResource getReleaseByProjectAndVersionSpaces(baseSpaceId, id, version)



    Gets a single release by project ID and version number.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]
 **version** | **String**| Release version number | [default to null]

### Return type

[**ReleaseResource**](../model/ReleaseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getReleaseLifecycleProgression"></a>
# **getReleaseLifecycleProgression**
> LifecycleProgressionResource getReleaseLifecycleProgression(id)



    Gets all of the information necessary for creating or editing a deployment for this release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**LifecycleProgressionResource**](../model/LifecycleProgressionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getReleaseLifecycleProgressionSpaces"></a>
# **getReleaseLifecycleProgressionSpaces**
> LifecycleProgressionResource getReleaseLifecycleProgressionSpaces(baseSpaceId, id)



    Gets all of the information necessary for creating or editing a deployment for this release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**LifecycleProgressionResource**](../model/LifecycleProgressionResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectReleases"></a>
# **indexProjectReleases**
> ReleaseResourceCollection indexProjectReleases(id, skip, take)

Get a list of ReleaseResources for the given ProjectResource

    Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Project | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**ReleaseResourceCollection**](../model/ReleaseResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexProjectReleasesSpaces"></a>
# **indexProjectReleasesSpaces**
> ReleaseResourceCollection indexProjectReleasesSpaces(baseSpaceId, id, skip, take)

Get a list of ReleaseResources for the given ProjectResource

    Lists all of the releases that belong to the given project. Releases will be ordered from most recent to least recent.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the Project | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**ReleaseResourceCollection**](../model/ReleaseResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexReleaseDeployments"></a>
# **indexReleaseDeployments**
> DeploymentResourceCollection indexReleaseDeployments(id, skip, take)

Lists all of the Deployments that belong to the given Release

    Deployments will be ordered from most recent to least recent

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Release to load | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**DeploymentResourceCollection**](../model/DeploymentResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexReleaseDeploymentsSpaces"></a>
# **indexReleaseDeploymentsSpaces**
> DeploymentResourceCollection indexReleaseDeploymentsSpaces(id, baseSpaceId, skip, take)

Lists all of the Deployments that belong to the given Release

    Deployments will be ordered from most recent to least recent

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Release to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**DeploymentResourceCollection**](../model/DeploymentResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexReleases"></a>
# **indexReleases**
> ReleaseResourceCollection indexReleases(skip, take)

Get a list of Releases

    Lists all of the releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**ReleaseResourceCollection**](../model/ReleaseResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexReleasesSpaces"></a>
# **indexReleasesSpaces**
> ReleaseResourceCollection indexReleasesSpaces(baseSpaceId, skip, take)

Get a list of Releases

    Lists all of the releases in the supplied Octopus Deploy Space, from all projects. The results will be sorted from most recent to least recent release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**ReleaseResourceCollection**](../model/ReleaseResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateRelease"></a>
# **updateRelease**
> ReleaseResource updateRelease(id, ignoreChannelRules, body)

Modify a ReleaseResource by ID

    Updates an existing release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ReleaseResource to modify | [default to null]
 **ignoreChannelRules** | **Boolean**| Ignore channel rules. | [optional] [default to null]
 **body** | [**ReleaseResource**](../model/ReleaseResource.md)| The ReleaseResource resource to create | [optional]

### Return type

[**ReleaseResource**](../model/ReleaseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateReleaseSpaces"></a>
# **updateReleaseSpaces**
> ReleaseResource updateReleaseSpaces(baseSpaceId, id, ignoreChannelRules, body)

Modify a ReleaseResource by ID

    Updates an existing release.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the ReleaseResource to modify | [default to null]
 **ignoreChannelRules** | **Boolean**| Ignore channel rules. | [optional] [default to null]
 **body** | [**ReleaseResource**](../model/ReleaseResource.md)| The ReleaseResource resource to create | [optional]

### Return type

[**ReleaseResource**](../model/ReleaseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

