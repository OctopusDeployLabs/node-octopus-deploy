# DeploymentProcessesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeploymentProcessById**](DeploymentProcessesApi.md#getDeploymentProcessById) | **GET** /deploymentprocesses/{id} | Get a Deployment Process by ID.
[**getDeploymentProcessByIdSpaces**](DeploymentProcessesApi.md#getDeploymentProcessByIdSpaces) | **GET** /{baseSpaceId}/deploymentprocesses/{id} | Get a Deployment Process by ID.
[**getReleaseTemplate**](DeploymentProcessesApi.md#getReleaseTemplate) | **GET** /deploymentprocesses/{deploymentProcessId}/template | Gets all of the information necessary for creating or editing a release using this deployment process.
[**getReleaseTemplateSpaces**](DeploymentProcessesApi.md#getReleaseTemplateSpaces) | **GET** /{baseSpaceId}/deploymentprocesses/{deploymentProcessId}/template | Gets all of the information necessary for creating or editing a release using this deployment process.
[**listDeploymentProcesses**](DeploymentProcessesApi.md#listDeploymentProcesses) | **GET** /deploymentprocesses | Lists all the deployment processes
[**listDeploymentProcessesSpaces**](DeploymentProcessesApi.md#listDeploymentProcessesSpaces) | **GET** /{baseSpaceId}/deploymentprocesses | Lists all the deployment processes
[**updateDeploymentProcessById**](DeploymentProcessesApi.md#updateDeploymentProcessById) | **PUT** /deploymentprocesses/{id} | Modifies a deployment process
[**updateDeploymentProcessByIdSpaces**](DeploymentProcessesApi.md#updateDeploymentProcessByIdSpaces) | **PUT** /{baseSpaceId}/deploymentprocesses/{id} | Modifies a deployment process


<a name="getDeploymentProcessById"></a>
# **getDeploymentProcessById**
> DeploymentProcessResource getDeploymentProcessById(id)

Get a Deployment Process by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the DeploymentProcess to load | [default to null]

### Return type

[**DeploymentProcessResource**](../model/DeploymentProcessResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentProcessByIdSpaces"></a>
# **getDeploymentProcessByIdSpaces**
> DeploymentProcessResource getDeploymentProcessByIdSpaces(id, baseSpaceId)

Get a Deployment Process by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the DeploymentProcess to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**DeploymentProcessResource**](../model/DeploymentProcessResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getReleaseTemplate"></a>
# **getReleaseTemplate**
> ReleaseTemplateResource getReleaseTemplate(deploymentProcessId, channel, releaseId)

Gets all of the information necessary for creating or editing a release using this deployment process.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentProcessId** | **String**| The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60; | [default to null]
 **channel** | **String**| The ID of the channel to use. Example &#x60;Channels-12&#x60; | [optional] [default to null]
 **releaseId** | **String**| The ID of the release to get variables from. Example &#x60;Releases-12&#x60; | [optional] [default to null]

### Return type

[**ReleaseTemplateResource**](../model/ReleaseTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getReleaseTemplateSpaces"></a>
# **getReleaseTemplateSpaces**
> ReleaseTemplateResource getReleaseTemplateSpaces(deploymentProcessId, baseSpaceId, channel, releaseId)

Gets all of the information necessary for creating or editing a release using this deployment process.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentProcessId** | **String**| The ID of the deployment process to use. Example &#x60;deploymentprocess-projects-1&#x60; | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **channel** | **String**| The ID of the channel to use. Example &#x60;Channels-12&#x60; | [optional] [default to null]
 **releaseId** | **String**| The ID of the release to get variables from. Example &#x60;Releases-12&#x60; | [optional] [default to null]

### Return type

[**ReleaseTemplateResource**](../model/ReleaseTemplateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listDeploymentProcesses"></a>
# **listDeploymentProcesses**
> DeploymentProcessResourceCollection listDeploymentProcesses(ids, skip, take)

Lists all the deployment processes

    Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List**](../model/String.md)| A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;] | [optional] [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**DeploymentProcessResourceCollection**](../model/DeploymentProcessResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listDeploymentProcessesSpaces"></a>
# **listDeploymentProcessesSpaces**
> DeploymentProcessResourceCollection listDeploymentProcessesSpaces(baseSpaceId, ids, skip, take)

Lists all the deployment processes

    Lists all the deployment processes in the supplied Octopus Deploy Space, sorted by Id.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **ids** | [**List**](../model/String.md)| A list of DeploymentProcess IDs, to limit the matching of DeploymentProcesses to those with a particular ID. Example: [\&quot;deploymentprocess-Projects-1\&quot;, \&quot;deploymentprocess-Projects-2\&quot;] | [optional] [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 30 | [optional] [default to null]

### Return type

[**DeploymentProcessResourceCollection**](../model/DeploymentProcessResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateDeploymentProcessById"></a>
# **updateDeploymentProcessById**
> DeploymentProcessResource updateDeploymentProcessById(id, body)

Modifies a deployment process

    Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60; | [default to null]
 **body** | [**DeploymentProcessResource**](../model/DeploymentProcessResource.md)|  | [optional]

### Return type

[**DeploymentProcessResource**](../model/DeploymentProcessResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateDeploymentProcessByIdSpaces"></a>
# **updateDeploymentProcessByIdSpaces**
> DeploymentProcessResource updateDeploymentProcessByIdSpaces(id, baseSpaceId, body)

Modifies a deployment process

    Modifies a deployment process. Only allowed for deployment processes owned by a project (cannot be used to change the deployment process owned by a release).

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the deployment process to update. Example &#x60;deploymentprocess-Projects-1&#x60; | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**DeploymentProcessResource**](../model/DeploymentProcessResource.md)|  | [optional]

### Return type

[**DeploymentProcessResource**](../model/DeploymentProcessResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

