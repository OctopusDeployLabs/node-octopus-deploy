# MachinesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeploymentTarget**](MachinesApi.md#createDeploymentTarget) | **POST** /machines | Create a DeploymentTargetResource
[**createDeploymentTargetSpaces**](MachinesApi.md#createDeploymentTargetSpaces) | **POST** /{baseSpaceId}/machines | Create a DeploymentTargetResource
[**deleteDeploymentTarget**](MachinesApi.md#deleteDeploymentTarget) | **DELETE** /machines/{id} | Delete a DeploymentTargetResource by ID
[**deleteDeploymentTargetSpaces**](MachinesApi.md#deleteDeploymentTargetSpaces) | **DELETE** /{baseSpaceId}/machines/{id} | Delete a DeploymentTargetResource by ID
[**getDeploymentTargetConnectionStatus**](MachinesApi.md#getDeploymentTargetConnectionStatus) | **GET** /machines/{id}/connection | 
[**getDeploymentTargetConnectionStatusSpaces**](MachinesApi.md#getDeploymentTargetConnectionStatusSpaces) | **GET** /{baseSpaceId}/machines/{id}/connection | 
[**getDeploymentTargetOperatingSystemNamesListAll**](MachinesApi.md#getDeploymentTargetOperatingSystemNamesListAll) | **GET** /machines/operatingsystem/names/all | 
[**getDeploymentTargetOperatingSystemNamesListAllSpaces**](MachinesApi.md#getDeploymentTargetOperatingSystemNamesListAllSpaces) | **GET** /{baseSpaceId}/machines/operatingsystem/names/all | 
[**getDeploymentTargetOperatingSystemShellNameListAll**](MachinesApi.md#getDeploymentTargetOperatingSystemShellNameListAll) | **GET** /machines/operatingsystem/shells/all | 
[**getDeploymentTargetOperatingSystemShellNameListAllSpaces**](MachinesApi.md#getDeploymentTargetOperatingSystemShellNameListAllSpaces) | **GET** /{baseSpaceId}/machines/operatingsystem/shells/all | 
[**getDiscoverDeploymentTarget**](MachinesApi.md#getDiscoverDeploymentTarget) | **GET** /machines/discover | 
[**getDiscoverDeploymentTargetSpaces**](MachinesApi.md#getDiscoverDeploymentTargetSpaces) | **GET** /{baseSpaceId}/machines/discover | 
[**getMachineResourceById**](MachinesApi.md#getMachineResourceById) | **GET** /machines/{id} | Get a Machine by ID
[**getMachineResourceByIdSpaces**](MachinesApi.md#getMachineResourceByIdSpaces) | **GET** /{baseSpaceId}/machines/{id} | Get a Machine by ID
[**indexDeploymentTargetTasks**](MachinesApi.md#indexDeploymentTargetTasks) | **GET** /machines/{id}/tasks | Get a list of TaskResources for the given DeploymentTargetResource
[**indexDeploymentTargetTasksSpaces**](MachinesApi.md#indexDeploymentTargetTasksSpaces) | **GET** /{baseSpaceId}/machines/{id}/tasks | Get a list of TaskResources for the given DeploymentTargetResource
[**indexDeploymentTargets**](MachinesApi.md#indexDeploymentTargets) | **GET** /machines | Get a list of DeploymentTargetResources
[**indexDeploymentTargetsSpaces**](MachinesApi.md#indexDeploymentTargetsSpaces) | **GET** /{baseSpaceId}/machines | Get a list of DeploymentTargetResources
[**listAllDeploymentTargets**](MachinesApi.md#listAllDeploymentTargets) | **GET** /machines/all | Get a list of DeploymentTargetResources
[**listAllDeploymentTargetsSpaces**](MachinesApi.md#listAllDeploymentTargetsSpaces) | **GET** /{baseSpaceId}/machines/all | Get a list of DeploymentTargetResources
[**updateDeploymentTarget**](MachinesApi.md#updateDeploymentTarget) | **PUT** /machines/{id} | Modify a DeploymentTargetResource by ID
[**updateDeploymentTargetSpaces**](MachinesApi.md#updateDeploymentTargetSpaces) | **PUT** /{baseSpaceId}/machines/{id} | Modify a DeploymentTargetResource by ID


<a name="createDeploymentTarget"></a>
# **createDeploymentTarget**
> DeploymentTargetResource createDeploymentTarget(body)

Create a DeploymentTargetResource

    Creates a new machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeploymentTargetResource**](../model/DeploymentTargetResource.md)| The DeploymentTargetResource resource to create | [optional]

### Return type

[**DeploymentTargetResource**](../model/DeploymentTargetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createDeploymentTargetSpaces"></a>
# **createDeploymentTargetSpaces**
> DeploymentTargetResource createDeploymentTargetSpaces(baseSpaceId, body)

Create a DeploymentTargetResource

    Creates a new machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**DeploymentTargetResource**](../model/DeploymentTargetResource.md)| The DeploymentTargetResource resource to create | [optional]

### Return type

[**DeploymentTargetResource**](../model/DeploymentTargetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteDeploymentTarget"></a>
# **deleteDeploymentTarget**
> deleteDeploymentTarget(id)

Delete a DeploymentTargetResource by ID

    Deletes an existing machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the DeploymentTargetResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteDeploymentTargetSpaces"></a>
# **deleteDeploymentTargetSpaces**
> deleteDeploymentTargetSpaces(baseSpaceId, id)

Delete a DeploymentTargetResource by ID

    Deletes an existing machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the DeploymentTargetResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getDeploymentTargetConnectionStatus"></a>
# **getDeploymentTargetConnectionStatus**
> MachineConnectionStatus getDeploymentTargetConnectionStatus(id)



    Get the status of the network connection between the Octopus server and a machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**MachineConnectionStatus**](../model/MachineConnectionStatus.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentTargetConnectionStatusSpaces"></a>
# **getDeploymentTargetConnectionStatusSpaces**
> MachineConnectionStatus getDeploymentTargetConnectionStatusSpaces(baseSpaceId, id)



    Get the status of the network connection between the Octopus server and a machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**MachineConnectionStatus**](../model/MachineConnectionStatus.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentTargetOperatingSystemNamesListAll"></a>
# **getDeploymentTargetOperatingSystemNamesListAll**
> List getDeploymentTargetOperatingSystemNamesListAll()



    Gets all operating system names for deployment targets. The result will be a string array.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/string.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentTargetOperatingSystemNamesListAllSpaces"></a>
# **getDeploymentTargetOperatingSystemNamesListAllSpaces**
> List getDeploymentTargetOperatingSystemNamesListAllSpaces(baseSpaceId)



    Gets all operating system names for deployment targets. The result will be a string array.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/string.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentTargetOperatingSystemShellNameListAll"></a>
# **getDeploymentTargetOperatingSystemShellNameListAll**
> List getDeploymentTargetOperatingSystemShellNameListAll()



    Gets all operating system shell names for deployment targets. The result will be a string array.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/string.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentTargetOperatingSystemShellNameListAllSpaces"></a>
# **getDeploymentTargetOperatingSystemShellNameListAllSpaces**
> List getDeploymentTargetOperatingSystemShellNameListAllSpaces(baseSpaceId)



    Gets all operating system shell names for deployment targets. The result will be a string array.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/string.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDiscoverDeploymentTarget"></a>
# **getDiscoverDeploymentTarget**
> MachineResource getDiscoverDeploymentTarget()



    Interrogate a machine for communication details so that it may be added to the installation.

### Parameters
This endpoint does not need any parameter.

### Return type

[**MachineResource**](../model/MachineResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDiscoverDeploymentTargetSpaces"></a>
# **getDiscoverDeploymentTargetSpaces**
> MachineResource getDiscoverDeploymentTargetSpaces(baseSpaceId)



    Interrogate a machine for communication details so that it may be added to the installation.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**MachineResource**](../model/MachineResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMachineResourceById"></a>
# **getMachineResourceById**
> DeploymentTargetResource getMachineResourceById(id)

Get a Machine by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Machine to load | [default to null]

### Return type

[**DeploymentTargetResource**](../model/DeploymentTargetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMachineResourceByIdSpaces"></a>
# **getMachineResourceByIdSpaces**
> DeploymentTargetResource getMachineResourceByIdSpaces(id, baseSpaceId)

Get a Machine by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Machine to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**DeploymentTargetResource**](../model/DeploymentTargetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexDeploymentTargetTasks"></a>
# **indexDeploymentTargetTasks**
> TaskResourceCollection indexDeploymentTargetTasks(id, skip, take)

Get a list of TaskResources for the given DeploymentTargetResource

    Get the history of related tasks for a machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the DeploymentTarget | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**TaskResourceCollection**](../model/TaskResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexDeploymentTargetTasksSpaces"></a>
# **indexDeploymentTargetTasksSpaces**
> TaskResourceCollection indexDeploymentTargetTasksSpaces(baseSpaceId, id, skip, take)

Get a list of TaskResources for the given DeploymentTargetResource

    Get the history of related tasks for a machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the DeploymentTarget | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**TaskResourceCollection**](../model/TaskResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexDeploymentTargets"></a>
# **indexDeploymentTargets**
> DeploymentTargetResourceCollection indexDeploymentTargets(skip, take)

Get a list of DeploymentTargetResources

    Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**DeploymentTargetResourceCollection**](../model/DeploymentTargetResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexDeploymentTargetsSpaces"></a>
# **indexDeploymentTargetsSpaces**
> DeploymentTargetResourceCollection indexDeploymentTargetsSpaces(baseSpaceId, skip, take)

Get a list of DeploymentTargetResources

    Lists all of the registered machines in the supplied Octopus Deploy Space, from all environments. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**DeploymentTargetResourceCollection**](../model/DeploymentTargetResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllDeploymentTargets"></a>
# **listAllDeploymentTargets**
> List listAllDeploymentTargets()

Get a list of DeploymentTargetResources

    Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/DeploymentTargetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllDeploymentTargetsSpaces"></a>
# **listAllDeploymentTargetsSpaces**
> List listAllDeploymentTargetsSpaces(baseSpaceId)

Get a list of DeploymentTargetResources

    Lists all of the deployment targets in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/DeploymentTargetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateDeploymentTarget"></a>
# **updateDeploymentTarget**
> DeploymentTargetResource updateDeploymentTarget(id, body)

Modify a DeploymentTargetResource by ID

    Modifies an existing machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the DeploymentTargetResource to modify | [default to null]
 **body** | [**DeploymentTargetResource**](../model/DeploymentTargetResource.md)| The DeploymentTargetResource resource to create | [optional]

### Return type

[**DeploymentTargetResource**](../model/DeploymentTargetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateDeploymentTargetSpaces"></a>
# **updateDeploymentTargetSpaces**
> DeploymentTargetResource updateDeploymentTargetSpaces(baseSpaceId, id, body)

Modify a DeploymentTargetResource by ID

    Modifies an existing machine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the DeploymentTargetResource to modify | [default to null]
 **body** | [**DeploymentTargetResource**](../model/DeploymentTargetResource.md)| The DeploymentTargetResource resource to create | [optional]

### Return type

[**DeploymentTargetResource**](../model/DeploymentTargetResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

