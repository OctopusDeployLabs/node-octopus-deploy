# MachinePoliciesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMachinePolicy**](MachinePoliciesApi.md#createMachinePolicy) | **POST** /machinepolicies | Create a MachinePolicyResource
[**createMachinePolicySpaces**](MachinePoliciesApi.md#createMachinePolicySpaces) | **POST** /{baseSpaceId}/machinepolicies | Create a MachinePolicyResource
[**deleteMachinePolicy**](MachinePoliciesApi.md#deleteMachinePolicy) | **DELETE** /machinepolicies/{id} | 
[**deleteMachinePolicySpaces**](MachinePoliciesApi.md#deleteMachinePolicySpaces) | **DELETE** /{baseSpaceId}/machinepolicies/{id} | 
[**getMachinePolicyById**](MachinePoliciesApi.md#getMachinePolicyById) | **GET** /machinepolicies/{id} | Get a Machine Policy by ID
[**getMachinePolicyByIdSpaces**](MachinePoliciesApi.md#getMachinePolicyByIdSpaces) | **GET** /{baseSpaceId}/machinepolicies/{id} | Get a Machine Policy by ID
[**getMachinePolicyTemplate**](MachinePoliciesApi.md#getMachinePolicyTemplate) | **GET** /machinepolicies/template | 
[**getMachinePolicyTemplateSpaces**](MachinePoliciesApi.md#getMachinePolicyTemplateSpaces) | **GET** /{baseSpaceId}/machinepolicies/template | 
[**indexMachinePolicies**](MachinePoliciesApi.md#indexMachinePolicies) | **GET** /machinepolicies | Get a list of MachinePolicyResources
[**indexMachinePoliciesSpaces**](MachinePoliciesApi.md#indexMachinePoliciesSpaces) | **GET** /{baseSpaceId}/machinepolicies | Get a list of MachinePolicyResources
[**indexMachinePolicyDeploymentTargets**](MachinePoliciesApi.md#indexMachinePolicyDeploymentTargets) | **GET** /machinepolicies/{id}/machines | Lists all of the machines that belong to the given Machine Policy
[**indexMachinePolicyDeploymentTargetsSpaces**](MachinePoliciesApi.md#indexMachinePolicyDeploymentTargetsSpaces) | **GET** /{baseSpaceId}/machinepolicies/{id}/machines | Lists all of the machines that belong to the given Machine Policy
[**indexMachinePolicyWorkers**](MachinePoliciesApi.md#indexMachinePolicyWorkers) | **GET** /machinepolicies/{id}/workers | Lists all of the workers that belong to the given Machine Policy
[**indexMachinePolicyWorkersSpaces**](MachinePoliciesApi.md#indexMachinePolicyWorkersSpaces) | **GET** /{baseSpaceId}/machinepolicies/{id}/workers | Lists all of the workers that belong to the given Machine Policy
[**listAllMachinePolicies**](MachinePoliciesApi.md#listAllMachinePolicies) | **GET** /machinepolicies/all | Get a list of Machine Policies
[**listAllMachinePoliciesSpaces**](MachinePoliciesApi.md#listAllMachinePoliciesSpaces) | **GET** /{baseSpaceId}/machinepolicies/all | Get a list of Machine Policies
[**updateMachinePolicy**](MachinePoliciesApi.md#updateMachinePolicy) | **PUT** /machinepolicies/{id} | Modify a MachinePolicyResource by ID
[**updateMachinePolicySpaces**](MachinePoliciesApi.md#updateMachinePolicySpaces) | **PUT** /{baseSpaceId}/machinepolicies/{id} | Modify a MachinePolicyResource by ID


<a name="createMachinePolicy"></a>
# **createMachinePolicy**
> MachinePolicyResource createMachinePolicy(body)

Create a MachinePolicyResource

    Creates a new machine policy.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MachinePolicyResource**](../model/MachinePolicyResource.md)| The MachinePolicyResource resource to create | [optional]

### Return type

[**MachinePolicyResource**](../model/MachinePolicyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createMachinePolicySpaces"></a>
# **createMachinePolicySpaces**
> MachinePolicyResource createMachinePolicySpaces(baseSpaceId, body)

Create a MachinePolicyResource

    Creates a new machine policy.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**MachinePolicyResource**](../model/MachinePolicyResource.md)| The MachinePolicyResource resource to create | [optional]

### Return type

[**MachinePolicyResource**](../model/MachinePolicyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteMachinePolicy"></a>
# **deleteMachinePolicy**
> deleteMachinePolicy(id)



    Deletes an existing machine policy.

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

<a name="deleteMachinePolicySpaces"></a>
# **deleteMachinePolicySpaces**
> deleteMachinePolicySpaces(baseSpaceId, id)



    Deletes an existing machine policy.

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

<a name="getMachinePolicyById"></a>
# **getMachinePolicyById**
> MachinePolicyResource getMachinePolicyById(id)

Get a Machine Policy by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the MachinePolicy to load | [default to null]

### Return type

[**MachinePolicyResource**](../model/MachinePolicyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMachinePolicyByIdSpaces"></a>
# **getMachinePolicyByIdSpaces**
> MachinePolicyResource getMachinePolicyByIdSpaces(id, baseSpaceId)

Get a Machine Policy by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the MachinePolicy to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**MachinePolicyResource**](../model/MachinePolicyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMachinePolicyTemplate"></a>
# **getMachinePolicyTemplate**
> MachinePolicyResource getMachinePolicyTemplate()



    Gets a template for a new Machine Policy, which includes any defaults.

### Parameters
This endpoint does not need any parameter.

### Return type

[**MachinePolicyResource**](../model/MachinePolicyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMachinePolicyTemplateSpaces"></a>
# **getMachinePolicyTemplateSpaces**
> MachinePolicyResource getMachinePolicyTemplateSpaces(baseSpaceId)



    Gets a template for a new Machine Policy, which includes any defaults.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**MachinePolicyResource**](../model/MachinePolicyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexMachinePolicies"></a>
# **indexMachinePolicies**
> MachinePolicyResourceCollection indexMachinePolicies(skip, take)

Get a list of MachinePolicyResources

    Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**MachinePolicyResourceCollection**](../model/MachinePolicyResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexMachinePoliciesSpaces"></a>
# **indexMachinePoliciesSpaces**
> MachinePolicyResourceCollection indexMachinePoliciesSpaces(baseSpaceId, skip, take)

Get a list of MachinePolicyResources

    Lists all of the machine policies in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**MachinePolicyResourceCollection**](../model/MachinePolicyResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexMachinePolicyDeploymentTargets"></a>
# **indexMachinePolicyDeploymentTargets**
> DeploymentTargetResourceCollection indexMachinePolicyDeploymentTargets(id, skip, take)

Lists all of the machines that belong to the given Machine Policy

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the MachinePolicy to load | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 10 | [optional] [default to null]

### Return type

[**DeploymentTargetResourceCollection**](../model/DeploymentTargetResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexMachinePolicyDeploymentTargetsSpaces"></a>
# **indexMachinePolicyDeploymentTargetsSpaces**
> DeploymentTargetResourceCollection indexMachinePolicyDeploymentTargetsSpaces(id, baseSpaceId, skip, take)

Lists all of the machines that belong to the given Machine Policy

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the MachinePolicy to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 10 | [optional] [default to null]

### Return type

[**DeploymentTargetResourceCollection**](../model/DeploymentTargetResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexMachinePolicyWorkers"></a>
# **indexMachinePolicyWorkers**
> WorkerResourceCollection indexMachinePolicyWorkers(id, skip, take)

Lists all of the workers that belong to the given Machine Policy

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Machine Policy to load | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 10 | [optional] [default to null]

### Return type

[**WorkerResourceCollection**](../model/WorkerResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexMachinePolicyWorkersSpaces"></a>
# **indexMachinePolicyWorkersSpaces**
> WorkerResourceCollection indexMachinePolicyWorkersSpaces(id, baseSpaceId, skip, take)

Lists all of the workers that belong to the given Machine Policy

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Machine Policy to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip. Defaults to zero | [optional] [default to null]
 **take** | **Integer**| Number of items to take. Defaults to 10 | [optional] [default to null]

### Return type

[**WorkerResourceCollection**](../model/WorkerResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllMachinePolicies"></a>
# **listAllMachinePolicies**
> List listAllMachinePolicies()

Get a list of Machine Policies

    Lists all the Machine Policies in the supplied Octopus Deploy Space.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/MachinePolicyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllMachinePoliciesSpaces"></a>
# **listAllMachinePoliciesSpaces**
> List listAllMachinePoliciesSpaces(baseSpaceId)

Get a list of Machine Policies

    Lists all the Machine Policies in the supplied Octopus Deploy Space.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/MachinePolicyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateMachinePolicy"></a>
# **updateMachinePolicy**
> MachinePolicyResource updateMachinePolicy(id, body)

Modify a MachinePolicyResource by ID

    Modifies an existing machine policy.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the MachinePolicyResource to modify | [default to null]
 **body** | [**MachinePolicyResource**](../model/MachinePolicyResource.md)| The MachinePolicyResource resource to create | [optional]

### Return type

[**MachinePolicyResource**](../model/MachinePolicyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateMachinePolicySpaces"></a>
# **updateMachinePolicySpaces**
> MachinePolicyResource updateMachinePolicySpaces(baseSpaceId, id, body)

Modify a MachinePolicyResource by ID

    Modifies an existing machine policy.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the MachinePolicyResource to modify | [default to null]
 **body** | [**MachinePolicyResource**](../model/MachinePolicyResource.md)| The MachinePolicyResource resource to create | [optional]

### Return type

[**MachinePolicyResource**](../model/MachinePolicyResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

