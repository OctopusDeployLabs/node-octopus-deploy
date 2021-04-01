# EnvironmentsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnvironment**](EnvironmentsApi.md#createEnvironment) | **POST** /environments | Create a EnvironmentResource
[**createEnvironmentSpaces**](EnvironmentsApi.md#createEnvironmentSpaces) | **POST** /{baseSpaceId}/environments | Create a EnvironmentResource
[**deleteEnvironment**](EnvironmentsApi.md#deleteEnvironment) | **DELETE** /environments/{id} | Delete a EnvironmentResource by ID
[**deleteEnvironmentSpaces**](EnvironmentsApi.md#deleteEnvironmentSpaces) | **DELETE** /{baseSpaceId}/environments/{id} | Delete a EnvironmentResource by ID
[**getDeploymentEnvironmentSettingsMetadata**](EnvironmentsApi.md#getDeploymentEnvironmentSettingsMetadata) | **GET** /environments/{id}/metadata | 
[**getDeploymentEnvironmentSettingsMetadataSpaces**](EnvironmentsApi.md#getDeploymentEnvironmentSettingsMetadataSpaces) | **GET** /{baseSpaceId}/environments/{id}/metadata | 
[**getEnvironmentById**](EnvironmentsApi.md#getEnvironmentById) | **GET** /environments/{id} | Get an Environment by ID
[**getEnvironmentByIdSpaces**](EnvironmentsApi.md#getEnvironmentByIdSpaces) | **GET** /{baseSpaceId}/environments/{id} | Get an Environment by ID
[**getEnvironmentsSummary**](EnvironmentsApi.md#getEnvironmentsSummary) | **GET** /environments/summary | 
[**getEnvironmentsSummarySpaces**](EnvironmentsApi.md#getEnvironmentsSummarySpaces) | **GET** /{baseSpaceId}/environments/summary | 
[**getVariablesScopedToEnvironment**](EnvironmentsApi.md#getVariablesScopedToEnvironment) | **GET** /environments/{id}/singlyScopedVariableDetails | 
[**getVariablesScopedToEnvironmentSpaces**](EnvironmentsApi.md#getVariablesScopedToEnvironmentSpaces) | **GET** /{baseSpaceId}/environments/{id}/singlyScopedVariableDetails | 
[**indexEnvironmentDeploymentTargets**](EnvironmentsApi.md#indexEnvironmentDeploymentTargets) | **GET** /environments/{id}/machines | Get a list of DeploymentTargetResources for the given EnvironmentResource
[**indexEnvironmentDeploymentTargetsSpaces**](EnvironmentsApi.md#indexEnvironmentDeploymentTargetsSpaces) | **GET** /{baseSpaceId}/environments/{id}/machines | Get a list of DeploymentTargetResources for the given EnvironmentResource
[**indexEnvironments**](EnvironmentsApi.md#indexEnvironments) | **GET** /environments | Get a list of EnvironmentResources
[**indexEnvironmentsSpaces**](EnvironmentsApi.md#indexEnvironmentsSpaces) | **GET** /{baseSpaceId}/environments | Get a list of EnvironmentResources
[**listAllEnvironments**](EnvironmentsApi.md#listAllEnvironments) | **GET** /environments/all | Get a list of EnvironmentResources
[**listAllEnvironmentsSpaces**](EnvironmentsApi.md#listAllEnvironmentsSpaces) | **GET** /{baseSpaceId}/environments/all | Get a list of EnvironmentResources
[**updateEnvironment**](EnvironmentsApi.md#updateEnvironment) | **PUT** /environments/{id} | Modify a EnvironmentResource by ID
[**updateEnvironmentSpaces**](EnvironmentsApi.md#updateEnvironmentSpaces) | **PUT** /{baseSpaceId}/environments/{id} | Modify a EnvironmentResource by ID
[**updateSortEnvironments**](EnvironmentsApi.md#updateSortEnvironments) | **PUT** /environments/sortorder | 
[**updateSortEnvironmentsSpaces**](EnvironmentsApi.md#updateSortEnvironmentsSpaces) | **PUT** /{baseSpaceId}/environments/sortorder | 


<a name="createEnvironment"></a>
# **createEnvironment**
> EnvironmentResource createEnvironment(body)

Create a EnvironmentResource

    Creates a new environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EnvironmentResource**](../model/EnvironmentResource.md)| The EnvironmentResource resource to create | [optional]

### Return type

[**EnvironmentResource**](../model/EnvironmentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createEnvironmentSpaces"></a>
# **createEnvironmentSpaces**
> EnvironmentResource createEnvironmentSpaces(baseSpaceId, body)

Create a EnvironmentResource

    Creates a new environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**EnvironmentResource**](../model/EnvironmentResource.md)| The EnvironmentResource resource to create | [optional]

### Return type

[**EnvironmentResource**](../model/EnvironmentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteEnvironment"></a>
# **deleteEnvironment**
> deleteEnvironment(id)

Delete a EnvironmentResource by ID

    Deletes an existing environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the EnvironmentResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteEnvironmentSpaces"></a>
# **deleteEnvironmentSpaces**
> deleteEnvironmentSpaces(baseSpaceId, id)

Delete a EnvironmentResource by ID

    Deletes an existing environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the EnvironmentResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getDeploymentEnvironmentSettingsMetadata"></a>
# **getDeploymentEnvironmentSettingsMetadata**
> List getDeploymentEnvironmentSettingsMetadata(id)



    Gets the custom settings metadata from the extensions.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/DeploymentEnvironmentSettingsMetadata.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentEnvironmentSettingsMetadataSpaces"></a>
# **getDeploymentEnvironmentSettingsMetadataSpaces**
> List getDeploymentEnvironmentSettingsMetadataSpaces(baseSpaceId, id)



    Gets the custom settings metadata from the extensions.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**List**](../model/DeploymentEnvironmentSettingsMetadata.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEnvironmentById"></a>
# **getEnvironmentById**
> EnvironmentResource getEnvironmentById(id)

Get an Environment by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Environment to load | [default to null]

### Return type

[**EnvironmentResource**](../model/EnvironmentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEnvironmentByIdSpaces"></a>
# **getEnvironmentByIdSpaces**
> EnvironmentResource getEnvironmentByIdSpaces(id, baseSpaceId)

Get an Environment by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Environment to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**EnvironmentResource**](../model/EnvironmentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEnvironmentsSummary"></a>
# **getEnvironmentsSummary**
> EnvironmentsSummaryResource getEnvironmentsSummary()



    Lists all environments, including a summary of machine information

### Parameters
This endpoint does not need any parameter.

### Return type

[**EnvironmentsSummaryResource**](../model/EnvironmentsSummaryResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEnvironmentsSummarySpaces"></a>
# **getEnvironmentsSummarySpaces**
> EnvironmentsSummaryResource getEnvironmentsSummarySpaces(baseSpaceId)



    Lists all environments, including a summary of machine information

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**EnvironmentsSummaryResource**](../model/EnvironmentsSummaryResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getVariablesScopedToEnvironment"></a>
# **getVariablesScopedToEnvironment**
> VariablesScopedToEnvironmentResponse getVariablesScopedToEnvironment(id)



    Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**VariablesScopedToEnvironmentResponse**](../model/VariablesScopedToEnvironmentResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getVariablesScopedToEnvironmentSpaces"></a>
# **getVariablesScopedToEnvironmentSpaces**
> VariablesScopedToEnvironmentResponse getVariablesScopedToEnvironmentSpaces(baseSpaceId, id)



    Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**VariablesScopedToEnvironmentResponse**](../model/VariablesScopedToEnvironmentResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexEnvironmentDeploymentTargets"></a>
# **indexEnvironmentDeploymentTargets**
> DeploymentTargetResourceCollection indexEnvironmentDeploymentTargets(id, skip, take)

Get a list of DeploymentTargetResources for the given EnvironmentResource

    Lists all of the machines that belong to the given environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Environment | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**DeploymentTargetResourceCollection**](../model/DeploymentTargetResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexEnvironmentDeploymentTargetsSpaces"></a>
# **indexEnvironmentDeploymentTargetsSpaces**
> DeploymentTargetResourceCollection indexEnvironmentDeploymentTargetsSpaces(baseSpaceId, id, skip, take)

Get a list of DeploymentTargetResources for the given EnvironmentResource

    Lists all of the machines that belong to the given environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the Environment | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**DeploymentTargetResourceCollection**](../model/DeploymentTargetResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexEnvironments"></a>
# **indexEnvironments**
> EnvironmentResourceCollection indexEnvironments(skip, take)

Get a list of EnvironmentResources

    Lists all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the &#x60;SortOrder&#x60; field on each environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**EnvironmentResourceCollection**](../model/EnvironmentResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexEnvironmentsSpaces"></a>
# **indexEnvironmentsSpaces**
> EnvironmentResourceCollection indexEnvironmentsSpaces(baseSpaceId, skip, take)

Get a list of EnvironmentResources

    Lists all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the &#x60;SortOrder&#x60; field on each environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**EnvironmentResourceCollection**](../model/EnvironmentResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllEnvironments"></a>
# **listAllEnvironments**
> List listAllEnvironments()

Get a list of EnvironmentResources

    Lists the name and ID of all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the &#x60;SortOrder&#x60; field on each environment.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/EnvironmentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllEnvironmentsSpaces"></a>
# **listAllEnvironmentsSpaces**
> List listAllEnvironmentsSpaces(baseSpaceId)

Get a list of EnvironmentResources

    Lists the name and ID of all of the environments in the supplied Octopus Deploy Space. The results will be sorted by the &#x60;SortOrder&#x60; field on each environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/EnvironmentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateEnvironment"></a>
# **updateEnvironment**
> EnvironmentResource updateEnvironment(id, body)

Modify a EnvironmentResource by ID

    Modifies an existing environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the EnvironmentResource to modify | [default to null]
 **body** | [**EnvironmentResource**](../model/EnvironmentResource.md)| The EnvironmentResource resource to create | [optional]

### Return type

[**EnvironmentResource**](../model/EnvironmentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateEnvironmentSpaces"></a>
# **updateEnvironmentSpaces**
> EnvironmentResource updateEnvironmentSpaces(baseSpaceId, id, body)

Modify a EnvironmentResource by ID

    Modifies an existing environment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the EnvironmentResource to modify | [default to null]
 **body** | [**EnvironmentResource**](../model/EnvironmentResource.md)| The EnvironmentResource resource to create | [optional]

### Return type

[**EnvironmentResource**](../model/EnvironmentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateSortEnvironments"></a>
# **updateSortEnvironments**
> updateSortEnvironments()



    Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateSortEnvironmentsSpaces"></a>
# **updateSortEnvironmentsSpaces**
> updateSortEnvironmentsSpaces(baseSpaceId)



    Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

