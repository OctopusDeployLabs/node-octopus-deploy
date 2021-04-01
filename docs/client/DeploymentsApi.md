# DeploymentsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeploymentCreate**](DeploymentsApi.md#createDeploymentCreate) | **POST** /deployments | 
[**createDeploymentCreateSpaces**](DeploymentsApi.md#createDeploymentCreateSpaces) | **POST** /{baseSpaceId}/deployments | 
[**deleteDeployment**](DeploymentsApi.md#deleteDeployment) | **DELETE** /deployments/{id} | Delete a DeploymentResource by ID
[**deleteDeploymentSpaces**](DeploymentsApi.md#deleteDeploymentSpaces) | **DELETE** /{baseSpaceId}/deployments/{id} | Delete a DeploymentResource by ID
[**getDeploymentById**](DeploymentsApi.md#getDeploymentById) | **GET** /deployments/{id} | Get a Deployment by ID
[**getDeploymentByIdSpaces**](DeploymentsApi.md#getDeploymentByIdSpaces) | **GET** /{baseSpaceId}/deployments/{id} | Get a Deployment by ID
[**indexDeployments**](DeploymentsApi.md#indexDeployments) | **GET** /deployments | Get a list of DeploymentResources
[**indexDeploymentsSpaces**](DeploymentsApi.md#indexDeploymentsSpaces) | **GET** /{baseSpaceId}/deployments | Get a list of DeploymentResources


<a name="createDeploymentCreate"></a>
# **createDeploymentCreate**
> DeploymentResource createDeploymentCreate()



    Creates a new deployment.

### Parameters
This endpoint does not need any parameter.

### Return type

[**DeploymentResource**](../model/DeploymentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createDeploymentCreateSpaces"></a>
# **createDeploymentCreateSpaces**
> DeploymentResource createDeploymentCreateSpaces(baseSpaceId)



    Creates a new deployment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**DeploymentResource**](../model/DeploymentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteDeployment"></a>
# **deleteDeployment**
> deleteDeployment(id)

Delete a DeploymentResource by ID

    Deletes a deployment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the DeploymentResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteDeploymentSpaces"></a>
# **deleteDeploymentSpaces**
> deleteDeploymentSpaces(baseSpaceId, id)

Delete a DeploymentResource by ID

    Deletes a deployment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the DeploymentResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getDeploymentById"></a>
# **getDeploymentById**
> DeploymentResource getDeploymentById(id)

Get a Deployment by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Deployment to load | [default to null]

### Return type

[**DeploymentResource**](../model/DeploymentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDeploymentByIdSpaces"></a>
# **getDeploymentByIdSpaces**
> DeploymentResource getDeploymentByIdSpaces(id, baseSpaceId)

Get a Deployment by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Deployment to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**DeploymentResource**](../model/DeploymentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexDeployments"></a>
# **indexDeployments**
> DeploymentResourceCollection indexDeployments(skip, take)

Get a list of DeploymentResources

    Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**DeploymentResourceCollection**](../model/DeploymentResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexDeploymentsSpaces"></a>
# **indexDeploymentsSpaces**
> DeploymentResourceCollection indexDeploymentsSpaces(baseSpaceId, skip, take)

Get a list of DeploymentResources

    Lists all of the deployments in the supplied Octopus Deploy Space, from projects, releases and environments accessible by the current user. The results will be sorted from most recent to least recent deployment.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**DeploymentResourceCollection**](../model/DeploymentResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

